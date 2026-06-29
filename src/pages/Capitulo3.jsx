import React from 'react';

const Capitulo3 = () => {
  return (
    <div className="page-content">
      <div className="glow-orb cyan" style={{ width: '400px', height: '400px', top: '10%', right: '-100px' }}></div>
      <div className="glow-orb purple" style={{ width: '300px', height: '300px', bottom: '10%', left: '-100px' }}></div>
      
      <div className="flex items-center gap-4 mb-6">
        <div className="headline-h1 text-primary" style={{ fontSize: '120px', lineHeight: '1', opacity: 0.2 }}>3</div>
        <div>
          <h1 className="headline-h1" style={{ fontSize: '32px' }}>IA NA ROTINA: 6 APLICAÇÕES PRÁTICAS</h1>
          <p className="body-lg text-secondary mt-1">Do Rascunho de Ofícios à Análise de Cenários para Decisão</p>
        </div>
      </div>

      <div className="semantic-box prompt mb-8" style={{ borderLeftColor: 'var(--color-tertiary-container)' }}>
        <h4 className="label-caps text-tertiary-container mb-2">Foco de Aprendizado</h4>
        <ul className="body-sm text-text-secondary" style={{ paddingLeft: '20px', margin: 0 }}>
          <li>Redação de documentos oficiais</li>
          <li>Modelagem de cenários de decisão</li>
          <li>Automação de fluxos cotidianos</li>
        </ul>
      </div>

      <section className="mb-8">
        <p className="body-lg mb-6">
          Este capítulo ataca o gargalo que ninguém admite em reunião: o tempo desproporcional gasto com redação de documentos. As 6 aplicações a seguir vêm com o contexto do problema, o protocolo de uso seguro e orientações de implementação. Ao final, você terá um arsenal completo para transformar sua produtividade institucional hoje.
        </p>

        <div className="flex-col gap-6">
          
          {/* APLICAÇÃO 1 */}
          <div className="glass-card p-6 border-l-4" style={{ borderLeftColor: 'var(--color-primary)' }}>
            <h3 className="headline-h3 text-white mb-4">APLICAÇÃO 01 - Ofícios, Comunicações Internas e Despachos</h3>
            <div className="flex-col gap-3">
              <p className="body-sm text-secondary"><strong className="text-white">O problema:</strong> Cada tipo de documento oficial tem estrutura, tom e finalidade distintos. A falta de padronização entre servidores gera inconsistências que comprometem a credibilidade institucional e frequentemente resultam em retrabalho.</p>
              <p className="body-sm text-secondary"><strong className="text-white">O que a IA resolve:</strong> Produz rascunhos estruturados no padrão formal correto em menos de 60 segundos. O servidor fornece os dados - a IA monta a estrutura.</p>
              <p className="body-sm text-secondary"><strong className="text-white">Protocolo de uso seguro:</strong> Substitua qualquer dado real por placeholders antes de enviar à IA: use [NOME DO SERVIDOR], [DATA], [NÚMERO DO PROCESSO]. Insira os dados reais apenas no documento final, fora da ferramenta.</p>
            </div>
            <div className="mt-4 p-3 bg-success bg-opacity-10 border border-success rounded">
              <h4 className="label-caps text-success mb-1">QUICK WIN</h4>
              <p className="body-sm text-success">Identifique o tipo de documento que você mais produz. Monte um prompt padrão com a Fórmula PTCF e salve no bloco de notas do celular. Na próxima vez que precisar, você terá o rascunho em menos de 60 segundos.</p>
            </div>
          </div>

          {/* APLICAÇÃO 2 */}
          <div className="glass-card p-6 border-l-4" style={{ borderLeftColor: 'var(--color-primary)' }}>
            <h3 className="headline-h3 text-white mb-4">APLICAÇÃO 02 - Correção e Elevação de Qualidade Textual</h3>
            <div className="flex-col gap-3">
              <p className="body-sm text-secondary"><strong className="text-white">O problema:</strong> Diferentes servidores redigem o mesmo tipo de documento de formas radicalmente distintas - variando tom, estrutura e formalidade. O resultado é uma comunicação institucional inconsistente que prejudica a imagem da unidade.</p>
              <p className="body-sm text-secondary"><strong className="text-white">O que a IA resolve:</strong> Corrige, formaliza e eleva a qualidade de qualquer texto em segundos - mantendo o conteúdo original e adequando forma, tom e estrutura ao padrão oficial.</p>
              <p className="body-sm text-secondary"><strong className="text-white">Protocolo de uso seguro:</strong> Cole o texto bruto sem dados pessoais identificáveis. A IA ajusta forma, não conteúdo - a responsabilidade pelo que está sendo comunicado é sempre do servidor que assina.</p>
            </div>
            <div className="mt-4 p-3 bg-success bg-opacity-10 border border-success rounded">
              <h4 className="label-caps text-success mb-1">QUICK WIN</h4>
              <p className="body-sm text-success">Cole um documento que você produziu recentemente e peça: 'Corrija e formalize este texto conforme o padrão de redação oficial do serviço público.' Compare o antes e o depois.</p>
            </div>
          </div>

          {/* APLICAÇÃO 3 */}
          <div className="glass-card p-6 border-l-4" style={{ borderLeftColor: 'var(--color-primary)' }}>
            <h3 className="headline-h3 text-white mb-4">APLICAÇÃO 03 - Planejamento de Atividades</h3>
            <div className="flex-col gap-3">
              <p className="body-sm text-secondary"><strong className="text-white">O problema:</strong> Escalas montadas manualmente consomem horas. Pautas improvisadas resultam em reuniões sem foco. Cronogramas informais perdem prazos e responsáveis.</p>
              <p className="body-sm text-secondary"><strong className="text-white">O que a IA resolve:</strong> Estrutura escalas, pautas e cronogramas com precisão em segundos, a partir dos parâmetros que você fornece.</p>
              <p className="body-sm text-secondary"><strong className="text-white">Protocolo de uso seguro:</strong> Use nomes genéricos (Servidor 1, Servidor 2) na montagem de escalas. Não inclua dados pessoais de servidores em ferramentas de IA abertas.</p>
            </div>
            <div className="mt-4 p-3 bg-success bg-opacity-10 border border-success rounded">
              <h4 className="label-caps text-success mb-1">QUICK WIN</h4>
              <p className="body-sm text-success">Monte agora a pauta da sua próxima reunião usando o Prompt 6 do Capítulo 2. O que levaria 20 minutos de elaboração manual leva 90 segundos com IA.</p>
            </div>
          </div>

          {/* APLICAÇÃO 4 */}
          <div className="glass-card p-6 border-l-4" style={{ borderLeftColor: 'var(--color-primary)' }}>
            <h3 className="headline-h3 text-white mb-4">APLICAÇÃO 04 - Produção de Relatórios Institucionais</h3>
            <div className="flex-col gap-3">
              <p className="body-sm text-secondary"><strong className="text-white">O problema:</strong> Relatórios mensais consomem horas de servidores qualificados em tarefas de formatação e redação - não de análise. O servidor reúne os dados, mas perde tempo transformando esses dados em texto estruturado.</p>
              <p className="body-sm text-secondary"><strong className="text-white">O que a IA resolve:</strong> Transforma dados brutos em relatórios estruturados com introdução, análise e recomendações em minutos. O servidor fornece os números - a IA monta o documento.</p>
              <p className="body-sm text-secondary"><strong className="text-white">Protocolo de uso seguro:</strong> Forneça apenas dados agregados e anonimizados. Nunca forneça microdados que permitam identificar pessoas individualmente. Revise todos os números um a um antes de assinar.</p>
            </div>
            <div className="mt-4 p-3 bg-success bg-opacity-10 border border-success rounded">
              <h4 className="label-caps text-success mb-1">QUICK WIN</h4>
              <p className="body-sm text-success">Pegue os dados brutos do seu último relatório mensal e cole no Prompt 9. Em menos de 2 minutos você verá como a IA transforma dados dispersos em documento estruturado.</p>
            </div>
          </div>

          {/* APLICAÇÃO 5 */}
          <div className="glass-card p-6 border-l-4" style={{ borderLeftColor: 'var(--color-primary)' }}>
            <h3 className="headline-h3 text-white mb-4">APLICAÇÃO 05 - Padronização Documental Institucional</h3>
            <div className="flex-col gap-3">
              <p className="body-sm text-secondary"><strong className="text-white">O problema:</strong> Em qualquer unidade com mais de três servidores produzindo documentos, existe variação. O resultado é uma comunicação fragmentada que prejudica tanto a imagem externa quanto os processos internos.</p>
              <p className="body-sm text-secondary"><strong className="text-white">O que a IA resolve:</strong> Permite criar um sistema de prompts padrão que, compartilhado com toda a equipe, garante que todos os documentos do mesmo tipo saiam com a mesma estrutura, tom e nível de qualidade.</p>
              <p className="body-sm text-secondary"><strong className="text-white">Protocolo de uso seguro:</strong> Crie, teste e aprove o prompt padrão antes de compartilhar. Distribua via e-mail ou mural. Revise periodicamente quando houver mudança de norma ou chefia.</p>
            </div>
            <div className="mt-4 p-3 bg-success bg-opacity-10 border border-success rounded">
              <h4 className="label-caps text-success mb-1">QUICK WIN</h4>
              <p className="body-sm text-success">Mapeie os 3 tipos de documento mais produzidos pela sua unidade. Crie um prompt padrão para o mais frequente. Teste com dois servidores. Se funcionar - distribua para toda a equipe.</p>
            </div>
          </div>

          {/* APLICAÇÃO 6 */}
          <div className="glass-card p-6 border-l-4" style={{ borderLeftColor: 'var(--color-primary)' }}>
            <h3 className="headline-h3 text-white mb-4">APLICAÇÃO 06 - Apoio à Tomada de Decisão</h3>
            <div className="flex-col gap-3">
              <p className="body-sm text-secondary"><strong className="text-white">O problema:</strong> Gestores públicos frequentemente tomam decisões com informação fragmentada e tempo escasso. A análise adequada de cenários e riscos muitas vezes não acontece por falta de tempo e metodologia acessível.</p>
              <p className="body-sm text-secondary"><strong className="text-white">O que a IA resolve:</strong> Funciona como analista de apoio disponível a qualquer momento - compara cenários, sintetiza informações, mapeia riscos e explica legislação em linguagem acessível.</p>
              <p className="body-sm text-secondary"><strong className="text-white">Protocolo de uso seguro:</strong> Use a IA para estruturar a análise - não para tomar a decisão. Toda ação com consequências funcionais ou que afete direitos de pessoas deve passar por revisão e aprovação humana. Verifique sempre referências legais na fonte oficial.</p>
            </div>
            <div className="mt-4 p-3 bg-success bg-opacity-10 border border-success rounded">
              <h4 className="label-caps text-success mb-1">QUICK WIN</h4>
              <p className="body-sm text-success">Identifique uma decisão que você precisa tomar nos próximos dias. Use o Prompt 10 para estruturar a análise de cenários. O objetivo é ter uma análise estruturada como ponto de partida para o seu julgamento - não substituí-lo.</p>
            </div>
          </div>

        </div>
      </section>

      <section className="mb-8">
        <h2 className="headline-h2 text-primary mb-4 pb-2" style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>PROTOCOLO COMPLETO - Checklist do Servidor que Usa IA com Responsabilidade</h2>
        
        <div className="glass-card">
          <ul className="body-lg space-y-4">
            <li>
              <strong className="text-tertiary">ANTES DE USAR:</strong>
              <ul className="body-sm text-secondary mt-2 space-y-1" style={{ paddingLeft: '20px', listStyleType: 'circle' }}>
                <li>[ ] Os dados que vou inserir são genéricos ou anonimizados?</li>
                <li>[ ] Não há nomes reais, prontuários, números de processos ou informações sigilosas no prompt?</li>
              </ul>
            </li>
            <li>
              <strong className="text-tertiary">AO ESCREVER O PROMPT:</strong>
              <ul className="body-sm text-secondary mt-2 space-y-1" style={{ paddingLeft: '20px', listStyleType: 'circle' }}>
                <li>[ ] Apliquei a Fórmula PTCF (Papel + Tarefa + Contexto + Formato)?</li>
                <li>[ ] O contexto que forneci é suficiente para uma resposta precisa?</li>
              </ul>
            </li>
            <li>
              <strong className="text-tertiary">APÓS RECEBER A RESPOSTA:</strong>
              <ul className="body-sm text-secondary mt-2 space-y-1" style={{ paddingLeft: '20px', listStyleType: 'circle' }}>
                <li>[ ] Li o documento do início ao fim?</li>
                <li>[ ] Todos os dados, datas e nomes estão corretos?</li>
                <li>[ ] Referências legais foram verificadas na fonte oficial?</li>
              </ul>
            </li>
          </ul>
        </div>
        
        <div className="mt-6 p-4 rounded bg-surface-bright border border-glass-border text-center">
          <p className="body-sm text-white font-bold">
            <span className="text-danger">REGRA FUNDAMENTAL:</span> A IA entrega um rascunho. O servidor entrega o documento. A responsabilidade é sempre humana.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Capitulo3;
