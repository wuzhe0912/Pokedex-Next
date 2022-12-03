import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoutesComponent from 'components/ProtectedRoutesComponent';
// views
import {
  Home,
  Login,
  Register,
  Cart,
  ProductList,
  ProductDetails,
  UserCartDetails,
  UserOrders,
  UserOrderDetails,
  UserProfile,
  NotFound,
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
        <Route path='/productDetails/:id' element={<ProductDetails />} />
        <Route element={<ProtectedRoutesComponent />}>
          <Route path='/user/userCartDetails' element={<UserCartDetails />} />
          <Route path='/user/userOrders' element={<UserOrders />} />
          <Route
            path='/user/userOrderDetails/:id'
            element={<UserOrderDetails />}
          />
          <Route path='/user/userProfile' element={<UserProfile />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
