<template>
  <q-page class="flex q-pa-md">
    <div class="q-gutter-md q-pl-md">
      <q-card
        @click="$router.push('treatment-detail')"
        v-for="(card, index) in 16"
        :key="index"
        class="relevant full-width">
        <q-card-section>
          <div class="text-h6"> Мое обращение #{{ card }} </div>
          <q-badge
            v-if="index < 3"
            color="red"
            floating>
            1
          </q-badge>
        </q-card-section>
        <q-card-section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Rerum repellendus sit voluptate voluptas eveniet porro.
            Rerum blanditiis perferendis totam, ea at omnis vel
              numquam exercitationem aut, natus minima, porro labore.
          <div class="text-secondary flex justify-end q-pt-xl"> Подробнее </div>
        </q-card-section>

      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'TreatmentList',
<<<<<<< HEAD
  components: {
    VuePoll,
  },
  data() {
    return {
      options: [
        {
          question: '',
          answers: [
            { value: 1, text: 'Арсентьев Михаил', votes: 53 },
            { value: 2, text: 'Родыгин Илья', votes: 35 },
            { value: 3, text: 'Никто из них', votes: 30 },
          ],
        },
        {
          question: '',
          answers: [
            { value: 1, text: 'Детская площадка', votes: 53 },
            { value: 2, text: 'Парковка', votes: 35 },
            { value: 3, text: 'Зеленая зона', votes: 30 },
            { value: 4, text: 'Хоккейная коробка', votes: 10 },
          ],
        },
        {
          question: '',
          answers: [
            { value: 1, text: 'Детская площадка', votes: 53 },
            { value: 2, text: 'Парковка', votes: 35 },
            { value: 3, text: 'Зеленая зона', votes: 30 },
            { value: 4, text: 'Хоккейная коробка', votes: 10 },
          ],
        },
        {
          question: '',
          answers: [
            { value: 1, text: 'Детская площадка', votes: 53 },
            { value: 2, text: 'Парковка', votes: 35 },
            { value: 3, text: 'Зеленая зона', votes: 30 },
            { value: 4, text: 'Хоккейная коробка', votes: 10 },
          ],
        },
        {
          question: '',
          answers: [
            { value: 1, text: 'Детская площадка', votes: 53 },
            { value: 2, text: 'Парковка', votes: 35 },
            { value: 3, text: 'Зеленая зона', votes: 30 },
            { value: 4, text: 'Хоккейная коробка', votes: 10 },
          ],
        },
      ],
    };
  },
  methods: {
    addVote(obj) {
      console.log(`You voted ${obj.value}!`);
    },
  },
=======
>>>>>>> a79537ae392adf7acd609a2159eaa19b59599f01
};
</script>
