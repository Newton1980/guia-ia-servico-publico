import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Capa from './pages/Capa';
import Dashboard from './pages/Dashboard';
import Sumario from './pages/Sumario';

import Capitulo0 from './pages/Capitulo0';
import Capitulo1 from './pages/Capitulo1';
import Capitulo2 from './pages/Capitulo2';
import Capitulo3 from './pages/Capitulo3';
import Capitulo4 from './pages/Capitulo4';
import Capitulo5 from './pages/Capitulo5';
import Capitulo6 from './pages/Capitulo6';
import BibliotecaPrompts from './pages/BibliotecaPrompts';
import Checklist from './pages/Checklist';
import SobreAutor from './pages/SobreAutor';
import Login from './pages/Login';
import Paywall from './pages/Paywall';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Rotas Públicas (Isca) */}
            <Route index element={<Capa />} />
            <Route path="sumario" element={<Sumario />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="capitulo-0" element={<Capitulo0 />} />
            <Route path="capitulo-1" element={<Capitulo1 />} />
            <Route path="autor" element={<SobreAutor />} />
            
            {/* Rotas de Autenticação/Venda */}
            <Route path="login" element={<Login />} />
            <Route path="paywall" element={<Paywall />} />

            {/* Rotas Protegidas (Premium) */}
            <Route element={<ProtectedRoute />}>
              <Route path="capitulo-2" element={<Capitulo2 />} />
              <Route path="capitulo-3" element={<Capitulo3 />} />
              <Route path="capitulo-4" element={<Capitulo4 />} />
              <Route path="capitulo-5" element={<Capitulo5 />} />
              <Route path="capitulo-6" element={<Capitulo6 />} />
              <Route path="prompts" element={<BibliotecaPrompts />} />
              <Route path="checklist" element={<Checklist />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
