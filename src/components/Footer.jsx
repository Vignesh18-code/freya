import { colors, fonts } from '../theme'
import footerLogo from '../assets/Freya Trading HK Ltd.png'

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
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-8" style={{ maxWidth: '1520px', margin: '0 auto', padding: '2.25rem 1.5rem 1.6rem' }}>
        <div>
          <img
            src={footerLogo}
            alt="Freya Trading (HK) Ltd"
            style={{ display: 'block', width: 'min(260px, 100%)', height: 'auto' }}
          />
          <p style={{ margin: '0.65rem 0 1rem', fontFamily: fonts.sans, color: 'rgba(255,255,255,0.72)', fontSize: '0.84rem', lineHeight: 1.8 }}>
            Direct wholesale access to premium gold and silver bullion, coins, bars, and jewellery.
            <br />
            Fully insured, globally compliant, and trusted by leading retailers and industry partners since 2019.
          </p>
        </div>

        <div>
          <h4 style={footerHeadingStyle}>Contact Info</h4>
          <div style={{ width: '36px', height: '1px', backgroundColor: colors.gold, marginBottom: '0.6rem' }} />
          <p style={{ ...linkStyle, margin: 0 }}>Office : +852 3580 0930</p>
          <p style={{ ...linkStyle, margin: '0.2rem 0 0' }}>Sales: +852 6375 1595</p>
          <p style={{ ...linkStyle, margin: '0.2rem 0 0' }}>Compliance: +852 6427 8999</p>
          <p style={{ ...linkStyle, margin: '0.2rem 0 0' }}>Email: email@freyatrading.com</p>
          <p style={{ ...linkStyle, margin: '0.2rem 0 0' }}>Address: Unit F, 26/F, 8 Hart Avenue, TST, Kowloon, Hong Kong</p>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(209,165,80,0.2)', padding: '0.75rem 1.5rem' }}>
        <div className="footer-bottom" style={{ maxWidth: '1520px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.6)', fontFamily: fonts.sans, fontSize: '0.75rem' }}>
            © {new Date().getFullYear()} Freya Trading (HK) Ltd. All rights reserved.
          </p>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.6)', fontFamily: fonts.sans, fontSize: '0.75rem' }}>
            Developed by Elite Designs
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
