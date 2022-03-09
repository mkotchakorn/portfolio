<script>
  import { ref, onMounted } from "vue";
  import PulseLoader from "vue-spinner/src/PulseLoader.vue";

  export default {
    components: {
      PulseLoader,
    },
    setup() {
      const loading = ref(true);
      
      onMounted(() => {
        document.querySelector("body").classList.add("overflow-hidden");
        setTimeout(() => {
          loading.value = false;
          document.querySelector("body").classList.remove("overflow-hidden");
        }, 1000);
      });

      return { loading };
    },
  };
</script>

<template>
  <Transition>
    <div v-if="loading" class="loading">
      <pulse-loader :loading="loading" color="#fbbf24" size="12px"></pulse-loader>
    </div>
  </Transition>
</template>

<style scoped>
  .v-leave-active {
    transition: opacity 0.5s ease;
  }
  .v-leave-to {
    opacity: 0;
  }
</style>
