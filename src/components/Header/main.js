import VueTyper from '@/components/Typer';
import dark from '@/mixins/dark';
import utils from '@/mixins/utils';
import Permissions from '@/mixins/permissions';

// @vue/component
export default {
  name: 'Header',
  components: {
    VueTyper,
  },
  mixins: [dark, utils, Permissions],
};
