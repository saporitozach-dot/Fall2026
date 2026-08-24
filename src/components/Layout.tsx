import { NavLink } from 'react-router-dom'
import './Layout.css'

type LayoutProps = {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="shell">
      <header className="topbar">
        <NavLink to="/" className="brand">
          <span className="brand-mark" aria-hidden>
            C
          </span>
          <span className="brand-text">
            CORE
            <span className="brand-sub">Fall Study Desk</span>
          </span>
        </NavLink>
        <nav className="nav" aria-label="Primary">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/finance">Finance</NavLink>
          <NavLink to="/marketing">Marketing</NavLink>
          <NavLink to="/leadership">Leadership</NavLink>
          <NavLink to="/operations">Operations</NavLink>
          <NavLink to="/ethics">Ethics</NavLink>
        </nav>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <p>Drop notes &amp; slides in chat → content lands here by course.</p>
      </footer>
    </div>
  )
}
