import React from 'react';
import { Routes,BrowserRouter, Route, Link } from "react-router-dom";

import { HomeView } from '../components/HomeView';
import { MenuRoutes } from './MenuRoutes';


export const AppRouter = () => {
  return (
    <>
 
    <BrowserRouter>
    
        <Routes>
             <Route path="/home" element={
                 <HomeView />
             } />
             <Route path="/*" element={
                 <MenuRoutes />
             } />
        </Routes>
    </BrowserRouter>
    </>
  )
}
