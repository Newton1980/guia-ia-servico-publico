import React from 'react';

const Capitulo6 = () => {
  return (
    <div className="page-content">
      <div className="glow-orb cyan" style={{ width: '400px', height: '400px', top: '10%', right: '-100px' }}></div>
      <div className="glow-orb purple" style={{ width: '300px', height: '300px', bottom: '10%', left: '-100px' }}></div>
      
      <div className="flex items-center gap-4 mb-6">
        <div className="headline-h1 text-primary" style={{ fontSize: '120px', lineHeight: '1', opacity: 0.2 }}>6</div>
        <div>
          <h1 className="headline-h1" style={{ fontSize: '32px' }}>IMPLEMENTAÇÃO NA SUA REPARTIÇÃO EM 30 DIAS</h1>
          <p className="body-lg text-secondary mt-1">Plano Executivo Semana a Semana com Entregáveis Verificáveis</p>
        </div>
      </div>

      <div className="semantic-box prompt mb-8" style={{ borderLeftColor: 'var(--color-tertiary-container)' }}>
        <h4 className="label-caps text-tertiary-container mb-2">Foco de Aprendizado</h4>
        <ul className="body-sm text-text-secondary" style={{ paddingLeft: '20px', margin: 0 }}>
          <li>Cronograma detalhado (S1 a S4)</li>
          <li>Gestão de mudança e inovação</li>
          <li>Indicadores de produtividade (KPIs)</li>
        </ul>
      </div>

      <section className="mb-8">
        <h2 className="headline-h2 text-primary mb-3 pb-2" style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>O Gestor que Leu Tudo e Não Fez Nada</h2>
        <p className="body-lg mb-4">
          Ele participou de capacitações. Concordou com cada diagnóstico. Saiu das reuniões energizado. E três meses depois, a repartição funcionava exatamente igual ao dia anterior.
        </p>
        <p className="body-lg text-white font-bold mb-4">
          Não por falta de vontade. Por falta de um plano.
        </p>
        <p className="body-lg mb-4">
          Este capítulo entrega o que os anteriores não entregaram: um plano executivo de 30 dias, semana a semana, com ações concretas, responsáveis por função e entregáveis verificáveis.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="headline-h2 text-primary mb-4 pb-2" style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>Antes de Começar - Os 3 Pré-Requisitos</h2>
        
        <div className="flex-col gap-4 mb-6">
          <div className="glass-card p-4 border-l-4" style={{ borderLeftColor: 'var(--color-primary-container)' }}>
            <h3 className="headline-h3 text-white mb-2">PRÉ-REQUISITO 1: MANDATO E LEGITIMIDADE</h3>
            <p className="body-sm text-secondary">
              OBTENHA ANUÊNCIA DA CHEFIA IMEDIATA, ALINHE COM O SETOR DE TI DO ÓRGÃO E MAPEIE AS FERRAMENTAS AUTORIZADAS PELA POLÍTICA INSTITUCIONAL. IMPLEMENTAÇÃO SEM MANDATO GERA RESISTÊNCIA QUE INVIABILIZA RESULTADOS.
            </p>
          </div>
          
          <div className="glass-card p-4 border-l-4" style={{ borderLeftColor: 'var(--color-secondary-container)' }}>
            <h3 className="headline-h3 text-white mb-2">Pré-Requisito 2: Diagnóstico de Maturidade</h3>
            <p className="body-sm text-secondary">
              Identifique em qual estágio do Mapa de Maturidade (Capítulo 5) sua unidade se encontra. O plano de 30 dias foi desenhado para unidades nos Estágios 1 ou 2. Se já está no 3 ou 4, use como checklist de lacunas.
            </p>
          </div>
          
          <div className="glass-card p-4 border-l-4" style={{ borderLeftColor: 'var(--color-tertiary-container)' }}>
            <h3 className="headline-h3 text-white mb-2">Pré-Requisito 3: Problema-Alvo Definido</h3>
            <p className="body-sm text-secondary">
              Complete esta frase: "O processo na minha unidade que mais consome tempo de forma desproporcional é: ___". O plano de 30 dias foca em resolver UM problema com excelência - não tudo ao mesmo tempo.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="headline-h2 text-primary mb-4 pb-2" style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>O Plano Executivo (Semanas 1 a 4)</h2>

        {/* SEMANA 1 */}
        <div className="semantic-box info mb-4">
          <h3 className="headline-h3 text-secondary-container mb-2">SEMANA 1 - DIAGNÓSTICO, MANDATO E PREPARAÇÃO</h3>
          <p className="body-sm text-white mb-4">*Objetivo: Mapear o estado atual, obter o mandato necessário e preparar o terreno para a implementação.*</p>
          
          <ul className="body-sm space-y-3">
            <li><strong className="text-secondary-container">Dias 1-2: Mapeamento de Processos e Dados.</strong> Reúna 2 a 3 servidores que conhecem bem os processos da unidade. Preencha a Matriz de Processos e Dados.</li>
            <li><strong className="text-secondary-container">Dia 3: Reunião com TI e Jurídico.</strong> Pauta: 1) Ferramentas autorizadas pela política de TI.</li>
            <li><strong className="text-secondary-container">Dias 4-5: Seleção de Ferramenta e Escopo do Piloto.</strong> Selecione a ferramenta principal com base nas autorizações obtidas e na classificação dos dados. Defina o escopo exato do piloto: UM processo, início e fim claros, resultado verificável em 30 dias. Selecione 3 a 5 servidores para o piloto. <em className="text-white">Entregável: Documento de escopo.</em></li>
          </ul>
        </div>

        {/* SEMANA 2 */}
        <div className="semantic-box info mb-4">
          <h3 className="headline-h3 text-secondary-container mb-2">SEMANA 2 - CAPACITAÇÃO E PRIMEIROS RESULTADOS</h3>
          <p className="body-sm text-white mb-4">*Objetivo: Capacitar a equipe do piloto e produzir os primeiros resultados concretos com IA.*</p>
          
          <ul className="body-sm space-y-3">
            <li><strong className="text-secondary-container">Dias 6-7: Capacitação da Equipe (2 horas).</strong> Bloco 1: O que é e o que não é IA generativa. Bloco 2: Fórmula PTCF e protocolos de segurança. Bloco 3: Prática com o processo-alvo. Cada servidor produz um resultado real antes de sair. <em className="text-white">Entregável: Registro de capacitação + prompts aprovados.</em></li>
            <li><strong className="text-secondary-container">Dias 8-10: Primeiros 3 Dias de Uso Real.</strong> A equipe usa a ferramenta no processo-alvo com os prompts aprovados na capacitação. Registro diário na Planilha de Acompanhamento: tempo sem IA.</li>
          </ul>
        </div>

        {/* SEMANA 3 */}
        <div className="semantic-box info mb-4">
          <h3 className="headline-h3 text-secondary-container mb-2">SEMANA 3 - REFINAMENTO, PADRONIZAÇÃO E EXPANSÃO CONTROLADA</h3>
          <p className="body-sm text-white mb-4">*Objetivo: Refinar os prompts com base nos dados reais, padronizar e iniciar a expansão.*</p>
          
          <ul className="body-sm space-y-3">
            <li><strong className="text-secondary-container">Dias 11-12: Reunião de Refinamento.</strong> Analise os dados da planilha: quais prompts geraram melhores resultados? Quais situações a IA não atendeu adequadamente? O tempo reduziu conforme esperado? Refine os prompts. <em className="text-white">Entregável: Biblioteca de prompts refinada (v2.0).</em></li>
            <li><strong className="text-secondary-container">Dias 13-15: Guia de Uso + Relatório Parcial.</strong> Produza o Guia de Uso de IA da Unidade: objetivo, escopo, ferramenta autorizada, protocolos de segurança. Distribua para toda a equipe. Produza o Relatório Parcial para a chefia: dados reais, comparativo antes/depois, próximos passos. <em className="text-white">Entregável: Guia de Uso v1.0 + Relatório Parcial.</em></li>
          </ul>
        </div>

        {/* SEMANA 4 */}
        <div className="semantic-box info mb-4">
          <h3 className="headline-h3 text-secondary-container mb-2">SEMANA 4 - AVALIAÇÃO, INSTITUCIONALIZAÇÃO E PRÓXIMOS PASSOS</h3>
          <p className="body-sm text-white mb-4">*Objetivo: Avaliar os resultados do piloto, institucionalizar o que funcionou e planejar a expansão.*</p>
          
          <ul className="body-sm space-y-3">
            <li><strong className="text-secondary-container">Dias 16-25: Continuidade e Coleta de Dados.</strong> A equipe continua usando a ferramenta com o prompt padronizado. O gestor monitora a planilha e identifica padrões nos dados. Inicie a conversa com outros setores candidatos à expansão.</li>
            <li><strong className="text-secondary-container">Dias 26-27: Avaliação Final do Piloto.</strong> Métricas quantitativas: redução de tempo, volume produzido, taxa de revisão. Métricas qualitativas: avaliação de qualidade pela equipe e pela chefia. Pergunta central: o critério de sucesso foi atingido? <em className="text-white">Entregável: Relatório de avaliação.</em></li>
            <li><strong className="text-secondary-container">Dias 28-30: Relatório Final + Planejamento do Próximo Ciclo.</strong> Produza o Relatório Final e a Proposta de Expansão. Planeje o próximo ciclo com a equipe treinada. <em className="text-white">Entregáveis entregues à chefia no Dia 28.</em></li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="headline-h2 text-primary mb-4 pb-2" style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>Como Lidar com a Resistência</h2>
        
        <div className="glass-card overflow-hidden mb-6" style={{ padding: 0 }}>
          <table className="infographic-table">
            <thead>
              <tr>
                <th className="label-caps text-danger" style={{ width: '30%' }}>RESISTÊNCIA</th>
                <th className="label-caps text-success" style={{ width: '70%' }}>COMO ENDEREÇAR</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="body-sm text-white font-bold">**"Isso vai substituir meu trabalho"**</td>
                <td className="body-sm text-secondary">Dados concretos: a IA assume tarefas mecânicas - não funções de julgamento e decisão. O servidor que usa IA não é substituído. É promovido para tarefas que realmente exigem sua experiência.</td>
              </tr>
              <tr>
                <td className="body-sm text-white font-bold">**"Não tenho tempo para aprender"**</td>
                <td className="body-sm text-secondary">A capacitação de 2 horas da Semana 2 foi desenhada para esse perfil. Em 2 horas, o servidor produz seu primeiro resultado real. A ferramenta economiza mais tempo do que levou para aprender.</td>
              </tr>
              <tr>
                <td className="body-sm text-white font-bold">**"Não confio no que a IA produz"**</td>
                <td className="body-sm text-secondary">Esta é a resistência mais saudável - cultive-a. O servidor que não confia cegamente é exatamente o que vai revisar o output antes de assinar. Reforce que a desconfiança crítica é um protocolo, não um obstáculo.</td>
              </tr>
              <tr>
                <td className="body-sm text-white font-bold">**"A chefia não vai aprovar"**</td>
                <td className="body-sm text-secondary">Este é o Pré-Requisito 1. Se o mandato foi obtido corretamente na Semana 1, essa resistência não tem base. Se não foi obtido - pare tudo e resolva isso antes de avançar.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="semantic-box warning mb-6">
          <h4 className="label-caps text-tertiary mb-2">Para Implementações de Maior Escala</h4>
          <p className="body-sm text-white">
            O plano de 30 dias foi desenhado para UMA unidade, UM processo-alvo e até 15 pessoas. Quando o escopo é diferente (uma subsecretaria inteira, implementação de BI em conformidade com a ANPD, etc), o modelo muda.
          </p>
          <p className="body-sm text-white mt-2">
            Implementações sistêmicas exigem: mapeamento completo, RIPD conforme LGPD, arquitetura de integração sistêmica, programa de capacitação em cascata e governança de dados formalizada. <strong className="text-secondary">Esse nível de implementação é exatamente para o que a assessoria especializada existe.</strong>
          </p>
        </div>

        <div className="mt-6 p-4 rounded bg-surface-bright border border-glass-border">
          <p className="body-sm text-secondary">
            <strong>RESUMO DO CAPÍTULO 6:</strong> Implementar IA em uma repartição pública não começa pela ferramenta - começa pelo mandato, pelo diagnóstico e pela escolha de um problema específico para resolver. O plano de 30 dias estrutura esse processo em 4 semanas com ações concretas e entregáveis verificáveis. O resultado não é apenas uma equipe que usa IA - é uma unidade que gerou evidência interna de que a transformação é possível, mensurável e replicável.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Capitulo6;
