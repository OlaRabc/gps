<template>
  <header
    class="sticky left-0 top-0 flex justify-between items-center w-full px-12 py-4 max-h-24 bg-blue-950 text-white z-[100] transition-transform duration-500 delay-150 ease-in"
  >
    <GpsLogo class="max-w-12"/>

    <div class="my-auto">
      <ClientOnly>
        <button class="text-3xl cursor-pointer" aria-label="wyloguj" @click="logout">
          <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
        </button >
      </ClientOnly>
    </div>
  </header>
</template>

<script setup lang="ts">
const router = useRouter();

const logout =()=>{
  router.push('/')
}
</script>