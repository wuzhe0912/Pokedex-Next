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
        <Route path='/product-list' element={<ProductList />} />
        <Route path='/product-details/:id' element={<ProductDetails />} />
        {/* user protected routes */}
        <Route element={<ProtectedRoutes admin={false} />}>
          <Route path='/user/userCartDetails' element={<UserCartDetails />} />
          <Route path='/user/userOrders' element={<UserOrders />} />
          <Route path='/user/userOrderDetails' element={<UserOrderDetails />} />
          <Route path='/user/userProfile' element={<UserProfile />} />
        </Route>
        {/* admin protected routes */}
        <Route element={<ProtectedRoutes admin={true} />}>
          <Route path='/admin/analytics' element={<AdminAnalytics />} />
          <Route path='/admin/chats' element={<AdminChats />} />
          <Route
            path='/admin/create-product'
            element={<AdminCreateProduct />}
          />
          <Route path='/admin/edit-product' element={<AdminEditProduct />} />
          <Route path='/admin/editUser' element={<AdminEditUser />} />
          <Route path='/admin/orders' element={<AdminOrders />} />
          <Route path='/admin/order-details' element={<AdminOrderDetails />} />
          <Route path='/admin/products' element={<AdminProducts />} />
          <Route path='/admin/users' element={<AdminUsers />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default Router;
