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
          date: "May 2023 - Present",
          name: "Orangecap Innovation Co., Ltd., Bangkok, Thailand.",
          sub_name: "",
          job_type: "Frontend developer (website and mobile)",
          responsibility: [
            "Write clean and efficient code that delivers a seamless user experience across web, mobile (iOS and Android), and desktop applications, utilizing appropriate frameworks and libraries for each platform.",
            "Design, develop, and implement full-fledged software applications.",
            "Collaborate with designers to ensure a user-friendly and intuitive user experience."
          ],
        },
        {
          date: "April 2022 - May 2023",
          name: "KNACX Corporation Co., Ltd. Bangkok, Thailand.",
          sub_name: "",
          job_type: "Frontend developer",
          responsibility: [
            "Develop a responsive website for dental clinic management.",
            "Evaluated UX/UI designs for technical practicality.",
            "Partnered with the product team to implement new feature developments."
          ],
        },
        {
          date: "July 2020 - March 2022",
          name: "E-Commerce Solution Co., Ltd. Bangkok, Thailand.",
          sub_name: "",
          job_type: "Frontend Developer",
          responsibility: [
            "Contributed to e-commerce website development.",
            "Developed responsive and user-friendly websites.",
            "Collaborated with the team to support projects throughout all phases until completion."
          ],
        },
        {
          date: "June 2018 - July 2018 (2 months)",
          name: "Refinn International Dot Com Co., Ltd. Bangkok, Thailand.",
          sub_name: "",
          job_type: "Frontend Developer (Internship)",
          responsibility: [
            "Worked with a team to build a new feature frontend on a website.",
            "Co-design the operation of the system within a website such as a database and a workflow.",
          ],
        },
        {
          date: "September 2018 - October 2018 (2 months)",
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
