import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from 'pages/Detail/Detail';
import Main from 'pages/Main/Main';
import Login from 'pages/Login/Login';
import Join from 'pages/Join/Join';
import Main from 'pages/Main';
import Creation from 'pages/Creation/Creation';
import Edit from 'pages/Edit/Edit';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="project/:id" element={<Detail />} />
        <Route path="/creation" element={<Creation />} />
        <Route path="edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
