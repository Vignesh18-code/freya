import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { colors, fonts, ease } from '../theme'

const featureCards = [
  {
    icon: 'fa-certificate',
    title: 'Trusted Purity',
    text: 'Guaranteed high-purity standards across all gold bars, silver bullion, and certified gems.',
  },
  {
    icon: 'fa-hand-holding-dollar',
    title: 'Wholesale Pricing',
    text: 'Transparent, competitive market rates straight from our manufacturing and refinery sources.',
  },
]

const ABOUT_PARAGRAPHS = [
  'Established in Hong Kong in 2019, Freya Trading (HK) Ltd. has emerged as a dynamic and trusted participant in the global bullion and precious metals market. As a proud member of the SuGandh Group, a respected business group headquartered in Dubai, UAE, we combine international market expertise with the strength, credibility, and legacy of a well-established organization.',
  'Over the years, Freya Trading has built a strong reputation for reliability, transparency, and excellence in bullion trading. Through strategic partnerships, disciplined risk management, and an unwavering commitment to customer satisfaction, we have successfully expanded our presence across key international markets.',
  "Backed by the SuGandh Group's business values and entrepreneurial vision, we have consistently delivered secure and efficient trading solutions while fostering long-term relationships with clients, suppliers, and financial institutions worldwide. Our growth story reflects not only our market expertise but also the trust and confidence placed in us by our stakeholders.",
  'Today, Freya Trading (HK) Ltd. stands as a symbol of professionalism, integrity, and innovation in the precious metals industry. As we continue our journey, we remain dedicated to creating sustainable value, expanding our global footprint, and strengthening our position as a preferred partner in the international bullion market.',
  'Driven by trust, powered by experience, and backed by the strength of the SuGandh Group, Freya Trading continues to shape the future of global bullion trading.',
]

const transition = ease.transition
const MotionLink = motion.create(Link)

function AboutSection() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: colors.bg,
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
        background: 'radial-gradient(circle, rgba(209,165,80,0.05) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '-10%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(209,165,80,0.04) 0%, transparent 70%)',
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
              border: '1px solid rgba(209,165,80,0.2)',
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
                background: 'linear-gradient(90deg, transparent, #D1A550, transparent)',
              }} />

              {/* Background pattern */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  rgba(209,165,80,0.02) 0px,
                  rgba(209,165,80,0.02) 1px,
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
                  border: '1px solid rgba(209,165,80,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative',
                }}>
                  {/* Inner ring */}
                  <div style={{
                    width: '120px', height: '120px', borderRadius: '50%',
                    border: '1px solid rgba(209,165,80,0.35)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'linear-gradient(135deg, rgba(209,165,80,0.12), rgba(209,165,80,0.04))',
                  }}>
                    <i className="fas fa-gem" style={{ fontSize: '3.5rem', color: colors.gold }} />
                  </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <p style={{
                    margin: 0,
                    fontFamily: fonts.serif,
                    fontSize: '1.8rem', fontWeight: 400,
                    color: colors.goldLight, letterSpacing: '0.05em',
                  }}>
                    SuGandh Group
                  </p>
                  <p style={{
                    margin: '0.3rem 0 0',
                    fontFamily: fonts.sans,
                    fontSize: '0.65rem', letterSpacing: '0.3em',
                    color: 'rgba(209,165,80,0.6)', textTransform: 'uppercase',
                  }}>
                    International Trading & Manufacturing
                  </p>
                </div>
              </div>

              {/* Corner badges */}
              <div style={{
                position: 'absolute', top: '1.2rem', left: '1.2rem',
                border: '1px solid rgba(209,165,80,0.25)',
                padding: '0.4rem 0.8rem',
                background: 'rgba(7,12,26,0.8)',
              }}>
                <p style={{
                  margin: 0, fontFamily: fonts.sans,
                  fontSize: '0.6rem', letterSpacing: '0.22em',
                  color: 'rgba(209,165,80,0.7)', textTransform: 'uppercase',
                }}>
                  Est. 2019
                </p>
              </div>
              <div style={{
                position: 'absolute', bottom: '1.2rem', right: '1.2rem',
                border: '1px solid rgba(209,165,80,0.25)',
                padding: '0.4rem 0.8rem',
                background: 'rgba(7,12,26,0.8)',
              }}>
                <p style={{
                  margin: 0, fontFamily: fonts.sans,
                  fontSize: '0.6rem', letterSpacing: '0.22em',
                  color: 'rgba(209,165,80,0.7)', textTransform: 'uppercase',
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
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: colors.gold }} />
                    <span style={{
                      fontFamily: fonts.sans,
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
                background: 'linear-gradient(135deg, rgba(209,165,80,0.18), rgba(209,165,80,0.06))',
                border: '1px solid rgba(209,165,80,0.3)',
                padding: '1rem 1.4rem',
                backdropFilter: 'blur(10px)',
              }}
            >
              <p style={{
                margin: 0, fontFamily: fonts.serif,
                fontSize: '1.6rem', color: colors.goldLight, lineHeight: 1,
              }}>
                100%
              </p>
              <p style={{
                margin: '0.2rem 0 0', fontFamily: fonts.sans,
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
              <span style={{ width: '44px', height: '1px', backgroundColor: colors.gold }} />
              <span style={{
                fontFamily: fonts.sans, color: colors.gold,
                fontSize: '0.7rem', letterSpacing: '0.28em', textTransform: 'uppercase',
              }}>
                Who We Are
              </span>
            </div>

            <h2 style={{
              margin: 0,
              fontFamily: fonts.serif,
              fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)',
              fontWeight: 400, lineHeight: 1.15, color: '#fff',
            }}>
              Freya Trading (HK) Ltd. – A Proud Member of the SuGandh Group
            </h2>

            {ABOUT_PARAGRAPHS.map((paragraph, index) => (
              <p
                key={index}
                style={{
                  marginTop: index === 0 ? '1.4rem' : '0.9rem',
                  color: 'rgba(255,255,255,0.62)',
                  fontFamily: fonts.sans,
                  lineHeight: 1.9,
                  fontSize: '0.9rem',
                }}
              >
                {paragraph}
              </p>
            ))}

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1rem',
              marginTop: '2rem',
            }}>
              {featureCards.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: index === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ ...transition, delay: index * 0.08 }}
                  whileHover={{ y: -4, boxShadow: '0 16px 40px -16px rgba(209,165,80,0.2)' }}
                  style={{
                    position: 'relative',
                    border: '1px solid rgba(209,165,80,0.15)',
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
                      background: 'linear-gradient(90deg, transparent, #D1A550, transparent)',
                      transformOrigin: 'left',
                    }}
                  />
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '10px',
                    background: 'linear-gradient(135deg, rgba(209,165,80,0.18), rgba(209,165,80,0.04))',
                    border: '1px solid rgba(209,165,80,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1rem', color: colors.gold, marginBottom: '1rem',
                  }}>
                    <i className={`fas ${feature.icon}`} />
                  </div>
                  <h3 style={{
                    margin: '0 0 0.4rem',
                    fontFamily: fonts.serif,
                    fontSize: '1.25rem', fontWeight: 600, color: '#fff',
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    margin: 0,
                    color: 'rgba(255,255,255,0.52)',
                    fontFamily: fonts.sans,
                    fontSize: '0.8rem', lineHeight: 1.75,
                  }}>
                    {feature.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <MotionLink
              to="/about"
              whileHover={{ scale: 1.02, backgroundColor: colors.goldLight, boxShadow: '0 10px 30px -10px rgba(209,165,80,0.5)' }}
              whileTap={{ scale: 0.98 }}
              style={{
                marginTop: '2rem',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.gold,
                color: colors.bg,
                fontFamily: fonts.sans,
                fontWeight: 600,
                fontSize: '0.78rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '1rem 2.2rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                textDecoration: 'none',
              }}
            >
              Continue Reading
            </MotionLink>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection