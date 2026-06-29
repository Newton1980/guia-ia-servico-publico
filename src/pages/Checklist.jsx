import React, { useState, useEffect } from 'react';

const categorias = [
  {
    nome: "Governança e Estruturação",
    itens: [
      "1. Há um encarregado de dados (DPO) nomeado e envolvido no projeto de IA?",
      "2. Foi elaborado um Relatório de Impacto à Proteção de Dados (RIPD)?",
      "3. O objetivo do sistema de IA está claramente documentado?",
      "4. Há base legal (LGPD Art. 7 ou 11) para o tratamento de dados no modelo?",
      "5. Existe um Comitê de Ética ou grupo multidisciplinar avaliando o projeto?",
      "6. A finalidade do uso da IA é compatível com a coleta original dos dados?",
      "7. Foi estabelecida a política de descarte dos dados após o uso?",
      "8. Existe um inventário (RoPA) atualizado com o fluxo de dados da IA?"
    ]
  },
  {
    nome: "Transparência e Explicabilidade",
    itens: [
      "9. O cidadão é informado de forma clara que está interagindo com ou sendo avaliado por uma IA?",
      "10. Os critérios gerais que a IA usa para decisão são públicos e compreensíveis?",
      "11. O sistema permite auditoria dos parâmetros que levaram a uma recomendação?",
      "12. Existe um canal de atendimento para o cidadão questionar a decisão da IA?",
      "13. A interface do sistema deixa claro o grau de confiança (acurácia) da resposta?",
      "14. Os termos de uso ou políticas de privacidade foram atualizados para incluir a IA?",
      "15. A origem dos dados de treinamento do modelo é conhecida e documentada?",
      "16. Há registro (log) inalterável das ações realizadas pelo agente autônomo?"
    ]
  },
  {
    nome: "Segurança da Informação",
    itens: [
      "17. Os dados são anonimizados ou pseudoanonimizados antes do envio para a IA?",
      "18. O tráfego de dados entre o servidor público e a nuvem da IA é criptografado?",
      "19. O modelo de IA possui proteção contra ataques de injeção de prompt (Prompt Injection)?",
      "20. Existe garantia de 'Zero Data Retention' (não treinamento com os dados) por parte da API?",
      "21. O controle de acesso ao sistema de IA exige autenticação multifator (MFA)?",
      "22. Há monitoramento contínuo para detectar vazamentos de dados ou alucinações críticas?",
      "23. Existe um plano de resposta a incidentes de segurança cibernética testado?",
      "24. A infraestrutura de hospedagem da IA atende à certificação ISO 27001?",
      "25. Os logs de acesso aos dados são restritos e revisados periodicamente?"
    ]
  },
  {
    nome: "Direitos dos Titulares",
    itens: [
      "26. O sistema permite a revisão humana de decisões automatizadas que afetem o cidadão (Art. 20 LGPD)?",
      "27. Há um mecanismo rápido para o cidadão solicitar a exclusão de seus dados do modelo?",
      "28. O sistema permite a extração de dados para fins de portabilidade (se aplicável)?",
      "29. É possível corrigir dados incorretos que a IA esteja usando para inferências?",
      "30. O cidadão pode solicitar informações sobre quais de seus dados foram processados?",
      "31. O sistema garante que dados sensíveis (saúde, biometria) tenham proteção reforçada?",
      "32. Em caso de perfis comportamentais (profiling), o titular tem como contestar o resultado?",
      "33. Há procedimento claro para revogação de consentimento (se essa for a base legal)?"
    ]
  },
  {
    nome: "Mitigação de Vieses e Discriminação",
    itens: [
      "34. A base de dados de treinamento reflete a diversidade da população alvo?",
      "35. Foram realizados testes específicos para identificar vieses de gênero, raça ou classe?",
      "36. Existe um processo de recalibragem periódica do modelo para evitar 'drift' (desvio)?",
      "37. Os falsos positivos e falsos negativos são monitorados estatisticamente?",
      "38. Há diversidade na equipe técnica que implementa e aprova o modelo?",
      "39. Em caso de identificação de viés discriminatório, há um botão de 'desligamento de emergência' (kill switch)?"
    ]
  },
  {
    nome: "Contratação de Fornecedores de IA",
    itens: [
      "40. O contrato com a Big Tech ou fornecedor proíbe o uso dos dados governamentais para melhorar modelos públicos?",
      "41. O fornecedor garante a soberania e a localização física dos dados (data residency)?",
      "42. O fornecedor possui certificações de conformidade com a LGPD ou leis equivalentes?",
      "43. Há cláusulas de responsabilidade solidária em caso de vazamento de dados?",
      "44. O código-fonte ou arquitetura (quando aplicável) pode ser auditado pelo órgão de controle?"
    ]
  }
];

const Checklist = () => {
  const [checkedItems, setCheckedItems] = useState(() => {
    const saved = localStorage.getItem('checklistProgress');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return {};
      }
    }
    return {};
  });

  useEffect(() => {
    localStorage.setItem('checklistProgress', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleCheck = (idx) => {
    setCheckedItems(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const totalItems = 44;
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = Math.round((checkedCount / totalItems) * 100);

  return (
    <div className="page-content">
      <div className="glow-orb purple" style={{ width: '600px', height: '600px', top: '20%', right: '-150px' }}></div>
      
      <div className="flex items-center gap-4 mb-4">
        <div>
          <span className="badge mb-1" style={{ background: 'var(--color-primary-container)', color: 'var(--color-surface)' }}>Bônus 2</span>
          <h1 className="headline-h1">CHECKLIST ANPD: IA NO ESTADO</h1>
          <p className="body-lg text-secondary mt-2">
            Validação de conformidade com a Lei Geral de Proteção de Dados (LGPD) e normativas da ANPD para a implementação segura de Inteligência Artificial no Governo.
          </p>
        </div>
      </div>

      <div className="glass-card flex items-center justify-between mb-4 sticky top-20 z-30" style={{ background: 'rgba(14, 19, 32, 0.9)' }}>
        <div>
          <h2 className="headline-h2 text-primary">Progresso de Conformidade</h2>
          <p className="label-caps text-secondary mt-1">{checkedCount} de {totalItems} itens verificados</p>
        </div>
        <div className="text-right">
          <div className="headline-h1 text-tertiary" style={{ fontSize: '48px', lineHeight: '1' }}>{progress}%</div>
        </div>
        
        <div style={{ position: 'absolute', bottom: 0, left: 0, height: '3px', background: 'var(--color-tertiary)', width: `${progress}%`, transition: 'width 0.3s ease' }}></div>
      </div>

      <div className="flex-col gap-4">
        {categorias.map((categoria, catIndex) => (
          <div key={catIndex} className="glass-card mb-4" style={{ padding: '24px' }}>
            <h2 className="headline-h2 mb-3 pb-2" style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>
              {categoria.nome}
            </h2>
            <div className="flex-col gap-2">
              {categoria.itens.map((item) => {
                const globalIndex = item.split('.')[0]; // Pega o número do item
                const isChecked = checkedItems[globalIndex] || false;
                
                return (
                  <div 
                    key={globalIndex} 
                    className="flex items-start gap-3 p-2 hover:bg-glass-fill rounded cursor-pointer transition-colors"
                    onClick={() => toggleCheck(globalIndex)}
                    style={{ opacity: isChecked ? 0.5 : 1 }}
                  >
                    <div 
                      style={{ 
                        minWidth: '24px', 
                        height: '24px', 
                        border: `2px solid ${isChecked ? 'var(--color-tertiary)' : 'var(--color-outline)'}`,
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: isChecked ? 'var(--color-tertiary)' : 'transparent',
                        marginTop: '2px'
                      }}
                    >
                      {isChecked && <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L4.5 8.5L13 1" stroke="#0e1320" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>}
                    </div>
                    <p className="body-lg" style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>
                      {item}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Checklist;
