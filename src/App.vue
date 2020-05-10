<template>
  <div>
    <div>Hello world</div>
    <p>{{ count }}</p>
    <button @click="increment">+</button>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error!</div>
    <div v-else>
      <li v-for="projectNode of result.allProjects.edges" :key="projectNode.id">
        {{ projectNode.node.id }} {{ projectNode.node.name }}
      </li>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { useQuery } from '@vue/apollo-composable';
import {
  ALL_PROJECTS_QUERY,
  ALL_PROJECTS_RESULT,
} from '@/queries/projectQuery';

export default defineComponent({
  setup() {
    const count = ref(0);
    const increment = () => {
      count.value = count.value + 1;
    };
    const { loading, error, result } = useQuery<ALL_PROJECTS_RESULT>(
      ALL_PROJECTS_QUERY
    );
    return { count, increment, loading, error, result };
  },
});
</script>
