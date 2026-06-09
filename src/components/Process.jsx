import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { colors, fonts, ease } from '../theme'

const steps = [
  {
    num: '01',
    title: 'Connect & Verify',
    text: 'Submit your business inquiry online. Our trade desk will contact you promptly to complete your account setup.',
    icon: 'fa-handshake',
    tag: 'Getting Started',
  },
  {
    num: '02',
    title: 'Lock Market Rates',
    text: 'Receive a live market-linked price quotation tailored to your volume with complete invoice transparency.',
    icon: 'fa-chart-line',
    tag: 'Live Quote',
  },
  {
    num: '03',
    title: 'Secure Settlement',
    text: 'Finalize your trade via secure bank wire or SWIFT transfer to instantly lock in your inventory allocation.',
    icon: 'fa-lock',
    tag: 'Safe & Fast',
  },
  {
    num: '04',
    title: 'Insured Delivery',
    text: 'Your certified precious metals or jewellery order is securely shipped and delivered directly to your facility.',
    icon: 'fa-truck-fast',
    tag: 'Final Step',
  },
]

const EASE = ease.smooth
const T = ease.transition
const MotionLink = motion(Link)

/* ─── reusable shimmer bar ─────────────────────────────────── */
function ShimmerLine({ delay = 0 }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg, transparent, #D1A550, transparent)',
        transformOrigin: 'left',
      }}
    />
  )
}

export default function Process() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  /* circle diameter */
  const D = 88

  return (
    <section
      id="process"
      className="responsive-section"
      style={{
        backgroundColor: colors.bg,
        color: '#fff',
        padding: '8rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* glow blobs */}
      <div style={{
        position: 'absolute', top: '10%', left: '-10%',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(209,165,80,0.05) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', right: '-10%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(209,165,80,0.04) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1520px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={T}
          style={{ textAlign: 'center', marginBottom: 'clamp(2.75rem, 5vw, 3.75rem)' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center',
            gap: '0.75rem', marginBottom: '1.2rem',
          }}>
            <span style={{ width: '40px', height: '1px', backgroundColor: colors.gold }} />
            <span style={{
              fontFamily: fonts.sans, color: colors.gold,
              fontSize: '0.7rem', letterSpacing: '0.28em', textTransform: 'uppercase',
            }}>
              How It Works
            </span>
            <span style={{ width: '40px', height: '1px', backgroundColor: colors.gold }} />
          </div>

          <h2
  style={{
    margin: 0,
    fontFamily: fonts.serif,
    fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
    fontWeight: 400,
    lineHeight: 1.08,
    color: '#fff',
  }}
>
  Simple{' '}
  <span
    style={{
      color: colors.gold,
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: '0.06em',
      whiteSpace: 'nowrap',
    }}
  >
    <span>4</span>
    <span style={{ transform: 'translateY(-0.03em)' }}>–</span>
    <span style={{ fontStyle: 'italic' }}>Step</span>
  </span>{' '}
  Process
</h2>

          <p style={{
            margin: '1rem auto 0', maxWidth: '500px',
            color: 'rgba(255,255,255,0.5)',
            fontFamily: fonts.sans,
            fontSize: '0.9rem', lineHeight: 1.8,
          }}>
            Streamlined B2B trading from initial corporate inquiry to secure global fulfilment.
          </p>
        </motion.div>

        {/* ── DESKTOP layout (≥768px) ── */}
        {!isMobile && (
          <div style={{ position: 'relative' }}>

            {/* Connector line — drawn BEFORE circles so circles paint on top */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.6, ease: EASE, delay: 0.2 }}
              style={{
                position: 'absolute',
                /* top = exact vertical center of the circle = D/2 = 44px */
                top: `${D / 2}px`,
                /* start from center of col-1, end at center of col-4
                   with 4 equal cols each is 25% wide, center = 12.5% + 0% = 12.5% */
                left: '12.5%',
                right: '12.5%',
                height: '1px',
                background: 'linear-gradient(90deg, rgba(209,165,80,0.2), #D1A550 30%, #D1A550 70%, rgba(209,165,80,0.2))',
                transformOrigin: 'left',
                /* z-index LOWER than circles */
                zIndex: 0,
              }}
            />

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 'clamp(1rem, 2vw, 1.35rem)',
            }}>
              {steps.map((step, index) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ ...T, delay: index * 0.15 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    /* z-index HIGHER than line */
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {/* ── Circle ── */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      boxShadow: '0 0 0 10px rgba(209,165,80,0.07), 0 0 40px rgba(209,165,80,0.28)',
                    }}
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.7, ease: EASE, delay: index * 0.15 + 0.2 }}
                    style={{
                      position: 'relative',
                      width: `${D}px`,
                      height: `${D}px`,
                      borderRadius: '50%',
                      border: '1px solid rgba(209,165,80,0.55)',
                      /*
                       * KEY FIX: solid #070C1A base + subtle radial highlight.
                       * No rgba() — fully opaque so the line behind is 100% hidden.
                       */
                      backgroundColor: colors.bg,
                      backgroundImage: 'radial-gradient(circle at center, rgba(209,165,80,0.16) 0%, transparent 65%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.8rem',
                      flexShrink: 0,
                      cursor: 'default',
                      transition: 'box-shadow 0.4s ease',
                      /* no box-shadow blur that could show line bleed */
                      boxShadow: `0 0 0 5px ${colors.bg}`,
                    }}
                  >
                    {/* pulse ring */}
                    <motion.div
                      animate={{ scale: [1, 1.22, 1], opacity: [0.2, 0, 0.2] }}
                      transition={{
                        duration: 3.5, repeat: Infinity,
                        ease: 'easeInOut', delay: index * 0.6,
                      }}
                      style={{
                        position: 'absolute',
                        inset: '-12px',
                        borderRadius: '50%',
                        border: '1px solid rgba(209,165,80,0.18)',
                        pointerEvents: 'none',
                        /* also needs opaque bg gap so it doesn't reveal line */
                        backgroundColor: 'transparent',
                      }}
                    />

                    <span style={{
                      fontFamily: fonts.sans,
                      fontSize: '1rem', fontWeight: 500,
                      color: colors.goldLight, letterSpacing: '0.16em',
                      lineHeight: 1,
                    }}>
                      {step.num}
                    </span>
                  </motion.div>

                  {/* ── Card ── */}
                  <DesktopCard step={step} index={index} />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* ── MOBILE layout (<768px) ── */}
        {isMobile && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ ...T, delay: index * 0.1 }}
                className="process-mobile-row"
                style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}
              >
                {/* Number badge — NO line on mobile */}
                <div className="process-mobile-badge" style={{
                  flexShrink: 0,
                  width: '52px', height: '52px',
                  borderRadius: '50%',
                  border: '1px solid rgba(209,165,80,0.5)',
                  backgroundColor: colors.bg,
                  backgroundImage: 'radial-gradient(circle at center, rgba(209,165,80,0.16) 0%, transparent 65%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{
                    fontFamily: fonts.sans,
                    fontSize: '0.82rem', fontWeight: 500,
                    color: colors.goldLight, letterSpacing: '0.12em',
                  }}>
                    {step.num}
                  </span>
                </div>

                {/* Card */}
                <div style={{
                  flex: 1,
                  position: 'relative',
                  border: '1px solid rgba(209,165,80,0.15)',
                  background: 'linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(7,12,26,0.7) 100%)',
                  padding: '1.4rem 1.2rem 1.6rem',
                  overflow: 'hidden',
                }}>
                  <ShimmerLine delay={index * 0.1 + 0.3} />
                  <MobileCardContent step={step} />
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* ── CTA Strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...T, delay: 0.4 }}
          style={{
            marginTop: 'clamp(2.5rem, 5vw, 3.25rem)',
            border: '1px solid rgba(209,165,80,0.12)',
            background: 'rgba(209,165,80,0.03)',
            padding: isMobile ? '1.25rem' : '1.6rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <p style={{
              margin: 0,
              fontFamily: fonts.serif,
              fontSize: isMobile ? '1.3rem' : '1.6rem',
              color: colors.goldLight, fontWeight: 400,
            }}>
              Ready to start your first trade?
            </p>
            <p style={{
              margin: '0.3rem 0 0',
              fontFamily: fonts.sans,
              fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)',
              letterSpacing: '0.05em',
            }}>
              Our trade desk is available 24 / 5 for corporate inquiries.
            </p>
          </div>

          <MotionLink
            to="/contact"
            className="responsive-action mobile-full-width"
            whileHover={{
              backgroundColor: colors.goldLight,
              boxShadow: '0 10px 30px -10px rgba(209,165,80,0.5)',
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              backgroundColor: colors.gold,
              border: 'none',
              color: colors.bg,
              fontFamily: fonts.sans,
              fontWeight: 700,
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              padding: '0.9rem 2.2rem',
              cursor: 'pointer',
              flexShrink: 0,
              transition: 'background-color 0.3s ease',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Start an Enquiry
          </MotionLink>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...T, delay: 0.6 }}
          style={{
            marginTop: '1.5rem',
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap',
          }}
        >
          {['KYC Compliant', 'Bank-Grade Security', 'Fully Insured', 'DMCC Regulated'].map((badge) => (
            <span key={badge} className="trust-badge" style={{
              padding: '0.35rem 0.9rem',
              border: '1px solid rgba(209,165,80,0.18)',
              borderRadius: '50px',
              fontFamily: fonts.sans,
              fontSize: '0.65rem', letterSpacing: '0.14em',
              color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase',
            }}>
              {badge}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

/* ── Desktop card below circle ────────────────────────────── */
function DesktopCard({ step, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, ease: EASE, delay: index * 0.15 + 0.35 }}
      whileHover={{ y: -6, boxShadow: '0 24px 50px -16px rgba(209,165,80,0.18)' }}
      style={{
        position: 'relative',
        width: '100%',
        border: '1px solid rgba(209,165,80,0.15)',
        background: 'linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(7,12,26,0.6) 100%)',
        padding: '1.45rem 1.2rem 1.65rem',
        overflow: 'hidden',
        transition: 'box-shadow 0.4s ease, transform 0.4s ease',
        textAlign: 'center',
      }}
    >
      <ShimmerLine delay={index * 0.15 + 0.5} />

      {/* ghost watermark */}
      <div style={{
        position: 'absolute', bottom: '-1rem', right: '0.4rem',
        fontFamily: fonts.serif,
        fontSize: '5rem', fontWeight: 700,
        color: 'rgba(209,165,80,0.05)',
        lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
      }}>
        {step.num}
      </div>

      {/* icon */}
      <div style={{
        width: '44px', height: '44px', borderRadius: '10px',
        background: 'linear-gradient(135deg, rgba(209,165,80,0.2), rgba(209,165,80,0.05))',
        border: '1px solid rgba(209,165,80,0.3)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1rem', color: colors.gold,
        margin: '0 auto 1.2rem',
        boxShadow: '0 4px 16px rgba(209,165,80,0.1)',
      }}>
        <i className={`fas ${step.icon}`}
          style={{ filter: 'drop-shadow(0 0 4px rgba(209,165,80,0.35))' }} />
      </div>

      <h3 style={{
        margin: '0 0 0.6rem',
        fontFamily: fonts.serif,
        fontSize: '1.5rem', fontWeight: 600,
        color: '#fff', lineHeight: 1.2,
      }}>
        {step.title}
      </h3>

      <div style={{
        width: '28px', height: '1px',
        background: 'linear-gradient(90deg, transparent, #D1A550, transparent)',
        margin: '0 auto 0.8rem',
      }} />

      <p style={{
        margin: 0,
        color: 'rgba(255,255,255,0.52)',
        fontFamily: fonts.sans,
        fontSize: '0.81rem', lineHeight: 1.8,
      }}>
        {step.text}
      </p>
    </motion.div>
  )
}

/* ── Mobile card content ──────────────────────────────────── */
function MobileCardContent({ step }) {
  return (
    <>
      <p style={{
        margin: '0 0 0.4rem',
        fontFamily: fonts.sans,
        fontSize: '0.6rem', letterSpacing: '0.2em',
        color: 'rgba(209,165,80,0.7)', textTransform: 'uppercase',
      }}>
        {step.tag}
      </p>
      <h3 style={{
        margin: '0 0 0.5rem',
        fontFamily: fonts.serif,
        fontSize: '1.45rem', fontWeight: 600,
        color: '#fff', lineHeight: 1.2,
      }}>
        {step.title}
      </h3>
      <p style={{
        margin: 0,
        color: 'rgba(255,255,255,0.52)',
        fontFamily: fonts.sans,
        fontSize: '0.81rem', lineHeight: 1.8,
      }}>
        {step.text}
      </p>
    </>
  )
}
