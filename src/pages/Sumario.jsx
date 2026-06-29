import React from 'react';

const Sumario = () => {
  return (
    <div className="page-content">
      <div className="glow-orb purple" style={{ width: '400px', height: '400px', top: '10%', right: '-100px' }}></div>
      
      <h1 className="headline-h1 mb-4">SUMÁRIO ESTRATÉGICO</h1>
      <p className="body-lg text-secondary mb-4">Estrutura do programa de implementação de IA no estado.</p>
      
      <div className="flex-col gap-3">
        {[
          { chapter: 0, title: 'Mitos e Design Thinking', desc: 'Desmistificando a IA e adotando uma mentalidade voltada ao servidor.' },
          { chapter: 1, title: 'IA Preditiva vs Generativa', desc: 'Compreendendo os modelos de linguagem (LLMs) no setor público.' },
          { chapter: 2, title: 'Fórmula PTCF e Prompts', desc: 'Engenharia de prompts para documentos oficiais e despachos.' },
          { chapter: 3, title: 'Segurança e LGPD', desc: 'Como anonimizar dados governamentais antes de usar IA.' },
          { chapter: 4, title: 'Agentes Autônomos', desc: 'Mapeamento de agentes para automação de triagem de processos.' },
          { chapter: 5, title: 'BI e Governança', desc: 'Dashboard e acompanhamento de métricas de eficiência.' },
          { chapter: 6, title: 'Plano de 30 Dias', desc: 'Roteiro de implantação de um piloto seguro.' },
        ].map((item) => (
          <div key={item.chapter} className="glass-card flex items-center gap-4" style={{ padding: '20px' }}>
            <div className="headline-h1 text-primary" style={{ opacity: 0.5, fontSize: '48px', width: '60px', textAlign: 'center' }}>
              {item.chapter}
            </div>
            <div>
              <h2 className="headline-h2 mb-1" style={{ border: 'none', padding: 0 }}>{item.title}</h2>
              <p className="body-lg text-secondary">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sumario;
