<template>
  <q-page class="flex flex-center">
    <div class="col">
      <div class="absolute-back-button">
        <q-btn
          @click="$router.back()"
          flat
          icon="arrow_back"
          size="xl"/>
      </div>
      Деталка обращения
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'TreatmentDetail',
};
</script>
