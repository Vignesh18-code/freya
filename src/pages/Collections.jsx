import { motion } from 'framer-motion'
import Products from '../components/Products'

const transition = { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
const fromLeft = { initial: { opacity: 0, x: -80 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition }
const fromBottom = { initial: { opacity: 0, y: 60 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition }

function Collections() {
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
          <p style={{ margin: 0, fontFamily: "'Montserrat', sans-serif", color: '#C9A84C', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.72rem' }}>Home · Collections</p>
          <h1 style={{ margin: '0.8rem 0 0', fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.8rem, 5vw, 4.8rem)', fontWeight: 500 }}>
            Our Collections
          </h1>
        </motion.div>
      </section>

      <Products defaultFilter="All" />

      <section style={{ padding: '0 1.5rem 4rem' }}>
        <motion.div {...fromLeft} style={{ maxWidth: '1100px', margin: '0 auto', border: '1px solid rgba(201,168,76,0.25)', background: 'linear-gradient(95deg, rgba(201,168,76,0.12), rgba(201,168,76,0.05))', padding: '1.3rem' }}>
          <p style={{ margin: 0, color: '#C9A84C', fontFamily: "'Montserrat', sans-serif", fontSize: '0.74rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Featured Collection</p>
          <h2 style={{ margin: '0.4rem 0 0', fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 500 }}>Signature Bridal Heirloom Series</h2>
          <p style={{ margin: '0.4rem 0 0', color: 'rgba(255,255,255,0.72)', fontFamily: "'Montserrat', sans-serif", fontSize: '0.88rem', lineHeight: 1.75 }}>
            Discover our latest curated bridal and ceremonial masterpieces, handcrafted for modern luxury markets.
          </p>
        </motion.div>
      </section>
    </main>
  )
}

export default Collections
