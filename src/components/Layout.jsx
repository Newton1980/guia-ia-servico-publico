import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { BookOpen, LayoutDashboard, List, Shield, HelpCircle, Code, FileText, Target, Calendar, User, Database, Lock, Bot, ChevronLeft, ChevronRight, LogOut, LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const navItems = [
    { path: '/', label: 'Capa', icon: BookOpen, premium: false },
    { path: '/sumario', label: 'Sumário Estratégico', icon: List, premium: false },
    { path: '/capitulo-0', label: '0. Mentalidade', icon: HelpCircle, premium: false },
    { path: '/capitulo-1', label: '1. O Que É IA', icon: Database, premium: false },
    { path: '/capitulo-2', label: '2. Ferramentas e PTCF', icon: Code, premium: true },
    { path: '/capitulo-3', label: '3. 6 Aplicações Práticas', icon: Bot, premium: true },
    { path: '/capitulo-4', label: '4. Ética e LGPD', icon: Lock, premium: true },
    { path: '/capitulo-5', label: '5. BI e Marco Legal', icon: Target, premium: true },
    { path: '/capitulo-6', label: '6. Plano de 30 Dias', icon: Calendar, premium: true },
    { path: '/prompts', label: 'Biblioteca de Prompts', icon: FileText, premium: true },
    { path: '/checklist', label: 'Checklist ANPD', icon: Shield, premium: true },
    { path: '/autor', label: 'Sobre o Autor', icon: User, premium: false },
  ];

  const currentIndex = navItems.findIndex(item => item.path === location.pathname);
  const prevItem = currentIndex > 0 ? navItems[currentIndex - 1] : null;
  const nextItem = currentIndex < navItems.length - 1 && currentIndex !== -1 ? navItems[currentIndex + 1] : null;

  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <nav className="glass-card app-sidebar">
        <div className="mb-4">
          <h2 className="headline-h2 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>EBOOK CREATOR</h2>
          <span className="label-caps text-secondary">IA NO SERVIÇO PÚBLICO</span>
        </div>

        <div className="flex-col gap-2" style={{ flex: 1, overflowY: 'auto' }}>
          {navItems.map((item) => {
            const isLocked = item.premium && (!user || !user.hasPaid);
            const Icon = isLocked ? Lock : item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className="action-badge flex items-center gap-2"
                style={{
                  justifyContent: 'flex-start',
                  border: isActive ? '1px solid var(--color-primary-container)' : '1px solid transparent',
                  background: isActive ? 'rgba(0, 212, 255, 0.1)' : 'transparent',
                  color: isActive ? 'var(--color-primary-container)' : (isLocked ? 'var(--color-outline)' : 'var(--color-on-surface)'),
                  textDecoration: 'none'
                }}
              >
                <Icon size={16} />
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* User Auth Widget */}
        <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--color-glass-border)' }}>
          {user ? (
            <div className="flex items-center justify-between">
              <div className="flex-col">
                <span className="body-sm text-white font-bold">{user.name}</span>
                <span className="label-caps" style={{ color: user.hasPaid ? 'var(--color-success)' : 'var(--color-warning)', fontSize: '10px' }}>
                  {user.hasPaid ? 'MEMBRO PREMIUM' : 'CONTA GRATUITA'}
                </span>
              </div>
              <button onClick={() => { logout(); navigate('/'); }} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--color-secondary)' }}>
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <button 
              onClick={() => navigate('/login')} 
              className="action-badge flex items-center justify-center gap-2" 
              style={{ width: '100%', padding: '8px' }}
            >
              <LogIn size={16} />
              Login Premium
            </button>
          )}
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="app-main" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{ flex: 1 }}>
          <Outlet />
        </div>
        
        {/* Navigation Footer */}
        {currentIndex !== -1 && (
          <div className="page-content" style={{ padding: '24px 60px', borderTop: '1px solid var(--color-glass-border)', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            {prevItem ? (
              <Link to={prevItem.path} className="action-badge flex items-center gap-2" style={{ color: 'var(--color-secondary)', borderColor: 'var(--color-outline-variant)' }}>
                <ChevronLeft size={16} />
                {prevItem.label}
              </Link>
            ) : <div />}
            
            {nextItem ? (
              <Link to={nextItem.path} className="action-badge flex items-center gap-2">
                {nextItem.label}
                <ChevronRight size={16} />
              </Link>
            ) : <div />}
          </div>
        )}
      </main>
    </div>
  );
};

export default Layout;
