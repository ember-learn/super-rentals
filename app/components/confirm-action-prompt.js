import Component from '@ember/component';

export default Component.extend({
  actions: {
    closePromptDialog(response) {
      if (response === "cancel") {
        this.set('showPromptDialog', false);
        this.get('onClose')();
      }
      if (response === "ok") {
        this.set('showPromptDialog', false);
        this.get('onConfirm')();
      }
    }
  },
});
