import { motion } from 'framer-motion'
import ContactSection from '../components/ContactSection'

const transition = { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
const fromBottom = { initial: { opacity: 0, y: 60 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition }

function Contact() {
  return (
    <main style={{ backgroundColor: '#070C1A', color: '#fff' }}>
      <section
        style={{
          background: 'linear-gradient(160deg, #070C1A 0%, #101F48 100%)',
          padding: '7rem 1.5rem 4rem',
          borderBottom: '1px solid rgba(201,168,76,0.25)',
        }}
      >
        <motion.div {...fromBottom} style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ margin: 0, fontFamily: "'Montserrat', sans-serif", color: '#C9A84C', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.72rem' }}>Home · Contact</p>
          <h1 style={{ margin: '0.8rem 0 0', fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.8rem, 5vw, 4.8rem)', fontWeight: 500 }}>
            Get In Touch
          </h1>
        </motion.div>
      </section>

      <ContactSection />

      <section style={{ padding: '0 1.5rem 4rem' }}>
        <motion.div {...fromBottom} style={{ maxWidth: '1100px', margin: '0 auto', border: '1px solid rgba(201,168,76,0.25)', backgroundColor: 'rgba(16,31,72,0.35)', minHeight: '280px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <i className="fas fa-map-location-dot" style={{ color: '#C9A84C', fontSize: '2rem' }} />
          <h2 style={{ margin: '0.7rem 0 0', fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 500 }}>Map Location</h2>
          <p style={{ margin: '0.4rem 0 0', color: 'rgba(255,255,255,0.72)', fontFamily: "'Montserrat', sans-serif", fontSize: '0.86rem' }}>
            DMCC, Jumeirah Lakes Towers, Dubai, UAE
          </p>
        </motion.div>
      </section>
    </main>
  )
}

export default Contact
