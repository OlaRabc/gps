<template>
  <div class="overflow-y-hidden">
    <GpsHeader />
    <div class="min-h-screen">
      <div class="flex justify-center my-24">
        <div class="w-1/3 flex justify-center">
          <GpsClock />
        </div>

        <div class="w-1/3 flex justify-center">
          <GpsButton
            @on-click="console.log('Urzodzenie pomyślnie odłączone od pojazdu')"
          >
            Odłącz urządzenie
          </GpsButton>
        </div>

        <div class="w-1/3 flex justify-center">
          <GpsSelect
            :options="deviceList"
            name="urządzenie"
            :placeholder="selectedDevice"
            @on-change="changeDevice"
          />
        </div>
      </div>

      <div class="mx-16">
        <GpsMap />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const deviceList: string[] = ["LSES123AU4"];
const selectedDevice: Ref<string> = ref("LSES123AU4");

const changeDevice = (newSelectedDevice: string) => {
  selectedDevice.value = newSelectedDevice;
};
</script>
