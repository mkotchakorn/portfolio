<script>
import { onMounted, ref, reactive, watch } from "vue";
import UseToggle from "../composables/UseToggle";
import Logo from '../assets/images/logo.png';
import LogoDark from '../assets/images/logo-dark.png';

export default {
  props: {
    darkMode: Boolean,
  },
  emits: ["isDarkMode"],
  setup(props, context) {
    const darkMode = ref(props.darkMode);
    const isExpand = ref(false);
    const affix = ref("");
    const setWebMode = UseToggle(darkMode);
    const setNavMenu = UseToggle(isExpand);
    const menus = reactive([
      { 
        title: 'experience',
        link: '#experience',
        target: '_self',
      },
      { 
        title: 'skill', 
        link: '#skill', 
        target: '_self' 
      },
      {
        title: 'project', 
        link: '#project', 
        target: '_self'
       },
      { 
        title: 'contact', 
        link: '#contact', 
        target: '_self' 
      },
      {
        title: 'resume',
        link: 'https://drive.google.com/file/d/17Kg3juy6mhahgnsPA-IpNy7qgSR3ZxNY/view?usp=sharing',
        target: '_blank',
      },
    ])
    const toggleDarkMode = () => {
      setWebMode.isToggle();
      context.emit("isDarkMode", darkMode.value);
    };
    const toggleMenuExpand = () => {
      setNavMenu.isToggle();
    };
    const hideMenuExpand = () => {
      isExpand.value = false;
    };
    const handleScroll = () => {
      let scrollTop = document.documentElement.scrollTop;
      affix.value = scrollTop > 50 ? "affix" : "";
    };
    const backToTop = () => {
      window.scrollTo(0, 0);
    }
    const setLogo = () => {
      return darkMode.value ? LogoDark : Logo
    }

    onMounted(() => {
      document.addEventListener("scroll", handleScroll);
    });

    watch(isExpand, (newVal, oldVal) => {
      if (newVal !== oldVal && newVal) {
        document.querySelector("body").classList.add("overflow-hidden");
      } else {
        document.querySelector("body").classList.remove("overflow-hidden");
      }
    });

    return { darkMode, toggleDarkMode, menus, isExpand, toggleMenuExpand, hideMenuExpand, affix, setLogo, backToTop };
  },
};
</script>

<template>
  <div class="nav" :class="[affix, { 'menu-isExpand': isExpand }]">
    <div class="container flex items-center h-14">
      <img :src="setLogo()" width="45" @click="backToTop()" class="cursor-pointer" />
      <div class="flex items-center ml-auto">
        <div class="nav-menu" :class="{ isExpand: isExpand }">
          <a
            v-for="(menu, index) in menus"
            :key="index"
            :href="menu.link"
            :target="menu.target"
            class="nav-menu-link"
            @click="hideMenuExpand">
              {{ menu.title }}
          </a>
          <div @click="toggleMenuExpand" class="md:hidden leading-0 hide-nav-menu">
            <Unicon name="multiply" width="32" height="32" />
          </div>
        </div>
        <!-- <div @click="toggleDarkMode" class="cursor-pointer leading-0 ml-5">
          <Unicon v-if="darkMode" name="brightness" width="22" height="22" class="theme" />
          <Unicon v-if="!darkMode" name="moon" width="20" height="20" class="theme" />
        </div> -->
        <div @click="toggleMenuExpand" class="md:hidden menu-toggle leading-0 ml-4">
          <Unicon name="bars" width="22" height="22" />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
