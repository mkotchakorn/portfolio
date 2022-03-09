<script>
import { ref } from 'vue'
export default {
    props: {
        title: String
    },
    setup(props) {
        const title = ref(props.title)

        return { title }
    }
}
</script>

<template>
    <p class="flex items-center pt-10 pb-4 text-2xl font-semibold text-amber-500 dark:text-amber-400">
    <Unicon name="check-circle" width="24" height="24" class="fill-yellow-400 dark:fill-yellow-400 mr-3" />
    {{ title || 'Title' }}
  </p>
</template>


<style>

</style>