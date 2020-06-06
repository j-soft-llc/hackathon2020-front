<template>
  <q-page class="flex">
    <div class="absolute-back-button">
      <q-btn
        @click="$router.back()"
        flat
        icon="arrow_back"
        size="xl"/>
    </div>
    <q-card
      class="relevant full-width">
      <q-card-section>
        <div class="text-h6 margin-left"> Мое обращение </div>
      </q-card-section>
      <q-card-section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Rerum repellendus sit voluptate voluptas eveniet porro.
          Rerum blanditiis perferendis totam, ea at omnis vel
            numquam exercitationem aut, natus minima, porro labore.
      </q-card-section>
      <q-card-section>
        <div class="col-12 text-primary q-pb-sm">Геолокация:</div>
        <l-map
          style="height: 30vh"
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
      <q-card-section>
          Представитель:
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
      </q-card-section>
      <q-card-section>
        Фотографии:
        <div class="swiper-container">
            <!-- Additional required wrapper -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide" v-for="(card, index) in 4" :key="index">
                  <q-img src="https://swiperjs.com/demos/images/nature-2.jpg"/>
                </div>
            </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import {
  LMap, LTileLayer, LMarker, LPopup, LIcon,
} from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';

export default {
  name: 'TreatmentDetail',
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
  mounted() {
    this.$nextTick(() => {
      const mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      console.log(mySwiper);
    });
  },
};
</script>

<style lang="scss">
.margin-left {
  margin-left: 60px;
}
</style>
