import { motion } from 'framer-motion'

const featureCards = [
  { icon: 'fa-certificate', title: 'LBMA Certified', text: 'Global bullion and quality standards assured.' },
  { icon: 'fa-shield-halved', title: 'Fully Insured', text: 'End-to-end insurance on every shipment.' },
  { icon: 'fa-globe', title: 'Global Delivery', text: 'Reliable logistics across major international hubs.' },
  { icon: 'fa-hand-holding-dollar', title: 'Price Guarantee', text: 'Transparent, spot-linked pricing with no surprises.' },
]

const stats = [
  { value: '17+ Years', label: 'Legacy' },
  { value: '5,000+ Clients', label: 'Served' },
  { value: '50+ Countries', label: 'Network' },
  { value: '10,000+ Designs', label: 'Crafted' },
]

const transition = { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
const fromLeft = { initial: { opacity: 0, x: -80 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition }
const fromRight = { initial: { opacity: 0, x: 80 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition }
const fromBottom = { initial: { opacity: 0, y: 60 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition }

function AboutSection() {
  return (
    <section id="about" style={{ backgroundColor: '#070C1A', padding: '6rem 1.5rem', color: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          <motion.div
            {...fromLeft}
            style={{
              position: 'relative',
              border: '1px solid rgba(201,168,76,0.35)',
              background: 'linear-gradient(145deg, rgba(16,31,72,0.95) 0%, rgba(7,12,26,0.95) 100%)',
              minHeight: '440px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <i className="fas fa-gem" style={{ fontSize: '6rem', color: 'rgba(201,168,76,0.8)' }} />
            <div
              style={{
                position: 'absolute',
                right: '1rem',
                bottom: '1rem',
                border: '1px solid rgba(201,168,76,0.4)',
                backgroundColor: 'rgba(7,12,26,0.8)',
                padding: '0.75rem 1rem',
              }}
            >
              <p style={{ margin: 0, fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.12em', color: '#C9A84C', fontSize: '0.75rem', textTransform: 'uppercase' }}>
                Est. 2007
              </p>
            </div>
          </motion.div>

          <motion.div {...fromRight}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
              <span style={{ width: '44px', height: '1px', backgroundColor: '#C9A84C' }} />
              <span style={{ fontFamily: "'Montserrat', sans-serif", color: '#C9A84C', fontSize: '0.75rem', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
                Our Story
              </span>
            </div>
            <h2 style={{ margin: 0, fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.3rem, 4vw, 3.6rem)', fontWeight: 500 }}>
              Craftsmanship Beyond Compare
            </h2>
            <p style={{ marginTop: '1.2rem', color: 'rgba(255,255,255,0.7)', fontFamily: "'Montserrat', sans-serif", lineHeight: 1.85, fontSize: '0.95rem' }}>
              Freya Jewels has been a leading jewellery manufacturer in the UAE since 2007, trusted by wholesalers,
              private investors, and family offices for timeless design and uncompromising quality.
            </p>
            <p style={{ marginTop: '0.8rem', color: 'rgba(255,255,255,0.7)', fontFamily: "'Montserrat', sans-serif", lineHeight: 1.85, fontSize: '0.95rem' }}>
              Operating from Dubai and aligned with DMCC-grade standards, our atelier combines traditional craftsmanship
              with modern precision to deliver certified, premium jewellery for global markets.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginTop: '1.5rem' }}>
              {featureCards.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  {...(index < 2 ? fromLeft : fromRight)}
                  style={{
                    border: '1px solid rgba(201,168,76,0.2)',
                    backgroundColor: 'rgba(16,31,72,0.35)',
                    padding: '1rem',
                  }}
                >
                  <i className={`fas ${feature.icon}`} style={{ color: '#C9A84C', fontSize: '1rem' }} />
                  <h3 style={{ margin: '0.65rem 0 0.35rem', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', fontWeight: 600 }}>{feature.title}</h3>
                  <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontFamily: "'Montserrat', sans-serif", fontSize: '0.82rem', lineHeight: 1.7 }}>{feature.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4" style={{ marginTop: '2.2rem' }}>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.value}
              {...fromBottom}
              transition={{ ...transition, delay: index * 0.1 }}
              style={{
                border: '1px solid rgba(201,168,76,0.2)',
                backgroundColor: 'rgba(16,31,72,0.35)',
                padding: '1rem',
                textAlign: 'center',
              }}
            >
              <p style={{ margin: 0, color: '#E8D5A3', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem' }}>{stat.value}</p>
              <p style={{ margin: '0.25rem 0 0', color: 'rgba(255,255,255,0.65)', fontFamily: "'Montserrat', sans-serif", fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
