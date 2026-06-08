import { motion } from 'framer-motion'
import { colors, fonts, ease } from '../theme'

import Panel1 from '../assets/Panel1.jpg'
import Panel2 from '../assets/Panel2.jpg'

const products = [
  {
    id: 1,
    tag: 'BESTSELLER',
    purity: '24K — 999.9 FINE GOLD',
    name: '1 Kilogram Gold Bar',
    image: Panel1,
    description:
      'Minted and casting bars meeting international delivery standards. Stamped with refinery hallmark and serial number.',
  },
  {
    id: 2,
    tag: 'POPULAR',
    purity: '999 FINE SILVER',
    name: '1000g Silver Bullion',
    image: Panel2,
    description:
      'Fine silver trading bars and cast bricks optimized for high-volume B2B investments and enterprise portfolios.',
  },
  {
    id: 3,
    tag: 'NEW EXCLUSIVE',
    purity: '18K & 22K CERTIFIED',
    name: 'Wholesale Diamond Jewellery',
    image: Panel1,
    description:
      'Meticulously crafted design layouts and loose diamond parcels sourced directly for global retail jewellery houses.',
  },
]

const transition = ease.transition

function Products() {
  return (
    <section
      id="collections"
      className="responsive-section"
      style={{
        backgroundColor: colors.bg,
        padding: '8rem 1.5rem',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow blobs */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(209,165,80,0.05) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: '0%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(209,165,80,0.04) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={transition}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
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
              Our Catalogue
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
              fontSize: 'clamp(2.4rem, 4vw, 3.7rem)',
              fontWeight: 400,
              color: '#fff',
              lineHeight: 1.1,
            }}
          >
            Premium{' '}
            <span style={{ fontStyle: 'italic', color: colors.gold }}>
              Wholesale Products
            </span>
          </h2>

          <p
            style={{
              marginTop: '1rem',
              fontFamily: fonts.sans,
              fontSize: '0.9rem',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.8,
              maxWidth: '520px',
              margin: '1rem auto 0',
            }}
          >
            Certified bullion and fine jewellery with guaranteed purity and full
            authenticity documentation.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div
          className="responsive-card-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {products.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ ...transition, delay: index * 0.12 }}
              whileHover={{
                y: -8,
                boxShadow: '0 30px 60px -20px rgba(209,165,80,0.2)',
              }}
              style={{
                position: 'relative',
                border: '1px solid rgba(209,165,80,0.18)',
                background:
                  'linear-gradient(160deg, rgba(16,31,72,0.7) 0%, rgba(7,12,26,0.9) 100%)',
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
                transition={{
                  duration: 0.8,
                  delay: index * 0.12 + 0.3,
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
                  zIndex: 3,
                }}
              />

              {/* Product Image */}
              <div
                className="product-card-body"
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4 / 3',
                  borderBottom: '1px solid rgba(209,165,80,0.12)',
                  overflow: 'hidden',
                  backgroundColor: '#070C1A',
                }}
              >
                <motion.img
                  src={item.image}
                  alt={item.name}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />

                {/* Dark premium overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, rgba(7,12,26,0.05) 0%, rgba(7,12,26,0.45) 100%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Tag badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    border: '1px solid rgba(209,165,80,0.4)',
                    background: 'rgba(7,12,26,0.85)',
                    padding: '0.3rem 0.7rem',
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: fonts.sans,
                      fontSize: '0.6rem',
                      letterSpacing: '0.18em',
                      color: colors.goldLight,
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: '1.6rem 1.5rem 1.8rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                }}
              >
                <p
                  style={{
                    margin: '0 0 0.6rem',
                    fontFamily: fonts.sans,
                    fontSize: '0.65rem',
                    letterSpacing: '0.2em',
                    color: colors.gold,
                    textTransform: 'uppercase',
                  }}
                >
                  {item.purity}
                </p>

                <h3
                  style={{
                    margin: '0 0 0.7rem',
                    fontFamily: fonts.serif,
                    fontSize: '1.75rem',
                    fontWeight: 500,
                    color: '#fff',
                    lineHeight: 1.15,
                  }}
                >
                  {item.name}
                </h3>

                <div
                  style={{
                    width: '40px',
                    height: '1px',
                    background: 'linear-gradient(90deg, #D1A550, transparent)',
                    marginBottom: '0.9rem',
                  }}
                />

                <p
                  style={{
                    margin: '0 0 1.5rem',
                    color: 'rgba(255,255,255,0.52)',
                    fontFamily: fonts.sans,
                    fontSize: '0.82rem',
                    lineHeight: 1.8,
                    flex: 1,
                  }}
                >
                  {item.description}
                </p>

                {/* CTA Only */}
                <div
                  style={{
                    borderTop: '1px solid rgba(209,165,80,0.12)',
                    paddingTop: '1.2rem',
                  }}
                >
                  <motion.button
                    className="responsive-action"
                    whileHover={{
                      backgroundColor: colors.goldLight,
                      boxShadow: '0 8px 24px -8px rgba(209,165,80,0.5)',
                    }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      width: '100%',
                      backgroundColor: colors.gold,
                      border: 'none',
                      color: colors.bg,
                      fontFamily: fonts.sans,
                      fontWeight: 700,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      fontSize: '0.68rem',
                      padding: '0.85rem 1.4rem',
                      cursor: 'pointer',
                      transition:
                        'background-color 0.3s ease, box-shadow 0.3s ease',
                    }}
                  >
                    Enquire
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
