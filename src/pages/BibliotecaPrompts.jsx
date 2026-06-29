import React from 'react';

const BibliotecaPrompts = () => {
  const prompts = [
    // Categoria 1: Documentos Oficiais
    {
      title: 'Redação de Ofício Formal',
      tag: 'Documentos Oficiais',
      text: 'Atue como um redator oficial experiente. Com base nos seguintes pontos: [PONTO 1, 2 e 3], redija um Ofício destinado a [DESTINATÁRIO], seguindo rigorosamente o Manual de Redação da Presidência. Utilize tom formal, conciso e polido. Inclua campos para [ASSUNTO] e [REFERÊNCIA].'
    },
    {
      title: 'Elaboração de Memorando Interno',
      tag: 'Documentos Oficiais',
      text: 'Escreva um Memorando (Comunicação Interna) comunicando a [SETOR ALVO] sobre a nova política de [TEMA]. O texto deve ser direto, em parágrafos curtos, solicitando confirmação de leitura até [DATA].'
    },
    {
      title: 'Rascunho de Portaria Administrativa',
      tag: 'Documentos Oficiais',
      text: 'Atue como assessor jurídico. Elabore a minuta de uma Portaria que institui o grupo de trabalho para [OBJETIVO]. Estruture os Artigos definindo: objeto, composição, prazos de entrega e validade.'
    },
    {
      title: 'Resposta a Requerimento de Cidadão',
      tag: 'Documentos Oficiais',
      text: 'Redija uma resposta oficial indeferindo o pedido [NÚMERO DO PROCESSO] feito pelo cidadão, baseando-se no Artigo [X] da Lei [Y]. A linguagem deve ser clara, empática, porém firme quanto à fundamentação legal.'
    },
    {
      title: 'Simplificação de Linguagem',
      tag: 'Documentos Oficiais',
      text: 'Atue como especialista em linguagem simples. Reescreva este ofício técnico de forma que um cidadão com ensino médio completo compreenda facilmente, sem perder a validade legal: [TEXTO ORIGINAL].'
    },
    
    // Categoria 2: Correção e Qualidade
    {
      title: 'Revisão Técnica e Gramatical',
      tag: 'Correção e Qualidade',
      text: 'Revise o texto abaixo sob três perspectivas: 1) Gramática e ortografia; 2) Clareza e concisão; 3) Adequação ao nível técnico [MÉDIO/ALTO]. Aponte as sugestões de melhoria em formato de lista antes de apresentar a versão final revisada. Texto: [INSERIR TEXTO]'
    },
    {
      title: 'Adequação ao Manual de Redação',
      tag: 'Correção e Qualidade',
      text: 'Verifique se o texto a seguir está adequado às normas cultas e impessoais exigidas no Manual de Redação da Presidência da República. Corrija o que for necessário e destaque o que foi alterado.'
    },
    {
      title: 'Remoção de Ambiguidade Jurídica',
      tag: 'Correção e Qualidade',
      text: 'Analise a seguinte cláusula contratual e identifique possíveis ambiguidades ou brechas de interpretação. Reescreva-a para torná-la blindada e com sentido único: [CLÁUSULA].'
    },
    {
      title: 'Padronização de Termos Técnicos',
      tag: 'Correção e Qualidade',
      text: 'Leia o documento anexo e padronize todos os termos técnicos referentes à [ÁREA], garantindo que o mesmo conceito não seja chamado por nomes diferentes ao longo do texto.'
    },
    
    // Categoria 3: Planejamento
    {
      title: 'Escala e Pauta de Reunião',
      tag: 'Planejamento',
      text: 'Estruture uma pauta de reunião de 60 minutos para tratar de [TEMA]. O objetivo é [OBJETIVO]. Divida o tempo entre abertura, discussão técnica, encaminhamentos e encerramento. Sugira 3 perguntas quebra-gelo pertinentes ao contexto de gestão pública.'
    },
    {
      title: 'Plano de Ação 5W2H',
      tag: 'Planejamento',
      text: 'Transforme o seguinte objetivo governamental [OBJETIVO] em um Plano de Ação prático utilizando a metodologia 5W2H. Retorne a resposta em formato de tabela Markdown.'
    },
    {
      title: 'Roteirização de Evento Institucional',
      tag: 'Planejamento',
      text: 'Crie um roteiro minuto-a-minuto (cerimonial) para a inauguração de [OBRA/SERVIÇO]. Inclua as falas do mestre de cerimônias, os momentos de fala das autoridades e o corte da fita.'
    },
    {
      title: 'Cronograma de Projeto Baseado em Marcos',
      tag: 'Planejamento',
      text: 'Esboce um cronograma de [NÚMERO] meses para o projeto de [TEMA]. Divida em 4 marcos principais de entrega e liste as tarefas essenciais sob cada marco.'
    },
    
    // Categoria 4: Relatórios e Análise
    {
      title: 'Resumo Executivo para Tomada de Decisão',
      tag: 'Relatórios e Análise',
      text: 'Analise os dados/relatório anexado e gere um resumo executivo de uma página. Foque em: 1) Principais gargalos; 2) Impacto financeiro/social estimado; 3) Duas recomendações prioritárias fundamentadas. Utilize bullet points para facilitar a leitura rápida.'
    },
    {
      title: 'Síntese de Legislação Extensa',
      tag: 'Relatórios e Análise',
      text: 'Atue como procurador do estado. Resuma a [LEI/DECRETO] focando apenas nas obrigações impostas às secretarias de fim social, organizando por prazos.'
    },
    {
      title: 'Análise de Sentimentos em Ouvidoria',
      tag: 'Relatórios e Análise',
      text: 'Analise a seguinte lista de manifestações da Ouvidoria sobre o serviço de [SERVIÇO]. Categorize-as em Positivas, Neutras e Negativas, e identifique o "Top 3" de problemas mais citados.'
    },
    {
      title: 'Comparativo de Propostas',
      tag: 'Relatórios e Análise',
      text: 'Crie uma tabela comparativa entre o [MODELO A] e o [MODELO B] apresentados nos textos anexos, destacando Vantagens, Desvantagens, Custos e Prazos de implementação.'
    },
    {
      title: 'Extrator de Metadados Padrão',
      tag: 'Relatórios e Análise',
      text: 'Leia o documento anexo e extraia exatamente as seguintes informações no formato JSON: Nome do Requerente, CNPJ, Data da Solicitação, Valor Pleiteado, e Resumo do Pedido.'
    },
    
    // Categoria 5: Gestão de IA
    {
      title: 'Elaboração de Guia de Uso Ético',
      tag: 'Gestão de IA',
      text: 'Crie um rascunho de política interna para o uso de IAs Generativas no setor [NOME DO SETOR]. Considere a proteção de dados sensíveis, a necessidade de supervisão humana ("human-in-the-loop") e a transparência. O documento deve ser educativo e não apenas punitivo.'
    },
    {
      title: 'Mapeamento de Riscos de IA',
      tag: 'Gestão de IA',
      text: 'Quais são os principais riscos operacionais, jurídicos e de imagem na implementação de uma IA para classificar processos de [TEMA]? Crie uma matriz de risco indicando a probabilidade e o impacto.'
    },
    {
      title: 'Roteiro de Treinamento de Servidores',
      tag: 'Gestão de IA',
      text: 'Elabore a ementa de um workshop de 4 horas chamado "IA no Dia a Dia do Servidor". Defina os tópicos abordados por hora, focando apenas em ganhos práticos de produtividade.'
    },
    
    // Categoria 6: BI e Dados
    {
      title: 'Análise de Tendências em Planilhas',
      tag: 'BI e Dados',
      text: 'A partir da tabela de dados fornecida, identifique anomalias estatísticas ou padrões que fujam da sazonalidade esperada. Sugira 3 hipóteses para explicar essas variações e quais indicadores adicionais deveríamos monitorar para validar essas hipóteses.'
    },
    {
      title: 'Limpeza de Base de Dados (Dicas)',
      tag: 'BI e Dados',
      text: 'Tenho uma base de dados no Excel com [DESCRIÇÃO DOS DADOS]. Sugira quais funções, macros ou passos de tratamento de dados eu devo realizar para remover duplicatas, padronizar nomes e tratar campos vazios.'
    },
    {
      title: 'Prototipação de Estrutura de Dashboard',
      tag: 'BI e Dados',
      text: 'Atue como um analista de BI. Quais são as 5 métricas essenciais (KPIs) e 2 dimensões principais que não podem faltar em um Dashboard gerencial acompanhando [PROJETO/SETOR]?'
    },
    
    // Categoria 7: Licitações e Contratos
    {
      title: 'Análise Preliminar de Contratos',
      tag: 'Licitações',
      text: 'Atue como fiscal de contratos. Verifique se as cláusulas de penalidade do contrato anexo estão alinhadas com as diretrizes de compliance do estado. Destaque omissões graves.'
    },
    {
      title: 'Revisão de Termo de Referência',
      tag: 'Licitações',
      text: 'Analise o Termo de Referência para contratação de [SERVIÇO]. Verifique se as especificações técnicas direcionam a licitação para uma marca específica (quebrando a competitividade).'
    },
    {
      title: 'Resposta a Impugnação de Edital',
      tag: 'Licitações',
      text: 'Redija um rascunho de resposta técnica indeferindo a impugnação feita pela empresa [NOME] ao item [X] do Edital [Y]. Baseie a resposta técnica na justificativa: [MOTIVO].'
    },
    
    // Categoria 8: Recursos Humanos e Comunicação
    {
      title: 'Avaliação de Desempenho (Estrutura)',
      tag: 'Recursos Humanos',
      text: 'Sugira um modelo estruturado em 4 pilares para realizar o feedback anual dos servidores do setor de [ÁREA], focado em desenvolvimento contínuo e métricas observáveis.'
    },
    {
      title: 'Roteiro para Vídeo Institucional',
      tag: 'Comunicação',
      text: 'Crie um roteiro de 60 segundos para as redes sociais do Governo explicando o lançamento do novo portal de serviços [NOME]. Indique as falas e as sugestões de cenas (B-roll).'
    },
    {
      title: 'Comunicado de Crise',
      tag: 'Comunicação',
      text: 'Redija um comunicado à imprensa sobre a interrupção temporária dos serviços do sistema [NOME DO SISTEMA]. Assuma responsabilidade, explique as causas (sem jargão técnico excessivo) e dê uma previsão clara de retorno.'
    }
  ];

  const getColorByTag = (tag) => {
    const colors = {
      'Documentos Oficiais': 'var(--color-primary-container)',
      'Correção e Qualidade': 'var(--color-secondary-container)',
      'Planejamento': 'var(--color-tertiary-container)',
      'Relatórios e Análise': 'var(--color-warning)',
      'Gestão de IA': 'var(--color-success)',
      'BI e Dados': 'var(--color-primary-fixed)',
      'Licitações': 'var(--color-danger)',
      'Recursos Humanos': '#ff6464',
      'Comunicação': '#d4c0ff'
    };
    return colors[tag] || 'var(--color-primary-container)';
  };

  return (
    <div className="page-content">
      <div className="glow-orb cyan" style={{ width: '800px', height: '800px', top: '10%', left: '50%', transform: 'translate(-50%, -10%)' }}></div>
      
      <div className="mb-4 text-center relative z-10">
        <span className="badge mb-1">Bônus 1</span>
        <h1 className="headline-h1">BIBLIOTECA DE 30 PROMPTS INSTITUCIONAIS</h1>
        <p className="body-lg text-secondary mt-2 max-w-2xl mx-auto">
          9 categorias validadas para otimização do fluxo de trabalho no serviço público. Copie, ajuste os espaços entre colchetes [ ] com as variáveis reais do seu projeto e aplique no seu modelo de IA de preferência.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 relative z-10" style={{ maxWidth: '850px', margin: '0 auto' }}>
        {prompts.map((prompt, idx) => {
          const tagColor = getColorByTag(prompt.tag);
          
          return (
            <div key={idx} className="glass-card" style={{ borderColor: `${tagColor}40` }}>
              <div className="flex justify-between items-center mb-2 pb-2" style={{ borderBottom: `1px solid ${tagColor}30` }}>
                <h3 className="headline-h3 flex items-center gap-2">
                  <span style={{ color: tagColor, opacity: 0.8 }}>{String(idx + 1).padStart(2, '0')}.</span> 
                  {prompt.title}
                </h3>
                <span className="label-caps" style={{ 
                  background: `${tagColor}15`, 
                  color: tagColor,
                  padding: '4px 10px', 
                  borderRadius: '4px',
                  border: `1px solid ${tagColor}40`
                }}>
                  {prompt.tag}
                </span>
              </div>
              <div className="semantic-box prompt" style={{ borderLeftColor: tagColor, borderColor: `${tagColor}40` }}>
                <p className="body-lg" style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>{prompt.text}</p>
              </div>
              <div className="flex justify-end mt-3">
                <button 
                  className="action-badge" 
                  style={{ 
                    padding: '6px 16px', 
                    fontSize: '11px',
                    color: tagColor,
                    borderColor: tagColor,
                    boxShadow: `0 0 10px ${tagColor}20`
                  }}
                  onClick={(e) => {
                    e.target.innerText = "Copiado!";
                    setTimeout(() => e.target.innerText = "Copiar Prompt", 2000);
                  }}
                >
                  Copiar Prompt
                </button>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  );
};

export default BibliotecaPrompts;
