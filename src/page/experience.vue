<script>
  import { reactive } from "vue";
  import Title from "../components/Title.vue";

  export default {
    components: {
      Title,
    },
    setup() {
      const experiences = reactive([
        {
          date: "Jul 2020 - Present",
          name: "E-Commerce Solution Co,. Ltd., Bangkok, Thailand.",
          sub_name: "",
          job_type: "Frontend developer",
          responsibility: [
            "Worked with a team to build an e-commerce website.",
            "Work with a variety of different languages and frameworks such as JavaScript, Vue, Nuxt, Sass, Bootstrap, Jquery.",
          ],
        },
        {
          date: "Jun 2018 - Jul 2018 ( 2 mths. )",
          name: "Refinn International Dot Com Co., Ltd., Bangkok, Thailand.",
          sub_name: "",
          job_type: "Frontend developer (Internship)",
          responsibility: [
            "Worked with a team to build new feature frontend on a website with Vue and Laravel.",
            "Co-design the operation of the system within a website such as a database and a workflow.",
          ],
        },
        {
          date: "Sep 2018 - Oct 2018 ( 2 mths. )",
          name: "About Me Project Camp",
          sub_name: "(University educational guidance for high school students)",
          job_type: "Graphic design (Staff)",
          responsibility: ["Graphic design in camp such as a poster, a presentation."],
        },
      ]);

      return { experiences };
    },
  };
</script>

<template>
  <Title title="Experience" />
  <div
    v-for="(ex, index) in experiences"
    :key="index"
    class="bg-slate-100 dark:bg-gray-800/40 my-4 p-4 md:ml-9 border-l-4 border-slate-300 dark:border-gray-700"
  >
    <p class="text-xs">{{ ex.date }}</p>
    <p class="text-base font-semibold text-orange-500 dark:text-orange-400">
      {{ ex.job_type }}
    </p>
    <p class="text-sm text-sky-500 dark:text-sky-200">{{ ex.name }} <span v-if="ex.sub_name" class="text-xs">{{ ex.sub_name }}</span></p>
    <div class="text-sm">
      <p class="pt-2 pb-1">responsibility :</p>
      <div v-for="resp in ex.responsibility" :key="resp" class="text-sm ml-5 flex items-center">
        <div class="w-1 h-1 rounded-full mr-4 bg-amber-500 dark:bg-amber-400"></div>
        {{ resp }}
      </div>
    </div>
  </div>
</template>

<style></style>
