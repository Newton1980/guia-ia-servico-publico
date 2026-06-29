import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, LogIn } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    navigate('/capitulo-2'); // Após logar, tenta ir para o primeiro capítulo bloqueado
  };

  return (
    <div className="page-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
      <div className="glow-orb purple" style={{ width: '500px', height: '500px', top: '10%', left: '50%', transform: 'translateX(-50%)' }}></div>
      
      <div className="glass-card" style={{ maxWidth: '450px', width: '100%', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <div style={{ background: 'var(--color-surface-container)', padding: '16px', borderRadius: '50%', border: '1px solid var(--color-glass-border)' }}>
            <Lock size={32} className="text-secondary" />
          </div>
        </div>
        
        <h1 className="headline-h2 text-primary mb-2" style={{ borderLeft: 'none', paddingLeft: 0 }}>Acesso à Área de Membros</h1>
        <p className="body-sm text-secondary mb-6">
          Faça login para acessar o conteúdo completo do Guia Estratégico.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <input 
              type="email" 
              placeholder="Seu e-mail de compra" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '4px',
                background: 'var(--color-surface-container-lowest)',
                border: '1px solid var(--color-outline-variant)',
                color: 'var(--color-on-surface)',
                fontFamily: 'var(--font-body)',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <div>
            <input 
              type="password" 
              placeholder="Senha" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '4px',
                background: 'var(--color-surface-container-lowest)',
                border: '1px solid var(--color-outline-variant)',
                color: 'var(--color-on-surface)',
                fontFamily: 'var(--font-body)',
                boxSizing: 'border-box'
              }}
            />
          </div>
          
          <button 
            type="submit" 
            className="action-badge flex items-center justify-center gap-2" 
            style={{ width: '100%', marginTop: '8px', padding: '12px', background: 'rgba(0, 212, 255, 0.1)' }}
          >
            <LogIn size={18} />
            Entrar
          </button>
        </form>

        <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--color-glass-border)' }}>
          <p className="body-sm text-secondary">
            Ainda não comprou o Guia? <br/>
            <span style={{ color: 'var(--color-tertiary)', cursor: 'pointer', fontWeight: 'bold' }}>Clique aqui para adquirir</span>
          </p>
        </div>
        
        {/* Dica para teste */}
        <p className="body-sm" style={{ color: 'var(--color-outline)', marginTop: '24px', fontSize: '11px' }}>
          Modo Teste: Digite qualquer email para simular login.<br/>
          (Use <strong>admin@teste.com</strong> para simular uma conta PAGA).
        </p>
      </div>
    </div>
  );
};

export default Login;
