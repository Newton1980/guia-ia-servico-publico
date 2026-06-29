import React from 'react';

const Capitulo1 = () => {
  return (
    <div className="page-content">
      <div className="glow-orb cyan" style={{ width: '400px', height: '400px', top: '10%', right: '-100px' }}></div>
      
      <div className="flex items-center gap-4 mb-6">
        <div className="headline-h1 text-primary" style={{ fontSize: '120px', lineHeight: '1', opacity: 0.2 }}>1</div>
        <div>
          <h1 className="headline-h1" style={{ fontSize: '32px' }}>O QUE É IA E POR QUE ELA CHEGOU AO SERVIÇO PÚBLICO</h1>
          <p className="body-lg text-secondary mt-1">Democratização, Benefícios Reais e Riscos Concretos</p>
        </div>
      </div>

      <div className="semantic-box prompt mb-8" style={{ borderLeftColor: 'var(--color-tertiary-container)' }}>
        <h4 className="label-caps text-tertiary-container mb-2">Foco de Aprendizado</h4>
        <ul className="body-sm text-text-secondary" style={{ paddingLeft: '20px', margin: 0 }}>
          <li>Conceito prático de LLMs e redes</li>
          <li>Diagnóstico do ecossistema público</li>
          <li>Avaliação de riscos e vieses</li>
        </ul>
      </div>

      <section className="mb-8">
        <h2 className="headline-h2 text-primary mb-3 pb-2" style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>Você Já Usou IA Hoje - Sem Perceber</h2>
        <p className="body-lg mb-4">
          Pense nas últimas 24 horas. Você utilizou GPS para chegar a algum lugar? O filtro de spam do seu e-mail bloqueou alguma mensagem indesejada? Seu celular reconheceu seu rosto para desbloquear?
        </p>
        <p className="body-lg mb-4">
          Todos esses sistemas funcionam com Inteligência Artificial. A IA não é uma tecnologia do futuro. É uma tecnologia do presente - e já opera silenciosamente em dezenas de sistemas que o servidor público usa diariamente. A novidade é que, pela primeira vez na história, qualquer servidor - sem nenhum conhecimento técnico de programação - pode interagir diretamente com ela, em linguagem natural, para executar tarefas do seu trabalho.
        </p>
        <p className="body-lg font-bold text-tertiary">Isso mudou tudo.</p>
      </section>

      <section className="mb-8">
        <h2 className="headline-h2 text-primary mb-4 pb-2" style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>O Que é Inteligência Artificial</h2>
        <p className="body-lg mb-4">
          Inteligência Artificial é a capacidade de sistemas computacionais executarem tarefas que exigiriam inteligência humana: aprender, raciocinar e se adaptar.
        </p>
        
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="glass-card flex-col gap-2" style={{ borderTop: '4px solid var(--color-primary-container)', textAlign: 'center' }}>
            <h3 className="label-caps text-primary-container">APRENDE</h3>
            <p className="body-sm text-secondary">Analisa grandes volumes de dados e identifica padrões</p>
          </div>
          <div className="glass-card flex-col gap-2" style={{ borderTop: '4px solid var(--color-secondary-container)', textAlign: 'center' }}>
            <h3 className="label-caps text-secondary-container">RACIOCINA</h3>
            <p className="body-sm text-secondary">Toma decisões com base no que aprendeu, sem ser reprogramada</p>
          </div>
          <div className="glass-card flex-col gap-2" style={{ borderTop: '4px solid var(--color-tertiary-container)', textAlign: 'center' }}>
            <h3 className="label-caps text-tertiary-container">ADAPTA</h3>
            <p className="body-sm text-secondary">Melhora sua precisão com o tempo e com o uso</p>
          </div>
        </div>

        <div className="semantic-box" style={{ background: 'var(--color-surface-bright)', border: 'none' }}>
          <p className="body-sm text-white">
            <span className="label-caps text-primary mb-1 block">ANALOGIA INSTITUCIONAL:</span>
            A IA é como um estagiário extremamente bem treinado que leu milhões de documentos. Ele não pensa de forma autônoma - ele completa padrões com base no que aprendeu. Por isso pode errar. Por isso toda saída da IA exige revisão humana antes de ser assinada.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="headline-h2 text-primary mb-4 pb-2" style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>Os Três Tipos de IA que o Servidor Precisa Conhecer</h2>
        
        <div className="glass-card overflow-hidden mb-4" style={{ padding: 0 }}>
          <table className="infographic-table" style={{ textAlign: 'center' }}>
            <thead>
              <tr>
                <th className="label-caps text-primary" style={{ width: '33%', textAlign: 'center' }}>IA ESTREITA (NARROW AI)</th>
                <th className="label-caps text-secondary" style={{ width: '33%', textAlign: 'center' }}>IA GENERATIVA</th>
                <th className="label-caps text-tertiary" style={{ width: '33%', textAlign: 'center' }}>IA GERAL (AGI)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="body-sm text-secondary">Faz UMA coisa muito bem: reconhecimento facial, filtro de spam, GPS.</td>
                <td className="body-sm text-secondary">Cria textos, resumos, documentos. Exemplos: ChatGPT, Copilot, Gemini, Claude, NotebookLM.</td>
                <td className="body-sm text-secondary">Raciocínio humano completo. Ainda não existe - é o futuro da área.</td>
              </tr>
              <tr>
                <td className="body-sm text-secondary" style={{ background: 'rgba(255,255,255,0.02)' }}>Já está no sistema penitenciário: controle de acesso e análise de padrões.</td>
                <td className="body-sm text-white font-bold" style={{ background: 'rgba(209,188,255,0.1)' }}>**ESTE GUIA FOCA INTEIRAMENTE NESTE TIPO.**</td>
                <td className="body-sm text-secondary" style={{ background: 'rgba(255,255,255,0.02)' }}>Não deve orientar decisões de gestão no presente.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="headline-h2 text-primary mb-3 pb-2" style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>Como a IA Generativa Funciona</h2>
        <p className="body-lg mb-4">O funcionamento pode ser resumido em três etapas simples:</p>
        <ul className="body-lg text-secondary mb-4 space-y-2" style={{ paddingLeft: '20px' }}>
          <li style={{ listStyleType: 'square' }}>Você escreve um comando (o "prompt") em linguagem natural.</li>
          <li style={{ listStyleType: 'square' }}>A IA processa milhões de dados treinados previamente e gera uma resposta.</li>
          <li style={{ listStyleType: 'square' }}>Ela entrega texto, resumo, correção, estrutura de documento - o que você pediu.</li>
        </ul>
        <p className="body-lg mb-4">
          O que a IA não faz: ela não acessa seus sistemas internos automaticamente e não tem consciência do contexto institucional específico da sua repartição - a menos que você forneça esse contexto no próprio comando.
        </p>
        <p className="body-lg text-white font-bold" style={{ borderLeft: '4px solid var(--color-tertiary)', paddingLeft: '16px' }}>
          Isso explica por que a qualidade do prompt determina a qualidade da resposta.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="headline-h2 text-primary mb-4 pb-2" style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>Benefícios Reais e Riscos Concretos</h2>
        
        <div className="glass-card overflow-hidden mb-6" style={{ padding: 0 }}>
          <table className="infographic-table">
            <thead>
              <tr>
                <th className="label-caps text-success" style={{ width: '50%' }}>v BENEFÍCIOS</th>
                <th className="label-caps text-danger" style={{ width: '50%' }}>/!\ RISCOS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="body-sm text-secondary">Reduz tempo em tarefas repetitivas</td>
                <td className="body-sm text-secondary">Informações falsas ("alucinações")</td>
              </tr>
              <tr>
                <td className="body-sm text-secondary">Melhora a qualidade dos documentos</td>
                <td className="body-sm text-secondary">Vazamento de dados sigilosos</td>
              </tr>
              <tr>
                <td className="body-sm text-secondary">Apoia a tomada de decisão com dados</td>
                <td className="body-sm text-secondary">Dependência excessiva da IA</td>
              </tr>
              <tr>
                <td className="body-sm text-secondary">Padroniza processos e reduz erros</td>
                <td className="body-sm text-secondary">Viés nos resultados gerados</td>
              </tr>
              <tr>
                <td className="body-sm text-secondary">Facilita pesquisa e organização</td>
                <td className="body-sm text-secondary">Uso sem verificação humana</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-4 rounded bg-surface-bright border border-glass-border">
          <p className="body-sm text-secondary">
            <strong>RESUMO DO CAPÍTULO 1:</strong> IA não é tecnologia do futuro - já está na rotina de todo servidor. A IA Generativa (ChatGPT, Copilot, Gemini, Claude, NotebookLM) cria textos e documentos a partir de comandos em linguagem natural. Seus benefícios são reais e mensuráveis. Seus riscos são gerenciáveis - desde que o servidor compreenda os protocolos de uso.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Capitulo1;
