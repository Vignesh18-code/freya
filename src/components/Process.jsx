import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Enquire & Verify',
    text: 'Share your requirement and complete KYC online in minutes.',
    icon: 'fa-file-signature',
    tag: 'Getting Started',
  },
  {
    num: '02',
    title: 'Agree Pricing',
    text: 'Receive a live spot-linked quote with full pricing transparency.',
    icon: 'fa-chart-line',
    tag: 'Live Quote',
  },
  {
    num: '03',
    title: 'Secure Payment',
    text: 'Settle securely via bank wire or approved crypto payment rails.',
    icon: 'fa-lock',
    tag: 'Safe & Fast',
  },
  {
    num: '04',
    title: 'Delivery or Vault',
    text: 'Choose armored door delivery or allocated secure vault storage.',
    icon: 'fa-vault',
    tag: 'Your Choice',
  },
]

const transition = { duration: 0.9, ease: [0.22, 1, 0.36, 1] }

function Process() {
  return (
    <section
      id="process"
      style={{
        backgroundColor: '#0A1628',
        color: '#fff',
        padding: '7rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 65%)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)',
      }} />
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
            marginBottom: '1rem',
          }}>
            <span style={{ width: '40px', height: '1px', backgroundColor: '#C9A84C' }} />
            <span style={{
              fontFamily: "'Montserrat', sans-serif", color: '#C9A84C',
              fontSize: '0.7rem', letterSpacing: '0.28em', textTransform: 'uppercase',
            }}>
              How It Works
            </span>
            <span style={{ width: '40px', height: '1px', backgroundColor: '#C9A84C' }} />
          </div>
          <h2 style={{
            margin: 0,
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
            fontWeight: 400, lineHeight: 1.15,
          }}>
            Four Steps to{' '}
            <span style={{ fontStyle: 'italic', color: '#C9A84C' }}>
              Ownership
            </span>
          </h2>
          <p style={{
            margin: '1rem auto 0', maxWidth: '500px',
            color: 'rgba(255,255,255,0.5)',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '0.88rem', lineHeight: 1.8,
          }}>
            A seamless, fully guided journey from first enquiry to secure delivery or vault allocation.
          </p>
        </motion.div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5px',
          background: 'rgba(201,168,76,0.1)',
          border: '1px solid rgba(201,168,76,0.12)',
        }}>
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: index * 0.12 }}
              whileHover={{ backgroundColor: 'rgba(201,168,76,0.07)' }}
              style={{
                background: 'rgba(10,22,40,0.95)',
                padding: '2.5rem 2rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'background 0.4s ease',
              }}
            >
              {/* Animated top border */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.12 + 0.3 }}
                style={{
                  position: 'absolute', top: 0, left: 0, right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, #C9A84C, #E8D5A3)',
                  transformOrigin: 'left',
                }}
              />

              {/* Ghost number watermark */}
              <div style={{
                position: 'absolute', bottom: '-1.5rem', right: '0.5rem',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '7rem', fontWeight: 700,
                color: 'rgba(201,168,76,0.05)',
                lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
              }}>
                {step.num}
              </div>

              {/* Tag */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '3px 10px',
                border: '1px solid rgba(201,168,76,0.25)',
                borderRadius: '50px',
                marginBottom: '1.5rem',
              }}>
                <span style={{
                  width: '5px', height: '5px', borderRadius: '50%',
                  backgroundColor: '#C9A84C', display: 'inline-block',
                }} />
                <span style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.62rem', letterSpacing: '0.18em',
                  color: 'rgba(201,168,76,0.8)', textTransform: 'uppercase',
                }}>
                  {step.tag}
                </span>
              </div>

              {/* Icon + number row */}
              <div style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', marginBottom: '1.2rem',
              }}>
                <div style={{
                  width: '56px', height: '56px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, rgba(201,168,76,0.18), rgba(201,168,76,0.04))',
                  border: '1px solid rgba(201,168,76,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.3rem', color: '#C9A84C',
                  boxShadow: '0 4px 20px rgba(201,168,76,0.08)',
                }}>
                  <i className={`fas ${step.icon}`} />
                </div>
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '3rem', fontWeight: 700,
                  color: 'rgba(201,168,76,0.2)', lineHeight: 1,
                }}>
                  {step.num}
                </span>
              </div>

              {/* Text */}
              <h3 style={{
                margin: '0 0 0.6rem',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.65rem', fontWeight: 600,
                color: '#fff', lineHeight: 1.2,
              }}>
                {step.title}
              </h3>
              <p style={{
                margin: 0,
                color: 'rgba(255,255,255,0.52)',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.83rem', lineHeight: 1.8,
              }}>
                {step.text}
              </p>

              {/* Step connector arrow — hidden on last */}
              {index < steps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  top: '50%', right: '-1px',
                  transform: 'translateY(-50%)',
                  width: '0', height: '0',
                  borderTop: '8px solid transparent',
                  borderBottom: '8px solid transparent',
                  borderLeft: '8px solid rgba(201,168,76,0.2)',
                  zIndex: 2,
                  display: 'none', // shown via className below
                }} className="md-arrow"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.6 }}
          style={{
            marginTop: '2.5rem', textAlign: 'center',
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap',
          }}
        >
          {['KYC Compliant', 'Bank-Grade Security', 'Fully Insured', 'DMCC Regulated'].map((badge) => (
            <span key={badge} style={{
              padding: '0.4rem 1rem',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '50px',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.7rem', letterSpacing: '0.12em',
              color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase',
            }}>
              {badge}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Process
