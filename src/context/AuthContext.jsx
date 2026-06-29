import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulação de banco de dados e persistência
  useEffect(() => {
    const savedUser = localStorage.getItem('ebk_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Simulação de Autenticação (Aqui entrará o Firebase no futuro)
    // Para teste, qualquer login cria um usuário simulado
    const mockUser = {
      email,
      name: email.split('@')[0],
      uid: 'simulated_123',
      // Simulando que ele não tem a tag de "pago" ainda ao criar a conta,
      // a menos que seja um admin
      hasPaid: email === 'admin@teste.com'
    };
    
    setUser(mockUser);
    localStorage.setItem('ebk_user', JSON.stringify(mockUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('ebk_user');
  };

  // Função simulada de webhook da Hotmart para liberar acesso
  const simulateHotmartPurchase = () => {
    if (user) {
      const upgradedUser = { ...user, hasPaid: true };
      setUser(upgradedUser);
      localStorage.setItem('ebk_user', JSON.stringify(upgradedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, simulateHotmartPurchase }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
