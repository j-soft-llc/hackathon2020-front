<template>
  <q-card flat v-if="leaderProp">
    <q-card-section class="q-pl-none">
      <div class="row">
        <div class="col flex flex-center">
          <q-avatar size="70px">
            <q-img :src="leaderProp.avatar_link"/>
          </q-avatar>
        </div>
        <div class="col">
          <div class="text-h6" style="font-size: 18px">
            <router-link
              :to="detailLink">
              {{leaderProp.first_name}} {{leaderProp.second_name}}
            </router-link>
          </div>
          <div class="text">
            Представитель по району «{{leaderProp.location.name}}»
          </div>
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <div class="q-gutter-xs">
        <q-chip
          v-for="comp in leaderProp.сompetencies"
          :key="comp.id"
          dense>
          <q-avatar color="red" text-color="white">{{comp.vote_count}}</q-avatar>
          {{comp.name}}
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
    leaderId: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      leaderData: undefined,
    };
  },
  computed: {
    detailLink() {
      return `/home/leader-detail/${this.leaderProp.id}`;
    },
    leaderProp() {
      return this.leader ? this.leader : this.leaderData;
    },
  },
  methods: {
    async initLeader() {
      if (!this.leader) {
        this.$q.loading.show({
          delay: 400,
        });
        const token = localStorage.getItem('token');
        const result = await this.$axios.get(`/api/leaders/${this.leaderId}/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        this.leaderData = result.data;
        this.$q.loading.hide();
      }
    },
  },
  created() {
    this.initLeader();
  },
};
</script>

<style>

</style>
