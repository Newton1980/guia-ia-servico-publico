import React from 'react';

const SobreAutor = () => {
  return (
    <div className="page-content">
      <div className="glow-orb purple" style={{ width: '500px', height: '500px', top: '20%', right: '-150px' }}></div>
      
      <div className="flex items-center gap-4 mb-6">
        <div>
          <h1 className="headline-h1" style={{ fontSize: '32px' }}>SOBRE O AUTOR</h1>
          <p className="body-lg text-secondary mt-1">Guia Estratégico de IA</p>
        </div>
      </div>

      <div className="semantic-box info mb-8">
        <h4 className="label-caps text-secondary-container mb-2">INFORMAÇÃO</h4>
        <p className="body-lg text-white">Newton Douglas da Silva Nascimento</p>
        <p className="body-sm text-secondary mt-1">Uma trajetória construída de dentro para fora do sistema</p>
      </div>

      <section className="mb-8">
        <p className="body-lg mb-4">
          Existem dois tipos de especialista em inovação no setor público. O primeiro conhece o tema pela literatura. O segundo conhece pelo terreno - com as restrições reais, a legislação real e as pessoas reais que precisam de resultado.
        </p>
        <p className="body-lg text-tertiary mb-6" style={{ borderLeft: '4px solid var(--color-tertiary)', paddingLeft: '16px' }}>
          Este guia foi escrito pelo segundo tipo.
        </p>

        <div className="glass-card overflow-hidden mb-8" style={{ padding: 0 }}>
          <table className="infographic-table">
            <thead>
              <tr>
                <th className="label-caps text-primary" style={{ width: '33%' }}>DIMENSÃO</th>
                <th className="label-caps text-secondary" style={{ width: '67%' }}>FORMAÇÃO E EXPERIÊNCIA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="body-sm text-white font-bold">**Carreira Institucional**</td>
                <td className="body-sm text-secondary">18 anos como Inspetor de Polícia Penal · 25 anos de serviço público · Chefe de Turma, Segurança, Subdiretor, Divisão de Busca e Recaptura, Assessor de Suporte Técnico da SISPEN</td>
              </tr>
              <tr>
                <td className="body-sm text-white font-bold">**Posição Atual**</td>
                <td className="body-sm text-secondary">Superintendente de Infraestrutura, Ensino e Inovação Prisional - Secretaria de Polícia Penal/RJ · Implantação de laboratórios de inovação em parceria com ACADEPEN e STI</td>
              </tr>
              <tr>
                <td className="body-sm text-white font-bold">**Formação Tecnológica**</td>
                <td className="body-sm text-secondary">Tecnólogo em Big Data e Inteligência Analítica (Uniasselvi) · Pós-graduando em Análise de Dados como Apoio a Políticas Públicas (UFRRJ)</td>
              </tr>
              <tr>
                <td className="body-sm text-white font-bold">**Formação Estratégica**</td>
                <td className="body-sm text-secondary">Especialista em Inteligência Estratégica e Policial (Gran Cursos) · Especialista em Gestão Pública (TCE-RJ) · MBA em ASG no Setor Público (FGV) · Liderança em Segurança Pública (FGV/Instituto Leme)</td>
              </tr>
              <tr>
                <td className="body-sm text-white font-bold">**Docência Institucional**</td>
                <td className="body-sm text-secondary">Instrutor na ACADEPEN: Planejamento Operacional · Coleta e Análise de Dados · IA no Serviço Público Estadual · IA na Atividade Correicional</td>
              </tr>
            </tbody>
          </table>
        </div>

        <blockquote className="glass-card mb-8" style={{ borderLeft: '4px solid var(--color-primary-container)' }}>
          <p className="body-lg text-white font-italic mb-4">
            "A inovação no serviço público não começa com tecnologia cara ou grandes projetos de transformação digital. Começa com um servidor que decide fazer diferente - com os recursos que já tem, dentro dos limites que a lei define, com a responsabilidade que o cargo exige. A IA é a ferramenta mais poderosa disponível agora para esse movimento. O que determina se ela serve ao bem público não é o algoritmo - é a postura de quem a usa."
          </p>
          <footer className="body-sm text-secondary">- Newton Douglas da Silva Nascimento</footer>
        </blockquote>
      </section>

      <section className="mb-8">
        <h2 className="headline-h2 text-primary mb-3 pb-2" style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>DIFERENCIAL</h2>
        
        <div className="semantic-box info mb-6">
          <h4 className="label-caps text-secondary-container mb-2">INFORMAÇÃO</h4>
          <p className="body-sm text-white">O Que Você Recebe Aqui e não encontra em nenhuma outra versão</p>
        </div>

        <p className="body-lg mb-6">
          Esta edição foi construída para um perfil específico de leitor: o gestor, coordenador, diretor ou subsecretário que já passou da fase de entender o que é IA - e precisa agora saber como implementar, governar e escalar o uso de inteligência analítica em sua unidade de forma segura, legal e estratégica.
        </p>

        <div className="glass-card overflow-hidden mb-6" style={{ padding: 0 }}>
          <table className="infographic-table" style={{ textAlign: 'center' }}>
            <thead>
              <tr>
                <th className="label-caps text-primary" style={{ textAlign: 'center' }}>CONTEÚDO</th>
                <th className="label-caps text-secondary" style={{ textAlign: 'center' }}>VERSÃO GRATUITA</th>
                <th className="label-caps text-secondary" style={{ textAlign: 'center' }}>GUIA COMPLETO R$29</th>
                <th className="label-caps text-tertiary font-bold" style={{ textAlign: 'center' }}>GUIA ESTRATÉGICO R$47</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="body-sm text-white font-bold" style={{ textAlign: 'left' }}>**Capítulos 0 a 1 (Mentalidade e IA)**</td>
                <td className="body-sm text-secondary">v</td>
                <td className="body-sm text-secondary">v</td>
                <td className="body-sm text-secondary font-bold">v</td>
              </tr>
              <tr>
                <td className="body-sm text-white font-bold" style={{ textAlign: 'left' }}>**Fórmula PTCF + Ferramentas**</td>
                <td className="body-sm text-secondary">5 prompts</td>
                <td className="body-sm text-secondary">10 prompts</td>
                <td className="body-sm text-secondary font-bold">10 prompts</td>
              </tr>
              <tr>
                <td className="body-sm text-white font-bold" style={{ textAlign: 'left' }}>**6 Aplicações Práticas Completas**</td>
                <td className="body-sm text-secondary">-</td>
                <td className="body-sm text-secondary">v</td>
                <td className="body-sm text-secondary font-bold">v</td>
              </tr>
              <tr>
                <td className="body-sm text-white font-bold" style={{ textAlign: 'left' }}>**Capítulo 4 - Ética e LGPD**</td>
                <td className="body-sm text-secondary">Básico</td>
                <td className="body-sm text-secondary">Completo</td>
                <td className="body-sm text-secondary font-bold">Completo</td>
              </tr>
              <tr>
                <td className="body-sm text-white font-bold" style={{ textAlign: 'left' }}>**Biblioteca de Prompts**</td>
                <td className="body-sm text-secondary">-</td>
                <td className="body-sm text-secondary">20 prompts</td>
                <td className="body-sm text-tertiary font-bold">30 prompts *</td>
              </tr>
              <tr>
                <td className="body-sm text-white font-bold" style={{ textAlign: 'left' }}>**Capítulo 5 - BI + Marco Regulatório**</td>
                <td className="body-sm text-secondary">-</td>
                <td className="body-sm text-secondary">-</td>
                <td className="body-sm text-tertiary font-bold">* EXCLUSIVO</td>
              </tr>
              <tr>
                <td className="body-sm text-white font-bold" style={{ textAlign: 'left' }}>**Capítulo 6 - Plano de 30 Dias**</td>
                <td className="body-sm text-secondary">-</td>
                <td className="body-sm text-secondary">-</td>
                <td className="body-sm text-tertiary font-bold">* EXCLUSIVO</td>
              </tr>
              <tr>
                <td className="body-sm text-white font-bold" style={{ textAlign: 'left' }}>**Checklist Conformidade ANPD (44 itens)**</td>
                <td className="body-sm text-secondary">-</td>
                <td className="body-sm text-secondary">-</td>
                <td className="body-sm text-tertiary font-bold">* EXCLUSIVO</td>
              </tr>
              <tr>
                <td className="body-sm text-white font-bold" style={{ textAlign: 'left' }}>**Protocolo Classificação de Dados (4 cat.)**</td>
                <td className="body-sm text-secondary">-</td>
                <td className="body-sm text-secondary">-</td>
                <td className="body-sm text-tertiary font-bold">* EXCLUSIVO</td>
              </tr>
              <tr>
                <td className="body-sm text-white font-bold" style={{ textAlign: 'left' }}>**Mapa de Maturidade Analítica**</td>
                <td className="body-sm text-secondary">-</td>
                <td className="body-sm text-secondary">-</td>
                <td className="body-sm text-tertiary font-bold">* EXCLUSIVO</td>
              </tr>
              <tr>
                <td className="body-sm text-white font-bold" style={{ textAlign: 'left' }}>**CTA de Assessoria Especializada**</td>
                <td className="body-sm text-secondary">-</td>
                <td className="body-sm text-secondary">Básico</td>
                <td className="body-sm text-tertiary font-bold">Completo *</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="semantic-box warning">
          <p className="body-lg text-white mb-2">Por que R$ 47 é o preço certo para este material</p>
          <p className="body-sm text-secondary">
            O gestor que compra esta edição não está comprando um e-book. Está comprando proteção jurídica contra fiscalização da ANPD, clareza sobre soberania de dados e conformidade com a Portaria 5.950/2023, e um plano executivo que pode apresentar à chefia na próxima semana. Para esse perfil, R$ 47 é irrelevante - o valor percebido é múltiplo disso. O que um processo administrativo da ANPD custa? O que uma implementação de BI sem conformidade normativa custa? Esse é o cálculo real.
          </p>
        </div>
      </section>

    </div>
  );
};

export default SobreAutor;
