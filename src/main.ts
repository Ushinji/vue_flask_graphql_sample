import { createApp } from 'vue';
import VueApollo from 'vue-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import App from '@/App.vue';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});
const cache = new InMemoryCache();
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

const app = createApp(App);
app.use(apolloProvider);
app.mount('#app');
