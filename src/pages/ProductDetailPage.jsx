import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { colors, fonts, ease } from '../theme'

const transition = ease.transition
const smooth = ease.smooth

function ProductDetailPage({
  breadcrumb,
  label,
  title,
  accentTitle,
  description,
  image,
  imageAlt,
  highlights,
}) {
  return (
    <main style={{ backgroundColor: colors.bg, color: '#fff' }}>
      <section
        className="page-hero"
        style={{
          backgroundColor: colors.bg,
          padding:
            'clamp(5.5rem, 8vw, 6.5rem) clamp(1rem, 4vw, 1.5rem) 0',
          borderBottom: '1px solid rgba(201,168,76,0.25)',
        }}
      >
        <div
          className="page-container"
          style={{ maxWidth: '1520px', margin: '0 auto' }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: fonts.sans,
              color: colors.gold,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontSize: '0.72rem',
            }}
          >
            {breadcrumb}
          </p>
          <h1
            style={{
              margin: '0.8rem 0 0',
              fontFamily: fonts.serif,
              fontSize: 'clamp(2.8rem, 5vw, 4.8rem)',
              fontWeight: 500,
              lineHeight: 1,
            }}
          >
            {title}
          </h1>
        </div>
      </section>

      <section
        className="responsive-section"
        style={{
          backgroundColor: colors.bg,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '8%',
            right: '-10%',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(209,165,80,0.06) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: '8%',
            left: '-14%',
            width: '460px',
            height: '460px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(209,165,80,0.045) 0%, transparent 70%)',
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
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 3rem)',
              alignItems: 'center',
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={transition}
              style={{
                border: `1px solid ${colors.border}`,
                background:
                  'linear-gradient(145deg, rgba(16,31,72,0.72), rgba(7,12,26,0.92))',
                overflow: 'hidden',
                boxShadow: '0 28px 80px -45px rgba(209,165,80,0.35)',
              }}
            >
              <motion.img
                src={image}
                alt={imageAlt}
                initial={{ scale: 1.04 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.1, ease: smooth }}
                style={{
                  display: 'block',
                  width: '100%',
                  aspectRatio: '4 / 3',
                  objectFit: 'cover',
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={transition}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                }}
              >
                <span
                  style={{
                    width: '42px',
                    height: '1px',
                    backgroundColor: colors.gold,
                  }}
                />
                <span
                  style={{
                    fontFamily: fonts.sans,
                    color: colors.gold,
                    fontSize: '0.7rem',
                    letterSpacing: '0.24em',
                    textTransform: 'uppercase',
                  }}
                >
                  {label}
                </span>
              </div>

              <h2
                style={{
                  margin: 0,
                  fontFamily: fonts.serif,
                  fontSize: 'clamp(2.2rem, 4vw, 3.65rem)',
                  fontWeight: 400,
                  color: '#fff',
                  lineHeight: 1.1,
                }}
              >
                Premium{' '}
                <span style={{ color: colors.gold, fontStyle: 'italic' }}>
                  {accentTitle}
                </span>
              </h2>

              <p
                style={{
                  margin: '1rem 0 0',
                  maxWidth: '720px',
                  color: 'rgba(255,255,255,0.66)',
                  fontFamily: fonts.sans,
                  fontSize: '0.95rem',
                  lineHeight: 1.9,
                }}
              >
                {description}
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns:
                    'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
                  gap: '0.8rem',
                  marginTop: '1.6rem',
                }}
              >
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.65,
                      ease: smooth,
                      delay: index * 0.08,
                    }}
                    style={{
                      border: '1px solid rgba(209,165,80,0.18)',
                      background:
                        'linear-gradient(145deg, rgba(255,255,255,0.045), rgba(255,255,255,0.012))',
                      padding: '1rem',
                      minHeight: '92px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                    }}
                  >
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: colors.gold,
                        boxShadow: '0 0 18px rgba(209,165,80,0.7)',
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: fonts.sans,
                        color: 'rgba(255,255,255,0.8)',
                        fontSize: '0.82rem',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        lineHeight: 1.6,
                      }}
                    >
                      {highlight}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            style={{
              marginTop: 'clamp(1.5rem, 4vw, 2.5rem)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              flexWrap: 'wrap',
              borderTop: '1px solid rgba(209,165,80,0.14)',
              paddingTop: '1.4rem',
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: fonts.serif,
                fontSize: '1.45rem',
                color: colors.goldLight,
              }}
            >
              Want to know more about {title}?
            </p>
            <Link
              to="/contact"
              className="responsive-action mobile-full-width"
              style={{
                backgroundColor: colors.gold,
                color: colors.bg,
                fontFamily: fonts.sans,
                fontWeight: 700,
                fontSize: '0.72rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                padding: '0.9rem 2rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default ProductDetailPage
