import ContentLoader from 'react-content-loader'

const ProductDetailLoader = () => (
  <ContentLoader viewBox="0 0 250 280" height={280} width={250}>
    <rect x="0" y="0" rx="10" ry="10" width="250" height="180" />
  </ContentLoader>
)

ProductDetailLoader.metadata = {
  name: 'RJavlonbek',
  github: 'RJavlonbek',
  description: 'Blog item',
  filename: 'BlogItem',
}

export default ProductDetailLoader;