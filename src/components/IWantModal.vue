<template>
  <q-card>
    <q-card-section class="q-px-none flex flex-center">
        <div class="add-modal__title full-width align-center">
          <q-btn flat icon="clear" color="primary" v-close-popup class="absolute-close"/>
          <div class="q-pl-xl">новое обращение</div>
        </div>
    </q-card-section>
    <div class="q-pb-md">
      <q-stepper
        v-model="step"
        vertical
        color="primary"
        animated
      >
        <q-step
          :name="1"
          title="Укажите вид обращения"
          icon="radio_button_checked"
          :done="step > 1"
        >
          <div class="q-gutter-sm">
            <q-radio v-model="treatmentType" selected val="proposal" label="Предложение" />
            <q-radio v-model="treatmentType" val="wish" label="Пожелание" />
            <q-radio v-model="treatmentType" val="claim" label="Претензия" />
            <q-radio v-model="treatmentType" val="complaint" label="Жалоба" />
          </div>

          <q-stepper-navigation>
            <q-btn @click="step = 2" color="secondary" label="Дальше" />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="2"
          title="Укажите категорию обращения"
          icon="radio_button_checked"
          :done="step > 2"
        >
          <div class="q-gutter-sm">
            <q-radio v-model="category" selected val="roads" label="Дорожное хозяйство" />
            <q-radio v-model="category" val="housingService" label="ЖКХ" />
            <q-radio v-model="category" val="category3" label="Категория 3" />
            <q-radio v-model="category" val="category4" label="Категория 4" />
          </div>

          <q-stepper-navigation>
            <q-btn @click="step = 3" color="secondary" label="Дальше" />
            <q-btn flat @click="step = 2" color="primary" label="Назад" class="q-ml-sm" />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="3"
          title="Адрес/локация"
          icon="location_on"
          :done="step > 3"
        >
          <q-input color="secondary" dense v-model="address" label="Укажите адрес">
            <template v-slot:prepend>
              <q-icon name="add_location" />
            </template>
          </q-input>
          <l-map
            class="q-mt-md"
            style="height: 20vh"
            :zoom="zoom"
            :center="center">
            <l-tile-layer :url="url"></l-tile-layer>
            <l-marker :lat-lng="markerLatLng" v-if="address">
              <l-icon :icon-anchor="[23, 5]">
                <q-icon name="room" size="xl" color="primary"/>
              </l-icon>
              <l-popup>
                <div class="popup-content">
                  {{ address }}
                </div>
              </l-popup>
            </l-marker>
          </l-map>
          <div class="text-h6" v-if="address"> Обращения в этой области</div>
          <div class="swiper-container" v-if="address">
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="(card, index) in 6" :key="index">
                    <q-card
                      flat
                      class="relevant">
                      <q-card-section>
                        <router-link
                          to="/home/treatment-detail"
                          class="text-h6"> Обращение #{{ card }} </router-link>
                      </q-card-section>
                      <q-card-section>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Rerum repellendus sit voluptate voluptas eveniet porro.
                          Rerum blanditiis perferendis totam, ea at omnis vel
                            numquam exercitationem aut, natus minima, porro labore.
                      </q-card-section>
                    </q-card>
                  </div>
              </div>
          </div>
          <q-stepper-navigation class="q-pb-md">
            <q-btn @click="step = 4" color="secondary" label="Подходящего обращения нет" />
            <q-btn flat @click="step = 2" color="primary" label="Назад" class="q-ml-sm" />
          </q-stepper-navigation>

        </q-step>

        <q-step
          :name="4"
          title="Опишите суть (тезисно)"
          icon="add_comment"
        >
          <q-input
            v-model="text"
            filled
            type="textarea"
            dense
            color="secondary"
          />
          <FileUpload/>
          <q-stepper-navigation>
            <q-btn @click="onSubmit" color="secondary" label="Создать" v-close-popup/>
            <q-btn flat @click="step = 3" color="primary" label="Назад" class="q-ml-sm" />
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
    </div>

  </q-card>
</template>

<script>
import {
  LMap, LTileLayer, LMarker, LPopup, LIcon,
} from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
import FileUpload from './FileUpload.vue';

export default {
  props: {
    treatmentTypeProp: {
      type: String,
      required: false,
    },
  },
  name: 'IWantModal',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LIcon,
    FileUpload,
  },
  data() {
    return {
      text: '',
      tab: '',
      address: '',
      leftDrawer: false,
      iWantModal: false,
      step: 1,
      treatmentType: '',
      category: '',
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 8,
      center: [55.7540471, 37.620405],
      markerLatLng: [55.7540471, 37.620405],
    };
  },
  methods: {
    onSubmit() {
      this.$q.dialog({
        title: 'Успешно',
        message: 'Ваша заявка успешно отправлена',
      });
    },
  },
  watch: {
    address() {
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
  },
  mounted() {
    if (this.treatmentTypeProp) {
      this.treatmentType = this.treatmentTypeProp;
    }
  },
};
</script>

<style lang="scss">
.absolute-close {
  position: absolute;
  left: 10px;
  top: -3px;
}

.add-modal {
  &__title {
    align-items: center;
    text-align: center;
    padding: 0 0 10px 0;
    font-size: 1.4em;
    text-transform: uppercase;
    border-bottom: 1px solid #ddd;
    position: relative;
    .q-card__actions {
      position: absolute;
      top: -12px;
      right: 0;
      i {
        color: #000;
      }
    }
  }
}
.q-stepper {
  box-shadow: none;
}
</style>
