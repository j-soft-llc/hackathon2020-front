<template>
  <q-page class="flex">
    <q-btn-group class="row layout-buttons">
      <q-btn
        @click="showMap = true"
        label="Карта"
        :color="setBtnColors('map')"/>
      <q-btn
        @click="showMap = false"
        label="Список"
        :color="setBtnColors('list')"/>
    </q-btn-group>

    <l-map
      v-if="showMap"
      style="height: calc(100vh - 50px)"
      :zoom="zoom"
      :center="center">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker :lat-lng="markerLatLng">
        <l-icon :icon-anchor="[23, 5]">
          <q-icon name="room" size="xl" color="primary"/>
        </l-icon>
        <l-popup>
          <q-card flat>
            <q-card-section class="q-pl-none">
              <div class="row">
                <div class="col flex flex-center">
                  <q-avatar size="70px">
                    <q-img src="https://www.vhv.rs/dpng/d/409-4091658_stock-avatar-hd-png-download.png"/>
                  </q-avatar>
                </div>
                <div class="col">
                  <div class="text-h6">
                    <router-link
                      to="/leader-detail">
                      Лидер #1
                    </router-link>
                  </div>
                  <div class="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Rerum repellendus sit voluptate voluptas eveniet porro.
                  </div>
                </div>
              </div>
            </q-card-section>
            <q-card-section>
              <div class="q-gutter-md">
                <q-badge color="blue">
                  #4D96F2
                </q-badge>
                <q-badge color="blue">
                  #4D96F2
                </q-badge>
                <q-badge color="blue">
                  #4D96F2
                </q-badge>
                <q-badge color="blue">
                  #4D96F2
                </q-badge>
              </div>
            </q-card-section>
          </q-card>
        </l-popup>
      </l-marker>
    </l-map>

    <div
      v-else
      class="q-pa-md row items-start q-gutter-md">
      <q-card
        @click="openLeaderDetail"
        v-for="(card, index) in 16"
        :key="index"
        class="leader-card">
        <q-card-section>
          <div class="text-h6"> Card #{{ card }} </div>
        </q-card-section>
        <q-card-section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Rerum repellendus sit voluptate voluptas eveniet porro.
           Rerum blanditiis perferendis totam, ea at omnis vel
            numquam exercitationem aut, natus minima, porro labore.
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
      center: [55.7540471, 37.620405],
      markerLatLng: [55.7540471, 37.620405],
      showMap: true,
    };
  },
  computed: {
    isMobile() {
      const isMobile = window.matchMedia('only screen and (max-width: 767px)');
      return !isMobile.matches;
    },
  },
  methods: {
    setBtnColors(btn) {
      if (btn === 'map') {
        return this.showMap ? 'primary' : 'secondary';
      }
      return !this.showMap ? 'primary' : 'secondary';
    },
    openLeaderDetail() {
      this.$router.push('/leader-detail');
    },
  },
};
</script>

<style lang="scss" scoped>
.layout-buttons {
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 500;
}

.leader-card {
  max-width: 320px;
}
</style>
