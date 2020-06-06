<template>
  <q-page class="flex">
    <div class="q-ma-md q-gutter-md">
      <vue-poll v-bind="options" @addvote="addVote"/>
      <q-card
        @click="$router.push('treatment-detail')"
        v-for="(card, index) in 16"
        :key="index"
        class="treatment-list full-width">
        <q-card-section>
          <div class="text-h6"> Мое обращение #{{ card }} </div>
        </q-card-section>
        <q-card-section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Rerum repellendus sit voluptate voluptas eveniet porro.
            Rerum blanditiis perferendis totam, ea at omnis vel
              numquam exercitationem aut, natus minima, porro labore.
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import VuePoll from 'vue-poll';

export default {
  name: 'TreatmentList',
  components: {
    VuePoll,
  },
  data() {
    return {
      options: {
        question: 'Благоустройство',
        answers: [
          { value: 1, text: 'Детская площадка', votes: 53 },
          { value: 2, text: 'Парковка', votes: 35 },
          { value: 3, text: 'Зеленая зона', votes: 30 },
          { value: 4, text: 'Хоккейная коробка', votes: 10 },
        ],
      },
    };
  },
  methods: {
    addVote(obj) {
      console.log(`You voted ${obj.value}!`);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
