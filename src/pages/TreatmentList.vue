<template>
  <q-page class="flex">
    <div class="q-ma-md q-gutter-md">
      <q-card class="section q-pa-sm q-ma-none q-mt-md">
        <div class="section__title">Выбор представителя</div>
        <div class="section__description">
          По вашему району «Соломбала» сразу
          2 пользователя выдвинули свои кандидатуры на пост
          представителя в разделе <b>Дорожное хозяйство</b>:
          <q-card flat>
            <q-card-section class="q-pl-none">
              <div class="row">
                <div class="col flex flex-center">
                  <q-avatar size="70px">
                    <q-img src="https://www.vhv.rs/dpng/d/409-4091658_stock-avatar-hd-png-download.png"/>
                  </q-avatar>
                </div>
                <div class="col">
                  <div class="text-h6" style="font-size: 18px">
                    <router-link
                      to="/leader-detail">
                      Арсентьев Михаил
                    </router-link>
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
          <q-card flat>
            <q-card-section class="q-pl-none">
              <div class="row">
                <div class="col flex flex-center">
                  <q-avatar size="70px">
                    <q-img src="https://www.vhv.rs/dpng/d/409-4091658_stock-avatar-hd-png-download.png"/>
                  </q-avatar>
                </div>
                <div class="col">
                  <div class="text-h6" style="font-size: 18px">
                    <router-link
                      to="/leader-detail">
                      Родыгин Илья
                    </router-link>
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
          <br>
          <br>
          Выберите наиболее приемлемый для вас вариант:
        </div>
        <vue-poll v-bind="options[0]" @addvote="addVote"/>
      </q-card>
      <q-card class="section q-pa-sm q-ma-none q-mt-md">
        <div class="section__title">Инициатива</div>
        <div class="section__description">
          По вашему ТСЖ «Соломбала» имеется новая инициатива.
          Проводится голосование за улучшение придомовой территории
          по адресу: г.Архангельск, ул.Советская, д.17.
          <br>
          <br>
          Представитель:
          <q-card flat>
            <q-card-section class="q-pl-none">
              <div class="row">
                <div class="col flex flex-center">
                  <q-avatar size="70px">
                    <q-img src="https://www.vhv.rs/dpng/d/409-4091658_stock-avatar-hd-png-download.png"/>
                  </q-avatar>
                </div>
                <div class="col">
                  <div class="text-h6" style="font-size: 18px">
                    <router-link
                      to="/leader-detail">
                      Алексей Петров
                    </router-link>
                  </div>
                  <div class="text">
                    Представитель по району «Соломбала»
                  </div>
                </div>
              </div>
            </q-card-section>
            <q-card-section>
              <div class="q-gutter-md">
                <q-badge color="blue">
                  Дорожное хозяйство
                </q-badge>
                <q-badge color="blue">
                  ЖКХ
                </q-badge>
              </div>
            </q-card-section>
          </q-card>
          <br>
          <br>
          Описание:
          <br>
          <br>
          во двре дома №17 по адресу Советская 17
          расположена большая пустующая территория, которую можно благоустроить.
          <br>
          <br>
          Необходимо определиться, что больше всего нужно жителям этого
          дома и рядом стоящих.
          <br>
          <br>
          Выберите наиболее приемлемый для вас вариант:
        </div>
        <vue-poll v-bind="options[1]" @addvote="addVote"/>
      </q-card>
      <!-- <q-card
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
      </q-card> -->
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
      options: [
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
};
</script>

<style lang="scss" scoped>

</style>
