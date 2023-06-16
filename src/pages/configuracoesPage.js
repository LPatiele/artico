const Page = require('./page');

class ConfiguracoesPage extends Page {
  get toggleNotificacoes() { return $('#toggle-notificacoes'); }
  get toggleAlarmePressao() { return $('#toggle-alarme-pressao'); }
  get campoHorarioAlarme() { return $('#campo-horario-alarme'); }
  // Outros elementos da página de configurações, se houver

  open() {
    // Lógica para abrir a página de configurações
    // ...
  }

  configurarPreferencias(preferencias) {
    if (preferencias.notificacoes) {
      this.toggleNotificacoes.click();
    }

    if (preferencias.alarmePressao.ativado) {
      this.toggleAlarmePressao.click();
      this.campoHorarioAlarme.setValue(preferencias.alarmePressao.horario);
    }

    // Configurar outras preferências conforme necessário
  }

  salvar() {
    // Lógica para salvar as configurações
    // ...
  }

  getPreferenciasSalvas() {
    // Extrair as preferências salvas da página de configurações
    const notificacoes = this.toggleNotificacoes.isSelected();
    const alarmePressaoAtivado = this.toggleAlarmePressao.isSelected();
    const horarioAlarme = this.campoHorarioAlarme.getValue();
    // Extrair outras preferências conforme necessário

    return {
      notificacoes,
      alarmePressao: {
        ativado: alarmePressaoAtivado,
        horario: horarioAlarme,
      },
      // Adicionar outras preferências conforme necessário
    };
  }
}

module.exports = ConfiguracoesPage;