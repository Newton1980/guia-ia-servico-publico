import React from 'react';

const Capitulo0 = () => {
  return (
    <div className="page-content">
      <div className="glow-orb cyan" style={{ width: '400px', height: '400px', top: '10%', right: '-100px' }}></div>
      <div className="glow-orb purple" style={{ width: '300px', height: '300px', bottom: '10%', left: '-100px' }}></div>
      
      <div className="flex items-center gap-4 mb-6">
        <div className="headline-h1 text-primary" style={{ fontSize: '120px', lineHeight: '1', opacity: 0.2 }}>0</div>
        <div>
          <span className="badge mb-2">Mentalidade</span>
          <h1 className="headline-h1" style={{ fontSize: '32px' }}>A MENTALIDADE QUE ANTECEDE A TECNOLOGIA</h1>
          <p className="body-lg text-secondary mt-1">Do Uso Individual à Transformação Institucional</p>
        </div>
      </div>

      <div className="semantic-box prompt mb-8" style={{ borderLeftColor: 'var(--color-tertiary-container)' }}>
        <h4 className="label-caps text-tertiary-container mb-2">Foco de Aprendizado</h4>
        <ul className="body-sm text-text-secondary" style={{ paddingLeft: '20px', margin: 0 }}>
          <li>Transição mental para a era da IA</li>
          <li>Diferença entre uso reativo e proativo</li>
          <li>Alinhamento com diretrizes estaduais</li>
        </ul>
      </div>

      <section className="mb-8">
        <h2 className="headline-h2 text-primary mb-3 pb-2" style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>O Problema que Ninguém Nomeia</h2>
        <p className="body-lg mb-4">
          Toda instituição pública tem um inimigo silencioso. Ele não está no orçamento, não está na legislação e não está na chefia. Ele está na frase que todo servidor já ouviu - ou já disse - pelo menos uma vez:
        </p>
        <blockquote className="glass-card mb-4" style={{ fontStyle: 'italic', borderLeft: '4px solid var(--color-danger)', padding: '16px 24px', textAlign: 'center', fontSize: '18px' }}>
          "Sempre foi assim aqui."
        </blockquote>
        <p className="body-lg mb-4">
          Essa frase não é má-fé. É o resultado natural de anos de processos engessados, tentativas frustradas de mudança e uma cultura organizacional que historicamente puniu o erro mais severamente do que recompensou a inovação. O problema é que essa mentalidade tem um custo real e mensurável: retrabalho, documentos de baixa qualidade, decisões baseadas em achismo e servidores altamente capacitados executando tarefas mecânicas que poderiam ter sido automatizadas há anos.
        </p>
        <p className="body-lg mb-4">
          A tecnologia disponível hoje não exige orçamento extra, não exige licitação e não fere nenhuma norma institucional. O que ela exige é uma mudança de perspectiva.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="headline-h2 text-primary mb-3 pb-2" style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>O Que É Inovar no Serviço Público</h2>
        <p className="body-lg mb-4">
          Inovar não é ter uma ideia revolucionária do nada. É encarar um problema conhecido com um olhar diferente - e agir sobre ele com os recursos disponíveis. Três mitos precisam ser desconstruídos:
        </p>
        
        <div className="flex-col gap-4">
          <div className="glass-card p-4 border-l-4" style={{ borderLeftColor: 'var(--color-primary-container)' }}>
            <h3 className="headline-h3 mb-2">Mito 1 - "Inovar é coisa do setor privado."</h3>
            <p className="body-sm text-secondary">
              O setor público brasileiro inova constantemente. A Nota Fiscal Eletrônica, o e-Título e sistemas de triagem digital em tribunais são exemplos. A IA já chegou ao serviço público - a questão é se você vai usá-la com critério ou deixar que chegue de forma desordenada.
            </p>
          </div>
          <div className="glass-card p-4 border-l-4" style={{ borderLeftColor: 'var(--color-primary-container)' }}>
            <h3 className="headline-h3 mb-2">Mito 2 - "Preciso de verba para inovar."</h3>
            <p className="body-sm text-secondary">
              As ferramentas que este guia apresenta têm versões gratuitas robustas o suficiente para a maioria das demandas do serviço público. Mudar o fluxo de atendimento, criar um checklist padronizado ou reorganizar a produção de documentos custa zero reais.
            </p>
          </div>
          <div className="glass-card p-4 border-l-4" style={{ borderLeftColor: 'var(--color-primary-container)' }}>
            <h3 className="headline-h3 mb-2">Mito 3 - "Não posso mudar - tem lei pra tudo."</h3>
            <p className="body-sm text-secondary">
              A lei define o limite. Não define o método. Inovar dentro da legalidade não é apenas possível - é obrigatório para um servidor que leva a sério o interesse público.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="headline-h2 text-primary mb-4">Mentalidade Fechada vs. Mentalidade Inovadora</h2>
        <p className="body-lg mb-4">
          A diferença entre um servidor que trava diante dos desafios e um que encontra soluções não está no cargo, na escolaridade ou no tempo de serviço. Está nas perguntas que cada um faz diante de um problema.
        </p>
        <div className="glass-card overflow-hidden" style={{ padding: 0 }}>
          <table className="infographic-table">
            <thead>
              <tr>
                <th className="label-caps text-danger" style={{ width: '50%' }}>:( MENTALIDADE FECHADA</th>
                <th className="label-caps text-success" style={{ width: '50%' }}>:) MENTALIDADE INOVADORA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="body-sm text-secondary">x Sempre foi assim aqui</td>
                <td className="body-sm text-secondary">{'>'} E se fizéssemos diferente?</td>
              </tr>
              <tr>
                <td className="body-sm text-secondary">x Não é minha função resolver isso</td>
                <td className="body-sm text-secondary">{'>'} Posso contribuir com uma melhoria</td>
              </tr>
              <tr>
                <td className="body-sm text-secondary">x Já tentamos e não funcionou</td>
                <td className="body-sm text-secondary">{'>'} O que aprendemos com aquela tentativa?</td>
              </tr>
              <tr>
                <td className="body-sm text-secondary">x Falta recurso pra mudar</td>
                <td className="body-sm text-secondary">{'>'} O que posso fazer com o que já tenho?</td>
              </tr>
              <tr>
                <td className="body-sm text-secondary">x A chefia não vai aprovar</td>
                <td className="body-sm text-secondary">{'>'} Como apresento isso de forma convincente?</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="headline-h2 text-primary mb-3 pb-2" style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>Design Thinking: O Método Oficial de Inovação</h2>
        <p className="body-lg mb-4">
          O Design Thinking é uma abordagem de resolução de problemas centrada nas pessoas, adaptada ao contexto da administração pública pelo GNova - Laboratório de Inovação em Governo da ENAP. Três valores fundamentais sustentam toda a abordagem:
        </p>
        <ul className="body-lg mb-4 space-y-2">
          <li><strong className="text-white">Empatia</strong> - colocar as pessoas no centro de qualquer solução, entendendo suas necessidades antes de propor mudanças.</li>
          <li><strong className="text-white">Colaboração</strong> - envolver diferentes atores e perspectivas.</li>
          <li><strong className="text-white">Experimentação</strong> - aprender com erros de forma controlada e barata, antes de ganhar escala.</li>
        </ul>
        
        <p className="body-lg mb-3">O processo se estrutura em cinco etapas (nomenclatura oficial GNova/ENAP):</p>
        <div className="glass-card p-6 mb-4">
          <ul className="body-lg space-y-3">
            <li><strong className="text-primary">1. Entender (Empatia)</strong> - Observe, converse, ouça. Não assuma - investigue.</li>
            <li><strong className="text-primary">2. Definir</strong> - Formule o problema com clareza: "Como poderíamos [resolver X] para [quem]?"</li>
            <li><strong className="text-primary">3. Imaginar (Ideação)</strong> - Gere muitas ideias sem julgamento. Quantidade antes de qualidade.</li>
            <li><strong className="text-primary">4. Projetar (Prototipação)</strong> - Crie versões simples e rápidas para testar antes de implementar.</li>
            <li><strong className="text-primary">5. Testar</strong> - Teste com pessoas reais, colete feedback e refine. Falhar cedo é barato.</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="semantic-box success">
          <h3 className="headline-h3 text-success mb-2">QUICK WIN</h3>
          <p className="body-sm mb-3">
            A IA não substitui o Design Thinking - ela potencializa cada etapa. Na fase Entender: analisa padrões em grandes volumes de dados. Na fase Imaginar: funciona como brainstorm acelerado e sem inibições. Na fase Projetar: produz rascunhos de documentos em minutos. Na fase Testar: organiza feedback e sugere refinamentos com base em dados.
          </p>
          <p className="body-sm text-white">
            <strong>ANTES DE AVANÇAR:</strong> Identifique UM processo repetitivo na sua rotina que consome tempo desproporcional. Pode ser a redação de um documento, a organização de uma escala ou a produção de um relatório. Apenas um. Anote: "O processo que mais me consome tempo desnecessário é: ___". Ao final deste guia, você terá um prompt pronto para acelerar exatamente esse processo.
          </p>
        </div>
        
        <div className="mt-6 p-4 rounded bg-surface-bright border border-glass-border">
          <p className="body-sm text-secondary">
            <strong>RESUMO DO CAPÍTULO 0:</strong> Inovar no serviço público começa com uma mudança de pergunta, não de orçamento. O Design Thinking - método oficial do GNova/ENAP - organiza o pensamento em 5 etapas centradas nas pessoas. A IA é o acelerador. Mas a mentalidade é o motor.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Capitulo0;
