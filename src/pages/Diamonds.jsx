import ProductDetailPage from './ProductDetailPage'
import diamondsImage from '../assets/Diamond.png'

function Diamonds() {
  return (
    <ProductDetailPage
      breadcrumb="Home · Collections · Diamonds"
      label="Certified Loose Diamonds"
      title="Diamonds"
      accentTitle="Diamonds"
      description="Ethically sourced loose diamonds with certified grading, exceptional brilliance, and trusted quality for the global jewellery industry."
      image={diamondsImage}
      imageAlt="Certified loose diamonds"
      highlights={[
        'Ethically sourced loose diamonds',
        'Certified grading',
        'Exceptional brilliance',
      ]}
    />
  )
}

export default Diamonds
