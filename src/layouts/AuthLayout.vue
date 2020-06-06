<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="text-black">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="~assets/header-logo.png">
          </q-avatar>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {

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
