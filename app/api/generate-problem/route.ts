import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { GoogleGenerativeAI } from '@google/generative-ai'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!)

export async function POST() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" })

    const topics = [
      "angles on a straight line",
      "angles at a point",
      "vertically opposite angles",
      "isosceles triangle",
      "equilateral triangle",
      "right-angled triangle",
      "parallelogram",
      "rhombus",
      "trapezium"
    ];

    const randomTopic = topics[Math.floor(Math.random() * topics.length)];

    const prompt = `
    You are a math teacher for 13-year-old students.
    Create one geometry question about "${randomTopic}".
    The problem should be realistic, clearly described, and solvable with integer answers.
    Return ONLY raw JSON:
    {
      "problem_text": "the question text",
      "final_answer": number
    }
    `;


    const result = await model.generateContent(prompt)
    let text = result.response.text()

    // Strip markdown fences
    text = text.replace(/```json|```/g, '').trim()

    const json = JSON.parse(text)

    const { data, error } = await supabase
      .from('math_problem_sessions')
      .insert({
        problem_text: json.problem_text,
        final_answer: json.final_answer,
      })
      .select()
      .single()

    if (error) throw error

    return NextResponse.json({ session: data })
  } catch (error: any) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to generate problem' }, { status: 500 })
  }
}
