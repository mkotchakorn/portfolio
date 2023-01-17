<script>
  import { ref, reactive } from "vue";
  import Title from "../components/Title.vue";
  import makeupImg from "../assets/images/project/makeup.png";
  import projectImg from "../assets/images/project/project.png";
  import facebookUi from "../assets/images/project/facebook-ui.png"
  import hallOfInspiration from "../assets/images/project/hall-of-inspiration.png"

  export default {
    components: {
      Title,
    },
    setup() {
      const projects = reactive([
        {
          title: "Hall of Inspiration Virtual Tour",
          tool: ["React", "JavaScript", "CSS", "Material-UI", "Tailwind"],
          link: "https://hallofinspiration.maefahluang.org",
          profile: hallOfInspiration,
        },
        {
          title: "Facebook Ui",
          description: "Mockup facebook ui",
          tool: ["Vue", "Nuxt", "JavaScript", "CSS", "Tailwind"],
          link: "https://kotchakorn-facebook-ui.netlify.app",
          profile: facebookUi,
        },
        {
          title: "Makeup Project",
          description: "Provide information about cosmetic products.",
          tool: ["Vue", "Nuxt", "JavaScript", "Sass & CSS", "Tailwind", "design"],
          profile: makeupImg,
        },
        {
          title: "Tracking Progress System Of Project",
          description: "Recording evidence from work between teachers and students.",
          tool: ["Laravel", "Vue", "JavaScript", "sass & css", "Bootstrap"],
          profile: projectImg,
        },
      ]);

      return { projects };
    },
  };
</script>

<template>
  <Title title="Project" />
  <div class="flex items-center flex-col lg:flex-row -mx-4 flex-wrap">
    <div class="w-full lg:w-1/2 px-4 my-4 flex-none" v-for="(project, index) in projects" :key="index">
      <div class="project-thumbnail shadow-xl shadow-gray-200 dark:shadow-gray-800">
        <img :src="project.profile" class="rounded-lg" />
        <div class="content">
          <p class="md:text-xl font-extrabold !text-gray-900">{{ project.title }}</p>
          <p v-if="project.description" class="!text-gray-900 md:mt-2 text-xs md:text-sm">{{ project.description }}</p>
          <div v-if="project.link" class="md:mt-1 text-xs">
            <a :href="project.link" target="_blank" class="!text-gray-900">{{ project.link }}</a> 
          </div>
          <div class="tool">
            <p v-for="(tool, indexTool) in project.tool" :key="indexTool" class="font-semibold text-xs">{{ tool }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <a
    href="https://github.com/mill1704?tab=repositories"
    target="_blank"
    class="flex items-center justify-center w-max mt-9 mx-auto contact-list hover:text-amber-400 hover:dark:text-amber-400 transition-all"
  >
    View more
    <Unicon name="external-link-alt" width="16" height="16" class="ml-2" />
  </a>
</template>

<style></style>
