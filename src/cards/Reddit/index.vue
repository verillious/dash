<template>
  <div id="reddit">
    <v-list v-if="items.length" three-line>
      <v-list-tile v-for="item in items" :key="item.data.title" :href="'https://www.reddit.com' + item.data.permalink">
        <v-list-tile-content :title="item.data.title">
          <v-list-tile-sub-title class="text--primary">{{ item.data.title }}</v-list-tile-sub-title>
          <v-list-tile-title class="caption text--secondary">
            <v-layout>
              <v-flex>
                {{ new Date(item.data.created_utc * 1000 ).toLocaleDateString($t('locale'), timeOptions) }}
              </v-flex>
              <v-flex class="text-xs-right">
                <a :href="'https://www.reddit.com' + item.data.permalink" :title="item.data.subreddit">
                  {{ item.data.subreddit }}
                </a>
              </v-flex>
            </v-layout>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-card-text v-else>
      <v-progress-linear v-if="loading" indeterminate/>
      <div v-else class="text-xs-center">
        <v-icon x-large>rss_feed</v-icon>
        <h2 v-t="'RSS.empty'" class="subheading"/>
      </div>
    </v-card-text>
  </div>
</template>
<script src="./main.js"></script>
<style lang="scss" rel='stylesheet/scss' src="./style.scss" scoped></style>
