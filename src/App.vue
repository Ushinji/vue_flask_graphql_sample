<template>
  <div>
    <div>Hello world</div>
    <p>{{ count }}</p>
    <button @click="increment">+</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  setup() {
    const count = ref(0);
    const increment = () => {
      count.value = count.value + 1;
    };
    return { count, increment };
  },
});
</script>
