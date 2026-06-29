import React from 'react';

const Capitulo2 = () => {
  return (
    <div className="page-content">
      <div className="glow-orb cyan" style={{ width: '400px', height: '400px', top: '10%', right: '-100px' }}></div>
      <div className="glow-orb purple" style={{ width: '300px', height: '300px', bottom: '10%', left: '-100px' }}></div>
      
      <div className="flex items-center gap-4 mb-6">
        <div className="headline-h1 text-primary" style={{ fontSize: '120px', lineHeight: '1', opacity: 0.2 }}>2</div>
        <div>
          <h1 className="headline-h1" style={{ fontSize: '32px' }}>AS 5 FERRAMENTAS E A FÓRMULA PTCF</h1>
          <p className="body-lg text-secondary mt-1">Como Transformar Pedidos Vagos em Resultados Precisos</p>
        </div>
      </div>

      <div className="semantic-box prompt mb-8" style={{ borderLeftColor: 'var(--color-tertiary-container)' }}>
        <h4 className="label-caps text-tertiary-container mb-2">Foco de Aprendizado</h4>
        <ul className="body-sm text-text-secondary" style={{ paddingLeft: '20px', margin: 0 }}>
          <li>As 5 principais ferramentas grátis</li>
          <li>Domínio da fórmula de prompt PTCF</li>
          <li>Prática de refinamento de instruções</li>
        </ul>
      </div>

      <section className="mb-8">
        <h2 className="headline-h2 text-primary mb-3 pb-2" style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>A Fórmula PTCF - O Método que Transforma Pedidos Vagos em Resultados Precisos</h2>
        <p className="body-lg mb-4">
          A maioria dos servidores que tenta usar IA pela primeira vez fica decepcionada com o resultado. O motivo é quase sempre o mesmo: o comando foi vago demais.
        </p>
        <p className="body-lg mb-4">
          A IA entrega exatamente o que você pede. Se você pede pouco, ela entrega pouco.
        </p>
        <p className="body-lg mb-4">A Fórmula PTCF resolve esse problema em 4 componentes:</p>
        
        <div className="glass-card overflow-hidden mb-6" style={{ padding: 0 }}>
          <table className="infographic-table">
            <thead>
              <tr>
                <th className="label-caps text-primary" style={{ width: '25%' }}>ELEMENTO</th>
                <th className="label-caps text-secondary" style={{ width: '75%' }}>AÇÃO E EXEMPLO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="body-lg text-primary font-bold">**P**</td>
                <td className="body-lg text-white">**Papel**</td>
                <td className="body-sm text-secondary">O ponto de vista que a IA deve assumir para responder. Ex: "Você é um servidor especialista em redação oficial..."</td>
              </tr>
              <tr>
                <td className="body-lg text-primary font-bold">**T**</td>
                <td className="body-lg text-white">**Tarefa**</td>
                <td className="body-sm text-secondary">O que você quer que a IA produza ou faça. Ex: "...escreva uma CI formal..."</td>
              </tr>
              <tr>
                <td className="body-lg text-primary font-bold">**C**</td>
                <td className="body-lg text-white">**Contexto**</td>
                <td className="body-sm text-secondary">Os detalhes específicos que tornam a resposta relevante para a sua situação real.</td>
              </tr>
              <tr>
                <td className="body-lg text-primary font-bold">**F**</td>
                <td className="body-lg text-white">**Formato**</td>
                <td className="body-sm text-secondary">Como a resposta deve ser estruturada. Ex: "...linguagem formal, máximo 2 parágrafos."</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="headline-h2 text-primary mb-4 pb-2" style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>Os 5 Prompts Essenciais para o Serviço Público</h2>
        <p className="body-lg mb-4">
          A seguir, os 5 prompts mais utilizados e validados para o contexto do serviço público estadual. Copie, adapte os campos entre colchetes e use agora. Nunca insira dados pessoais reais nos prompts - use placeholders e insira os dados reais apenas no documento final.
        </p>

        <div className="flex-col gap-4 mb-6">
          <div className="semantic-box info">
            <h4 className="label-caps text-secondary-container mb-2">PROMPT 1 - Correção e Formalização de Texto</h4>
            <p className="body-sm font-mono text-white bg-black p-3 rounded">
              "Corrija o texto abaixo, ajustando ortografia, pontuação, concordância e adequando ao padrão formal de redação oficial do serviço público. Mantenha rigorosamente o sentido original. Texto: [COLE SEU TEXTO AQUI]"
            </p>
          </div>
          
          <div className="semantic-box info">
            <h4 className="label-caps text-secondary-container mb-2">PROMPT 2 - Comunicação Interna (CI)</h4>
            <p className="body-sm font-mono text-white bg-black p-3 rounded">
              "Você é um servidor especialista em redação oficial. Escreva uma CI formal para [DESTINATÁRIOS] sobre [ASSUNTO], com os seguintes detalhes: [INFORMAÇÕES ESPECÍFICAS]. Linguagem formal, máximo 2 parágrafos, sem introdução explicativa."
            </p>
          </div>
          
          <div className="semantic-box info">
            <h4 className="label-caps text-secondary-container mb-2">PROMPT 3 - Ofício Formal</h4>
            <p className="body-sm font-mono text-white bg-black p-3 rounded">
              "Você é um servidor especialista em redação oficial do serviço público. Escreva um ofício formal de [ÓRGÃO REMETENTE] para [ÓRGÃO DESTINATÁRIO] solicitando [ASSUNTO ESPECÍFICO]. Linguagem formal conforme normas de redação oficial. Máximo 3 parágrafos."
            </p>
          </div>
          
          <div className="semantic-box info">
            <h4 className="label-caps text-secondary-container mb-2">PROMPT 4 - Pauta de Reunião</h4>
            <p className="body-sm font-mono text-white bg-black p-3 rounded">
              "Crie uma pauta estruturada para reunião de [DURAÇÃO] sobre os seguintes tópicos: [LISTE OS TÓPICOS]. Para cada item, inclua: objetivo, tempo estimado e responsável (use títulos genéricos). Adicione espaço para registro de deliberações. Formato formal."
            </p>
          </div>
          
          <div className="semantic-box info">
            <h4 className="label-caps text-secondary-container mb-2">PROMPT 5 - Resumo Executivo de Documento</h4>
            <p className="body-sm font-mono text-white bg-black p-3 rounded">
              "Leia o documento abaixo e produza: 1) Resumo executivo em 5 linhas, 2) Os 3 pontos mais importantes, 3) Lista de pendências ou ações necessárias identificadas. Documento: [COLE O TEXTO AQUI]"
            </p>
          </div>
        </div>

        <div className="semantic-box warning mb-6">
          <h4 className="label-caps text-danger mb-2">REGRA DE OURO</h4>
          <p className="body-lg mb-2">Nunca insira em ferramentas de IA abertas:</p>
          <ul className="body-sm text-white mb-3" style={{ paddingLeft: '20px' }}>
            <li>Nomes ou dados de pessoas privadas de liberdade</li>
            <li>Números de processos ou prontuários</li>
            <li>Dados de saúde ou conduta de servidores</li>
            <li>Qualquer informação classificada como sigilosa ou reservada</li>
          </ul>
          <p className="body-sm text-secondary">
            Use sempre placeholders: [NOME], [PRONTUÁRIO], [DATA]. Insira os dados reais apenas no documento final, fora da ferramenta.
          </p>
        </div>

        <div className="mt-6 p-4 rounded bg-surface-bright border border-glass-border">
          <p className="body-sm text-secondary">
            <strong>RESUMO DO CAPÍTULO 2:</strong> A Fórmula PTCF - Papel, Tarefa, Contexto e Formato - é o método que transforma pedidos vagos em resultados precisos. Os 5 prompts desta seção podem ser usados imediatamente. A IA gera o rascunho. Você revisa e assina. A responsabilidade é sempre humana.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Capitulo2;
