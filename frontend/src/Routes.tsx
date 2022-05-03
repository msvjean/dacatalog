import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import Catalog from 'pages/Catalog';
import Admin from 'pages/Admin';
import ProductDetails from 'pages/ProductDetails';
import Auth from 'pages/Admin/Auth';
import NavbarAdmin from 'pages/Admin/Navbar';

const Caminho = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Catalog />} />
      <Route path="/products/:productId" element={<ProductDetails />} />
      <Route
        path="/admin"
        element={<Navigate replace to="/admin/products" />}
      />
      <Route path="/admin" element={<Admin />}>
        <Route
          path="products"
          element={
            <div className="admin-container">
              <NavbarAdmin />
              <div className="admin-content">
                <h1>Product CRUD</h1>
              </div>
            </div>
          }
        />
        <Route
          path="categories"
          element={
            <div className="admin-container">
              <NavbarAdmin />
              <div className="admin-content">
                <h1>Category CRUD</h1>
              </div>
            </div>
          }
        />
        <Route
          path="users"
          element={
            <div className="admin-container">
              <NavbarAdmin />
              <div className="admin-content">
                <h1>User CRUD</h1>
              </div>
            </div>
          }
        />
        <Route
          path="auth"
          element={
            <div className="admin-container">
              <div className="admin-content">
                <Auth />
              </div>
            </div>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Caminho;
