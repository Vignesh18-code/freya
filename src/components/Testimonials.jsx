import { useEffect, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { colors, fonts, ease } from '../theme'

const BASE = [
  {
    name: 'James Khoury',
    role: 'CFO, Emirates Wealth',
    text: 'Freya delivers consistent purity and premium finishing with outstanding communication.',
    initials: 'JK',
  },
  {
    name: 'Sofia Reinhardt',
    role: 'Private Investor, Berlin',
    text: 'From quote to delivery, every step was transparent and executed with precision.',
    initials: 'SR',
  },
  {
    name: 'Marcus Thornton',
    role: 'Head of Operations, Meridian',
    text: 'Their logistics reliability and insured shipping process are unmatched in the market.',
    initials: 'MT',
  },
  {
    name: 'Angela Lim',
    role: 'Family Office, Singapore',
    text: 'Freya combines craftsmanship and compliance standards we can confidently rely on.',
    initials: 'AL',
  },
  {
    name: 'Raj Nair',
    role: 'Owner, Nair Fine Jewellery, Mumbai',
    text: 'Excellent wholesale partner with strong product quality and dependable timelines.',
    initials: 'RN',
  },
]

const EASE = ease.smooth
const GAP = 20

export default function Testimonials() {
  const [cpv, setCpv] = useState(3)
  const [activeIndex, setActiveIndex] = useState(BASE.length)
  const [animate, setAnimate] = useState(true)
  const [cardWidth, setCardWidth] = useState(0)

  const viewportRef = useRef(null)
  const pausedRef = useRef(false)

  const slides = [...BASE, ...BASE, ...BASE]

  const getRealIndex = (index) => {
    return ((index % BASE.length) + BASE.length) % BASE.length
  }

  const measure = useCallback(() => {
    if (!viewportRef.current) return

    const viewportWidth = viewportRef.current.offsetWidth
    const width = (viewportWidth - GAP * (cpv - 1)) / cpv

    setCardWidth(width)
  }, [cpv])

  useEffect(() => {
    const updateCpv = () => {
      const w = window.innerWidth

      if (w < 640) {
        setCpv(1)
      } else if (w < 1024) {
        setCpv(2)
      } else {
        setCpv(3)
      }
    }

    updateCpv()
    window.addEventListener('resize', updateCpv)

    return () => window.removeEventListener('resize', updateCpv)
  }, [])

  useEffect(() => {
    measure()
    window.addEventListener('resize', measure)

    return () => window.removeEventListener('resize', measure)
  }, [measure])

  const moveTo = useCallback((nextIndex) => {
    setAnimate(true)
    setActiveIndex(nextIndex)
  }, [])

  const goPrev = () => {
    moveTo(activeIndex - 1)
  }

  const goNext = () => {
    moveTo(activeIndex + 1)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (pausedRef.current) return
      moveTo(activeIndex + 1)
    }, 3500)

    return () => clearInterval(timer)
  }, [activeIndex, moveTo])

  const handleTransitionEnd = () => {
    if (activeIndex >= BASE.length * 2) {
      setAnimate(false)
      setActiveIndex(BASE.length)
    }

    if (activeIndex < BASE.length) {
      setAnimate(false)
      setActiveIndex(BASE.length * 2 - 1)
    }
  }

  useEffect(() => {
    if (!animate) {
      const frame = requestAnimationFrame(() => {
        setAnimate(true)
      })

      return () => cancelAnimationFrame(frame)
    }
  }, [animate])

  const activeRealIndex = getRealIndex(activeIndex)

  const centerOffset =
    cardWidth > 0
      ? activeIndex * (cardWidth + GAP) -
        ((viewportRef.current?.offsetWidth || 0) - cardWidth) / 2
      : 0

  return (
    <section
      id="testimonials"
      style={{
        backgroundColor: colors.bg,
        color: '#fff',
        padding: '0 1.5rem 6rem',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={() => {
        pausedRef.current = true
      }}
      onMouseLeave={() => {
        pausedRef.current = false
      }}
    >
      {/* Glow blobs */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(209,165,80,0.05) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '-10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(209,165,80,0.04) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: '2rem' }}
        >
          <h2
            style={{
              margin: 0,
              fontFamily: fonts.serif,
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              fontWeight: 500,
            }}
          >
            Trusted by Clients Worldwide
          </h2>
        </motion.div>

        {/* Arrows */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '1rem',
          }}
        >
          <button
            onClick={goPrev}
            aria-label="Previous"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '999px',
              border: '1px solid rgba(209,165,80,0.45)',
              background: 'transparent',
              color: colors.gold,
              cursor: 'pointer',
              fontSize: '1.2rem',
              lineHeight: 1,
            }}
          >
            ‹
          </button>

          <button
            onClick={goNext}
            aria-label="Next"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '999px',
              border: '1px solid rgba(209,165,80,0.45)',
              background: 'transparent',
              color: colors.gold,
              cursor: 'pointer',
              fontSize: '1.2rem',
              lineHeight: 1,
            }}
          >
            ›
          </button>
        </div>

        {/* Viewport */}
        <div
          ref={viewportRef}
          style={{
            overflow: 'hidden',
            width: '100%',
            padding: '0.75rem 0',
          }}
        >
          <div
            onTransitionEnd={handleTransitionEnd}
            style={{
              display: 'flex',
              gap: `${GAP}px`,
              transform: `translateX(${-centerOffset}px)`,
              transition: animate
                ? 'transform 0.7s cubic-bezier(0.22,1,0.36,1)'
                : 'none',
              willChange: 'transform',
            }}
          >
            {slides.map((item, i) => {
              const isActive = i === activeIndex

              return (
                <div
                  key={`${item.name}-${i}`}
                  style={{
                    flexShrink: 0,
                    width: cardWidth
                      ? `${cardWidth}px`
                      : `calc((100% - ${GAP * (cpv - 1)}px) / ${cpv})`,
                  }}
                >
                  <article
                    style={{
                      border: isActive
                        ? '1px solid rgba(209,165,80,0.55)'
                        : '1px solid rgba(209,165,80,0.2)',
                      backgroundColor: isActive
                        ? 'rgba(16,31,72,0.72)'
                        : 'rgba(16,31,72,0.45)',
                      padding: '1.25rem',
                      height: '100%',
                      boxSizing: 'border-box',
                      opacity: isActive ? 1 : 0.45,
                      transform: isActive ? 'scale(1)' : 'scale(0.94)',
                      transition:
                        'opacity 0.5s ease, transform 0.5s ease, border-color 0.5s ease, background-color 0.5s ease',
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        color: colors.gold,
                        letterSpacing: '0.08em',
                      }}
                    >
                      ★★★★★
                    </p>

                    <p
                      style={{
                        margin: '0.9rem 0 1rem',
                        fontFamily: fonts.sans,
                        color: 'rgba(255,255,255,0.72)',
                        lineHeight: 1.8,
                        fontStyle: 'italic',
                        fontSize: '0.9rem',
                      }}
                    >
                      "{item.text}"
                    </p>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                      }}
                    >
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '999px',
                          border: '1px solid rgba(209,165,80,0.45)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: colors.goldLight,
                          fontFamily: fonts.sans,
                          fontSize: '0.72rem',
                          letterSpacing: '0.08em',
                          flexShrink: 0,
                        }}
                      >
                        {item.initials}
                      </div>

                      <div>
                        <p
                          style={{
                            margin: 0,
                            fontFamily: fonts.serif,
                            fontSize: '1.3rem',
                          }}
                        >
                          {item.name}
                        </p>

                        <p
                          style={{
                            margin: 0,
                            color: 'rgba(255,255,255,0.65)',
                            fontFamily: fonts.sans,
                            fontSize: '0.75rem',
                          }}
                        >
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              )
            })}
          </div>
        </div>

        {/* Dots */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.45rem',
            marginTop: '1rem',
          }}
        >
          {BASE.map((_, i) => (
            <button
              key={i}
              onClick={() => moveTo(BASE.length + i)}
              aria-label={`Go to testimonial ${i + 1}`}
              style={{
                width: i === activeRealIndex ? '22px' : '8px',
                height: '8px',
                borderRadius: '999px',
                border: 'none',
                backgroundColor:
                  i === activeRealIndex
                    ? colors.gold
                    : 'rgba(209,165,80,0.35)',
                cursor: 'pointer',
                padding: 0,
                transition: 'width 0.4s ease, background-color 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}