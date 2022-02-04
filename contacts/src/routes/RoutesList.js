import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import { RequireAuth } from '../services/auth';
import Loading from '../pages/Loading';
import { CircularProgress } from '@mui/material';
const Page404 = React.lazy(() => import('../pages/Page404'));

export default function RoutesList() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/loading" element={<Loading />} />
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
        <React.Suspense fallback={<CircularProgress />}>
          <Route path="*" element={<Page404 />} />
        </React.Suspense>
      </Routes>
    </BrowserRouter>
  );
}
