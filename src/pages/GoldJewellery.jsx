import ProductDetailPage from './ProductDetailPage'
import jewelleryImage from '../assets/Panel1.jpg'

function GoldJewellery() {
  return (
    <ProductDetailPage
      breadcrumb="Home · Collections · Gold Jewellery"
      label="Exquisite Gold Jewellery Collection"
      title="Gold Jewellery"
      accentTitle="Gold Jewellery"
      description="Beautifully crafted gold jewellery combining timeless elegance, superior craftsmanship, and certified purity for every occasion."
      image={jewelleryImage}
      imageAlt="Exquisite gold jewellery collection"
      highlights={[
        'Timeless elegance',
        'Superior craftsmanship',
        'Certified purity',
      ]}
    />
  )
}

export default GoldJewellery
