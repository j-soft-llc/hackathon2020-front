<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="leftDrawer = !leftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Youdem
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawer" side="left" bordered>
      <div class="col">
        <q-btn to="/" color="primary" flat label="Страница 1" class="full-width"/>
        <q-btn to="page-2" color="primary" flat label="Страница 2" class="full-width"/>
        <q-btn to="page-3" color="primary" flat label="Страница 3" class="full-width"/>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      leftDrawer: false,
    };
  },
};
</script>
