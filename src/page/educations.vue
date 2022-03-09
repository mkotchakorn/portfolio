<script>
  import { reactive } from "vue";
  import Title from "../components/Title.vue";

  export default {
    components: {
      Title,
    },
    setup() {
      const education = reactive({
        year: "2016-2019",
        degree: "Bachelor’s Degree in Industrial Education and Technology (B.Sc.)",
        major: "Major Applied Computer Science Multimedia",
        university: "King Mongkut’s University of Technology Thonburi, Thailand.",
        graduated: "2020",
      });

      return { education };
    },
  };
</script>

<template>
  <Title title="Education" />
  <div class="p-4 pl-6 md:ml-11 border-l-2 border-slate-300 dark:border-gray-700 plot-line">
    <p class="text-xs pb-2 text-sky-500 dark:text-sky-200">({{ education.year }})</p>
    <p class="font-semibold text-orange-500 dark:text-orange-400">{{ education.degree }}</p>
    <p class="text-sm">{{ education.major }}</p>
    <p class="text-sm">{{ education.graduated }}, {{ education.university }}</p>
  </div>
</template>

<style scoped>
.plot-line {
  @apply relative before:absolute before:w-3 before:h-3 before:bg-orange-400 before:dark:bg-orange-400 before:rounded-full;
}
.plot-line::before {
  top: 18px;
  left: -6px;
}
</style>
