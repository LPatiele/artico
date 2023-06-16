const HistoricoPage = require('../pages/historicoPage');

describe('Teste de visualização do histórico de dados de saúde', () => {
  let historicoPage;

  before(() => {
    historicoPage = new HistoricoPage();
    historicoPage.open(); // Abre a página de histórico de dados de saúde
  });

  it('Deve exibir corretamente o histórico de dados de saúde', () => {
    // Obter o histórico de dados de teste
    const historicoTeste = [
      {
        data: '2023-06-01',
        pressao_arterial: '120/80',
        nivel_glicose: '100',
        batimentos_cardiacos: '80',
      },
      // Adicione mais entradas de histórico conforme necessário
    ];

    const historicoExibido = historicoPage.getHistoricoDados();

    // Verificar se o histórico exibido corresponde ao histórico de teste
    expect(historicoExibido).toEqual(historicoTeste);
  });
});