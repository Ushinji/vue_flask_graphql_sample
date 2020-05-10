import Vue from 'vue';
import VueCompositionApi, { provide } from '@vue/composition-api';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';
import { DefaultApolloClient } from '@vue/apollo-composable';
import App from './App';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});
const cache = new InMemoryCache();
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});
Vue.use(VueApollo);

Vue.use(VueCompositionApi);

const app = new Vue({
  setup() {
    provide(DefaultApolloClient, apolloClient);
    return {};
  },
  render: (h) => h(App),
});

app.$mount('#app');
