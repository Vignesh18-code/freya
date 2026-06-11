import ProductDetailPage from './ProductDetailPage'
import diamondsImage from '../assets/Diamond.png'
import shapeOneImage from '../assets/Shape1.png'

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
      shapeGalleryLabel="Diamond Shapes"
      shapeGalleryTitle="Diamond Shape Preview"
      shapeGalleryDescription="A refined preview of diamond shape options for certified loose diamonds and fine jewellery selections."
      shapeGallery={[
        {
          title: 'Shape 01',
          label: 'Preview Shape',
          image: shapeOneImage,
          alt: 'Diamond shape preview',
        },
      ]}
    />
  )
}

export default Diamonds
