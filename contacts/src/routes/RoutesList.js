import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../components/login';
import Page404 from '../components/Page404'
import Dashboard from '../components/dashboard';
import { RequireAuth } from '../services/auth';
import Loading from '../components/Loading';

export default function RoutesList() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/loading" element={<Loading />} />
            <Route element={<RequireAuth/>}>
                <Route path="/" element={<Dashboard />} />
            </Route>
            <Route path="*" element={<Page404/>} />
          </Routes>
      </BrowserRouter>
    )
}
