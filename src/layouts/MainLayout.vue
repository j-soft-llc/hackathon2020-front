<template>
  <q-layout view="hHh LpR fFf">

    <q-header elevated class="text-black">
      <q-toolbar>
        <q-btn
          v-if="!isMobile"
          dense
          flat
          round
          icon="menu"
          color="black"
          @click="leftDrawer = !leftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="~assets/header-logo.png">
          </q-avatar>
        </q-toolbar-title>
        <q-btn
          @click="iWantModal = true"
          v-if="isMobile"
          dense
          flat
          round
          icon="add_circle_outline"/>
      </q-toolbar>
    </q-header>

    <q-footer
      v-if="isMobile"
      bordered
      class="bg-white text-primary">
      <q-tabs
        no-caps
        active-color="primary"
        indicator-color="transparent"
        class="text-grey"
        v-model="tab">
          <q-route-tab
            icon="people"
            to="/"
            exact
            label="Лидеры"
          />
          <q-route-tab
            icon="people"
            to="/treatment-list"
            exact
            label="Мои обращения"
          />
          <q-route-tab
            icon="settings"
            to="/settings"
            exact
            label="Настройки"
          />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-if="!isMobile"
      show-if-above
      v-model="leftDrawer"
      side="left" bordered>
      <div class="col">
        <router-link to="/" exact>
          <template v-slot="props">
            <q-btn
              align="left"
              :color="buttonColor(props)"
              to="/"
              flat
              label="Лидеры рядом"
              class="full-width"/>
          </template>
        </router-link>
        <router-link to="/treatment-list">
          <template v-slot="props">
            <q-btn
              align="left"
              to="/treatment-list"
              :color="buttonColor(props)"
              flat
              exact
              label="Обращения"
              class="full-width"/>
          </template>
        </router-link>
        <q-expansion-item
          align="left"
          flat
          class="full-width"
          header-class="text-primary"
          color="primary"
          label="Новое обращение">
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label class="text-primary">Подать жалобу</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label class="text-primary">Добавить предложение</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label class="text-primary">Сформировать претензию</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-dialog
      class="add-modal"
      maximized
      v-model="iWantModal">
      <q-card>
        <q-card-section>
          <div class="add-modal__title">
            новое обращение
            <q-card-actions align="right">
              <q-btn flat icon="clear" color="primary" v-close-popup />
            </q-card-actions>
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
              icon="settings"
              :done="step > 1"
            >
              <div class="q-gutter-sm">
                <q-radio v-model="treatmentType" selected val="line" label="Предложение" />
                <q-radio v-model="treatmentType" val="rectangle" label="Пожелание" />
                <q-radio v-model="treatmentType" val="ellipse" label="Претензия" />
                <q-radio v-model="treatmentType" val="polygon" label="Жалоба" />
              </div>

              <q-stepper-navigation>
                <q-btn @click="step = 2" color="secondary" label="Дальше" />
              </q-stepper-navigation>
            </q-step>

            <q-step
              :name="2"
              title="Укажите адрес"
              caption="или гео-координаты"
              icon="create_new_folder"
              :done="step > 2"
            >
              <q-input color="purple-12" v-model="address" label="Адрес">
                <template v-slot:prepend>
                  <q-icon name="add_location" />
                </template>
              </q-input>
              <l-map
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
              <q-stepper-navigation>
                <q-btn @click="step = 4" color="primary" label="Дальше" />
                <q-btn flat @click="step = 1" color="primary" label="Назад" class="q-ml-sm" />
              </q-stepper-navigation>
            </q-step>

            <q-step
              :name="3"
              title="Ad template"
              icon="assignment"
              disable
            >
              This step won't show up because it is disabled.
            </q-step>

            <q-step
              :name="4"
              title="Create an ad"
              icon="add_comment"
            >
              Try out different ad text to see what brings in the most customers, and learn how to
              enhance your ads using features like ad extensions. If you run into any problems with
              your ads, find out how to tell if they're running and how to resolve approval issues.

              <q-stepper-navigation>
                <q-btn color="primary" label="Finish" />
                <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
              </q-stepper-navigation>
            </q-step>
          </q-stepper>
        </div>

      </q-card>
    </q-dialog>

  </q-layout>
</template>

<script>
import {
  LMap, LTileLayer, LMarker, LPopup, LIcon,
} from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  name: 'layout',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LIcon,
  },
  data() {
    return {
      address: '',
      leftDrawer: false,
      iWantModal: false,
      step: 1,
      treatmentType: '',
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 8,
      center: [55.7540471, 37.620405],
      markerLatLng: [55.7540471, 37.620405],
    };
  },
  methods: {
    buttonColor({ isActive }) {
      console.log(isActive);
      if (isActive === true) {
        return 'primary';
      }
      return 'secondary';
    },
  },
  computed: {
    isMobile() {
      const isMobile = window.matchMedia('only screen and (max-width: 767px)');
      return isMobile.matches;
    },
  },
};
</script>

<style lang="scss">
.q-toolbar .q-avatar {
  width: auto;
  border-radius: 0;
  font-size: initial;
  height: 50px;
}
.q-layout__section--marginal {
  background: #fff;
}
.youdem-logo {
  height: 50px;
}
body.mobile .q-tabs__content {
  justify-content: space-between;
  // .q-tab {
  //   width: 80px;
  // }
}
.add-modal {
  &__title {
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
@media (height: 812px) {
  .q-footer {
    .q-tabs {
      padding-bottom: 20px;
    }
  }
}
</style>
