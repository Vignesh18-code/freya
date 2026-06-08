import Products from '../components/Products'

function Collections() {
  return (
    <main style={{ backgroundColor: '#001935', color: '#fff' }}>
      <section
        className="page-hero"
        style={{
          backgroundColor: '#001935',
          padding: '7rem 1.5rem 4rem',
          borderBottom: '1px solid rgba(201,168,76,0.25)',
        }}
      >
        <div className="page-container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ margin: 0, fontFamily: "'Montserrat', sans-serif", color: '#C9A84C', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.72rem' }}>Home · Collections</p>
          <h1 style={{ margin: '0.8rem 0 0', fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.8rem, 5vw, 4.8rem)', fontWeight: 500 }}>
            Our Collections
          </h1>
        </div>
      </section>

      <Products defaultFilter="All" />

      <section style={{ padding: '0 clamp(1rem, 4vw, 1.5rem) 4rem' }}>
        <div className="page-container" style={{ maxWidth: '1100px', margin: '0 auto', border: '1px solid rgba(201,168,76,0.25)', background: 'linear-gradient(95deg, rgba(201,168,76,0.12), rgba(201,168,76,0.05))', padding: 'clamp(1rem, 4vw, 1.3rem)' }}>
          <p style={{ margin: 0, color: '#C9A84C', fontFamily: "'Montserrat', sans-serif", fontSize: '0.74rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Featured Collection</p>
          <h2 style={{ margin: '0.4rem 0 0', fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 500 }}>Signature Bridal Heirloom Series</h2>
          <p style={{ margin: '0.4rem 0 0', color: 'rgba(255,255,255,0.72)', fontFamily: "'Montserrat', sans-serif", fontSize: '0.88rem', lineHeight: 1.75 }}>
            Discover our latest curated bridal and ceremonial masterpieces, handcrafted for modern luxury markets.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Collections
