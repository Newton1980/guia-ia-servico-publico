import React from 'react';

const Capa = () => {
  return (
    <div style={{ padding: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100%' }}>
      <div className="glow-orb cyan" style={{ width: '600px', height: '600px', top: '10%', left: '50%', transform: 'translateX(-50%)' }}></div>
      
      <div className="glass-card capa-card" style={{ maxWidth: '800px', width: '100%', textAlign: 'center' }}>
        <span className="badge mb-4" style={{ fontSize: '14px', padding: '8px 16px' }}>Guia Oficial</span>
        <h1 className="headline-h1 mb-4" style={{ fontSize: '56px', letterSpacing: '2px' }}>
          INTELIGÊNCIA<br/>
          <span style={{ color: 'var(--color-primary-container)', textShadow: '0 0 40px rgba(0, 212, 255, 0.5)' }}>ARTIFICIAL</span><br/>
          NO SERVIÇO PÚBLICO
        </h1>
        <h2 className="headline-h2 text-secondary mb-4" style={{ border: 'none', padding: 0 }}>ESTRATÉGIAS E APLICAÇÕES PRÁTICAS PARA O ESTADO</h2>
        <div style={{ width: '60px', height: '3px', background: 'var(--color-primary-container)', margin: '40px auto' }}></div>
        <p className="label-caps text-secondary">Autor: Newton Douglas</p>
      </div>
    </div>
  );
};

export default Capa;
