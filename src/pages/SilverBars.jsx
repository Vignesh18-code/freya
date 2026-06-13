import ProductDetailPage from './ProductDetailPage'
import silverBarsImage from '../assets/SilverBars.png'

function SilverBars() {
  return (
    <ProductDetailPage
      breadcrumb="Home · Product Range · Silver Bars"
      label="999 Fine Silver Investment Bars"
      title="Silver Bars"
      accentTitle="Silver Bars"
      description="High-purity silver bars crafted to international standards, ideal for investment, trading, and long-term value preservation."
      image={silverBarsImage}
      imageAlt="999 fine silver investment bars"
      highlights={[
        'High-purity silver bars',
        'International standards',
        'Long-term value preservation',
      ]}
    />
  )
}

export default SilverBars
