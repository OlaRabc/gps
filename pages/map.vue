<template>
  <div class="overflow-y-hidden">
    <GpsHeader />
    <div class="min-h-screen">
      <div class="flex justify-center my-12">
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
            :options="itemList"
            name="urządzenie"
            placeholder="Wybierz urządzenie"
          />
        </div>
      </div>

      <div>
        <GpsMap />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const itemList: string[] = ["LSES123AU4", "LSES13UU4K"];
</script>
