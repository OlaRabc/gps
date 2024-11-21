<template>
  <div
    class="relative min-h-screen bg-[url('/img/background-login.jpeg')] bg-cover"
  >
    <GpsBox
      class="w-2/5 absolute top-0 translate-y-1/3 right-0 -translate-x-1/3 flex flex-col justify-end py-12"
    >
      <GpsHeading
        type="h1"
        variant="h2"
        class="mb-16 text-center text-blue-700"
      >
        Zaloguj się
      </GpsHeading>
      <GpsLabel> Podaj Login:</GpsLabel>
      <input
        v-model="loginData.username"
        type="text"
        placeholder="Podaj login"
        class="mb-8 py-2 px-8 border border-black rounded-xl"
      />

      <GpsLabel class="inline-block ml-4 font-bold"> Podaj Haslo: </GpsLabel>

      <input
        v-model="loginData.password"
        type="password"
        placeholder="Podaj hasło"
        class="mb-8 py-2 px-8 border border-black rounded-xl"
      />

      <GpsButton class="mr-8 ml-auto" @on-click="login"> Zaloguj </GpsButton>
      <GpsErrorSection v-if="isError">
        Nieprawidłowe dane logowania
      </GpsErrorSection>
    </GpsBox>

    <GpsLogo class="absolute bottom-8 left-8"/>
  </div>
</template>
<script setup lang="ts">
const correctData = {
  username: "user",
  password: "user",
};

const isError = ref(false);
const loginData = ref({
  username: "",
  password: "",
});

const router = useRouter();
const login = () => {
  isError.value = false;

  if (
    loginData.value.username === correctData.username &&
    loginData.value.password === correctData.password
  )
    router.push("/map");
  else isError.value = true;
};
</script>
