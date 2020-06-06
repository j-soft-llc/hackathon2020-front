<template>
  <q-page class="flex">
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
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'Settings',
};
</script>
