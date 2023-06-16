const Page = require('./page');

class HistoricoPage extends Page {
  get tabelaHistorico() { return $('#tabela-historico'); }
  // Outros elementos da página de histórico, se houver

  open() {
    // Lógica para abrir a página de histórico de dados de saúde
    // ...
  }

  getHistoricoDados() {
    // Extrair os dados da tabela de histórico de dados
    const linhasHistorico = this.tabelaHistorico.$$('tr');

    const historico = linhasHistorico.map((linha) => {
      const data = linha.$('.data').getText();
      const pressao_arterial = linha.$('.pressao-arterial').getText();
      const nivel_glicose = linha.$('.nivel-glicose').getText();
      const batimentos_cardiacos = linha.$('.batimentos-cardiacos').getText();

      return {
        data,
        pressao_arterial,
        nivel_glicose,
        batimentos_cardiacos,
      };
    });

    return historico;
  }
}

module.exports = HistoricoPage;
