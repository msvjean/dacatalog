import './style.css';
import ProductImg from '../../assets/images/product.png';

const ProductCard = () => {
  return (
    <>
      <div className="base-card product-card">
        <div className="card-top-container">
            <img src={ ProductImg } alt="Nome do produto" />
        </div>
        <div className="card-bottom-container">
            <h6>Preco</h6>
            <p>$100,00</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
