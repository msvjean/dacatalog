import { AxiosRequestConfig } from 'axios';
import ProductCrucCard from 'pages/Admin/Products/ProductCrudCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from 'types/product';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';

import './styles.css';

const List = () => {
  const [page, setPage] = useState<SpringPage<Product>>();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/products',
      params: {
        page: 0,
        size: 50,
      },
    };

    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  }

  return (
    <div className="product-crud-container">
      <div className="product-crud-bar-container">
        <Link to="/admin/products/create">
          <button className="btn btn-primary text-white btn-crud-add">
            ADICIONAR
          </button>
        </Link>
        <div className="base-card product-filter-conatiner">Search Bar</div>
      </div>
      <div className="row">
        {page?.content.map((product) => (
          <div className="col-sm-6 col-md-12" key={product.id}>
            <ProductCrucCard product={product} onDelete={() => getProduct()} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
