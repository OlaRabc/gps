<template>
    <div
      :aria-activedescendant="props.focused"
      :class="[
        'pl-8 py-3 px-6 border-b border-black last:border-b-0 relative after:left-0 after:bg-gradient-to-r after:from-indigo-400 after:to-white after:absolute after:top-0 after:w-full after:h-full after:transition-all after:ease-out after:duration-500 after:z-[40]',
        props.focused ? 'after:opacity-100' : 'after:opacity-0',
      ]"
    >
      <span class="relative z-50"> <slot /></span>
    </div>
  </template>
  <script setup lang="ts">
  const props = defineProps({
    focused: {
      type: Boolean,
      required: false,
      default: false,
    },
  });
  </script>