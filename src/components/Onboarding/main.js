import Hello from './hello';

// @vue/component
export default {
  name: 'Onboarding',
  components: {
    Hello,
  },
  board: ['hello'],
  data() {
    return {
      index: 0,
    };
  },
  methods: {
    prev() {
      this.index -= this.index > 0;
    },
    next() {
      if (this.index + 1 < this.$options.board.length) {
        this.index += 1;
      } else this.finish();
    },
    finish() {
      this.$store.commit('SET_TUTORIAL', true);
      this.$router.replace('/');
    },
  },
};
