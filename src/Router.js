import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from 'pages/Detail/Detail';
<<<<<<< HEAD
import Main from 'pages/Main/Main';
=======
import Login from 'pages/Login/Login';
import Join from 'pages/Join/Join';
import Main from 'pages/Main';
>>>>>>> 13dab71 (Add : filter 및 pagination 기능 추가 & 컴포넌트화)
import Creation from 'pages/Creation/Creation';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="project/:id" element={<Detail />} />
        <Route path="/creation" element={<Creation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
