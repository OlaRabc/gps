<template>
    <div>
      <div id="map" style="height: 500px;" class="w-full h-full rounded-2xl shadow-[2px_8px_15px_0px_rgba(0,0,0,0.5)] border border-black"></div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue'
  
  onMounted(async () => {
    const L = await import('leaflet')
  
    const map = L.map('map').setView([51.505, -0.09], 13)
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map)
  
    let latitude = 51.505
    let longitude = -0.09
    const pathPoints = [[latitude, longitude]]
  
    const marker = L.marker([latitude, longitude]).addTo(map)
  
    const polyline = L.polyline(pathPoints, { color: 'blue', weight: 4 }).addTo(map)
  
    const updatePosition = () => {
      latitude += 0.001
      longitude += 0.001
      marker.setLatLng([latitude, longitude])
      pathPoints.push([latitude, longitude])
      polyline.setLatLngs(pathPoints)
      map.setView([latitude, longitude], map.getZoom())
    }
  
    setInterval(updatePosition, 1000)
  })
  </script>
  
  <style scoped>
  #map {
    width: 100%;
    height: 500px;
  }
  </style>
  