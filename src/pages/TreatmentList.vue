<template>
  <q-page class="flex">
    <div class="q-ma-md q-gutter-md">
      <q-card v-for="(card, index) in 16" :key="index" class="treatment-list full-width">
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
export default {
  name: 'TreatmentList',
};
</script>

<style lang="scss" scoped>

</style>
