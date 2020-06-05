<template>
  <q-layout view="hHh LpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          v-if="!isMobile"
          dense
          flat
          round
          icon="menu"
          @click="leftDrawer = !leftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Youdem
        </q-toolbar-title>
        <q-btn
          @click="iWantModal = true"
          v-if="isMobile"
          dense
          flat
          round
          icon="add"/>
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
            icon="map"
            to="/"
            exact
          />
          <q-route-tab
            icon="settings"
            to="/settings"
            exact
          />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-if="!isMobile"
      show-if-above
      v-model="leftDrawer"
      side="left" bordered>
      <div class="col">
        <router-link to="/">
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
        <router-link to="/settings">
          <template v-slot="props">
            <q-btn
              align="left"
              to="/settings"
              :color="buttonColor(props)"
              flat
              label="Настройки"
              class="full-width"/>
          </template>
        </router-link>
        <q-btn-dropdown
          align="left"
          flat
          class="full-width"
          color="primary"
          label="Я хочу">
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>Подать жалобу</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>Добавить предложение</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>Сформировать претензию</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-dialog
      maximized
      v-model="iWantModal">
      <q-card>
        <q-card-section>
          <div class="text-h6">Я хочу</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-btn
            align="center"
            color="primary"
            flat
            label="Подать жалобу"
            class="full-width"/>
          <q-btn
            align="center"
            color="primary"
            flat
            label="Добавить предложение"
            class="full-width"/>
          <q-btn
            align="center"
            color="primary"
            flat
            label="Сформировать претензию"
            class="full-width"/>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Закрыть" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-layout>
</template>

<script>
export default {
  name: 'layout',
  data() {
    return {
      leftDrawer: false,
      iWantModal: false,
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

<style lang="scss" scoped>

</style>
