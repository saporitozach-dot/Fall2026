import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { FlashcardDeck } from '../components/FlashcardDeck'
import { NotesPanel } from '../components/NotesPanel'
import { QuizPanel } from '../components/QuizPanel'
import { getCourse } from '../data/courses'
import './Course.css'

type Tab = 'notes' | 'flashcards' | 'quizzes'

export function Course() {
  const { courseId } = useParams()
  const course = getCourse(courseId ?? '')
  const [tab, setTab] = useState<Tab>('notes')

  const counts = useMemo(() => {
    if (!course) return null
    return {
      notes: course.notes.length,
      flashcards: course.flashcards.length,
      quizzes: course.quizzes.reduce((n, q) => n + q.questions.length, 0),
    }
  }, [course])

  if (!course) return <Navigate to="/" replace />

  return (
    <div className="course-page animate-fade">
      <Link to="/" className="back-link">
        ← All courses
      </Link>

      <header className="course-hero">
        <div>
          <p className="course-kicker" style={{ color: course.accent }}>
            {course.status === 'awaiting' ? 'Awaiting materials' : 'Ready to study'}
          </p>
          <h1>{course.name}</h1>
          <p className="course-desc">{course.description}</p>
        </div>
        <div className="course-stats" style={{ borderColor: course.accent }}>
          <div>
            <strong>{counts?.notes ?? 0}</strong>
            <span>note sections</span>
          </div>
          <div>
            <strong>{counts?.flashcards ?? 0}</strong>
            <span>flashcards</span>
          </div>
          <div>
            <strong>{counts?.quizzes ?? 0}</strong>
            <span>quiz questions</span>
          </div>
        </div>
      </header>

      <div className="tabs" role="tablist" aria-label="Study mode">
        {(
          [
            ['notes', 'Condensed notes'],
            ['flashcards', 'Flashcards'],
            ['quizzes', 'Quizzes'],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={tab === id}
            className={tab === id ? 'is-active' : ''}
            style={
              tab === id
                ? { background: course.accent, borderColor: course.accent }
                : undefined
            }
            onClick={() => setTab(id)}
          >
            {label}
          </button>
        ))}
      </div>

      <section className="tab-panel" role="tabpanel">
        {tab === 'notes' && (
          <NotesPanel notes={course.notes} accent={course.accent} />
        )}
        {tab === 'flashcards' && (
          <FlashcardDeck cards={course.flashcards} accent={course.accent} />
        )}
        {tab === 'quizzes' && (
          <QuizPanel quizzes={course.quizzes} accent={course.accent} />
        )}
      </section>
    </div>
  )
}
