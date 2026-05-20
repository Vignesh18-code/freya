import { motion } from 'framer-motion'
import { colors, fonts, ease } from '../theme'

const products = [
  {
    id: 1,
    tag: 'BESTSELLER',
    purity: '24K — 999.9 FINE GOLD',
    name: '1 Kilogram Gold Bar',
    description:
      'Minted and casting bars meeting international delivery standards. Stamped with refinery hallmark and serial number.',
    price: '$XX,XXX / bar',
  },
  {
    id: 2,
    tag: 'POPULAR',
    purity: '999 FINE SILVER',
    name: '1000g Silver Bullion',
    description:
      'Fine silver trading bars and cast bricks optimized for high-volume B2B investments and enterprise portfolios.',
    price: '$X,XXX / bar',
  },
  {
    id: 3,
    tag: 'NEW EXCLUSIVE',
    purity: '18K & 22K CERTIFIED',
    name: 'Wholesale Diamond Jewellery',
    description:
      'Meticulously crafted design layouts and loose diamond parcels sourced directly for global retail jewellery houses.',
    price: '$X,XXX / piece',
  },
]

const transition = ease.transition

function Products() {
  return (
    <section
      id="collections"
      style={{
        backgroundColor: colors.bg,
        padding: '8rem 1.5rem',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow blobs */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-10%',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(209,165,80,0.05) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '0%', left: '-10%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(209,165,80,0.04) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={transition}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          {/* Label */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '1rem', marginBottom: '1.2rem',
          }}>
            <span style={{ width: '44px', height: '1px', backgroundColor: colors.gold }} />
            <span style={{
              fontFamily: fonts.sans, color: colors.gold,
              fontSize: '0.7rem', letterSpacing: '0.28em', textTransform: 'uppercase',
            }}>
              Our Catalogue
            </span>
            <span style={{ width: '44px', height: '1px', backgroundColor: colors.gold }} />
          </div>

          <h2 style={{
            margin: 0,
            fontFamily: fonts.serif,
            fontSize: 'clamp(2.4rem, 4vw, 3.7rem)',
            fontWeight: 400, color: '#fff', lineHeight: 1.1,
          }}>
            Premium{' '}
            <span style={{ fontStyle: 'italic', color: colors.gold }}>
              Wholesale Products
            </span>
          </h2>

          <p style={{
            marginTop: '1rem',
            fontFamily: fonts.sans,
            fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.8, maxWidth: '520px', margin: '1rem auto 0',
          }}>
            Certified bullion and fine jewellery with guaranteed purity and full
            authenticity documentation.
          </p>
        </motion.div>

        {/* ── Product Cards ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {products.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ ...transition, delay: index * 0.12 }}
              whileHover={{ y: -8, boxShadow: '0 30px 60px -20px rgba(209,165,80,0.2)' }}
              style={{
                position: 'relative',
                border: '1px solid rgba(209,165,80,0.18)',
                background: 'linear-gradient(160deg, rgba(16,31,72,0.7) 0%, rgba(7,12,26,0.9) 100%)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                willChange: 'transform, opacity',
                transition: 'box-shadow 0.4s ease, transform 0.4s ease',
              }}
            >
              {/* Gold shimmer top line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.12 + 0.3 }}
                style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                  background: 'linear-gradient(90deg, transparent, #D1A550, transparent)',
                  transformOrigin: 'left',
                }}
              />

              {/* Image placeholder — client will replace with actual image */}
              <div style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '4 / 3',
                background: 'linear-gradient(145deg, rgba(16,31,72,0.9), rgba(7,12,26,0.98))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: '1px solid rgba(209,165,80,0.12)',
                overflow: 'hidden',
              }}>
                {/* Diagonal pattern */}
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    rgba(209,165,80,0.03) 0px,
                    rgba(209,165,80,0.03) 1px,
                    transparent 1px,
                    transparent 36px
                  )`,
                }} />

                {/* Placeholder text */}
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                  <div style={{
                    width: '64px', height: '64px', borderRadius: '50%',
                    border: '1px solid rgba(209,165,80,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 0.8rem',
                    background: 'rgba(209,165,80,0.05)',
                  }}>
                    <div style={{
                      width: '24px', height: '24px', borderRadius: '50%',
                      border: '1px solid rgba(209,165,80,0.4)',
                      background: 'rgba(209,165,80,0.1)',
                    }} />
                  </div>
                  <p style={{
                    margin: 0, fontFamily: fonts.sans,
                    fontSize: '0.58rem', letterSpacing: '0.22em',
                    color: 'rgba(209,165,80,0.4)', textTransform: 'uppercase',
                  }}>
                    Image Coming Soon
                  </p>
                </div>

                {/* Tag badge */}
                <div style={{
                  position: 'absolute', top: '1rem', left: '1rem',
                  border: '1px solid rgba(209,165,80,0.4)',
                  background: 'rgba(7,12,26,0.85)',
                  padding: '0.3rem 0.7rem',
                  backdropFilter: 'blur(6px)',
                }}>
                  <span style={{
                    fontFamily: fonts.sans,
                    fontSize: '0.6rem', letterSpacing: '0.18em',
                    color: colors.goldLight, textTransform: 'uppercase',
                  }}>
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.6rem 1.5rem 1.8rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                {/* Purity */}
                <p style={{
                  margin: '0 0 0.6rem',
                  fontFamily: fonts.sans,
                  fontSize: '0.65rem', letterSpacing: '0.2em',
                  color: colors.gold, textTransform: 'uppercase',
                }}>
                  {item.purity}
                </p>

                {/* Title */}
                <h3 style={{
                  margin: '0 0 0.7rem',
                  fontFamily: fonts.serif,
                  fontSize: '1.75rem', fontWeight: 500,
                  color: '#fff', lineHeight: 1.15,
                }}>
                  {item.name}
                </h3>

                {/* Divider */}
                <div style={{
                  width: '40px', height: '1px',
                  background: 'linear-gradient(90deg, #D1A550, transparent)',
                  marginBottom: '0.9rem',
                }} />

                {/* Description */}
                <p style={{
                  margin: '0 0 1.5rem',
                  color: 'rgba(255,255,255,0.52)',
                  fontFamily: fonts.sans,
                  fontSize: '0.82rem', lineHeight: 1.8,
                  flex: 1,
                }}>
                  {item.description}
                </p>

                {/* Price + CTA */}
                <div style={{
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between', gap: '1rem',
                  borderTop: '1px solid rgba(209,165,80,0.12)',
                  paddingTop: '1.2rem',
                }}>
                  <div>
                    <p style={{
                      margin: 0, fontFamily: fonts.sans,
                      fontSize: '0.55rem', letterSpacing: '0.18em',
                      color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase',
                      marginBottom: '0.2rem',
                    }}>
                      Starting From
                    </p>
                    <p style={{
                      margin: 0,
                      fontFamily: fonts.serif,
                      fontSize: '1.6rem', color: colors.goldLight, lineHeight: 1,
                    }}>
                      {item.price}
                    </p>
                  </div>

                  <motion.button
                    whileHover={{
                      backgroundColor: colors.goldLight,
                      boxShadow: '0 8px 24px -8px rgba(209,165,80,0.5)',
                    }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      backgroundColor: colors.gold,
                      border: 'none',
                      color: colors.bg,
                      fontFamily: fonts.sans,
                      fontWeight: 700,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      fontSize: '0.68rem',
                      padding: '0.75rem 1.4rem',
                      cursor: 'pointer',
                      flexShrink: 0,
                      transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                    }}
                  >
                    Enquire
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ── Bottom CTA note ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.4 }}
          style={{
            marginTop: '3.5rem', textAlign: 'center',
            padding: '2rem',
            border: '1px solid rgba(209,165,80,0.12)',
            background: 'rgba(209,165,80,0.03)',
          }}
        >
          <p style={{
            margin: 0, fontFamily: fonts.sans,
            fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)',
            letterSpacing: '0.08em', lineHeight: 1.8,
          }}>
            All prices are indicative and subject to live market rates.{' '}
            <span style={{ color: colors.gold }}>Contact us for verified B2B pricing.</span>
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default Products