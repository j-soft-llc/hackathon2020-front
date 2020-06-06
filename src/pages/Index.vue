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
      class="map-page"
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
                  <div class="text-h6" style="font-size: 18px">
                    <router-link
                      to="/home/leader-detail">
                      Арсентьев Михаил
                    </router-link>
                  </div>
                  <div class="text">
                    Представитель по району «Соломбала»
                  </div>
                </div>
              </div>
            </q-card-section>
            <q-card-section>
              <div class="q-gutter-md">
                <q-badge color="blue">
                  Дорожное хозяйство
                </q-badge>
                <q-badge color="blue">
                  ЖКХ
                </q-badge>
              </div>
            </q-card-section>
          </q-card>
        </l-popup>
      </l-marker>
    </l-map>
    <div
      v-else
      class="q-pa-md row items-start q-gutter-md list-top-btn">
      <div class="text-h6"> Представители рядом </div>
      <q-card
        flat
        v-for="(card) in 6"
        :key="getRandom + card"
        :card="card"
        class="leader-card">
        <q-card-section class="q-pl-none">
          <div class="row">
            <div class="col flex flex-center">
              <q-avatar size="70px">
                <q-img src="https://www.vhv.rs/dpng/d/409-4091658_stock-avatar-hd-png-download.png"/>
              </q-avatar>
            </div>
            <div class="col">
              <div class="text-h6" style="font-size: 18px">
                <router-link
                  to="/home/leader-detail">
                  Алексей Петров
                </router-link>
              </div>
              <div class="text">
                Представитель по району «Соломбала»
              </div>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <div class="q-gutter-md">
            <q-badge color="blue">
              Дорожное хозяйство
            </q-badge>
            <q-badge color="blue">
              ЖКХ
            </q-badge>
          </div>
        </q-card-section>
      </q-card>
      <div class="text-h6"> Поиск представителей </div>
      <q-input
        @input="searchItems"
        @blur="loadingState = false, loadedCards = []"
        class="full-width"
        v-model="search"
        :loading="loadingState"
        filled
        type="search"
        label="Поиск">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
      <q-card
        flat
        v-for="(card, index) in loadedCards"
        :key="getRandom + index"
        class="leader-card">
        <q-card-section class="q-pl-none">
          <div class="row">
            <div class="col flex flex-center">
              <q-avatar size="70px">
                <q-img src="https://www.vhv.rs/dpng/d/409-4091658_stock-avatar-hd-png-download.png"/>
              </q-avatar>
            </div>
            <div class="col">
              <div class="text-h6" style="font-size: 18px">
                <router-link
                  to="/home/leader-detail">
                  Алексей Петров
                </router-link>
              </div>
              <div class="text">
                Представитель по району «Соломбала»
              </div>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <div class="q-gutter-md">
            <q-badge color="blue">
              Дорожное хозяйство
            </q-badge>
            <q-badge color="blue">
              ЖКХ
            </q-badge>
          </div>
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
      loadingState: false,
      loadedCards: [],
      around: true,
      search: '',
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
    getRandom() {
      return Math.round(Math.random() * 10);
    },
  },
  methods: {
    setBtnColors(btn) {
      if (btn === 'map') {
        return this.showMap ? 'primary' : 'primary-light';
      }
      return !this.showMap ? 'primary' : 'primary-light';
    },
    openLeaderDetail() {
      this.$router.push('/home/leader-detail');
    },
    searchItems(value) {
      if (value === '') {
        this.loadedCards = [];
      }
      this.loadingState = true;
      setTimeout(() => {
        this.loadingState = false;
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < Math.round(Math.random() * 10); i++) {
          this.loadedCards.push(i);
        }
      }, 1500);
    },
  },
};
</script>

<style lang="scss" scoped>

.map-page {
  position: fixed;
}

.list-top-btn {
  box-sizing: border-box;
  padding-top: 65px;
  padding-right: 0;
}

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
