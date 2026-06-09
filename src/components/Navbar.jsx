import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.jpg'
import { colors, fonts } from '../theme'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Collections', to: '/collections' },
  { label: 'Contact', to: '/contact' },
]

const linkStyles = ({ isActive }) => ({
  color: isActive ? colors.goldLight : colors.gold,
  fontFamily: fonts.serif,
  fontSize: '1.2rem',
  fontWeight: 700,
  letterSpacing: '0.12em',
  textDecoration: 'none',
  position: 'relative',
})

function DesktopLink({ label, to }) {
  return (
    <NavLink to={to} style={linkStyles} className="group desktop-nav-link">
      {label}
      <span
        className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-300 ease-in-out"
        style={{ backgroundColor: colors.gold }}
      />
    </NavLink>
  )
}

function MobileLink({ label, to, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      style={linkStyles}
      className="mobile-menu-link text-4xl tracking-widest"
    >
      {label}
    </NavLink>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: 'background-color 0.3s ease, border-color 0.3s ease',
    backgroundColor: scrolled ? colors.bg : 'transparent',
    borderBottom: scrolled ? `1px solid ${colors.gold}` : '1px solid transparent',
  }

  return (
    <>
      <nav style={navStyle}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between" style={{ height: '80px' }}>
          {/* Logo */}
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            aria-label="Freya Trading home"
            style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
          >
            <img
              src={logo}
              alt="Freya Trading (HK) Ltd"
              className="site-logo object-contain"
              style={{ height: '60px' }}
            />
          </NavLink>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map(({ label, to }) => (
              <DesktopLink key={to} label={label} to={to} />
            ))}
          </div>

          {/* Hamburger button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 relative z-50"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              position: menuOpen ? 'fixed' : 'relative',
              top: menuOpen ? '24px' : 'auto',
              right: menuOpen ? '24px' : 'auto',
              zIndex: 60,
            }}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{ display: 'block', width: '26px', height: '2px', backgroundColor: colors.gold, transformOrigin: 'center' }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              style={{ display: 'block', width: '26px', height: '2px', backgroundColor: colors.gold }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{ display: 'block', width: '26px', height: '2px', backgroundColor: colors.gold, transformOrigin: 'center' }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 40,
              backgroundColor: colors.bg,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2.5rem',
            }}
          >
            {NAV_LINKS.map(({ label, to }, i) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.08 }}
              >
                <MobileLink label={label} to={to} onClick={() => setMenuOpen(false)} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
