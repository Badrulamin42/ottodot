import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { GoogleGenerativeAI } from '@google/generative-ai'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!)

export async function POST(req: Request) {
  try {
    const { sessionId, userAnswer } = await req.json()

    // Fetch correct answer
    const { data: session } = await supabase
      .from('math_problem_sessions')
      .select('*')
      .eq('id', sessionId)
      .single()

    if (!session) throw new Error('Session not found')

    const isCorrect = Number(userAnswer) === Number(session.final_answer)

    // Generate feedback using AI
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" })
    const prompt = `
      The user solved this math problem:
      Problem: ${session.problem_text}
      Correct Answer: ${session.final_answer}
      User Answer: ${userAnswer}

      Provide short feedback (1–2 sentences).
      If correct, praise them; if incorrect, gently explain why.
    `
    const result = await model.generateContent(prompt)
    const feedback = result.response.text()

    const { data: submission, error } = await supabase
      .from('math_problem_submissions')
      .insert({
        session_id: sessionId,
        user_answer: userAnswer,
        is_correct: isCorrect,
        feedback,
      })
      .select()
      .single()

    if (error) throw error

    return NextResponse.json({ feedback, isCorrect })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Submission failed' }, { status: 500 })
  }
}
