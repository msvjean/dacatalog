import ProductCard from '../../components/ProductCard';
import Navbar from '../../components/Navbar';

const Catalog = () => {
  return (
    <>
      <Navbar />
      <div className="container my-4">
        <ProductCard />
      </div>
    </>
  );
};

export default Catalog;
