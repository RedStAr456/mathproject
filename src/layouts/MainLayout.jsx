import { useState } from 'react'
import Sidebar from '../components/Sidebar'

export default function MainLayout({
children,
}) {

const [menuOpen, setMenuOpen] =
useState(false)

return ( <div className="app-layout">

  <button
    className="mobile-menu-btn"
    onClick={() =>
      setMenuOpen(!menuOpen)
    }
  >
    ☰
  </button>

  <div
    className={
      menuOpen
        ? 'mobile-overlay active'
        : 'mobile-overlay'
    }
    onClick={() => setMenuOpen(false)}
  />

  <div
    className={
      menuOpen
        ? 'sidebar-wrapper open'
        : 'sidebar-wrapper'
    }
  >
    <Sidebar />
  </div>

  <main className="main-content">
    {children}
  </main>

</div>

)
}