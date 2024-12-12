<template>
    <div class="rounded inline-block px-4 py-2 bg-blue-700 text-white font-light text-2xl shadow-[2px_2px_10px_-1px_rgba(0,0,0,0.5)]">
      <p>{{ currentTime }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const currentTime = ref('');
  
  const updateCurrentTime = () => {
    const now = new Date();
    currentTime.value = now.toLocaleTimeString();
  };
  
  onMounted(() => {
    updateCurrentTime();
    const intervalId = setInterval(updateCurrentTime, 1000);
  
    onUnmounted(() => {
      clearInterval(intervalId);
    });
  });
  </script>
  