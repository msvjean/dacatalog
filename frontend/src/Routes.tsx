import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import Catalog from 'pages/Catalog';
import Admin from 'pages/Admin';
import ProductDetails from 'pages/ProductDetails';

const Caminho = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Catalog />} />
      <Route path="/products/:productId" element={<ProductDetails />} />
      <Route path="/admin" element={<Navigate replace to="/admin/products" />} />
      <Route path="/admin" element={<Admin />}>
        <Route path='products' element={<h1>Product CRUD</h1>} />
        <Route path='categories' element={<h1>Category CRUD</h1>} />
        <Route path='users' element={<h1>User CRUD</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Caminho;
