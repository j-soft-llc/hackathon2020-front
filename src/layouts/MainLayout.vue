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

    <!-- <q-page-sticky
      v-if="isMobile"
      position="bottom-right"
      :offset="[18, 18]">
      <q-btn
        @click="iWantModal = true"
        fab
        icon="add"
        color="accent" />
    </q-page-sticky> -->

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
            icon="home"
            to="/home/treatment-list"
            exact
            label="Актуально"
          />
          <q-route-tab
            icon="people"
            to="/"
            exact
            label="Представители"
          />
          <q-route-tab
            icon="settings"
            to="/home/settings"
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
        <router-link to="/home" exact>
          <template v-slot="props">
            <q-btn
              align="left"
              :color="buttonColor(props)"
              to="/home"
              flat
              label="Представители рядом"
              class="full-width"/>
          </template>
        </router-link>
        <router-link to="/home/treatment-list">
          <template v-slot="props">
            <q-btn
              align="left"
              to="/home/treatment-list"
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
            <q-item
              @click="openModalOn = 'proposal', iWantModal = true"
              clickable
              v-close-popup>
              <q-item-section>
                <q-item-label class="text-primary">Добавить предложение</q-item-label>
              </q-item-section>
            </q-item>

            <q-item
              @click="openModalOn = 'wish', iWantModal = true"
              clickable
              v-close-popup>
              <q-item-section>
                <q-item-label class="text-primary">Отправить пожелание</q-item-label>
              </q-item-section>
            </q-item>

            <q-item
              @click="openModalOn = 'claim', iWantModal = true"
              clickable
              v-close-popup>
              <q-item-section>
                <q-item-label class="text-primary">Сформировать претензию</q-item-label>
              </q-item-section>
            </q-item>

            <q-item
              @click="openModalOn = 'complaint', iWantModal = true"
              clickable
              v-close-popup>
              <q-item-section>
                <q-item-label class="text-primary">Подать жалобу</q-item-label>
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
      <IWantModal
        :treatmentTypeProp="openModalOn"
      />
    </q-dialog>

  </q-layout>
</template>

<script>
import IWantModal from '../components/IWantModal.vue';

export default {
  name: 'layout',
  components: {
    IWantModal,
  },
  data() {
    return {
      openModalOn: undefined,
      tab: '',
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
  height: 40px;
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
