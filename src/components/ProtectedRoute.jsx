import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
  const { user } = useAuth();

  if (!user) {
    // Não logado, manda para o login
    return <Navigate to="/login" replace />;
  }

  if (!user.hasPaid) {
    // Logado mas não pagou, manda para a tela de vendas
    return <Navigate to="/paywall" replace />;
  }

  // Pagou e está logado, libera o conteúdo
  return <Outlet />;
};

export default ProtectedRoute;
