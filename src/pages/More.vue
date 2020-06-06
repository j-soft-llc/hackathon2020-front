<template>
  <q-page class="flex">
     <q-list class="full-width">
       <q-item clickable v-ripple to="/home/profile">
        <q-item-section>Профиль</q-item-section>
      </q-item>
       <q-item clickable v-ripple>
        <q-item-section>Настройки</q-item-section>
      </q-item>
       <q-item clickable v-ripple>
        <q-item-section>Настройки</q-item-section>
      </q-item>
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Темная тема</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-toggle
            @input="setDarkMode"
            color="black"
            v-model="darkMode"
            val="true" />
        </q-item-section>
      </q-item>
     </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'More',
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    setDarkMode(value) {
      this.$q.dark.set(value);
    },
  },
};
</script>
