import React from 'react';
import { MenuBarView } from '../components/MenuBarView';
import { Routes, Route,  } from "react-router-dom";
import { HeaderView } from '../components/HeaderView';
import { CompassView } from '../components/CompassView';
import { TransactionsView } from '../components/TransactionsView';
import { UserView } from '../components/UserView';



export const MenuRoutes = () => {
  return (
    <>
   <HeaderView/>
    <MenuBarView />
    <Routes>
             <Route path="Transactions" element={
                 <TransactionsView />
             } />
             
             <Route path="CompassView" element={
                 <CompassView />
             } />
             <Route path="UserView" element={
                 <UserView />
             } />
             
    </Routes>
    </>
  )
}
