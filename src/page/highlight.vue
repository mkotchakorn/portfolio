<script>
  export default {};
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex flex-col lg:flex-row items-center pt-20 lg:pt-36">
      <div class="w-full lg:w-1/2 lg:order-last">
        <img src="../assets/images/avatar.png" width="300" class="mx-auto" />
      </div>
      <div class="w-full lg:w-1/2 mt-6 lg:mt-0">
        <p class="text-lg pb-1">Hi, <span class="pl-1">I'm</span></p>
        <p class="text-5xl font-semibold pb-10 text-amber-500 dark:text-amber-400">
          Kotchakorn M.
          <span class="font-normal text-lg block md:inline-block">- <span class="pl-2">but call me Mill</span></span>
        </p>
        <p class="text-sm">
          My name is Kotchakorn Mawattananukool. I am a Frontend Developer with over two years of experience working with javascript, who designs and builds a responsive website.
        </p>
        <p class="pt-4">I'm glad you're here.</p>
      </div>
    </div>

    <div class="text-center leading-0 mt-auto pb-8 flex flex-col items-center animation-scroll-down">
      <Unicon name="angle-down" width="28" height="28" class="arrow-down" />
    </div>
  </div>
</template>

<style></style>
