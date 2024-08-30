import { ref, computed } from "vue";
import { defineStore } from "pinia";
import piniaPersistConfig from "./utils/persist";

export const useCounterStore = defineStore("counter", 
  () => {
    const count = ref(0);
    const doubleCount = computed(() => count.value * 2);
    const increment = () => {
      count.value++;
    }

    return { 
      count, 
      doubleCount, 
      increment
    }
  },
  {
    persist: piniaPersistConfig("__count")
  },
)
