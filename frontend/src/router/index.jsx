import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from 'components/ProtectedRoutes';
// components
import HeaderComponent from 'components/HeaderComponent';
import FooterComponent from 'components/FooterComponent';
// views
import {
  Home,
  Login,
  Register,
  Cart,
  ProductList,
  ProductDetails,
  NotFound,
  // Protected User Routes
  UserCartDetails,
  UserOrders,
  UserOrderDetails,
  UserProfile,
  // Protected Admin Routes
  AdminAnalytics,
  AdminChats,
  AdminCreateProduct,
  AdminEditProduct,
  AdminEditUser,
  AdminOrders,
  AdminOrderDetails,
  AdminProducts,
  AdminUsers,
} from 'views';

function Router() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/productList' element={<ProductList />} />
        <Route path='/productDetails/:id' element={<ProductDetails />} />
        {/* user protected routes */}
        <Route element={<ProtectedRoutes admin={false} />}>
          <Route path='/user/userCartDetails' element={<UserCartDetails />} />
          <Route path='/user/userOrders' element={<UserOrders />} />
          <Route path='/user/userOrderDetails' element={<UserOrderDetails />} />
          <Route path='/user/userProfile' element={<UserProfile />} />
        </Route>
        {/* admin protected routes */}
        <Route element={<ProtectedRoutes admin={true} />}>
          <Route path='/admin/adminAnalytics' element={<AdminAnalytics />} />
          <Route path='/admin/adminChats' element={<AdminChats />} />
          <Route
            path='/admin/adminCreateProduct'
            element={<AdminCreateProduct />}
          />
          <Route
            path='/admin/adminEditProduct'
            element={<AdminEditProduct />}
          />
          <Route path='/admin/adminEditUser' element={<AdminEditUser />} />
          <Route path='/admin/adminOrders' element={<AdminOrders />} />
          <Route
            path='/admin/adminOrderDetails'
            element={<AdminOrderDetails />}
          />
          <Route path='/admin/adminProducts' element={<AdminProducts />} />
          <Route path='/admin/adminUsers' element={<AdminUsers />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default Router;
