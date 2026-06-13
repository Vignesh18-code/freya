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
  shapeGallery = [],
  shapeGalleryLabel = 'Diamond Shapes',
  shapeGalleryTitle = 'Diamond Shape Selection',
  shapeGalleryDescription = 'Explore diamond shape options crafted for certified brilliance, clean proportions, and refined jewellery applications.',
}) {
  const hasShapeGallery = shapeGallery.length > 0

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
                className="detail-eyebrow"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                }}
                >
                <span
                  className="section-eyebrow-line"
                  style={{
                    width: '42px',
                    height: '1px',
                    backgroundColor: colors.gold,
                    flexShrink: 0,
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
                <span
                  className="section-eyebrow-line"
                  style={{
                    width: '42px',
                    height: '1px',
                    backgroundColor: colors.gold,
                    flexShrink: 0,
                  }}
                />
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

          {hasShapeGallery && (
            <motion.section
              className="diamond-shape-section"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={transition}
              style={{
                marginTop: 'clamp(2rem, 5vw, 3.75rem)',
                borderTop: '1px solid rgba(209,165,80,0.16)',
                borderBottom: '1px solid rgba(209,165,80,0.12)',
                padding: 'clamp(1.5rem, 4vw, 2.5rem) 0',
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(1.35rem, 3vw, 2.5rem)',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: '100%',
                  maxWidth: '720px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    marginBottom: '0.9rem',
                  }}
                >
                  <span
                    className="section-eyebrow-line"
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
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {shapeGalleryLabel}
                  </span>
                  <span
                    className="section-eyebrow-line"
                    style={{
                      width: '42px',
                      height: '1px',
                      backgroundColor: colors.gold,
                    }}
                  />
                </div>

                <h2
                  style={{
                    margin: 0,
                    fontFamily: fonts.serif,
                    fontSize: 'clamp(2rem, 3.3vw, 3.1rem)',
                    fontWeight: 400,
                    color: '#fff',
                    lineHeight: 1.06,
                  }}
                >
                  {shapeGalleryTitle}
                </h2>

                <p
                  style={{
                    margin: '0.85rem auto 0',
                    maxWidth: '620px',
                    color: 'rgba(255,255,255,0.64)',
                    fontFamily: fonts.sans,
                    fontSize: '0.92rem',
                    lineHeight: 1.85,
                  }}
                >
                  {shapeGalleryDescription}
                </p>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns:
                    'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
                  gap: 'clamp(0.55rem, 1.1vw, 0.75rem)',
                  width: '100%',
                  maxWidth: shapeGallery.length === 1 ? '520px' : '100%',
                  margin: '0 auto',
                }}
              >
                {shapeGallery.map((shape, index) => (
                  <motion.article
                    key={`${shape.title}-${index}`}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6, scale: 1.015 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{
                      duration: 0.72,
                      ease: smooth,
                      delay: Math.min(index * 0.035, 0.28),
                    }}
                    style={{
                      position: 'relative',
                      overflow: 'hidden',
                      border: `1px solid ${colors.border}`,
                      background:
                        'linear-gradient(145deg, rgba(16,31,72,0.72), rgba(7,12,26,0.95))',
                      boxShadow: '0 24px 70px -46px rgba(209,165,80,0.65)',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(135deg, rgba(209,165,80,0.14), transparent 36%, rgba(255,255,255,0.045))',
                        pointerEvents: 'none',
                      }}
                    />

                    <div
                      style={{
                        position: 'relative',
                        padding: 'clamp(0.4rem, 1.1vw, 0.65rem)',
                      }}
                    >
                      <div
                        style={{
                          display: 'grid',
                          placeItems: 'center',
                          aspectRatio: '1 / 1',
                          background:
                            'linear-gradient(145deg, rgba(0,25,53,0.42), rgba(255,255,255,0.04))',
                          border: '1px solid rgba(209,165,80,0.12)',
                          overflow: 'hidden',
                        }}
                      >
                        <motion.img
                          src={shape.image}
                          alt={shape.alt}
                          initial={{ scale: 1.04, rotate: -2 }}
                          whileInView={{ scale: 1.1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: smooth }}
                          style={{
                            width: '110%',
                            height: '110%',
                            objectFit: 'contain',
                            filter:
                              'drop-shadow(0 18px 32px rgba(209,165,80,0.28))',
                          }}
                        />
                      </div>

                      <div
                        style={{
                          marginTop: '0.65rem',
                          display: 'flex',
                          alignItems: 'flex-end',
                          justifyContent: 'space-between',
                          gap: '0.75rem',
                        }}
                      >
                        <div>
                          {shape.label && (
                            <p
                              style={{
                                margin: 0,
                                fontFamily: fonts.sans,
                                color: colors.gold,
                                fontSize: '0.66rem',
                                letterSpacing: '0.18em',
                                textTransform: 'uppercase',
                              }}
                            >
                              {shape.label}
                            </p>
                          )}
                          <h3
                            style={{
                              margin: shape.label ? '0.35rem 0 0' : 0,
                              fontFamily: fonts.serif,
                              color: colors.goldLight,
                              fontSize: '1.45rem',
                              fontWeight: 400,
                              lineHeight: 1,
                            }}
                          >
                            {shape.title}
                          </h3>
                        </div>

                        <span
                          aria-hidden="true"
                          style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '999px',
                            border: '1px solid rgba(209,165,80,0.36)',
                            display: 'grid',
                            placeItems: 'center',
                            color: colors.gold,
                            fontFamily: fonts.serif,
                            fontSize: '1.25rem',
                            lineHeight: 1,
                            flexShrink: 0,
                          }}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.section>
          )}

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
