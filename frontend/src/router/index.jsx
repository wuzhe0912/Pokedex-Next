import { BrowserRouter, Routes, Route } from 'react-router-dom';
// views
import {
  Home,
  Login,
  Register,
  Cart,
  ProductList,
  ProductDetails,
} from 'views';

function Router() {
  return (
    <BrowserRouter>
      <span>Hello React!</span>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/productList' element={<ProductList />} />
        <Route path='/productDetails' element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
