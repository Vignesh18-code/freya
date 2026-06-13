import { motion } from 'framer-motion'
import { colors, fonts, ease } from '../theme'

const jewelleryCollectionImages = import.meta.glob(
  '../assets/Gold Jewellery - Freya/*.{png,jpg,jpeg,webp,avif}',
  {
    eager: true,
    import: 'default',
  },
)

const jewelleryImages = Object.entries(jewelleryCollectionImages)
  .map(([path, image]) => {
    const name = path.split('/').pop().replace(/\.[^.]+$/, '')

    return {
      name,
      image,
      alt: `${name} product image`,
    }
  })
  .sort((a, b) => Number(a.name) - Number(b.name))

const transition = ease.transition
const smooth = ease.smooth

function GoldJewellery() {
  return (
    <main style={{ backgroundColor: colors.bg, color: '#fff' }}>
      <section
        className="page-hero"
        style={{
          backgroundColor: colors.bg,
          padding:
            'clamp(5.5rem, 8vw, 6.5rem) clamp(1rem, 4vw, 1.5rem) clamp(2.25rem, 5vw, 3.25rem)',
          borderBottom: '1px solid rgba(201,168,76,0.25)',
          textAlign: 'center',
        }}
      >
        <motion.div
          className="page-container"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          style={{ maxWidth: '1520px', margin: '0 auto' }}
        >
          <h1
            style={{
              margin: 0,
              fontFamily: fonts.serif,
              fontSize: 'clamp(2.8rem, 5vw, 4.8rem)',
              fontWeight: 500,
              lineHeight: 1,
            }}
          >
            Gold Jewellery
          </h1>
        </motion.div>
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
            top: '6%',
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
            bottom: '4%',
            left: '-12%',
            width: '460px',
            height: '460px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(209,165,80,0.045) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={transition}
          style={{
            maxWidth: '1520px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              maxWidth: '760px',
              margin: '0 auto clamp(2rem, 4vw, 3rem)',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '1.15rem',
                marginBottom: '1rem',
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
                Exquisite Gold Jewellery Collection
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
                fontSize: 'clamp(2.25rem, 4vw, 3.7rem)',
                fontWeight: 400,
                color: '#fff',
                lineHeight: 1.05,
              }}
            >
              Gold Jewellery
            </h2>

            <p
              style={{
                margin: '1rem auto 0',
                maxWidth: '650px',
                color: 'rgba(255,255,255,0.64)',
                fontFamily: fonts.sans,
                fontSize: '0.94rem',
                lineHeight: 1.85,
              }}
            >
              Beautifully crafted gold jewellery combining timeless elegance,
              superior craftsmanship, and certified purity for every occasion.
            </p>
          </div>

          <div
            className="gold-jewellery-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: 'clamp(1rem, 2.6vw, 1.75rem)',
              alignItems: 'stretch',
            }}
          >
            {jewelleryImages.map((item, index) => (
              <motion.figure
                key={item.name}
                className="gold-jewellery-card"
                tabIndex={0}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.01,
                  borderColor: 'rgba(209,165,80,0.48)',
                  boxShadow:
                    '0 34px 90px -44px rgba(209,165,80,0.72), 0 0 0 1px rgba(209,165,80,0.18)',
                }}
                whileFocus={{
                  y: -10,
                  scale: 1.01,
                  borderColor: 'rgba(209,165,80,0.48)',
                  boxShadow:
                    '0 34px 90px -44px rgba(209,165,80,0.72), 0 0 0 1px rgba(209,165,80,0.18)',
                }}
                transition={{
                  duration: 0.75,
                  ease: smooth,
                  delay: index * 0.08,
                }}
                style={{
                  position: 'relative',
                  margin: 0,
                  border: `1px solid ${colors.border}`,
                  background:
                    'linear-gradient(145deg, rgba(16,31,72,0.72), rgba(7,12,26,0.95))',
                  overflow: 'hidden',
                  minWidth: 0,
                  boxShadow: '0 26px 80px -54px rgba(209,165,80,0.58)',
                  cursor: 'zoom-in',
                  outline: 'none',
                }}
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    ease: smooth,
                    delay: index * 0.05,
                  }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background:
                      'linear-gradient(90deg, transparent, #D1A550, transparent)',
                    transformOrigin: 'left',
                    zIndex: 2,
                  }}
                />

                <div
                  style={{
                    aspectRatio: '4 / 5',
                    overflow: 'hidden',
                    position: 'relative',
                    background:
                      'linear-gradient(145deg, rgba(7,12,26,0.95), rgba(16,31,72,0.72))',
                  }}
                >
                  <motion.img
                    src={item.image}
                    alt={item.alt}
                    initial={{ scale: 1.04 }}
                    whileInView={{ scale: 1 }}
                    whileHover={{ scale: 1.13 }}
                    whileFocus={{ scale: 1.13 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.05, ease: smooth }}
                    style={{
                      display: 'block',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transformOrigin: 'center',
                      willChange: 'transform',
                    }}
                  />

                  <motion.div
                    className="gold-jewellery-card-overlay"
                    initial={false}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(180deg, rgba(7,12,26,0.02) 0%, rgba(7,12,26,0.24) 62%, rgba(7,12,26,0.72) 100%)',
                      pointerEvents: 'none',
                    }}
                  />

                  <motion.div
                    aria-hidden="true"
                    className="gold-jewellery-card-sheen"
                    style={{
                      position: 'absolute',
                      top: '-20%',
                      bottom: '-20%',
                      left: '-65%',
                      width: '44%',
                      transform: 'skewX(-18deg)',
                      background:
                        'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), rgba(232,213,163,0.22), transparent)',
                      pointerEvents: 'none',
                    }}
                  />

                </div>
              </motion.figure>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  )
}

export default GoldJewellery
