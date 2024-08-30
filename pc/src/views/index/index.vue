<template>
  <div class="index">
    <h2>首页</h2>
    {{ counterStore.count }}
    <button @click="onClick">+</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";

const counterStore = useCounterStore();

const onClick = () => {
  counterStore.increment();
}
</script>

<style scoped lang="scss">
.index {
  h2 {
    color: red;
  }
}
</style>