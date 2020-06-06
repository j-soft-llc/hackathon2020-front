<template>
  <q-page class="flex">
    <div class="col">
      <q-card flat class="q-pa-sm">
        <q-card-section>
          <div class="col">
            <div class="col flex flex-center q-py-md">
              <q-avatar size="20rem">
                <q-img src="https://www.vhv.rs/dpng/d/409-4091658_stock-avatar-hd-png-download.png"/>
              </q-avatar>
            </div>
            <div class="col leader-data">
              <div class="row">
                <div class="col text-primary">Фамилия</div>
                <div class="col">Иванов</div>
              </div>
              <div class="row">
                <div class="col text-primary">Имя</div>
                <div class="col">Иван</div>
              </div>
              <div class="row">
                <div class="col text-primary">Телефон</div>
                <div class="col">+77777777777</div>
              </div>
              <div class="row">
                <div class="col text-primary">E-mail</div>
                <div class="col">example@example.ru</div>
              </div>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
    <l-map
      style="height: 300px"
      :zoom="zoom"
      :center="center">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker :lat-lng="markerLatLng">
        <l-icon :icon-anchor="[23, 5]">
          <q-icon name="room" size="xl" color="primary"/>
        </l-icon>
        <l-popup>
          <div class="popup-content">
            Центр
          </div>
        </l-popup>
      </l-marker>
    </l-map>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import {
  LMap, LTileLayer, LMarker, LPopup, LIcon,
} from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  name: 'LeaderDetail',
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
      center: [55.7540471, 37.620405],
      markerLatLng: [55.7540471, 37.620405],
    };
  },
};
</script>

<style lang="scss">
.leader-data {
  font-size: 17px;
}
.popup-content {
  padding: 16px;
  box-sizing: border-box;
}
</style>
