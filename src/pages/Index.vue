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
      v-if="showMap && leaders"
      style="height: calc(100vh - 50px)"
      :zoom="zoom"
      :center="[leaders[2].location.lat, leaders[2].location.long]">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker
        v-for="leader in leaders"
        :key="leader.id"
        :lat-lng="[leader.location.lat, leader.location.long]">
        <l-icon :icon-anchor="[23, 5]">
          <q-icon name="room" size="xl" color="primary"/>
        </l-icon>
        <l-popup>
          <Representative
            :leader="leader"
          />
        </l-popup>
      </l-marker>
    </l-map>
    <div class="q-pa-md" v-else>
      <div class="text-h6 mobile-mt"> Представители рядом </div>
      <div class="q-pa-md row items-start q-gutter-md">
        <Representative
          v-for="leader in leaders.slice(0, 2)"
          :key="leader.id"
          :leader="leader"/>
      </div>

      <div class="text-h6"> Поиск представителей </div>
      <q-input
        @input="searchItems"
        @blur="loadingState = false"
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
      <div
        v-if="showSearchResults"
        class="q-pa-md search-margin row items-start q-gutter-md">
        <Representative
          v-for="leader in leaders.slice(0, getRandom)"
          :key="leader.id"
          :leader="leader"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import {
  LMap, LTileLayer, LMarker, LPopup, LIcon,
} from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import { mapState, mapActions } from 'vuex';
import Representative from '../components/Representative.vue';

export default {
  name: 'PageIndex',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LIcon,
    Representative,
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
      showSearchResults: false,
    };
  },
  computed: {
    ...mapState('leaders', {
      leaders: (state) => state.items,
    }),
    isMobile() {
      const isMobile = window.matchMedia('only screen and (max-width: 767px)');
      return !isMobile.matches;
    },
    getRandom() {
      return Math.round(Math.random() * 10);
    },
  },
  methods: {
    ...mapActions('leaders', {
      getLeaders: 'getLeaders',
    }),
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
        this.showSearchResults = false;
      }
      this.loadingState = true;
      setTimeout(() => {
        this.loadingState = false;
        this.showSearchResults = true;
      }, 1500);
    },
    async initLeaders() {
      this.$q.loading.show({
        delay: 400,
      });
      await this.getLeaders();
      this.$q.loading.hide();
    },
  },
  created() {
    this.initLeaders();
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

.mobile-mt {
  @media screen and (max-width: 430px) {
    margin-top: 40px;
  }
}

.search-margin {
  margin-bottom: 250px;
}
</style>
