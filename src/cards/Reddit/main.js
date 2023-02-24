const API = 'https://www.reddit.com/.json';

// @vue/component
export default {
  name: 'Reddit',
  data() {
    return {
      items: [],
      loading: true,
    };
  },
  mounted() {
    if (this.VALID_CACHE && !this.loading) {
      this.$emit('init', false);
      return;
    }
    this.fetch()
      .then((data) => {
        // if (!(data in data)) throw new Error('Unexpected response from API');
        const items = data.data.children;
        this.items = [].concat(...items).sort((a, b) => new Date(b.data.created_utc * 1000) - new Date(a.data.created_utc * 1000));
      })
      .then(() => this.$emit('init', true))
      .catch(err => this.$emit('init', err))
      .finally(() => {
        this.loading = false;
      });
  },
  methods: {
    fetch() {
      const endpoint = `${API}`;
      return this.axios.get(endpoint, { withCredentials: true, Cookie: `reddit_session=${$cookies.get('reddit_session')}` }).then(res => res.data);
    },
  },
};
