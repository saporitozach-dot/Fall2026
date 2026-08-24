import type { NoteSection } from '../data/courses'
import './NotesPanel.css'

type NotesPanelProps = {
  notes: NoteSection[]
  accent: string
}

export function NotesPanel({ notes, accent }: NotesPanelProps) {
  if (!notes.length) {
    return (
      <div className="empty-panel">
        <h3>Condensed notes coming soon</h3>
        <p>
          Upload class notes or slides and I&apos;ll distill them into
          exam-focused summaries with key terms and must-know bullets.
        </p>
      </div>
    )
  }

  return (
    <div className="notes-panel">
      {notes.map((section) => (
        <article key={section.id} className="note-section">
          <h3 style={{ borderColor: accent }}>{section.title}</h3>
          <ul>
            {section.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          {section.keyTerms && section.keyTerms.length > 0 && (
            <dl className="key-terms">
              {section.keyTerms.map((kt) => (
                <div key={kt.term} className="key-term">
                  <dt>{kt.term}</dt>
                  <dd>{kt.definition}</dd>
                </div>
              ))}
            </dl>
          )}
        </article>
      ))}
    </div>
  )
}
