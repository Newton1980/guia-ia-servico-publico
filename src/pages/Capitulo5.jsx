import React from 'react';

const Capitulo5 = () => {
  return (
    <div className="page-content">
      <div className="glow-orb cyan" style={{ width: '400px', height: '400px', top: '10%', right: '-100px' }}></div>
      <div className="glow-orb purple" style={{ width: '300px', height: '300px', bottom: '10%', left: '-100px' }}></div>
      
      <div className="flex items-center gap-4 mb-6">
        <div className="headline-h1 text-primary" style={{ fontSize: '120px', lineHeight: '1', opacity: 0.2 }}>5</div>
        <div>
          <h1 className="headline-h1" style={{ fontSize: '32px' }}>DO DADO À DECISÃO: BI E MARCO REGULATÓRIO</h1>
          <p className="body-lg text-secondary mt-1">Governança de Dados e Inteligência Analítica para Gestores</p>
        </div>
      </div>

      <div className="semantic-box prompt mb-8" style={{ borderLeftColor: 'var(--color-tertiary-container)' }}>
        <h4 className="label-caps text-tertiary-container mb-2">Foco de Aprendizado</h4>
        <ul className="body-sm text-text-secondary" style={{ paddingLeft: '20px', margin: 0 }}>
          <li>Governança de dados e dashboards BI</li>
          <li>Frameworks de maturidade de IA</li>
          <li>Análise do Marco Regulatório BR</li>
        </ul>
      </div>

      <section className="mb-8">
        <h2 className="headline-h2 text-primary mb-3 pb-2" style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>O Salto que Separa o Uso Individual da Transformação Institucional</h2>
        <p className="body-lg mb-4">
          Um servidor que usa IA para redigir um ofício mais rápido ganhou produtividade pessoal. Um gestor que estrutura painéis de Business Intelligence integrados com IA para monitorar indicadores operacionais em tempo real ganhou capacidade de decisão estratégica baseada em evidências.
        </p>
        <p className="body-lg font-bold text-white mb-4">
          São duas categorias completamente diferentes de resultado - e de responsabilidade.
        </p>
        <p className="body-lg mb-4">
          Este capítulo é para o gestor que não se contenta em automatizar tarefas individuais - mas que enxerga na inteligência de dados a oportunidade de transformar a forma como sua unidade toma decisões. Dentro dos limites que a lei define. Com a governança que o cargo exige.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="headline-h2 text-primary mb-4 pb-2" style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>O Arcabouço Legal que Todo Gestor de Dados Precisa Dominar</h2>
        <p className="body-lg mb-4">
          Antes de falar em ferramentas, painéis e indicadores, é indispensável compreender o conjunto normativo que regula o tratamento de dados no setor público brasileiro. Ignorar esse arcabouço não é apenas um risco jurídico - é uma falha de governança que pode comprometer projetos inteiros e responsabilizar gestores pessoalmente.
        </p>
        
        <div className="flex-col gap-4">
          <div className="glass-card p-4 border-l-4" style={{ borderLeftColor: 'var(--color-tertiary)' }}>
            <h3 className="headline-h3 text-white mb-2">1. LGPD - Lei 13.709/2018</h3>
            <p className="body-sm text-secondary mb-2">A LGPD aplica-se integralmente ao setor público e estabelece que todo tratamento de dados pessoais - inclusive em sistemas de BI - precisa de base legal e finalidade definida.</p>
            <ul className="body-sm text-secondary space-y-1" style={{ paddingLeft: '20px' }}>
              <li>No setor público, a principal finalidade do tratamento está relacionada à execução de políticas públicas legalmente previstas - o que dispensa o consentimento específico.</li>
              <li>O órgão que coleta deve informar com transparência qual dado será compartilhado e com quem (Art. 26).</li>
              <li>Dados anonimizados e agregados - que não permitem identificar o titular - não são considerados dados pessoais para fins da LGPD. Painéis de BI devem trabalhar com esse nível de agregação sempre que possível.</li>
              <li>Sistemas que processam dados pessoais em escala exigem elaboração de Relatório de Impacto à Proteção de Dados (RIPD) - Art. 38.</li>
            </ul>
          </div>

          <div className="glass-card p-4 border-l-4" style={{ borderLeftColor: 'var(--color-tertiary)' }}>
            <h3 className="headline-h3 text-white mb-2">2. LAI - Lei 12.527/2011</h3>
            <p className="body-sm text-secondary mb-3">A LAI e a LGPD operam em tensão criativa no setor público. O gestor precisa navegar essa tensão com precisão.</p>
            <div className="semantic-box warning">
              <h4 className="label-caps text-danger mb-2">REGRA DE OURO - LAI vs. LGPD</h4>
              <p className="body-sm text-white">Se o dado permite identificar uma pessoa específica -{'>'} é <strong className="text-danger">LGPD (proteger)</strong>.</p>
              <p className="body-sm text-white">Se o dado descreve um processo, resultado ou recurso público sem identificar pessoas -{'>'} é <strong className="text-success">LAI (publicizar)</strong>.</p>
              <p className="body-sm text-secondary mt-2">Se não tem certeza -{'>'} consulte o setor jurídico antes de incluir no painel.</p>
            </div>
          </div>

          <div className="glass-card p-4 border-l-4" style={{ borderLeftColor: 'var(--color-tertiary)' }}>
            <h3 className="headline-h3 text-white mb-2">3. Portaria SGD/MGI nº 5.950/2023 - Nuvem de Governo</h3>
            <p className="body-sm text-secondary mb-2">Este é o instrumento normativo com maior impacto direto em projetos de BI que envolvam armazenamento em nuvem. A partir de abril de 2024, os órgãos do SISP somente podem utilizar outras formas de contratação de software em situações excepcionais, justificadas e aprovadas pela Secretaria de Governo Digital.</p>
            <ul className="body-sm text-secondary space-y-1" style={{ paddingLeft: '20px' }}>
              <li>Dados sigilosos classificados: armazenamento exclusivo em infraestrutura nacional - nuvem privada ou comunitária em datacenter no território brasileiro. Nuvem pública: vedada.</li>
              <li>Contratos com fornecedores de nuvem devem conter cláusula que proíbe explicitamente o uso dos dados para otimização de modelos de IA pelos provedores.</li>
              <li>A escolha da infraestrutura de armazenamento não é uma decisão técnica livre - é uma decisão normativa baseada na classificação dos dados.</li>
            </ul>
          </div>

          <div className="glass-card p-4 border-l-4" style={{ borderLeftColor: 'var(--color-tertiary)' }}>
            <h3 className="headline-h3 text-white mb-2">4. Decreto nº 12.198/2024 - Infraestrutura Nacional de Dados (IND)</h3>
            <p className="body-sm text-secondary">O Decreto 12.198/2024 estabelece a Infraestrutura Nacional de Dados - conjunto de normas, políticas, arquiteturas e ferramentas que visa promover o uso estratégico dos dados dos órgãos públicos com foco em interoperabilidade e governança. Projetos de BI desenvolvidos em conformidade com a IND estarão alinhados com a trajetória regulatória e terão menor risco de exigir adequações onerosas no futuro.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="headline-h2 text-primary mb-4 pb-2" style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>O Protocolo de Classificação de Dados - Antes de Qualquer Projeto de BI</h2>
        <p className="body-lg mb-4">
          Este é o passo que a maioria dos projetos de BI no setor público pula - e que depois gera os maiores problemas com a ANPD. Antes de selecionar ferramentas, antes de contratar serviços, o gestor deve classificar cada conjunto de dados em uma das quatro categorias:
        </p>

        <div className="glass-card overflow-hidden mb-6" style={{ padding: 0 }}>
          <table className="infographic-table">
            <tbody>
              <tr>
                <td className="label-caps text-danger font-bold w-1/3" style={{ background: 'rgba(255, 50, 50, 0.1)' }}>CATEGORIA 1<br/>Sigilosos</td>
                <td className="body-sm text-white" style={{ background: 'rgba(255, 50, 50, 0.05)' }}>DADOS SIGILOSOS CLASSIFICADOS DADOS COM RESTRIÇÃO DE ACESSO FORMAL - RESERVADOS, SECRETOS OU ULTRASSECRETOS. ARMAZENAMENTO EXCLUSIVO EM INFRAESTRUTURA NACIONAL CONTROLADA. NUVEM PÚBLICA: VEDADA.</td>
              </tr>
              <tr>
                <td className="label-caps text-tertiary font-bold">CATEGORIA 2<br/>LGPD</td>
                <td className="body-sm text-secondary">Dados Pessoais (LGPD) Dados que identificam pessoas físicas - servidores, pessoas privadas de liberdade, usuários. Base legal obrigatória, controles de acesso rígidos, anonimização sempre que possível. Proibida inserção em ferramentas de IA abertas.</td>
              </tr>
              <tr>
                <td className="label-caps text-secondary font-bold">CATEGORIA 3<br/>Institucionais</td>
                <td className="body-sm text-secondary">Dados Institucionais Não Sigilosos Dados operacionais que não identificam pessoas individualmente - indicadores agregados, estatísticas por setor, resultados de programas. Podem ser processados em ferramentas comerciais com cláusulas de confidencialidade.</td>
              </tr>
              <tr>
                <td className="label-caps text-success font-bold">CATEGORIA 4<br/>LAI</td>
                <td className="body-sm text-secondary">Dados Públicos - Transparência Ativa (LAI) Dados que a LAI obriga a publicar proativamente. O painel de BI pode ser a forma mais eficiente e acessível de cumprir essa obrigação ao cidadão.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="headline-h2 text-primary mb-4 pb-2" style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>O Que é Business Intelligence - e Como se Diferencia de um Relatório</h2>
        <p className="body-lg mb-4">
          Business Intelligence (BI) é o conjunto de processos, tecnologias e ferramentas que transformam dados brutos em informação estruturada para apoiar a tomada de decisão. A diferença central em relação ao relatório tradicional é dinâmica: um relatório descreve o que aconteceu. Um painel de BI mostra o que está acontecendo - e permite perguntar por quê e e agora de forma imediata.
        </p>

        <div className="glass-card overflow-hidden mb-6" style={{ padding: 0 }}>
          <table className="infographic-table">
            <thead>
              <tr>
                <th className="label-caps text-primary">DIMENSÃO</th>
                <th className="label-caps text-secondary">RELATÓRIO TRADICIONAL</th>
                <th className="label-caps text-tertiary">PAINEL DE BI COM IA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="body-sm text-white font-bold">Frequência de atualização</td>
                <td className="body-sm text-secondary">Mensal ou sob demanda</td>
                <td className="body-sm text-secondary">Tempo real ou diário automatizado</td>
              </tr>
              <tr>
                <td className="body-sm text-white font-bold">Forma de consumo</td>
                <td className="body-sm text-secondary">Leitura linear</td>
                <td className="body-sm text-secondary">Interativo - filtros, drill-down, alertas</td>
              </tr>
              <tr>
                <td className="body-sm text-white font-bold">Capacidade analítica</td>
                <td className="body-sm text-secondary">Descreve o passado</td>
                <td className="body-sm text-secondary">Identifica padrões, tendências e anomalias</td>
              </tr>
              <tr>
                <td className="body-sm text-white font-bold">Integração entre fontes</td>
                <td className="body-sm text-secondary">Manual - planilhas isoladas</td>
                <td className="body-sm text-secondary">Automática - múltiplas fontes integradas</td>
              </tr>
              <tr>
                <td className="body-sm text-white font-bold">Suporte à decisão</td>
                <td className="body-sm text-secondary">Evidência estática</td>
                <td className="body-sm text-secondary">Análise em tempo real com apoio de IA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="headline-h2 text-primary mb-4 pb-2" style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>Onde a IA Entra no BI - A Combinação que Multiplica o Resultado</h2>
        <p className="body-lg mb-4">
          Business Intelligence e Inteligência Artificial são complementares. A combinação cria capacidades que nenhuma das duas possui isoladamente:
        </p>
        <ul className="body-lg text-secondary mb-4 space-y-2" style={{ paddingLeft: '20px', listStyleType: 'square' }}>
          <li><strong className="text-white">BI sem IA:</strong> excelente para visualizar o que aconteceu e monitorar indicadores. Limitado para prever tendências e processar linguagem natural.</li>
          <li><strong className="text-white">IA sem BI:</strong> excelente para processar linguagem e redigir documentos. Limitada para trabalhar com grandes volumes de dados estruturados e séries históricas.</li>
          <li><strong className="text-white">BI + IA:</strong> o gestor consegue não apenas visualizar indicadores - mas conversar com os dados. Fazer perguntas em linguagem natural e receber análises em segundos.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="headline-h2 text-primary mb-4 pb-2" style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>As Ferramentas de BI por Nível de Maturidade e Conformidade Normativa</h2>
        
        <div className="flex-col gap-4 mb-4">
          <div className="glass-card">
            <h3 className="headline-h3 text-tertiary mb-2">NÍVEL 1 - Entrada Imediata (Custo Zero)</h3>
            <p className="body-sm text-secondary mb-2"><strong>Google Looker Studio:</strong> Gratuito. Compatível com Categoria 3 e 4. Conecta planilhas Google Sheets e arquivos CSV para criar painéis visuais interativos. Ideal para primeiros passos sem custo.</p>
            <p className="body-sm text-secondary"><strong>Power BI Gratuito:</strong> Gratuito. Compatível com Categoria 3 e 4. Integração nativa com Excel. Adequado para secretarias que já usam Office 365.</p>
          </div>
          
          <div className="glass-card">
            <h3 className="headline-h3 text-tertiary mb-2">NÍVEL 2 - Implementação Estruturada</h3>
            <p className="body-sm text-secondary mb-2"><strong>Power BI Pro/Premium:</strong> Licenciado. Compatível com Categoria 2, 3 e 4 (com configuração corporativa). Compartilhamento entre equipes, atualização automática e controles corporativos de acesso.</p>
            <p className="body-sm text-secondary"><strong>Tableau:</strong> Licenciado. Compatível com Categoria 2, 3 e 4 (verificar cláusulas contratuais). Ferramenta líder de mercado em visualização avançada. Exige análise de contrato antes da contratação.</p>
          </div>

          <div className="glass-card">
            <h3 className="headline-h3 text-tertiary mb-2">NÍVEL 3 - Integração Sistêmica Avançada</h3>
            <p className="body-sm text-secondary mb-2"><strong>Nuvem de Governo (Serpro/Dataprev):</strong> Governo Federal. Compatível com Categoria 1, 2, 3 e 4. Solução prioritária para órgãos do Executivo. Conformidade nativa com LGPD, LAI e Portaria 5.950/2023.</p>
            <p className="body-sm text-secondary"><strong>BI integrado ao SIPEN:</strong> Institucional. Compatível com Categoria 1 e 2 (dados operacionais). Integração com o sistema de informação penitenciária para dashboards em tempo real. Exige arquitetura técnica especializada.</p>
          </div>
        </div>

        <div className="semantic-box warning">
          <h4 className="label-caps text-danger mb-2">/!\ ATENÇÃO - Ferramentas de Nível 1 e 2 para dados operacionais de segurança pública</h4>
          <p className="body-sm text-white">Ferramentas gratuitas como Google Looker Studio e Power BI gratuito processam dados nos servidores das empresas desenvolvedoras. Para dados das Categorias 1 e 2 (sigilosos ou pessoais), essas ferramentas são inadequadas sem configuração corporativa específica e cláusulas contratuais de confidencialidade.</p>
          <p className="body-sm text-white mt-2"><strong>Use ferramentas gratuitas exclusivamente para dados das Categorias 3 e 4.</strong> Para Categorias 1 e 2: Nuvem de Governo ou infraestrutura contratada com garantias normativas.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="headline-h2 text-primary mb-4 pb-2" style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>Os KPIs que Todo Gestor Público Deveria Monitorar</h2>
        <p className="body-lg mb-4">A regra fundamental: comece pela pergunta estratégica - não pelos dados disponíveis. O erro mais comum em projetos de BI no setor público é construir painéis com o que é fácil de medir em vez do que é relevante para decidir.</p>
        
        <div className="glass-card overflow-hidden" style={{ padding: 0 }}>
          <table className="infographic-table">
            <tbody>
              <tr>
                <td className="label-caps text-secondary w-1/4">OPERACIONAL</td>
                <td className="body-sm text-secondary">{'>'} VOLUME DE OCORRÊNCIAS POR PERÍODO, TIPO E SETOR (CATEGORIA 3)<br/>{'>'} TAXA DE RESOLUÇÃO E TEMPO MÉDIO DE ENCAMINHAMENTO (CATEGORIA 3)<br/>{'>'} ÍNDICE DE CONFORMIDADE DE ESCALAS E COBERTURAS DE PLANTÃO (CATEGORIA 3)</td>
              </tr>
              <tr>
                <td className="label-caps text-secondary">Capacitação</td>
                <td className="body-sm text-secondary">{'>'} Taxa de participação em capacitações por setor (Categoria 3)<br/>{'>'} Horas de formação por servidor no período (Categoria 3)<br/>{'>'} Evolução de competências por cargo - dados agregados (Categoria 3)</td>
              </tr>
              <tr>
                <td className="label-caps text-secondary">Infraestrutura</td>
                <td className="body-sm text-secondary">{'>'} Status de manutenções programadas e corretivas (Categoria 3)<br/>{'>'} Tempo médio de atendimento de demandas de infraestrutura (Categoria 3)<br/>{'>'} Indicadores de condições das instalações por unidade (Categoria 3)</td>
              </tr>
              <tr>
                <td className="label-caps text-secondary">Transparência LAI</td>
                <td className="body-sm text-secondary">{'>'} Indicadores obrigatórios por lei - publicação proativa (Categoria 4)<br/>{'>'} Resultados de programas e ações para o cidadão (Categoria 4)<br/>{'>'} Gastos por área - Dados abertos (Categoria 4)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="headline-h2 text-primary mb-4 pb-2" style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>Como Usar IA para Analisar Dados Sem Saber Programar</h2>
        <p className="body-lg mb-4">Três abordagens práticas com protocolos de conformidade integrados:</p>
        
        <div className="flex-col gap-4">
          <div className="semantic-box info">
            <h4 className="label-caps text-secondary-container mb-2">PROMPT A: Análise de Dados Agregados via ChatGPT ou Claude</h4>
            <p className="body-sm font-mono text-white bg-black p-3 rounded mb-2">
              "Você é um analista de dados do setor público. Analise os dados abaixo, que representam [DESCRIÇÃO GENÉRICA DOS INDICADORES - ex: total mensal de ocorrências por tipo em 12 meses]. Identifique: 1) três principais tendências, 2) variações significativas, 3) correlações relevantes, 4) recomendações para a gestão com base nos padrões identificados. Dados (APENAS AGREGADOS E ANONIMIZADOS): [COLE OS DADOS]"
            </p>
            <p className="body-sm text-danger font-bold">/!\ Nunca cole microdados com identificação individual. Somente dados das Categorias 3 e 4.</p>
          </div>

          <div className="semantic-box info">
            <h4 className="label-caps text-secondary-container mb-2">PROMPT B: Consulta Analítica a Relatórios via NotebookLM</h4>
            <p className="body-sm font-mono text-white bg-black p-3 rounded mb-2">
              "Com base nos relatórios carregados (SOMENTE documentos não sigilosos das Categorias 3 e 4), qual foi a variação percentual no indicador [X] entre os períodos [A] e [B]? Quais setores apresentaram maior desvio em relação à média? Apresente os dados em formato de tabela comparativa."
            </p>
            <p className="body-sm text-danger font-bold">/!\ Não carregue documentos classificados, sigilosos ou com dados pessoais identificáveis no NotebookLM.</p>
          </div>

          <div className="semantic-box info">
            <h4 className="label-caps text-secondary-container mb-2">PROMPT C: Classificação Normativa de Dados</h4>
            <p className="body-sm font-mono text-white bg-black p-3 rounded mb-2">
              "Você é especialista em proteção de dados no setor público. Analise os conjuntos de dados abaixo e classifique cada um como: Categoria 1 (Sigiloso Classificado), Categoria 2 (LGPD), Categoria 3 (Institucional Não Sigiloso) ou Categoria 4 (Transparência Ativa - LAI). Para cada um: categoria, justificativa e regime normativo aplicável. Conjuntos de dados: [DESCREVA - sem incluir dados reais]"
            </p>
            <p className="body-sm text-danger font-bold">/!\ Use este prompt ANTES de iniciar qualquer projeto de BI para classificar suas fontes de dados.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="headline-h2 text-primary mb-4 pb-2" style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>O Mapa de Maturidade em BI - Com Conformidade em Cada Etapa</h2>
        <p className="body-lg mb-4">A implementação de inteligência analítica é gradual. Este mapa integra maturidade tecnológica e maturidade normativa - porque avançar em uma sem a outra gera risco.</p>
        
        <div className="glass-card overflow-hidden mb-6" style={{ padding: 0 }}>
          <table className="infographic-table">
            <thead>
              <tr>
                <th className="label-caps text-primary w-1/4">ESTÁGIO</th>
                <th className="label-caps text-secondary w-3/8">AÇÃO NORMATIVA</th>
                <th className="label-caps text-tertiary w-3/8">AÇÃO TECNOLÓGICA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="body-sm text-white font-bold">1 DADOS DISPERSOS</td>
                <td className="body-sm text-secondary font-bold text-white">INICIAR MAPEAMENTO E CLASSIFICAÇÃO DOS DADOS NAS 4 CATEGORIAS NORMATIVAS.</td>
                <td className="body-sm text-secondary font-bold text-white">CENTRALIZAR DADOS EM PLANILHA ESTRUTURADA E PADRONIZADA.</td>
              </tr>
              <tr>
                <td className="body-sm text-white font-bold">2 Dados Centralizados</td>
                <td className="body-sm text-secondary">Documentar bases legais LGPD. Designar responsável pela proteção de dados.</td>
                <td className="body-sm text-secondary">Criar primeiras visualizações com Looker Studio (apenas Categorias 3 e 4).</td>
              </tr>
              <tr>
                <td className="body-sm text-white font-bold">3 Visualização Ativa</td>
                <td className="body-sm text-secondary">Formalizar política de acesso. Estabelecer cláusulas de confidencialidade com fornecedores.</td>
                <td className="body-sm text-secondary">Definir KPIs estratégicos e automatizar atualização dos painéis.</td>
              </tr>
              <tr>
                <td className="body-sm text-white font-bold">4 Inteligência Analítica</td>
                <td className="body-sm text-secondary">Elaborar RIPD (Art. 38 LGPD). Verificar conformidade com Portaria 5.950/2023.</td>
                <td className="body-sm text-secondary">Análise preditiva e integração com sistemas institucionais (SIPEN).</td>
              </tr>
              <tr>
                <td className="body-sm text-white font-bold">5 Ecossistema de Dados</td>
                <td className="body-sm text-secondary">Governança formalizada. Auditorias periódicas. Alinhamento com IND (Decreto 12.198/2024).</td>
                <td className="body-sm text-secondary">Integração completa, tempo real, interoperabilidade sistêmica.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-4 rounded bg-success bg-opacity-10 border border-success">
          <h4 className="label-caps text-success mb-2">QUICK WIN - Capítulo 5</h4>
          <p className="body-sm text-success">
            Liste os 5 principais conjuntos de dados que sua unidade produz ou utiliza. Para cada um, responda:<br/>
            1) Permite identificar uma pessoa? -{'>'} Categoria 2 (LGPD)<br/>
            2) Tem restrição formal de acesso? -{'>'} Categoria 1 (Sigiloso)<br/>
            3) Descreve resultados sem identificar pessoas? -{'>'} Categoria 3 ou 4<br/>
            4) A LAI obriga a publicar? -{'>'} Categoria 4 (Transparência ativa)<br/>
            Esse exercício - 30 minutos - é o que a ANPD verifica primeiro em qualquer fiscalização.
          </p>
        </div>

        <div className="mt-6 p-4 rounded bg-surface-bright border border-glass-border">
          <p className="body-sm text-secondary">
            <strong>RESUMO DO CAPÍTULO 5:</strong> BI transforma dados dispersos em inteligência de decisão. Mas no setor público, todo projeto de BI opera sob três regimes normativos simultâneos: LGPD protege dados pessoais, LAI obriga a publicizar dados de interesse público, e a Portaria 5.950/2023 regula onde os dados governamentais podem ser armazenados em nuvem. O gestor que ignora esse arcabouço não constrói um painel - constrói um passivo jurídico. O gestor que o domina transforma a conformidade em vantagem estratégica.
          </p>
        </div>

      </section>
    </div>
  );
};

export default Capitulo5;
