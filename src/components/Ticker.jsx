import { motion } from 'framer-motion'
import { colors, fonts } from '../theme'

const TICKER_ITEMS = [
  'Gold',
  'Silver',
  'Diamond',
  'Est. 2019',
  'Hong Kong',
]

function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <section
      aria-label="Market ticker"
      style={{
        backgroundColor: 'rgba(209,165,80,0.1)',
        borderTop: '1px solid rgba(209,165,80,0.2)',
        borderBottom: '1px solid rgba(209,165,80,0.2)',
        overflow: 'hidden',
      }}
    >
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
        style={{
          display: 'flex',
          width: 'max-content',
          padding: '0.8rem 0',
        }}
      >
        {items.map((item, index) => (
          <div
            key={`${item}-${index}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              whiteSpace: 'nowrap',
              fontFamily: fonts.sans,
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              color: colors.gold,
              paddingLeft: index === 0 ? '1.5rem' : '2.5rem',
            }}
          >
            <span>{item}</span>
            <span style={{ marginLeft: '1rem', color: colors.goldLight, opacity: 0.8 }}>.</span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

export default Ticker
