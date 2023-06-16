const ConfiguracoesPage = require('../pages/configuracoesPage');

describe('Teste de configurações do aplicativo', () => {
  let configuracoesPage;

  before(() => {
    configuracoesPage = new ConfiguracoesPage();
    configuracoesPage.open(); // Abre a página de configurações
  });

  it('Deve configurar as preferências do usuário corretamente', () => {
    // Configurar as preferências de teste
    const preferenciasTeste = {
      notificacoes: true,
      alarmePressao: {
        ativado: true,
        horario: '08:00',
      },
      // Adicionar mais preferências conforme necessário
    };

    configuracoesPage.configurarPreferencias(preferenciasTeste);
    configuracoesPage.salvar();

    // Verificar se as preferências foram salvas corretamente
    expect(configuracoesPage.getPreferenciasSalvas()).toEqual(preferenciasTeste);
  });
});