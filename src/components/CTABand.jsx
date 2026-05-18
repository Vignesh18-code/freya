import { motion } from 'framer-motion'

const badges = ['No obligation', 'Response within 4 hours', 'Fully confidential']

function CTABand() {
  return (
    <section
      style={{
        background: 'linear-gradient(90deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.05) 100%)',
        borderTop: '1px solid rgba(201,168,76,0.35)',
        borderBottom: '1px solid rgba(201,168,76,0.35)',
        padding: '3.2rem 1.5rem',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}
      >
        <h2 style={{ margin: 0, fontFamily: "'Cormorant Garamond', serif", color: '#fff', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 500 }}>
          Ready to Invest in Fine Jewellery?
        </h2>
        <p style={{ margin: '0.8rem auto 0', maxWidth: '720px', color: 'rgba(255,255,255,0.74)', fontFamily: "'Montserrat', sans-serif", lineHeight: 1.8, fontSize: '0.92rem' }}>
          Request a free quote today. New clients receive 12 months of complimentary storage on first orders.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', flexWrap: 'wrap', marginTop: '1.4rem' }}>
          <button style={{ border: 'none', backgroundColor: '#C9A84C', color: '#101F48', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: '0.72rem', padding: '0.85rem 1.4rem', cursor: 'pointer' }}>
            Request a Quote
          </button>
          <button style={{ border: '1px solid rgba(201,168,76,0.5)', background: 'transparent', color: '#E8D5A3', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: '0.72rem', padding: '0.85rem 1.4rem', cursor: 'pointer' }}>
            +971 4 555 0123
          </button>
        </div>

        <div style={{ marginTop: '1.1rem', display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
          {badges.map((badge) => (
            <span
              key={badge}
              style={{
                border: '1px solid rgba(201,168,76,0.3)',
                color: 'rgba(255,255,255,0.78)',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '0.45rem 0.65rem',
              }}
            >
              {badge}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default CTABand
