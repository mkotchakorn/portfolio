<script>
  import { ref, watch, onMounted } from "vue";
  import welcome from "./assets/welcome";
  import Navbar from "./components/Navbar.vue";
  import Highlight from "./page/highlight.vue";
  import Education from "./page/educations.vue";
  import Skill from "./page/skill.vue";
  import Experience from "./page/experience.vue";
  import Project from "./page/project.vue";
  import Contact from "./page/contact.vue";
  import BackToTop from "./components/BackToTop.vue";
  import Loading from "./components/Loading.vue";

  export default {
    components: {
      Navbar,
      Highlight,
      Education,
      Skill,
      Experience,
      Project,
      Contact,
      BackToTop,
      Loading,
    },
    setup() {
      const { message } = welcome();
      const darkMode = ref(true);
      const setDarkMode = (val) => {
        darkMode.value = val;
      };

      watch(darkMode, (newVal, oldVal) => {
        if (newVal !== oldVal && newVal) {
          document.querySelector("body").classList.add("dark-theme");
        } else {
          document.querySelector("body").classList.remove("dark-theme");
        }
      });

      onMounted(() => {
        message();
      });

      return { darkMode, setDarkMode };
    },
  };
</script>

<template>
  <Loading />
  <div :class="{ dark: darkMode }">
    <div class="layout min-h-screen bg-slate-50 dark:bg-gray-900">
      <Navbar :darkMode="darkMode" @isDarkMode="setDarkMode" />
      <div class="container">
        <Highlight />
        <Education />
        <div id="skill" class="pt-14">
          <Skill />
        </div>
        <div id="experience" class="pt-14">
          <Experience />
        </div>
        <div id="project" class="pt-14">
          <Project />
        </div>
        <div id="contact" class="pt-14" style="min-height: 90vh">
          <Contact />
        </div>
      </div>
      <BackToTop />
    </div>
  </div>
</template>

<style></style>
