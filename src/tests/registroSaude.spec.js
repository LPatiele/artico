const RegistroSaudePage = require('../pages/registroSaudePage');

describe('Teste de registro de dados de saúde', () => {
  let registroSaudePage;

  before(() => {
    registroSaudePage = new RegistroSaudePage();
    registroSaudePage.open(); // Abre a página de registro de saúde
  });

  it('Deve preencher os dados de saúde corretamente', () => {
    const dadosTeste = {
      pressao_arterial: '120/80',
      nivel_glicose: '100',
      batimentos_cardiacos: '80',
      // Adicione outros dados de saúde para teste
    };

    registroSaudePage.preencherDadosSaude(dadosTeste);
    registroSaudePage.salvar();

    // Verificar a mensagem de sucesso ou outra validação necessária
    expect(registroSaudePage.getMensagemSucesso()).toBe('Dados de saúde registrados com sucesso.');
  });
});