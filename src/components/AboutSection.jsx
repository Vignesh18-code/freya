import { motion } from 'framer-motion'

const featureCards = [
  {
    icon: 'fa-certificate',
    title: 'Trusted Purity',
    text: 'Guaranteed high-purity standards across all gold bars, silver bullion, and certified gems.',
  },
  {
    icon: 'fa-shield-halved',
    title: 'Fully Insured',
    text: 'Secure, end-to-end transit insurance on all high-value shipments for absolute peace of mind.',
  },
  {
    icon: 'fa-globe',
    title: 'Global Hubs',
    text: 'Direct B2B trading networks connecting the UAE, India, Singapore, Hong Kong, and Bahrain.',
  },
  {
    icon: 'fa-hand-holding-dollar',
    title: 'Wholesale Pricing',
    text: 'Transparent, competitive market rates straight from our manufacturing and refinery sources.',
  },
]

const stats = [
  { value: '17+', label: 'Years Legacy' },
  { value: '5,000+', label: 'Clients Served' },
  { value: '50+', label: 'Countries Network' },
  { value: '10,000+', label: 'Designs Crafted' },
]

const EASE = [0.22, 1, 0.36, 1]
const transition = { duration: 0.9, ease: EASE }

function AboutSection() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: '#070C1A',
        padding: '8rem 1.5rem',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '-15%',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '-10%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── TOP ROW: Image Left + Content Right ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
          marginBottom: '5rem',
        }}>

          {/* LEFT: Image / Visual Panel */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={transition}
            style={{ position: 'relative', willChange: 'transform, opacity' }}
          >
            {/* Main panel */}
            <div style={{
              position: 'relative',
              border: '1px solid rgba(201,168,76,0.2)',
              background: 'linear-gradient(145deg, rgba(16,31,72,0.9) 0%, rgba(7,12,26,0.98) 100%)',
              minHeight: '520px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}>
              {/* Gold shimmer top line */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
              }} />

              {/* Background pattern */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  rgba(201,168,76,0.02) 0px,
                  rgba(201,168,76,0.02) 1px,
                  transparent 1px,
                  transparent 40px
                )`,
              }} />

              {/* Center icon */}
              <div style={{
                position: 'relative', zIndex: 2,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: '1.5rem',
              }}>
                {/* Outer ring */}
                <div style={{
                  width: '160px', height: '160px', borderRadius: '50%',
                  border: '1px solid rgba(201,168,76,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative',
                }}>
                  {/* Inner ring */}
                  <div style={{
                    width: '120px', height: '120px', borderRadius: '50%',
                    border: '1px solid rgba(201,168,76,0.35)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'linear-gradient(135deg, rgba(201,168,76,0.12), rgba(201,168,76,0.04))',
                  }}>
                    <i className="fas fa-gem" style={{ fontSize: '3.5rem', color: '#C9A84C' }} />
                  </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <p style={{
                    margin: 0,
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.8rem', fontWeight: 400,
                    color: '#E8D5A3', letterSpacing: '0.05em',
                  }}>
                    SuGandh Group
                  </p>
                  <p style={{
                    margin: '0.3rem 0 0',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '0.65rem', letterSpacing: '0.3em',
                    color: 'rgba(201,168,76,0.6)', textTransform: 'uppercase',
                  }}>
                    International Trading & Manufacturing
                  </p>
                </div>
              </div>

              {/* Corner badges */}
              <div style={{
                position: 'absolute', top: '1.2rem', left: '1.2rem',
                border: '1px solid rgba(201,168,76,0.25)',
                padding: '0.4rem 0.8rem',
                background: 'rgba(7,12,26,0.8)',
              }}>
                <p style={{
                  margin: 0, fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.6rem', letterSpacing: '0.22em',
                  color: 'rgba(201,168,76,0.7)', textTransform: 'uppercase',
                }}>
                  Est. 2007
                </p>
              </div>
              <div style={{
                position: 'absolute', bottom: '1.2rem', right: '1.2rem',
                border: '1px solid rgba(201,168,76,0.25)',
                padding: '0.4rem 0.8rem',
                background: 'rgba(7,12,26,0.8)',
              }}>
                <p style={{
                  margin: 0, fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.6rem', letterSpacing: '0.22em',
                  color: 'rgba(201,168,76,0.7)', textTransform: 'uppercase',
                }}>
                  DMCC Certified
                </p>
              </div>

              {/* Side labels */}
              <div style={{
                position: 'absolute', left: '1.2rem', bottom: '1.2rem',
                display: 'flex', flexDirection: 'column', gap: '0.4rem',
              }}>
                {['Gold', 'Silver', 'Diamonds'].map((label) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#C9A84C' }} />
                    <span style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '0.6rem', letterSpacing: '0.15em',
                      color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase',
                    }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.4 }}
              style={{
                position: 'absolute',
                bottom: '-1.5rem',
                right: '-1.5rem',
                background: 'linear-gradient(135deg, rgba(201,168,76,0.18), rgba(201,168,76,0.06))',
                border: '1px solid rgba(201,168,76,0.3)',
                padding: '1rem 1.4rem',
                backdropFilter: 'blur(10px)',
              }}
            >
              <p style={{
                margin: 0, fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.6rem', color: '#E8D5A3', lineHeight: 1,
              }}>
                100%
              </p>
              <p style={{
                margin: '0.2rem 0 0', fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.6rem', letterSpacing: '0.18em',
                color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase',
              }}>
                Certified Origin
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={transition}
            style={{ willChange: 'transform, opacity' }}
          >
            {/* Section label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
              <span style={{ width: '44px', height: '1px', backgroundColor: '#C9A84C' }} />
              <span style={{
                fontFamily: "'Montserrat', sans-serif", color: '#C9A84C',
                fontSize: '0.7rem', letterSpacing: '0.28em', textTransform: 'uppercase',
              }}>
                Who We Are
              </span>
            </div>

            <h2 style={{
              margin: 0,
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)',
              fontWeight: 400, lineHeight: 1.15, color: '#fff',
            }}>
              Direct Global Access to{' '}
              <span style={{ fontStyle: 'italic', color: '#C9A84C' }}>
                Gold, Silver & Diamonds
              </span>
            </h2>

            <p style={{
              marginTop: '1.4rem',
              color: 'rgba(255,255,255,0.62)',
              fontFamily: "'Montserrat', sans-serif",
              lineHeight: 1.9, fontSize: '0.9rem',
            }}>
              SuGandh Group is an international trading and manufacturing powerhouse built on long-term
              industry partnerships. We bypass traditional broker networks to connect our B2B clients
              directly with refined physical products, maximizing margins for businesses in the UAE,
              India, and beyond.
            </p>
            <p style={{
              marginTop: '0.9rem',
              color: 'rgba(255,255,255,0.62)',
              fontFamily: "'Montserrat', sans-serif",
              lineHeight: 1.9, fontSize: '0.9rem',
            }}>
              Everything leaving our facilities carries independent certification and absolute proof
              of origin. We don't just supply precious commodities — we protect your operational standards.
            </p>

            {/* Feature cards — box 1&2 from left, 3&4 from right */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              marginTop: '2rem',
            }}>
              {featureCards.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: index < 2 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ ...transition, delay: index * 0.08 }}
                  whileHover={{ y: -4, boxShadow: '0 16px 40px -16px rgba(201,168,76,0.2)' }}
                  style={{
                    position: 'relative',
                    border: '1px solid rgba(201,168,76,0.15)',
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
                    padding: '1.4rem 1.2rem',
                    willChange: 'transform, opacity',
                    overflow: 'hidden',
                  }}
                >
                  {/* top shimmer */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.08 + 0.3 }}
                    style={{
                      position: 'absolute', top: 0, left: 0, right: 0, height: '1.5px',
                      background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
                      transformOrigin: 'left',
                    }}
                  />
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '10px',
                    background: 'linear-gradient(135deg, rgba(201,168,76,0.18), rgba(201,168,76,0.04))',
                    border: '1px solid rgba(201,168,76,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1rem', color: '#C9A84C', marginBottom: '1rem',
                  }}>
                    <i className={`fas ${feature.icon}`} />
                  </div>
                  <h3 style={{
                    margin: '0 0 0.4rem',
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.25rem', fontWeight: 600, color: '#fff',
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    margin: 0,
                    color: 'rgba(255,255,255,0.52)',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '0.8rem', lineHeight: 1.75,
                  }}>
                    {feature.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── STATS ROW ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '1px',
          background: 'rgba(201,168,76,0.1)',
          border: '1px solid rgba(201,168,76,0.12)',
        }}>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ ...transition, delay: index * 0.1 }}
              whileHover={{ backgroundColor: 'rgba(201,168,76,0.06)' }}
              style={{
                background: 'rgba(7,12,26,0.95)',
                padding: '2rem 1.5rem',
                textAlign: 'center',
                position: 'relative',
                willChange: 'transform, opacity',
                transition: 'background 0.3s ease',
              }}
            >
              {/* top accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 + 0.3 }}
                style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                  background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
                  transformOrigin: 'left',
                }}
              />
              <p style={{
                margin: 0,
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2rem, 3vw, 2.8rem)',
                fontWeight: 400, color: '#E8D5A3', lineHeight: 1,
              }}>
                {stat.value}
              </p>
              <p style={{
                margin: '0.5rem 0 0',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.65rem', letterSpacing: '0.22em',
                color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase',
              }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default AboutSection