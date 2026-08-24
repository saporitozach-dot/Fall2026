import { Link } from 'react-router-dom'
import { courses } from '../data/courses'
import './Home.css'

export function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-copy animate-rise">
          <p className="eyebrow">Fall semester · I-Core + Ethics</p>
          <h1 className="hero-brand">CORE</h1>
          <p className="hero-lead">
            Your living study desk — flashcards, quizzes, and condensed notes
            built from each week&apos;s materials.
          </p>
          <div className="hero-cta">
            <a className="cta primary" href="#courses">
              Browse courses
            </a>
            <Link className="cta secondary" to="/finance">
              Start with Finance
            </Link>
          </div>
        </div>

        <div className="hero-visual animate-rise-delay-1" aria-hidden>
          <div className="desk-plane">
            <div className="sheet sheet-a">
              <span />
              <span />
              <span />
            </div>
            <div className="sheet sheet-b">
              <strong>Exam prep</strong>
              <em>Notes → Cards → Quizzes</em>
            </div>
            <div className="sheet sheet-c">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="courses animate-rise-delay-2">
        <div className="section-head">
          <h2>Courses</h2>
          <p>Open a subject. Content fills in as you upload notes and slides.</p>
        </div>

        <ul className="course-list">
          {courses.map((course) => {
            const ready = course.status === 'ready'
            const counts = ready
              ? `${course.notes.length} notes · ${course.flashcards.length} cards · ${course.quizzes.reduce((n, q) => n + q.questions.length, 0)} quiz Qs`
              : 'Awaiting materials'
            return (
              <li key={course.id}>
                <Link
                  to={`/${course.id}`}
                  className="course-link"
                  style={{ ['--course-accent' as string]: course.accent }}
                >
                  <span className="course-accent" aria-hidden />
                  <span className="course-body">
                    <span className="course-name">{course.name}</span>
                    <span className="course-tagline">{course.tagline}</span>
                    <span className="course-status">{counts}</span>
                  </span>
                  <span className="course-arrow" aria-hidden>
                    →
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="how">
        <h2>How this works</h2>
        <ol>
          <li>
            <strong>You send materials</strong>
            <span>Notes, slides, study guides — drop them in chat by course.</span>
          </li>
          <li>
            <strong>I update CORE</strong>
            <span>Condensed notes, smart flashcards, and quizzes land here.</span>
          </li>
          <li>
            <strong>You practice</strong>
            <span>Flip cards, take quizzes, and review before exams.</span>
          </li>
        </ol>
      </section>
    </div>
  )
}
