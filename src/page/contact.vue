<script>
  import Title from "../components/Title.vue";

  export default {
    components: {
      Title,
    },
  };
</script>

<template>
  <Title title="Contact" />
  <div class="my-4 md:ml-9 flex items-center contact-list w-max">
    <Unicon name="phone" width="16" height="16" class="mr-3" />
    <a href="tel:+66858059321">0858059321</a>
  </div>
  <div class="my-4 md:ml-9 flex items-center contact-list w-max">
    <Unicon name="envelope" width="16" height="16" class="mr-3" />
    <a href="mailto:kotchakorn.bn@gmail.com">kotchakorn.bn@gmail.com</a>
  </div>
  <div class="my-4 md:ml-9 flex items-center contact-list w-max">
    <Unicon name="map-marker" width="16" height="16" class="mr-3" />
    <p>Bangkok, Thailand</p>
  </div>

  <div class="mt-6 md:ml-9 flex items-center md:w-1/3 lg:w-3/12 xl:w-1/5 border-t border-slate-300 dark:border-gray-700">
    <a href="https://linkedin.com/in/mkotchakorn" target="_blank" class="py-7 mr-6 contact-list">
      <Unicon name="linkedin" width="20" height="20" />
    </a>
    <a href="https://github.com/mkotchakorn" target="_blank" class="py-7 mr-6 contact-list">
      <Unicon name="github-alt" width="20" height="20" />
    </a>
    <a href="https://line.me/ti/p/~cmmill" target="_blank" class="py-7 contact-list">
      <Unicon name="line" width="20" height="20" />
    </a>
  </div>
</template>
