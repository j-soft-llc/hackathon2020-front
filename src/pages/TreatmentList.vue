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
        </q-card-section>
        <q-card-section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Rerum repellendus sit voluptate voluptas eveniet porro.
            Rerum blanditiis perferendis totam, ea at omnis vel
              numquam exercitationem aut, natus minima, porro labore.
          <div class="text-primary flex justify-end q-pt-sm"> Подробнее </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'TreatmentList',
};
</script>
