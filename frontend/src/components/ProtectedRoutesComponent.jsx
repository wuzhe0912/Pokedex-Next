import { Outlet, Navigate } from 'react-router-dom';

function ProtectedRoutesComponent() {
  const auth = false;
  // if user is login, then go to outlet, otherwise go to login page
  return auth ? <Outlet /> : <Navigate to='/login' />;
}

export default ProtectedRoutesComponent;
