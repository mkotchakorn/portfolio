<script>
  export default {
    setup() {
      const backToTop = () => {
        window.scrollTo(0, 0);
      };

      return { backToTop };
    },
  };
</script>

<template>
  <div @click="backToTop" class="flex items-center text-sm w-max mx-auto py-2 cursor-pointer back-to-top">
    <Unicon name="arrow-up" width="16" height="16" class="mr-1" />
    Back to top
  </div>
</template>

<style scope>
  .unicon {
    @apply transition-transform	duration-200;
  }
  .back-to-top:hover .unicon {
    @apply -translate-y-0.5;
  }
</style>
