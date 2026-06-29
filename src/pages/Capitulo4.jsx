import React from 'react';

const Capitulo4 = () => {
  return (
    <div className="page-content">
      <div className="glow-orb cyan" style={{ width: '400px', height: '400px', top: '10%', right: '-100px' }}></div>
      
      <div className="flex items-center gap-4 mb-6">
        <div className="headline-h1 text-primary" style={{ fontSize: '120px', lineHeight: '1', opacity: 0.2 }}>4</div>
        <div>
          <h1 className="headline-h1" style={{ fontSize: '32px' }}>ÉTICA, LGPD E SIGILO: O QUE NINGUÉM TE CONTA</h1>
          <p className="body-lg text-secondary mt-1">Os Limites Legais e as Boas Práticas Institucionais</p>
        </div>
      </div>

      <div className="semantic-box prompt mb-8" style={{ borderLeftColor: 'var(--color-tertiary-container)' }}>
        <h4 className="label-caps text-tertiary-container mb-2">Foco de Aprendizado</h4>
        <ul className="body-sm text-text-secondary" style={{ paddingLeft: '20px', margin: 0 }}>
          <li>Limites regulatórios (LGPD / LAI)</li>
          <li>Tratamento de dados sensíveis</li>
          <li>Boas práticas de compliance</li>
        </ul>
      </div>

      <section className="mb-8">
        <h2 className="headline-h2 text-primary mb-3 pb-2" style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>Ética, LGPD e Sigilo: O Que Você Precisa Saber</h2>
        <p className="body-lg mb-6">
          A Inteligência Artificial é poderosa. Mas no serviço público, usar sem critério pode gerar consequências disciplinares, penais e institucionais - independentemente da intenção do servidor.
        </p>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="glass-card flex-col gap-2" style={{ borderTop: '4px solid var(--color-danger)', textAlign: 'center' }}>
            <h3 className="label-caps text-danger">RISCO LEGAL</h3>
            <p className="body-sm text-white">PODE CONFIGURAR VIOLAÇÃO DE SIGILO FUNCIONAL, CRIME DE RESPONSABILIDADE OU INFRAÇÃO DISCIPLINAR NO ESTATUTO DOS SERVIDORES.</p>
          </div>
          <div className="glass-card flex-col gap-2" style={{ borderTop: '4px solid var(--color-danger)', textAlign: 'center' }}>
            <h3 className="label-caps text-danger">RISCO DE DADOS</h3>
            <p className="body-sm text-white">INFORMAÇÕES INSERIDAS EM FERRAMENTAS ABERTAS DE IA PODEM SER ARMAZENADAS E PROCESSADAS FORA DO AMBIENTE INSTITUCIONAL.</p>
          </div>
          <div className="glass-card flex-col gap-2" style={{ borderTop: '4px solid var(--color-danger)', textAlign: 'center' }}>
            <h3 className="label-caps text-danger">RISCO INSTITUCIONAL</h3>
            <p className="body-sm text-white">DOCUMENTOS COM ERROS GERADOS POR IA E ASSINADOS SEM REVISÃO COMPROMETEM A CREDIBILIDADE DA UNIDADE E DO SERVIDOR.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="headline-h2 text-primary mb-4 pb-2" style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>Os 3 Cenários de Risco Concreto</h2>
        
        <div className="flex-col gap-4">
          <div className="semantic-box warning">
            <h3 className="headline-h3 text-danger mb-2">CENÁRIO 1 - O Documento com Dados Reais</h3>
            <p className="body-sm text-secondary mb-2">Um servidor copia o texto de um processo - com nome, prontuário e dados de pessoa privada de liberdade - e cola no ChatGPT para reescrever de forma mais formal.</p>
            <p className="body-sm text-secondary mb-2"><strong className="text-danger">Consequência:</strong> dados pessoais saíram do ambiente institucional. Violação de sigilo funcional + infração à LGPD. Responsabilidade disciplinar e potencial civil.</p>
            <p className="body-sm text-white"><strong className="text-success">Como evitar:</strong> substitua todos os dados reais por placeholders antes de enviar à IA. Use [NOME DA PESSOA], [NÚMERO DO PRONTUÁRIO]. Insira os dados reais só no documento final.</p>
          </div>

          <div className="semantic-box warning">
            <h3 className="headline-h3 text-danger mb-2">CENÁRIO 2 - O Relatório Assinado sem Leitura</h3>
            <p className="body-sm text-secondary mb-2">Um servidor usa IA para produzir um relatório mensal. O texto ficou coerente e profissional. O servidor assina sem ler com atenção. O relatório contém um número errado em uma ocorrência crítica - a IA processou os dados de forma incorreta.</p>
            <p className="body-sm text-secondary mb-2"><strong className="text-danger">Consequência:</strong> documento oficial com dado falso assinado e protocolado. Responsabilidade funcional. Possível questionamento judicial.</p>
            <p className="body-sm text-white"><strong className="text-success">Como evitar:</strong> nunca assine sem ler. Confira cada número, cada data, cada nome.</p>
          </div>

          <div className="semantic-box warning">
            <h3 className="headline-h3 text-danger mb-2">CENÁRIO 3 - A Lei que Não Existe</h3>
            <p className="body-sm text-secondary mb-2">Um gestor pede à IA que cite o artigo de lei que prevê determinada situação. A IA responde com número de artigo, número de lei e redação completa - de forma absolutamente convincente. O gestor usa a referência no despacho sem verificar. A lei citada não existe. O artigo foi inventado pela IA.</p>
            <p className="body-sm text-secondary mb-2"><strong className="text-danger">Consequência:</strong> ato administrativo com fundamento legal falso. Nulidade do ato.</p>
            <p className="body-sm text-white"><strong className="text-success">Como evitar:</strong> nunca utilize referências legais da IA sem verificar em planalto.gov.br ou lexml.gov.br.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="headline-h2 text-primary mb-4 pb-2" style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>As 6 Boas Práticas Institucionais</h2>
        <p className="body-lg mb-4">Estas práticas transformam o arcabouço legal em ações concretas do dia a dia:</p>
        
        <div className="glass-card mb-6">
          <ul className="body-lg space-y-4">
            <li>
              <strong className="text-tertiary">1. Anonimize Antes de Usar</strong>
              <p className="body-sm text-secondary mt-1">Substitua dados reais por placeholders em qualquer prompt. [NOME], [PRONTUÁRIO], [DATA]. Esse único hábito elimina a maior parte dos riscos de vazamento.</p>
            </li>
            <li>
              <strong className="text-tertiary">2. Revise Tudo Antes de Assinar</strong>
              <p className="body-sm text-secondary mt-1">Leia do início ao fim. Confira dados, datas, referências e destinatários. A assinatura é sua - e o erro também.</p>
            </li>
            <li>
              <strong className="text-tertiary">3. Nunca Cite Leis sem Verificar</strong>
              <p className="body-sm text-secondary mt-1">Acesse sempre o texto oficial em planalto.gov.br ou lexml.gov.br. A IA pode inventar artigos que não existem.</p>
            </li>
            <li>
              <strong className="text-tertiary">4. Prefira Ferramentas Aprovadas</strong>
              <p className="body-sm text-secondary mt-1">Se sua instituição tem política de TI sobre ferramentas autorizadas, siga-a. Em caso de dúvida, consulte o setor de tecnologia.</p>
            </li>
            <li>
              <strong className="text-tertiary">5. Mantenha Registro do Processo</strong>
              <p className="body-sm text-secondary mt-1">Para documentos importantes, registre o prompt utilizado, as alterações feitas e a versão final assinada. Isso cria trilha de auditoria.</p>
            </li>
            <li>
              <strong className="text-tertiary">6. Atualize seu Conhecimento</strong>
              <p className="body-sm text-secondary mt-1">O campo de IA evolui rapidamente. Participe de capacitações e acompanhe as orientações da ENAP e do seu órgão estadual.</p>
            </li>
          </ul>
        </div>

        <div className="mt-6 p-4 rounded bg-surface-bright border border-glass-border">
          <p className="body-sm text-secondary">
            <strong>RESUMO DO CAPÍTULO 4:</strong> Usar IA sem protocolo no serviço público pode gerar consequências disciplinares, penais e institucionais - independentemente da intenção. Três limites são inegociáveis: nunca insira dados sigilosos em ferramentas abertas, nunca assine sem revisar e nunca cite legislação sem verificar na fonte oficial. A ferramenta não tem responsabilidade. O servidor, sim.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Capitulo4;
