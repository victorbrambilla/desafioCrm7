import Cookies from 'js-cookie';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

export function RequireAuth() {
  const token = Cookies.get('token');
  let location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
}
