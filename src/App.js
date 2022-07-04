import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './views/home/home';
import Login from './views/login/login';
import CreateAccount from './views/create-account/create-account';
import Layout from './views/layout/layout';
import AddWish from './views/add-wish/add-wish';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="add-wish" element={<AddWish />} />
        </Route>
        <Route path="create-account" element={<CreateAccount />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
