<template>
  <v-card :width="500" hover raised dark class="primary foreground--text mx-auto mt-3">
    <v-card-title class="secondary">
      <h3 v-t.preserve="'onboarding.settings.title'" class="headline"/>
    </v-card-title>
    <v-card-text>
      <h4 v-t.preserve="'settings.langs'" class="headline"/>
      <v-autocomplete
        :items="langs"
        v-model="settings.lang" :label="$t('settings.choose.lang')"/>
    </v-card-text>
    <v-card-actions class="secondary">
      <v-btn
        v-t.preserve="'onboarding.previous'" color="teal lighten-4" flat @click="$emit('prev')"/>
      <v-spacer/>
      <v-btn v-t.preserve="'onboarding.next'" color="teal lighten-4" flat @click="$emit('next')"/>
    </v-card-actions>
  </v-card>
</template>
<script>
import { loadLang } from '@/i18n';
import countries from '../Settings/countries';

export default {
  name: 'Why',
  countries,
  data() {
    return {
      settings: this.$store.state.settings,
    };
  },
  computed: {
    langs() {
      return Langs.map(f => ({ value: f.locale, text: f.name }));
    },
  },
  watch: {
    'settings.lang': function lang(val, old) {
      if (val === old || old === undefined) return;
      loadLang(this, val);
    },
  },
  beforeDestroy() {
    this.$store.commit('SET_SETTINGS', this.settings);
  },
};
</script>
