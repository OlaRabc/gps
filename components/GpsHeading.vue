<template>
    <component :is="props.type" class="font-bold" :class="variant">
      <slot />
    </component>
  </template>
  
  <script setup lang="ts">
  enum SizeType {
    H1 = "h1",
    H2 = "h2",
    H3 = "h3",
    H4 = "h4",
    H5 = "h5",
    H6 = "h6",
  }
  
  const props = defineProps({
    type: {
      type: String,
      required: false,
      default: "h2",
    },
    variant: {
      type: String,
      required: false,
      default: "h2",
    },
  });
  
  const variant = computed((): string => {
    switch (props.variant) {
      case SizeType.H1:
        return "text-7xl";
      case SizeType.H3:
        return "text-[32px]";
      case SizeType.H4:
        return "text-2xl";
      case SizeType.H5:
        return "text-lg";
      case SizeType.H6:
        return "text-base";
      default:
        return "text-5xl";
    }
  });
  </script>