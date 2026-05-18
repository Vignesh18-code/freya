import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const start = Date.now()
    const duration = 2000

    const interval = setInterval(() => {
      const elapsed = Date.now() - start
      const next = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(next)
      if (next >= 100) {
        clearInterval(interval)
        setIsVisible(false)
      }
    }, 40)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            backgroundColor: '#070C1A',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            padding: '1.5rem',
          }}
        >
          <h1
            style={{
              margin: 0,
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(3rem, 9vw, 6rem)',
              letterSpacing: '0.22em',
              background: 'linear-gradient(90deg, #E8D5A3 0%, #C9A84C 50%, #E8D5A3 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            FREYA
          </h1>
          <p
            style={{
              margin: 0,
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.75rem',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.7)',
            }}
          >
            Fine Jewellery · Dubai
          </p>
          <div
            style={{
              marginTop: '1rem',
              width: 'min(420px, 86vw)',
              height: '4px',
              backgroundColor: 'rgba(201,168,76,0.2)',
              overflow: 'hidden',
            }}
          >
            <motion.div
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: 'linear' }}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #C9A84C 0%, #E8D5A3 100%)',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader
