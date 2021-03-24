import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CadastroS from './pages/CadastroS';
import Serie from './pages/Serie';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Serie />} />
      <Route path="cadastro" element={<CadastroS />} />
      <Route path="cadastro/:id" element={<CadastroS />} />
    </Routes>
  );
}

export default AppRoutes;
