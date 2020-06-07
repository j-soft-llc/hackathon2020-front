<template>
  <q-card flat v-if="leader">
    <q-card-section class="q-pl-none">
      <div class="row">
        <div class="col flex flex-center">
          <q-avatar size="70px">
            <q-img :src="leader.avatar_link"/>
          </q-avatar>
        </div>
        <div class="col">
          <div class="text-h6" style="font-size: 18px">
            <router-link
              :to="detailLink">
              {{leader.first_name}} {{leader.second_name}}
            </router-link>
          </div>
          <div class="text">
            Представитель по району «{{leader.location.name}}»
          </div>
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <div class="q-gutter-xs">
        <q-chip
          v-for="copm in leader.competencies"
          :key="copm.id"
          dense>
          <q-avatar color="red" text-color="white">67</q-avatar>
          {{copm.name}}
          <q-tooltip content-style="font-size: 12px" >
            {{comp.vote_count}} голосов в поддержку представителя по данному направлению
          </q-tooltip>
        </q-chip>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'Representative',
  props: {
    leader: {
      type: Object,
      required: false,
    },
  },
  computed: {
    detailLink() {
      return `/home/leader-detail/${this.leader.id}`;
    },
  },
};
</script>

<style>

</style>
