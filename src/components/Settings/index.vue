<template>
  <v-content id="settings">
    <v-container fluid>
      <v-card class="container">
        <!-- <h4 v-t="'settings.langs'" class="headline"/>
        <v-autocomplete
          :items="langs"
          v-model="settings.lang" :label="$t('settings.choose.lang')"/> -->
        <h4 v-t="'settings.theme'" class="headline"/>
        <h4 v-t="'settings.choose.color'" class="subheading"/>
        <v-layout>
          <v-flex xs6 class="mr-3 picker">
            <li
              v-for="color in $options.palette"
              :key="color" :style="{ 'background-color': color }" @click="themeChange(color)">
              <div v-show="settings.theme.primary.toLowerCase() === color" class="color-dot"/>
            </li>
          </v-flex>
          <v-text-field
            v-model.lazy="settings.theme.primary"
            :rules="[
            () => validateHex(settings.theme.primary) || $t('settings.error.color')]"
            :label="$t('settings.placeholder.color')" @change="themeChange"/>
        </v-layout>
        <!-- <h4 v-t="'settings.choose.custom_font'" class="subheading"/>
        <v-layout align-center>
          <v-flex xs2>
            <v-switch
              v-model="settings.theme.customFont"
              :label="$tc('settings.onOff', settings.theme.customFont)" class="mt-0" hide-details/>
          </v-flex>
          <v-text-field
            v-model.lazy="settings.theme.font"
            :disabled="!settings.theme.customFont"
            :label="$t('settings.placeholder.custom_font')"/>
        </v-layout> -->
        <!-- <template v-if="settings.debug">
          <h4 v-t="'settings.custom_css'" class="subheading"/>
          <h3 v-t="'settings.custom_css_warning'" class="body-2 error--text"/>
          <v-text-field
            v-model="settings.theme.customCssUrl"
            :label="$t('settings.custom_css_desc')"/>
        </template> -->
        <h4 v-t="'settings.dark.title'" class="headline"/>
        <!-- <h4 v-t="'settings.dark.desc'" class="subheading"/> -->
        <v-layout align-center>
          <v-flex xs2>
            <v-switch
              :label="$tc('settings.onOff', settings.dark.enabled)"
              v-model="settings.dark.enabled" class="mt-0" hide-details/>
          </v-flex>
          <v-flex xs2>
            <v-checkbox
              :disabled="!settings.dark.enabled"
              :label="$t('settings.dark.auto')"
              v-model="settings.dark.auto" class="mt-0" hide-details/>
          </v-flex>
          <v-menu
            ref="menu_from"
            :disabled="!settings.dark.auto || !settings.dark.enabled"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="settings.dark.from"
            v-model="menu.from"
            offset-y
            full-width lazy transition="scale-transition" max-width="290px" min-width="290px">
            <v-text-field
              slot="activator"
              :disabled="!settings.dark.auto"
              v-model="settings.dark.from"
              :label="$t('settings.dark.from')" prepend-icon="access_time" readonly/>
            <v-time-picker
              v-model="settings.dark.from"
              format="24h" @change="$refs.menu_from.save(settings.dark.from)"/>
          </v-menu>
          <v-menu
            ref="menu_to"
            :disabled="!settings.dark.auto || !settings.dark.enabled"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="settings.dark.to"
            v-model="menu.to"
            offset-y
            full-width lazy transition="scale-transition" max-width="290px" min-width="290px">
            <v-text-field
              slot="activator"
              :disabled="!settings.dark.auto"
              v-model="settings.dark.to"
              :label="$t('settings.dark.to')" prepend-icon="access_time" readonly/>
            <v-time-picker
              v-model="settings.dark.to"
              format="24h" @change="$refs.menu_to.save(settings.dark.to)"/>
          </v-menu>
        </v-layout>
      </v-card>
    </v-container>
  </v-content>
</template>
<script src="./main.js"></script>
<style lang="scss" rel='stylesheet/scss' src="./style.scss" scoped></style>
