import React from 'react';
import { ShieldAlert, CreditCard } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Paywall = () => {
  const { user, simulateHotmartPurchase } = useAuth();
  const navigate = useNavigate();

  const handlePurchase = () => {
    // Simula a Hotmart processando o pagamento e disparando o webhook
    simulateHotmartPurchase();
    alert('🎉 Pagamento Aprovado pela Hotmart simulada! Acesso Premium liberado.');
    navigate('/capitulo-2');
  };

  return (
    <div className="page-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
      <div className="glow-orb cyan" style={{ width: '500px', height: '500px', top: '10%', left: '50%', transform: 'translateX(-50%)' }}></div>
      
      <div className="glass-card" style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <div style={{ background: 'var(--color-surface-container)', padding: '24px', borderRadius: '50%', border: '1px solid var(--color-glass-border)' }}>
            <ShieldAlert size={48} className="text-danger" />
          </div>
        </div>
        
        <h1 className="headline-h1 mb-2" style={{ fontSize: '32px' }}>Conteúdo Exclusivo Premium</h1>
        
        {user ? (
          <p className="body-lg text-secondary mb-6">
            Olá, <strong>{user.name}</strong>. A conta que você está usando ainda não possui a licença premium vinculada.
          </p>
        ) : (
          <p className="body-lg text-secondary mb-6">
            Este capítulo faz parte do conteúdo premium avançado do Guia Inteligência Artificial no Serviço Público.
          </p>
        )}

        <div className="semantic-box success mb-6" style={{ textAlign: 'left' }}>
          <h3 className="headline-h3 text-success mb-2">O que você vai desbloquear:</h3>
          <ul className="body-sm text-secondary" style={{ paddingLeft: '20px', margin: 0, lineHeight: 1.8 }}>
            <li>6 Aplicações Práticas com templates prontos (Termos de Referência, CI, Editais).</li>
            <li>Checklist completo de 44 itens para conformidade com a ANPD (LGPD).</li>
            <li>Matriz de Risco e Mapa de Maturidade Analítica (Capítulo 5).</li>
            <li>Biblioteca completa com 30 Prompts oficiais formatados.</li>
            <li>Plano de 30 Dias para implementação no seu setor.</li>
          </ul>
        </div>

        <button 
          onClick={handlePurchase}
          className="action-badge flex items-center justify-center gap-2" 
          style={{ 
            width: '100%', 
            padding: '16px', 
            fontSize: '16px', 
            background: 'linear-gradient(90deg, rgba(0, 212, 255, 0.2) 0%, rgba(104, 0, 236, 0.2) 100%)',
            borderColor: 'var(--color-primary-container)'
          }}
        >
          <CreditCard size={20} />
          Desbloquear Acesso Premium
        </button>

        <p className="body-sm" style={{ color: 'var(--color-outline)', marginTop: '16px', fontSize: '11px' }}>
          * O botão acima simula a página de Checkout da Hotmart. Ao clicar, o sistema vai simular que o pagamento foi aprovado via Webhook.
        </p>
      </div>
    </div>
  );
};

export default Paywall;
