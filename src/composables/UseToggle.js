import { ref } from "vue";

export default function UseToggle(val) {
  const toggle = ref(val);

  const isToggle = () => {
    toggle.value = !toggle.value;
  };

  return { toggle, isToggle };
}
