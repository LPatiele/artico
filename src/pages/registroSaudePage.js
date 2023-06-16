const Page = require('./page');

class RegistroSaudePage extends Page {
  get campoPressaoArterial() { return $('#campo-pressao-arterial'); }
  get campoNivelGlicose() { return $('#campo-nivel-glicose'); }
  get campoBatimentosCardiacos() { return $('#campo-batimentos-cardiacos'); }
  // Adicione outros elementos de campo conforme necessário

  get botaoSalvar() { return $('#botao-salvar'); }
  get mensagemSucesso() { return $('#mensagem-sucesso'); }

  open() {
    // Lógica para abrir a página de registro de saúde
    // Por exemplo, navegar para a URL correta ou abrir o menu e clicar na opção adequada
    // ...
  }

  preencherDadosSaude(dados) {
    this.campoPressaoArterial.setValue(dados.pressao_arterial);
    this.campoNivelGlicose.setValue(dados.nivel_glicose);
    this.campoBatimentosCardiacos.setValue(dados.batimentos_cardiacos);
    // Preencher outros campos conforme necessário
  }

  salvar() {
    this.botaoSalvar.click();
  }

  getMensagemSucesso() {
    return this.mensagemSucesso.getText();
  }
}

module.exports = RegistroSaudePage;
