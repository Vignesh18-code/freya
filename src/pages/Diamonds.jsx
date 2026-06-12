import ProductDetailPage from './ProductDetailPage'
import diamondsImage from '../assets/Diamond.png'

const diamondShapeImages = import.meta.glob(
  '../assets/DiamondShapes/*.{png,jpg,jpeg,webp,avif}',
  {
    eager: true,
    import: 'default',
  },
)

const diamondShapes = Object.entries(diamondShapeImages)
  .map(([path, image]) => {
    const fileName = path.split('/').pop().replace(/\.[^.]+$/, '')

    return {
      title: fileName,
      label: 'Diamond Shape',
      image,
      alt: `${fileName} diamond shape`,
    }
  })
  .sort((a, b) => a.title.localeCompare(b.title))

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
      shapeGallery={diamondShapes}
    />
  )
}

export default Diamonds
