<template>
  <q-page class="flex">
    <div class="q-ma-md q-gutter-md">
      <div class="section">
        <div class="section__title">Благоустройство</div>
        <div class="section__description">
          Представитель по вашему ТСЖ "Соломбала"
          <a href="#">Арсентьев Михаил</a> проводит
          голосование за улучшение придомовой территории
          по адресу: г.Архангельск, ул.Советская, д.17.
          <br>
          <br>
          Во дворе дома находится большая не обустроенная
          территория. Предлагается ее занять чем-то полезным.
          <br>
          <br>
          Выберите наиболее приемлемый для вас вариант:
        </div>
        <vue-poll v-bind="options" @addvote="addVote"/>
      </div>
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
import VuePoll from '../components/VuePoll.vue';

export default {
  name: 'TreatmentList',
  components: {
    VuePoll,
  },
  data() {
    return {
      options: {
        question: '',
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
