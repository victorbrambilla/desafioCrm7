import {
    useLocation,
    Navigate,
    Outlet,
    // Redirect,
  } from 'react-router-dom';


export function RequireAuth() {
    const token=localStorage.getItem('token')
    let location = useLocation();
  
    if (!token) {
      return <Navigate to="/login" state={{ from: location }} />;
    }
  
    return <Outlet />;
  }