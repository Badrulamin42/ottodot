'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Brain, Calculator } from 'lucide-react'

interface MathProblem {
  problem_text: string
  final_answer: number
}

export default function Home() {
  const [problem, setProblem] = useState<MathProblem | null>(null)
  const [userAnswer, setUserAnswer] = useState('')
  const [feedback, setFeedback] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId, setSessionId] = useState<string | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  useEffect(() => {
    generateProblem()
  }, [])

  const generateProblem = async () => {
    setIsLoading(true)
    try {
      const res = await fetch('/api/generate-problem', { method: 'POST' })
      const data = await res.json()
      setProblem(data.session)
      setSessionId(data.session.id)
      setFeedback('')
      setIsCorrect(null)
      setUserAnswer('')
    } finally {
      setIsLoading(false)
    }
  }

  const submitAnswer = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!sessionId) return
    setIsLoading(true)
    try {
      const res = await fetch('/api/submit-answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, userAnswer }),
      })
      const data = await res.json()
      setFeedback(data.feedback)
      setIsCorrect(data.isCorrect)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 via-blue-100 to-yellow-100 relative overflow-hidden">
      {/* 🌟 Loading Overlay */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex flex-col items-center justify-center bg-white/70 backdrop-blur-md z-50"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            className="relative w-20 h-20 flex items-center justify-center mb-4"
          >
            <div className="absolute inset-0 border-[6px] border-pink-400 border-t-transparent rounded-full"></div>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
              className="flex items-center justify-center gap-2"
            >
              <Calculator className="w-7 h-7 text-blue-500" />
              <Brain className="w-7 h-7 text-yellow-500" />
            </motion.div>
          </motion.div>

          <p className="text-lg font-semibold text-pink-600 flex items-center gap-2">
            <span>📐</span> Calculating Geometry Magic...
          </p>
        </motion.div>
      )}

      <main className="w-full max-w-4xl px-6 py-8">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-10 text-center drop-shadow-lg flex justify-center items-center gap-3"
        >
          <Sparkles className="text-yellow-500 w-8 h-8" />
          Math Fun Time!
        </motion.h1>

        {problem && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-3 border-4 border-yellow-200"
          >
            {/* 🧮 Left side — Question Box */}
            <motion.div
              className="flex flex-col justify-center items-center text-center bg-gradient-to-br from-yellow-100 to-pink-100 rounded-2xl p-3 shadow-inner border-2 border-yellow-300"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <h2 className="text-2xl font-bold mb-3 text-blue-700 flex justify-center items-center gap-2">
                <Brain className="text-pink-500 w-6 h-6" /> Your Challenge
              </h2>
              <p className="text-lg text-gray-800 font-medium leading-relaxed">
                {problem.problem_text}
              </p>
            </motion.div>

            {/* ✏️ Right side — Answer Input */}
            <motion.form
              onSubmit={submitAnswer}
              className="flex flex-col items-center justify-center space-y-4"
              whileHover={{ scale: 1.01 }}
            >
              <input
                type="number"
                id="answer"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="w-4/5 text-center text-lg text-gray-800 bg-white px-4 py-3 
               border-2 border-pink-300 rounded-full shadow-md 
               focus:ring-4 focus:ring-pink-200 focus:border-pink-500 
               placeholder:text-gray-400"
                placeholder="Enter your answer"
                required
              />

              <button
                type="submit"
                disabled={!userAnswer || isLoading}
                className="w-4/5 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 
                text-white font-bold text-lg py-3 px-4 rounded-full shadow-md 
                transition-all duration-200 ease-in-out transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                🚀 Submit Answer
              </button>
            </motion.form>
          </motion.div>
        )}

        {/* 🎉 Feedback Modal */}
        {feedback && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className={`w-11/12 max-w-sm p-6 rounded-3xl shadow-2xl border-4 text-center
                ${
                  isCorrect
                    ? 'bg-green-100 border-green-300 text-green-800'
                    : 'bg-yellow-100 border-yellow-300 text-yellow-800'
                }`}
            >
              <h2 className="text-3xl font-bold mb-4 flex justify-center items-center gap-2">
                {isCorrect ? (
                  <>
                    <span className="text-green-600 text-4xl">😊</span> Awesome!
                  </>
                ) : (
                  <>
                    <span className="text-yellow-500 text-4xl">⭐</span> Keep Trying!
                  </>
                )}
              </h2>

              <p className="text-lg font-medium mb-6">{feedback}</p>

              <button
                onClick={() => {
                  if (isCorrect) generateProblem()
                  setFeedback('')
                }}
                className={`${
                  isCorrect
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-pink-500 hover:bg-pink-600'
                } text-white font-bold py-2 px-6 rounded-full shadow-md transition-transform transform hover:scale-105`}
              >
                {isCorrect ? 'Next Question ➜' : 'OK'}
              </button>
            </motion.div>
          </motion.div>
        )}
      </main>
    </div>
  )
}
