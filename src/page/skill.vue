<script>
  import { reactive } from "vue";
  import Title from "../components/Title.vue";

  export default {
    components: {
      Title,
    },
    setup() {
      const webSkills = reactive(["HTML", "CSS", "CSS frameworks such as bootstrap, tailwind", "Sass", "JavaScript", "Vue", "Nuxt", "jQuery", "Drupal", "Git"]);
      const designSkills = reactive(["Figma", "Adobe xd"]);
      const otherSkills = reactive(["Adobe Illustrator", "Adobe InDesign", "Adobe After Effects", "Adobe Premier Pro"]);

      return { webSkills, designSkills, otherSkills };
    },
  };
</script>

<template>
  <Title title="Skill" />
  <div class="md:ml-9">
    <p class="mt-2 mb-3 pb-1 title">
      <Unicon name="arrow" width="18" height="18" class="fill-orange-500 dark:fill-orange-400 mr-2" />
      Website developer
    </p>
    <div class="flex items-center flex-wrap ml-4">
      <div v-for="(webSkill, indexWebSkills) in webSkills" :key="indexWebSkills" class="w-full md:w-1/2 flex items-center text-sm">
        <div class="w-1 h-1 rounded-full mr-4 detail"></div>
        {{ webSkill }}
      </div>
    </div>

    <p class="mt-6 mb-3 pb-1 title">
      <Unicon name="icons" width="18" height="18" class="fill-orange-500 dark:fill-orange-400 mr-2" />
      UX/UI
    </p>
    <div class="flex items-center flex-wrap ml-4">
      <div v-for="(designSkill, indexDesignSkills) in designSkills" :key="indexDesignSkills" class="w-full md:w-1/2 flex items-center text-sm">
        <div class="w-1 h-1 rounded-full mr-4 detail"></div>
        {{ designSkill }}
      </div>
    </div>

    <p class="mt-6 mb-3 pb-1 title">
      <Unicon name="edit-alt" width="18" height="18" class="fill-orange-500 dark:fill-orange-400 mr-2" />
      Other
    </p>
    <div class="flex items-center flex-wrap ml-4">
      <div v-for="(otherSkill, indexOtherSkills) in otherSkills" :key="indexOtherSkills" class="w-full md:w-1/2 flex items-center text-sm">
        <div class="w-1 h-1 rounded-full mr-4 detail"></div>
        {{ otherSkill }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  @apply border-b dark:border-gray-600 flex items-center text-orange-500 dark:text-orange-400 font-semibold;
}

.detail {
  @apply bg-amber-500 dark:bg-amber-400;
}
</style>
