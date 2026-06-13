import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.jpg'
import { colors, fonts } from '../theme'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Product Range', to: '/collections' },
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

const mobilePanelTransition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
}

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
      style={({ isActive }) => ({
        ...linkStyles({ isActive }),
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        minHeight: 'clamp(44px, 6.5dvh, 50px)',
        fontSize: 'clamp(1.08rem, 4.8vw, 1.55rem)',
        lineHeight: 1,
        whiteSpace: 'nowrap',
      })}
      className="mobile-menu-link"
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

  useEffect(() => {
    if (!menuOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
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
        <div className="mx-auto px-4 sm:px-6 flex items-center justify-between" style={{ height: '80px', maxWidth: '1520px' }}>
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
            aria-label="Open menu"
            aria-hidden={menuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-expanded={menuOpen}
            tabIndex={menuOpen ? -1 : 0}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              position: 'relative',
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

      {/* Mobile theme dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 70,
              backgroundColor: 'transparent',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              padding: '0 0.5rem 0.5rem',
            }}
          >
            <motion.aside
              id="mobile-navigation-drawer"
              role="dialog"
              aria-modal="true"
              initial={{ y: '-108%', opacity: 0.72, scaleY: 0.96 }}
              animate={{ y: 0, opacity: 1, scaleY: 1 }}
              exit={{ y: '-108%', opacity: 0.72, scaleY: 0.96 }}
              transition={mobilePanelTransition}
              onClick={(event) => event.stopPropagation()}
              style={{
                width: 'min(calc(100vw - 1rem), 560px)',
                minHeight: 'min(44dvh, 350px)',
                borderRadius: '0 0 24px 24px',
                border: `1px solid ${colors.borderHover}`,
                borderTop: 'none',
                backgroundColor: colors.bg,
                boxShadow:
                  '0 24px 58px rgba(0, 0, 0, 0.42), inset 0 -1px 0 rgba(209,165,80,0.16)',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                padding: '0.95rem clamp(1rem, 5vw, 1.55rem) 1.35rem',
              }}
            >
              <motion.button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.28, delay: 0.18 }}
                style={{
                  position: 'absolute',
                  top: '1.18rem',
                  right: 'clamp(1rem, 5vw, 1.55rem)',
                  zIndex: 3,
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: '1px solid rgba(209,165,80,0.42)',
                  backgroundColor: colors.bg,
                  boxShadow: '0 12px 28px rgba(0,0,0,0.28)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    width: '18px',
                    height: '2px',
                    backgroundColor: colors.gold,
                    transform: 'rotate(45deg)',
                    borderRadius: '999px',
                  }}
                />
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    width: '18px',
                    height: '2px',
                    backgroundColor: colors.gold,
                    transform: 'rotate(-45deg)',
                    borderRadius: '999px',
                  }}
                />
              </motion.button>

              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                aria-label="Freya Trading home"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  minHeight: '64px',
                  padding: '0 3.2rem 0.85rem 0',
                  borderBottom: '1px solid rgba(209,165,80,0.18)',
                  textDecoration: 'none',
                }}
              >
                <img
                  src={logo}
                  alt="Freya Trading (HK) Ltd"
                  className="mobile-menu-logo object-contain"
                  style={{ height: '52px', width: 'auto' }}
                />
              </NavLink>

              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.48rem',
                  width: '100%',
                  marginTop: '0.8rem',
                }}
              >
                {NAV_LINKS.map(({ label, to }, i) => (
                  <motion.div
                    key={to}
                    initial={{ opacity: 0, y: -14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{
                      duration: 0.48,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.12 + i * 0.06,
                    }}
                  >
                    <MobileLink label={label} to={to} onClick={() => setMenuOpen(false)} />
                  </motion.div>
                ))}
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
