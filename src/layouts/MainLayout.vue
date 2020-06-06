<template>
  <q-layout view="hHh LpR fFf">

    <q-header elevated class="bg-white text-white">
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
            <img class="youdem-logo" src="../assets/icon.png">
          <!-- <q-avatar size="0px">
          </q-avatar> -->
          <!-- Youdem -->
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
      class="add-modal"
      maximized
      v-model="iWantModal">
      <q-card>
        <q-card-section>
          <div class="add-modal__title">
            Я хочу
            <q-card-actions align="right">
              <q-btn flat icon="clear" color="primary" v-close-popup />
            </q-card-actions>
          </div>
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

<style lang="scss">
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
</style>
