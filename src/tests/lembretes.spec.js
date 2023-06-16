const LembretesPage = require('../pages/lembretesPage');

describe('Teste de lembretes do aplicativo', () => {
  let lembretesPage;

  before(() => {
    lembretesPage = new LembretesPage();
    lembretesPage.open(); // Abre a página de lembretes
  });

  it('Deve criar um novo lembrete corretamente', () => {
    // Configurar os detalhes do novo lembrete
    const novoLembrete = {
      titulo: 'Tomar medicamento',
      horario: '09:00',
      // Adicionar mais detalhes do lembrete conforme necessário
    };

    lembretesPage.criarNovoLembrete(novoLembrete);
    lembretesPage.salvar();

    // Verificar se o novo lembrete foi criado com sucesso
    expect(lembretesPage.getLembretes()).toContain(novoLembrete);
  });
});
