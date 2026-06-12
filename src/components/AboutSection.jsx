import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { colors, fonts, ease } from '../theme'
import websiteImage from '../assets/Website.png'

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
  "Backed by the SuGandh Group's business values and entrepreneurial vision, we have consistently delivered secure and efficient trading solutions while fostering long-term relationships with clients, suppliers, and financial institutions worldwide.",
  'Today, Freya Trading stands as a symbol of professionalism, integrity, and innovation in the precious metals industry.',
  'Driven by trust, powered by experience, and backed by the strength of the SuGandh Group, Freya Trading continues to shape the future of global bullion trading.',
]

const stats = [
  {
    value: '2019',
    label: 'Established',
  },
  {
    value: 'HK',
    label: 'Global Hub',
  },
  {
    value: 'UAE',
    label: 'Group HQ',
  },
]

const transition = ease.transition
const MotionLink = motion.create(Link)

function useResponsive() {
  const [screen, setScreen] = useState({
    isMobile: false,
    isTablet: false,
  })

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth

      setScreen({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
      })
    }

    checkScreen()
    window.addEventListener('resize', checkScreen)

    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  return screen
}

function AboutSection() {
  const { isMobile, isTablet } = useResponsive()

  const visibleParagraphs = ABOUT_PARAGRAPHS.slice(0, 2)

  return (
    <section
      id="about"
      className="responsive-section"
      style={{
        backgroundColor: colors.bg,
        padding: isMobile ? '5.5rem 1.25rem' : isTablet ? '6.5rem 2rem' : '8rem 1.5rem',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '18%',
          left: '-18%',
          width: isMobile ? '320px' : '600px',
          height: isMobile ? '320px' : '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(209,165,80,0.07) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: '8%',
          right: '-12%',
          width: isMobile ? '280px' : '520px',
          height: isMobile ? '280px' : '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(209,165,80,0.05) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1520px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Top Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile || isTablet ? '1fr' : '0.92fr 1.08fr',
            gap: isMobile ? '2.25rem' : isTablet ? '3rem' : '3.75rem',
            alignItems: 'center',
          }}
        >
          {/* LEFT: Image / Visual Panel */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -80, y: isMobile ? 40 : 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={transition}
            style={{
              position: 'relative',
              willChange: 'transform, opacity',
              width: '100%',
              maxWidth: isMobile || isTablet ? '560px' : '88%',
              margin: isMobile || isTablet ? '0 auto' : '0 auto 0 0',
            }}
          >
            <div
              style={{
                position: 'relative',
                border: '1px solid rgba(209,165,80,0.22)',
                background: 'rgba(7,12,26,0.45)',
                aspectRatio: isMobile ? '4 / 5' : '0.88 / 1',
                overflow: 'hidden',
                boxShadow: '0 32px 90px -45px rgba(209,165,80,0.35)',
              }}
            >
              <img
                src={websiteImage}
                alt="Freya Trading precious metals"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 80, y: isMobile ? 40 : 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={transition}
            style={{
              willChange: 'transform, opacity',
              maxWidth: isMobile || isTablet ? '760px' : '100%',
              margin: isMobile || isTablet ? '0 auto' : 0,
              textAlign: isMobile ? 'center' : 'left',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: isMobile ? 'center' : 'flex-start',
                gap: '0.8rem',
                marginBottom: '1.2rem',
              }}
            >
              <span
                style={{
                  width: '44px',
                  height: '1px',
                  backgroundColor: colors.gold,
                }}
              />

              <span
                style={{
                  fontFamily: fonts.sans,
                  color: colors.gold,
                  fontSize: '0.7rem',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                }}
              >
                Who We Are
              </span>

              <span
                style={{
                  width: '44px',
                  height: '1px',
                  backgroundColor: colors.gold,
                }}
              />
            </div>

            <h2
              style={{
                margin: 0,
                fontFamily: fonts.serif,
                fontSize: isMobile ? '2.15rem' : 'clamp(2.45rem, 3.8vw, 3.55rem)',
                fontWeight: 400,
                lineHeight: 1.12,
                color: '#fff',
                maxWidth: '760px',
              }}
            >
              Freya Trading (HK) Ltd. – A Member of the{' '}
              <span style={{ fontStyle: 'italic', color: colors.gold }}>SuGandh Group</span>
            </h2>

            <div
              style={{
                marginTop: '1.15rem',
                maxWidth: '720px',
              }}
            >
              {visibleParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  style={{
                    margin: index === 0 ? 0 : '0.95rem 0 0',
                    color: 'rgba(255,255,255,0.64)',
                    fontFamily: fonts.sans,
                    lineHeight: 1.9,
                    fontSize: isMobile ? '0.86rem' : '0.92rem',
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                gap: '0.8rem',
                marginTop: '1.35rem',
                maxWidth: '620px',
              }}
            >
              {stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...transition, delay: index * 0.06 }}
                  style={{
                    border: '1px solid rgba(209,165,80,0.16)',
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.045), rgba(255,255,255,0.012))',
                    padding: '1rem',
                    textAlign: 'center',
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontFamily: fonts.serif,
                      fontSize: '1.45rem',
                      color: colors.goldLight,
                      lineHeight: 1,
                    }}
                  >
                    {item.value}
                  </p>

                  <p
                    style={{
                      margin: '0.45rem 0 0',
                      fontFamily: fonts.sans,
                      fontSize: '0.58rem',
                      letterSpacing: '0.2em',
                      color: 'rgba(255,255,255,0.48)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: isMobile ? 'center' : 'flex-start',
                gap: '1rem',
                flexWrap: 'wrap',
                marginTop: '1.5rem',
              }}
            >
              <MotionLink
                to="/about"
                whileHover={{
                  scale: 1.02,
                  backgroundColor: colors.goldLight,
                  boxShadow: '0 10px 30px -10px rgba(209,165,80,0.5)',
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: colors.gold,
                  color: colors.bg,
                  fontFamily: fonts.sans,
                  fontWeight: 600,
                  fontSize: '0.72rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  padding: '0.98rem 1.8rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                  textDecoration: 'none',
                }}
              >
                Continue Reading
              </MotionLink>
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, minmax(0, 1fr))',
            gap: '1rem',
            marginTop: isMobile ? '2.75rem' : '3.5rem',
          }}
        >
          {featureCards.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ ...transition, delay: index * 0.08 }}
              whileHover={{
                y: -5,
                boxShadow: '0 22px 55px -28px rgba(209,165,80,0.38)',
                borderColor: 'rgba(209,165,80,0.35)',
              }}
              style={{
                position: 'relative',
                border: '1px solid rgba(209,165,80,0.16)',
                background: 'linear-gradient(145deg, rgba(255,255,255,0.045), rgba(255,255,255,0.012))',
                padding: isMobile ? '1.15rem 1rem' : '1.35rem 1.25rem',
                willChange: 'transform, opacity',
                overflow: 'hidden',
              }}
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08 + 0.25,
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '1.5px',
                  background: 'linear-gradient(90deg, transparent, #D1A550, transparent)',
                  transformOrigin: 'left',
                }}
              />

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  flexDirection: isMobile ? 'column' : 'row',
                  textAlign: isMobile ? 'center' : 'left',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, rgba(209,165,80,0.2), rgba(209,165,80,0.05))',
                    border: '1px solid rgba(209,165,80,0.28)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    color: colors.gold,
                    flexShrink: 0,
                    margin: isMobile ? '0 auto' : 0,
                    boxShadow: '0 0 24px rgba(209,165,80,0.12)',
                  }}
                >
                  <i className={`fas ${feature.icon}`} />
                </div>

                <div>
                  <h3
                    style={{
                      margin: '0 0 0.45rem',
                      fontFamily: fonts.serif,
                      fontSize: '1.28rem',
                      fontWeight: 600,
                      color: '#fff',
                    }}
                  >
                    {feature.title}
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      color: 'rgba(255,255,255,0.54)',
                      fontFamily: fonts.sans,
                      fontSize: '0.82rem',
                      lineHeight: 1.75,
                    }}
                  >
                    {feature.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
