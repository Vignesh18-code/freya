import { motion } from 'framer-motion'

const badges = ['No Obligation', 'Rapid Response', 'Strictly Confidential']
const EASE   = [0.22, 1, 0.36, 1]

function CTABand() {
  return (
    <section
      style={{
        backgroundColor: '#070C1A',
        borderTop:    '1px solid rgba(201,168,76,0.18)',
        borderBottom: '1px solid rgba(201,168,76,0.18)',
        padding: '5rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* glow blobs */}
      <div style={{
        position: 'absolute', top: '-30%', left: '50%',
        transform: 'translateX(-50%)',
        width: '800px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(201,168,76,0.03) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: EASE }}
        style={{
          maxWidth: '820px', margin: '0 auto',
          textAlign: 'center', position: 'relative', zIndex: 1,
        }}
      >
        {/* Label */}
        <div style={{
          display: 'inline-flex', alignItems: 'center',
          gap: '0.75rem', marginBottom: '1.2rem',
        }}>
          <span style={{ width: '40px', height: '1px', backgroundColor: '#C9A84C' }} />
          <span style={{
            fontFamily: "'Montserrat', sans-serif", color: '#C9A84C',
            fontSize: '0.7rem', letterSpacing: '0.28em', textTransform: 'uppercase',
          }}>
            Get In Touch
          </span>
          <span style={{ width: '40px', height: '1px', backgroundColor: '#C9A84C' }} />
        </div>

        {/* Heading */}
        <h2 style={{
          margin: 0,
          fontFamily: "'Cormorant Garamond', serif",
          color: '#fff',
          fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
          fontWeight: 400, lineHeight: 1.15,
        }}>
          Ready to Secure{' '}
          <span style={{ fontStyle: 'italic', color: '#C9A84C' }}>Your Supply?</span>
        </h2>

        {/* Sub-headline */}
        <p style={{
          margin: '1.2rem auto 0', maxWidth: '580px',
          color: 'rgba(255,255,255,0.55)',
          fontFamily: "'Montserrat', sans-serif",
          lineHeight: 1.85, fontSize: '0.88rem',
        }}>
          Request a free, no-obligation wholesale quotation today. Our global B2B
          trading desk is standing by to assist with your custom volume requirements.
        </p>

        {/* Divider */}
        <div style={{
          width: '48px', height: '1px',
          background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
          margin: '2rem auto',
        }} />

        {/* Buttons */}
        <div style={{
          display: 'flex', justifyContent: 'center',
          gap: '1rem', flexWrap: 'wrap',
        }}>
          <motion.button
            whileHover={{
              backgroundColor: '#E8D5A3',
              boxShadow: '0 12px 32px -10px rgba(201,168,76,0.55)',
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              border: 'none',
              backgroundColor: '#C9A84C',
              color: '#070C1A',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontSize: '0.72rem',
              padding: '1rem 2.4rem',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
          >
            Request a Quote
          </motion.button>

          <motion.button
            whileHover={{
              backgroundColor: 'rgba(201,168,76,0.1)',
              color: '#E8D5A3',
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              border: '1px solid rgba(201,168,76,0.45)',
              background: 'transparent',
              color: '#C9A84C',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontSize: '0.72rem',
              padding: '1rem 2.4rem',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '0.6rem',
              transition: 'background-color 0.3s ease, color 0.3s ease',
            }}
          >
            <i className="fas fa-phone" style={{ fontSize: '0.65rem' }} />
            +971 50 XXX XXXX
          </motion.button>
        </div>

        {/* Trust badges */}
        <div style={{
          marginTop: '2rem',
          display: 'flex', justifyContent: 'center',
          gap: '0.75rem', flexWrap: 'wrap',
        }}>
          {badges.map((badge, i) => (
            <motion.span
              key={badge}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                border: '1px solid rgba(201,168,76,0.22)',
                background: 'rgba(201,168,76,0.04)',
                color: 'rgba(255,255,255,0.55)',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.65rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                padding: '0.45rem 0.9rem',
              }}
            >
              {/* tick */}
              <span style={{
                width: '14px', height: '14px', borderRadius: '50%',
                border: '1px solid rgba(201,168,76,0.4)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <i className="fas fa-check" style={{ fontSize: '0.45rem', color: '#C9A84C' }} />
              </span>
              {badge}
            </motion.span>
          ))}
        </div>

      </motion.div>
    </section>
  )
}

export default CTABand