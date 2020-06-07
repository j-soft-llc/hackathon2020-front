<template>
  <q-page class="flex q-pa-md">
    <div class="q-gutter-md q-pl-md">
      <q-card
        @click="$router.push('treatment-detail/31')"
        v-for="(treat, index) in treatments"
        :key="index"
        class="relevant full-width">
        <q-card-section>
          <div class="text-h6" v-if="treat.name"> {{ treat.name }} </div>
          <div class="text-h6" v-else> Обращение #{{index}} </div>
          <q-badge
            v-if="index < 3"
            color="red"
            floating>
            1
          </q-badge>
        </q-card-section>
        <q-card-section>
          {{ treat.initiative_text }}
          <div class="text-secondary flex justify-end q-pt-xl"> Подробнее </div>
        </q-card-section>

      </q-card>
    </div>
  </q-page>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'TreatmentList',
  computed: {
    ...mapState('treatments', {
      treatments: (state) => state.items,
    }),

  },
  methods: {
    ...mapActions('treatments', {
      getTreatments: 'getTreatments',
    }),
    async initTreatments() {
      this.$q.loading.show({
        delay: 400,
      });
      await this.getTreatments();
      this.$q.loading.hide();
    },
  },
  created() {
    this.initTreatments();
  },
};
</script>
