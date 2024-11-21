<template>
  <button
    :class="[type, 'px-3 md:px-4 py-2 rounded-[10px] text-md shadow-[2px_4px_15px_0px_rgba(0,0,0,0.5)] transition-all duration-300 ease-out']"
    @click="onBtnClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String as PropType<"primary" | "red">,
    required: false,
    default: "primary",
  },
});

const type = computed((): string => {
  switch (props.type) {
    case "red":
      return `bg-red-600 text-white  hover:bg-red-500 hover:text-gray-200 active:bg-red-700 active:text-gray-50"}`;
    default:
      return `bg-blue-700 text-white hover:bg-blue-800 active:bg-blue-900"}`;
  }
});

const emit = defineEmits(["onClick"]);

const onBtnClick = () => emit("onClick");
</script>
