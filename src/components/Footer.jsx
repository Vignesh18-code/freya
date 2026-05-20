import { Link } from 'react-router-dom'
import { colors, fonts } from '../theme'

const footerHeadingStyle = {
  margin: 0,
  fontFamily: fonts.serif,
  fontSize: '1.5rem',
  color: '#fff',
}

const linkStyle = {
  color: 'rgba(255,255,255,0.72)',
  textDecoration: 'none',
  fontFamily: fonts.sans,
  fontSize: '0.82rem',
  lineHeight: 1.9,
}

function Footer() {
  return (
    <footer style={{ backgroundColor: colors.bgDeep, borderTop: '1px solid rgba(209,165,80,0.35)', color: '#fff' }}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8" style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem 2rem' }}>
        <div>
          <h3 style={{ margin: 0, fontFamily: fonts.serif, fontSize: '2.2rem', letterSpacing: '0.08em', color: colors.goldLight }}>FREYA</h3>
          <p style={{ margin: '0.65rem 0 1rem', fontFamily: fonts.sans, color: 'rgba(255,255,255,0.72)', fontSize: '0.84rem', lineHeight: 1.8 }}>
            Fine jewellery crafted in Dubai with global standards of trust, provenance, and quality.
          </p>
          <div style={{ display: 'flex', gap: '0.55rem' }}>
            {['fa-instagram', 'fa-linkedin-in', 'fa-twitter', 'fa-facebook-f'].map((icon) => (
              <a key={icon} href="#" aria-label={icon} style={{ width: '34px', height: '34px', borderRadius: '999px', border: '1px solid rgba(209,165,80,0.4)', color: colors.gold, display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                <i className={`fab ${icon}`} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 style={footerHeadingStyle}>Quick Links</h4>
          <div style={{ width: '36px', height: '1px', backgroundColor: colors.gold, marginBottom: '0.6rem' }} />
          <Link style={linkStyle} to="/">Home</Link><br />
          <Link style={linkStyle} to="/about">About</Link><br />
          <Link style={linkStyle} to="/collections">Collections</Link><br />
          <Link style={linkStyle} to="/contact">Contact</Link>
        </div>

        <div>
          <h4 style={footerHeadingStyle}>Collections</h4>
          <div style={{ width: '36px', height: '1px', backgroundColor: colors.gold, marginBottom: '0.6rem' }} />
          <p style={linkStyle}>Rings</p>
          <p style={linkStyle}>Necklaces</p>
          <p style={linkStyle}>Bracelets</p>
          <p style={linkStyle}>Earrings</p>
        </div>

        <div>
          <h4 style={footerHeadingStyle}>Contact Info</h4>
          <div style={{ width: '36px', height: '1px', backgroundColor: colors.gold, marginBottom: '0.6rem' }} />
          <p style={{ ...linkStyle, margin: 0 }}>+852 6375 1595</p>
          <p style={{ ...linkStyle, margin: 0 }}>sales@freyatrading.com</p>
          <p style={{ ...linkStyle, margin: '0.2rem 0 0' }}>Freya Trading (HK) Ltd., Hong Kong</p>
          <p style={{ ...linkStyle, margin: '0.2rem 0 0' }}>Mon – Sat · 09:00 to 19:00 HKT</p>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(209,165,80,0.2)', padding: '0.9rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.6)', fontFamily: fonts.sans, fontSize: '0.75rem' }}>
            © {new Date().getFullYear()} Freya Jewels. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
            {['LBMA Certified', 'ISO 9001', 'DMCC Registered'].map((badge) => (
              <span key={badge} style={{ border: '1px solid rgba(209,165,80,0.3)', color: colors.gold, fontFamily: fonts.sans, fontSize: '0.64rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.34rem 0.45rem' }}>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
