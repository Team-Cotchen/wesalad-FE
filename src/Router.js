import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from 'pages/Detail/Detail';
import Login from 'pages/Login/Login';
import Join from 'pages/Join/Join';
import Main from 'pages/Main/Main';
import Creation from 'pages/Creation/Creation';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="project/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/creation" element={<Creation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
