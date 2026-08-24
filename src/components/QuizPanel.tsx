import { useMemo, useState } from 'react'
import type { Quiz } from '../data/courses'
import './QuizPanel.css'

type QuizPanelProps = {
  quizzes: Quiz[]
  accent: string
}

export function QuizPanel({ quizzes, accent }: QuizPanelProps) {
  const [quizId, setQuizId] = useState(quizzes[0]?.id ?? '')
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [submitted, setSubmitted] = useState(false)

  const quiz = quizzes.find((q) => q.id === quizId) ?? quizzes[0]

  const score = useMemo(() => {
    if (!quiz || !submitted) return null
    const correct = quiz.questions.filter(
      (q) => answers[q.id] === q.correctIndex,
    ).length
    return { correct, total: quiz.questions.length }
  }, [answers, quiz, submitted])

  if (!quizzes.length) {
    return (
      <div className="empty-panel">
        <h3>Quizzes coming soon</h3>
        <p>
          Once materials are uploaded, I&apos;ll build smart quizzes that target
          weak spots and explain every answer.
        </p>
      </div>
    )
  }

  function selectQuiz(id: string) {
    setQuizId(id)
    setAnswers({})
    setSubmitted(false)
  }

  function choose(questionId: string, choiceIndex: number) {
    if (submitted) return
    setAnswers((prev) => ({ ...prev, [questionId]: choiceIndex }))
  }

  function submit() {
    if (!quiz) return
    if (Object.keys(answers).length < quiz.questions.length) return
    setSubmitted(true)
  }

  function reset() {
    setAnswers({})
    setSubmitted(false)
  }

  return (
    <div className="quiz-panel">
      {quizzes.length > 1 && (
        <div className="quiz-switcher" role="tablist" aria-label="Quiz sets">
          {quizzes.map((q) => (
            <button
              key={q.id}
              type="button"
              role="tab"
              aria-selected={q.id === quiz.id}
              className={q.id === quiz.id ? 'is-active' : ''}
              style={
                q.id === quiz.id
                  ? { background: accent, borderColor: accent }
                  : undefined
              }
              onClick={() => selectQuiz(q.id)}
            >
              {q.title}
            </button>
          ))}
        </div>
      )}

      <div className="quiz-intro">
        <h3>{quiz.title}</h3>
        <p>{quiz.description}</p>
      </div>

      <ol className="quiz-list">
        {quiz.questions.map((question, qi) => {
          const selected = answers[question.id]
          const showResult = submitted && selected !== undefined
          return (
            <li key={question.id} className="quiz-item">
              <p className="quiz-prompt">
                <span>{qi + 1}.</span> {question.prompt}
              </p>
              <div className="quiz-choices">
                {question.choices.map((choice, ci) => {
                  const isSelected = selected === ci
                  const isCorrect = question.correctIndex === ci
                  let state = ''
                  if (showResult && isCorrect) state = 'is-correct'
                  else if (showResult && isSelected && !isCorrect)
                    state = 'is-wrong'
                  else if (isSelected) state = 'is-selected'

                  return (
                    <button
                      key={choice}
                      type="button"
                      className={`choice ${state}`}
                      onClick={() => choose(question.id, ci)}
                      disabled={submitted}
                    >
                      {choice}
                    </button>
                  )
                })}
              </div>
              {showResult && (
                <p className="quiz-explain animate-fade">
                  {question.explanation}
                </p>
              )}
            </li>
          )
        })}
      </ol>

      <div className="quiz-footer">
        {!submitted ? (
          <button
            type="button"
            className="btn solid"
            style={{ background: accent }}
            onClick={submit}
            disabled={Object.keys(answers).length < quiz.questions.length}
          >
            Check answers
          </button>
        ) : (
          <>
            <p className="quiz-score">
              Score: {score?.correct}/{score?.total}
            </p>
            <button type="button" className="btn ghost" onClick={reset}>
              Try again
            </button>
          </>
        )}
      </div>
    </div>
  )
}
