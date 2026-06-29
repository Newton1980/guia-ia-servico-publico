import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { BookOpen, LayoutDashboard, List, Shield, HelpCircle, Code, FileText, Target, Calendar, User, Database, Lock, Bot, ChevronLeft, ChevronRight } from 'lucide-react';

const Layout = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Capa', icon: BookOpen },
    { path: '/sumario', label: 'Sumário Estratégico', icon: List },
    { path: '/capitulo-0', label: '0. Mentalidade', icon: HelpCircle },
    { path: '/capitulo-1', label: '1. O Que É IA', icon: Database },
    { path: '/capitulo-2', label: '2. Ferramentas e PTCF', icon: Code },
    { path: '/capitulo-3', label: '3. 6 Aplicações Práticas', icon: Bot },
    { path: '/capitulo-4', label: '4. Ética e LGPD', icon: Lock },
    { path: '/capitulo-5', label: '5. BI e Marco Legal', icon: Target },
    { path: '/capitulo-6', label: '6. Plano de 30 Dias', icon: Calendar },
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/prompts', label: 'Biblioteca de Prompts', icon: FileText },
    { path: '/checklist', label: 'Checklist ANPD', icon: Shield },
    { path: '/autor', label: 'Sobre o Autor', icon: User },
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

        <div className="flex-col gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
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
                  color: isActive ? 'var(--color-primary-container)' : 'var(--color-on-surface)',
                  textDecoration: 'none'
                }}
              >
                <Icon size={16} />
                {item.label}
              </Link>
            );
          })}
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
