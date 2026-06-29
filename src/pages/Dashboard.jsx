import React from 'react';

const Dashboard = () => {
  return (
    <div style={{ padding: '40px', position: 'relative', overflow: 'hidden' }}>
      {/* Background Glows */}
      <div className="glow-orb cyan" style={{ width: '500px', height: '500px', top: '-100px', left: '-100px' }}></div>
      <div className="glow-orb purple" style={{ width: '400px', height: '400px', bottom: '-50px', right: '-50px' }}></div>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header */}
        <header className="flex justify-between items-center mb-4">
          <div>
            <span className="badge mb-1">Sistema Central</span>
            <h1 className="headline-h1">DASHBOARD IA ESTRATÉGICA</h1>
          </div>
          <button className="action-badge">Sincronizar Dados</button>
        </header>

        {/* Top Stats Grid */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="glass-card">
            <span className="label-caps text-secondary mb-1">Índice de Adoção</span>
            <div className="headline-h1" style={{ fontSize: '36px' }}>87%</div>
            <div className="body-lg" style={{ color: 'var(--color-success)' }}>+12% este mês</div>
          </div>
          <div className="glass-card">
            <span className="label-caps text-secondary mb-1">Processos Otimizados</span>
            <div className="headline-h1" style={{ fontSize: '36px' }}>1,240</div>
            <div className="body-lg" style={{ color: 'var(--color-primary)' }}>Nível Operacional</div>
          </div>
          <div className="glass-card">
            <span className="label-caps text-secondary mb-1">Riscos Mitigados</span>
            <div className="headline-h1" style={{ fontSize: '36px' }}>43</div>
            <div className="body-lg" style={{ color: 'var(--color-warning)' }}>Atenção Requerida</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-3 gap-4">
          
          {/* Left Column */}
          <div style={{ gridColumn: 'span 2' }} className="flex-col gap-4">
            
            <div className="glass-card">
              <h2 className="headline-h2 mb-3">Análise de IA no Serviço Público</h2>
              <p className="body-lg mb-3">
                A implementação de inteligência artificial na esfera estadual tem demonstrado um aumento significativo na eficiência processual. A automação de tarefas repetitivas permite que os servidores foquem em atividades de maior valor estratégico.
              </p>
              
              <div className="semantic-box success mb-3">
                <h3 className="headline-h3 text-primary mb-1">Status: Operacional</h3>
                <p className="body-lg">Todos os sistemas de IA preditiva estão operando dentro dos parâmetros esperados de segurança e governança.</p>
              </div>

              <div className="semantic-box myth">
                <h3 className="headline-h3" style={{ color: 'var(--color-danger)' }}>Mito Comum</h3>
                <p className="body-lg">"A IA substituirá os servidores públicos." - Na realidade, a IA atua como um copiloto, potencializando a capacidade analítica humana e reduzindo o tempo de triagem documental.</p>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="flex-col gap-4">
            
            <div className="glass-card" style={{ background: 'var(--color-surface-container)' }}>
              <div className="flex justify-between items-center mb-3">
                <h2 className="headline-h2" style={{ border: 'none', padding: 0 }}>Fórmula PTCF</h2>
                <span className="badge">PROMPT</span>
              </div>
              
              <div className="semantic-box prompt mb-3">
                <p className="body-lg" style={{ fontFamily: 'monospace' }}>
                  Atue como um analista sênior do estado.<br/><br/>
                  Analise o documento anexo e extraia:<br/>
                  1. Principais requerimentos<br/>
                  2. Prazos legais<br/>
                  3. Inconsistências
                </p>
              </div>
              
              <button className="action-badge" style={{ width: '100%' }}>Copiar Prompt</button>
            </div>

            <div className="glass-card">
              <h2 className="headline-h2 mb-3">Checklist ANPD</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} className="flex-col gap-2">
                <li className="flex items-center gap-2">
                  <div style={{ width: '16px', height: '16px', borderRadius: '2px', background: 'var(--color-success)' }}></div>
                  <span className="body-lg">Mapeamento de Dados</span>
                </li>
                <li className="flex items-center gap-2">
                  <div style={{ width: '16px', height: '16px', borderRadius: '2px', background: 'var(--color-success)' }}></div>
                  <span className="body-lg">Base Legal Definida</span>
                </li>
                <li className="flex items-center gap-2">
                  <div style={{ width: '16px', height: '16px', borderRadius: '2px', border: '1px solid var(--color-outline)' }}></div>
                  <span className="body-lg">Relatório de Impacto</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
