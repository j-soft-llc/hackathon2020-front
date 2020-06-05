<template>
  <q-page class="flex flex-center">
    <l-map style="height: 100vh" :zoom="zoom" :center="center">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker :lat-lng="markerLatLng">
        <l-icon :icon-anchor="[23, 5]">
          <q-icon name="room" size="xl" color="primary"/>
        </l-icon>
        <l-popup>Hello!</l-popup>
      </l-marker>
    </l-map>
  </q-page>
</template>

<script>
import {
  LMap, LTileLayer, LMarker, LPopup, LIcon,
} from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  name: 'PageIndex',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LIcon,
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 8,
      center: [47.313220, -1.319482],
      markerLatLng: [47.313220, -1.319482],
    };
  },
};
</script>
