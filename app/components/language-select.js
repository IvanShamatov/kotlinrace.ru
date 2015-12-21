import Ember from 'ember';

const { Component, computed, inject } = Ember;

export default Ember.Component.extend({
  tagName: 'select',
  classNames: [ 'language-select' ],
  i18n: inject.service(),
  current: computed.readOnly('i18n.locale'),

  locales: computed('i18n.locales', function() {
    const i18n = this.get('i18n');
    return this.get('i18n.locales').map(function (loc) {
      return { id: loc, text: i18n.t('language-select.language.' + loc) };
    });
  }),
  change: function() {
    this.get('i18n').set('locale', this.$().val());
  }
});