import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { colors, fonts, ease } from '../theme'

import Panel1 from '../assets/Panel1.jpg'
import SilverBars from '../assets/SilverBars.png'
import goldbarimage from '../assets/GoldBars.png'
import DiamondJewellery from '../assets/Diamond.png'

const productCards = [
  {
    id: 1,
    purity: '999.9 Certified Gold Bars',
    name: 'Gold Bars',
    image: goldbarimage,
    detailsPath: '/gold-bars',
    description:
      'Refined gold bars with assured purity, precision hallmarking, and trusted quality for investment and wealth security.',
  },
  {
    id: 2,
    purity: '999.9 Fine Silver Investment Bars',
    name: 'Silver Bars',
    image: SilverBars,
    detailsPath: '/silver-bars',
    description: `High-purity silver bars crafted to international standards, ideal for investment, trading,
and long-term value preservation.`,
  },
  {
    id: 3,
    purity: 'Exquisite Gold Jewellery Collection',
    name: 'Gold Jewellery',
    image: Panel1,
    detailsPath: '/gold-jewellery',
    description:
      'Beautifully crafted gold jewellery combining timeless elegance, superior craftsmanship, and certified purity for every occasion.',
  },
  {
    id: 4,
    purity: 'Certified Loose Diamonds',
    name: 'Diamonds',
    image: DiamondJewellery,
    detailsPath: '/diamonds',
    description:
      'Ethically sourced loose diamonds with certified grading, exceptional brilliance, and trusted quality for the global jewellery industry.',
  },
]

const transition = ease.transition
const MotionLink = motion.create(Link)
const CARD_GAP = 'clamp(1rem, 2vw, 1.35rem)'

function getCardsPerView() {
  if (window.innerWidth >= 1024) return 3
  if (window.innerWidth >= 768) return 2
  return 1
}

function getCardBasis(cardsPerView) {
  if (cardsPerView === 3) {
    return `calc((100% - ${CARD_GAP} - ${CARD_GAP}) / 3)`
  }

  if (cardsPerView === 2) return `calc((100% - ${CARD_GAP}) / 2)`
  return '100%'
}

function ProductCard({ item, index, cardBasis }) {
  return (
    <motion.article
      data-product-card
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
        flex: `0 0 ${cardBasis}`,
        minWidth: 0,
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

      <div
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

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(7,12,26,0.05) 0%, rgba(7,12,26,0.45) 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      <div
        className="product-card-body"
        style={{
          padding: '1.35rem 1.25rem 1.5rem',
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

        <div
          style={{
            borderTop: '1px solid rgba(209,165,80,0.12)',
            paddingTop: '1.2rem',
          }}
        >
          {item.detailsPath ? (
            <MotionLink
              to={item.detailsPath}
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
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Know More
            </MotionLink>
          ) : (
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
          )}
        </div>
      </div>
    </motion.article>
  )
}

function Products() {
  const viewportRef = useRef(null)
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(3)

  const maxIndex = Math.max(productCards.length - cardsPerView, 0)
  const atStart = activeIndex === 0
  const atEnd = activeIndex === maxIndex
  const cardBasis = getCardBasis(cardsPerView)

  useEffect(() => {
    const updateCardsPerView = () => {
      const nextCardsPerView = getCardsPerView()

      setCardsPerView(nextCardsPerView)
      setActiveIndex((current) =>
        Math.min(current, Math.max(productCards.length - nextCardsPerView, 0)),
      )
    }

    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)

    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  useEffect(() => {
    const viewport = viewportRef.current
    const track = trackRef.current
    const firstCard = track?.querySelector('[data-product-card]')

    if (!viewport || !track || !firstCard) return

    const gap = parseFloat(window.getComputedStyle(track).columnGap || '0')
    const step = firstCard.getBoundingClientRect().width + gap

    viewport.scrollTo({
      left: activeIndex * step,
      behavior: 'smooth',
    })
  }, [activeIndex, cardsPerView])

  const handlePrevious = () => {
    setActiveIndex((current) => Math.max(current - 1, 0))
  }

  const handleNext = () => {
    setActiveIndex((current) => Math.min(current + 1, maxIndex))
  }

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
          maxWidth: '1520px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.div
          className="product-section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={transition}
          style={{
            marginBottom: 'clamp(2.25rem, 4vw, 3rem)',
          }}
        >
          <div
            className="product-section-eyebrow"
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
              Product Range
            </span>

            <span
              style={{
                width: '44px',
                height: '1px',
                backgroundColor: colors.gold,
              }}
            />
          </div>

          <div
            className="product-title-row"
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto minmax(0, 1fr) auto',
              alignItems: 'center',
              gap: '1.25rem',
            }}
          >
            <div className="product-title-balance" aria-hidden="true" />

            <h2
              className="product-section-title"
              style={{
                margin: 0,
                width: '100%',
                fontFamily: fonts.serif,
                fontSize: 'clamp(2.4rem, 4vw, 3.7rem)',
                fontWeight: 400,
                color: '#fff',
                lineHeight: 1.1,
                textAlign: 'center',
              }}
            >
              Premium Product{' '}
              <span style={{ fontStyle: 'italic', color: colors.gold }}>
                Range
              </span>
            </h2>

            <div
              className="product-carousel-controls"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                flexShrink: 0,
              }}
            >
              <motion.button
                type="button"
                className="product-carousel-button"
                onClick={handlePrevious}
                disabled={atStart}
                aria-label="Previous product"
                whileHover={
                  !atStart
                    ? { scale: 1.06, backgroundColor: 'rgba(209,165,80,0.16)' }
                    : {}
                }
                whileTap={!atStart ? { scale: 0.94 } : {}}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: '1px solid rgba(209,165,80,0.42)',
                  background: atStart
                    ? 'rgba(209,165,80,0.05)'
                    : 'rgba(7,12,26,0.72)',
                  color: atStart ? 'rgba(209,165,80,0.28)' : colors.goldLight,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: atStart ? 'not-allowed' : 'pointer',
                  boxShadow: atStart
                    ? 'none'
                    : '0 12px 28px -18px rgba(209,165,80,0.9)',
                  transition:
                    'background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                <i
                  className="fas fa-chevron-left"
                  style={{ fontSize: '0.78rem' }}
                />
              </motion.button>

              <motion.button
                type="button"
                className="product-carousel-button"
                onClick={handleNext}
                disabled={atEnd}
                aria-label="Next product"
                whileHover={
                  !atEnd
                    ? { scale: 1.06, backgroundColor: 'rgba(209,165,80,0.16)' }
                    : {}
                }
                whileTap={!atEnd ? { scale: 0.94 } : {}}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: '1px solid rgba(209,165,80,0.42)',
                  background: atEnd
                    ? 'rgba(209,165,80,0.05)'
                    : 'rgba(7,12,26,0.72)',
                  color: atEnd ? 'rgba(209,165,80,0.28)' : colors.goldLight,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: atEnd ? 'not-allowed' : 'pointer',
                  boxShadow: atEnd
                    ? 'none'
                    : '0 12px 28px -18px rgba(209,165,80,0.9)',
                  transition:
                    'background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                <i
                  className="fas fa-chevron-right"
                  style={{ fontSize: '0.78rem' }}
                />
              </motion.button>
            </div>
          </div>

          <p
            className="product-section-subtitle"
            style={{
              fontFamily: fonts.sans,
              fontSize: '0.9rem',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.8,
              width: '100%',
              maxWidth: '560px',
              margin: '1rem auto 0',
              textAlign: 'center',
            }}
          >
            Certified bullion and fine jewellery with guaranteed purity and full
            authenticity documentation.
          </p>
        </motion.div>

        <div
          className="product-carousel-viewport"
          ref={viewportRef}
          style={{
            overflow: 'hidden',
            width: '100%',
            scrollBehavior: 'smooth',
            scrollbarWidth: 'none',
          }}
        >
          <div
            ref={trackRef}
            style={{
              display: 'flex',
              gap: CARD_GAP,
              alignItems: 'stretch',
            }}
          >
            {productCards.map((item, index) => (
              <ProductCard
                key={item.id}
                item={item}
                index={index}
                cardBasis={cardBasis}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
