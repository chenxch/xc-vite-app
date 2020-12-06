<template>
  <div class="test">
    <h1>xc count: {{count}}</h1>
    <button @click="add">add</button>
    <div>count * 2 = {{doubleCount}}</div>
  </div>
</template>
<script>
import { ref, computed, watch } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const add = () => {
      count.value++;
    };
    watch(() => count.value, (val) => {
      console.log(`count is ${val}`);
    });
    const doubleCount = computed(() => count.value * 2);
    return { count, add, doubleCount };
  },
};

</script>
<style lang="scss" scoped>
.test{
  color: red;
}
</style>
