import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './views/home/home';
import Login from './views/login/login';
import CreateAccount from './views/create-account/create-account';
import Layout from './views/layout/layout';
// import AddWish from './views/add-wish/add-wish';
import NewWish from "./views/add-wish/new-wish";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Navigate to='/home'/>} />
          <Route path="home" element={<Home />} />
          <Route path="add-wish" element={<NewWish />} />
        </Route>
        <Route path="create-account" element={<CreateAccount />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
