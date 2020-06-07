<template>
  <q-page class="flex">
    <div class="col">
      <div class="absolute-back-button">
        <q-btn
          @click="$router.back()"
          flat
          icon="arrow_back"
          size="xl"/>
      </div>
      <q-card flat class="q-pa-sm" v-if="leader">
        <q-card-section>
          <div class="col">
            <div class="col flex flex-center q-py-md">
              <q-avatar size="20rem">
                <q-img :src="leader.avatar_link"/>
              </q-avatar>
            </div>
            <div class="q-gutter-xs q-pb-sm">
              <q-chip
                v-for="comp in leader.сompetencies"
                :key="comp.id"
                dense>
                <q-avatar color="red" text-color="white">{{comp.vote_count}}</q-avatar>
                {{comp.name}}
                <q-tooltip content-style="font-size: 12px" >
                  {{comp.vote_count}} голосов в поддержку представителя по данному направлению
                </q-tooltip>
              </q-chip>
            </div>
            <div class="col leader-data">
              <div class="row">
                <div class="col text-primary">Роль</div>
                <div class="col">Пользователь</div>
              </div>
              <div class="row">
                <div class="col text-primary">Фамилия</div>
                <div class="col">{{leader.second_name}}</div>
              </div>
              <div class="row">
                <div class="col text-primary">Имя</div>
                <div class="col">{{leader.first_name}}</div>
              </div>
              <div class="row">
                <div class="col text-primary">Телефон</div>
                <div class="col">
                  Не указан
                </div>
              </div>
              <div class="row">
                <div class="col text-primary">E-mail</div>
                <div class="col">
                  Не указан
                </div>
              </div>
              <div class="row">
                <div class="col text-primary">VK</div>
                <div class="col">
                  <a
                    target="blank"
                    :href="getVkLink(leader.vk_id)">{{leader.first_name}} {{leader.second_name}}
                  </a>
                </div>
              </div>
              <div class="row justify-center q-pt-md">
                <q-btn
                  to="/home/chat-page"
                  color="accent"
                  text-color="white"
                  icon="create"
                  :label="getChatText" />
              </div>
              <div class="row q-pt-md">
                <div class="col-12 text-primary q-pb-sm">Территория представителя:</div>
                <l-map
                  style="height: 30vh"
                  :zoom="zoom"
                  :center="[leader.location.lat, leader.location.long]">
                  <l-tile-layer :url="url"></l-tile-layer>
                  <l-marker :lat-lng="[leader.location.lat, leader.location.long]">
                    <l-icon :icon-anchor="[23, 5]">
                      <q-icon name="room" size="xl" color="primary"/>
                    </l-icon>
                    <l-popup>
                      <div class="popup-content">
                        {{leader.location.name}}
                      </div>
                    </l-popup>
                  </l-marker>
                </l-map>
              </div>
              <div class="row q-pt-md">О представителе:</div>
              <div class="row">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Rerum repellendus sit voluptate voluptas eveniet porro.
            Rerum blanditiis perferendis totam, ea at omnis vel
              numquam exercitationem aut, natus minima, porro labore.
              </div>
              <div class="row q-pt-md">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/zMhAOUgTHJQ"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen>
                </iframe>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import {
  LMap, LTileLayer, LMarker, LPopup, LIcon,
} from 'vue2-leaflet';
import { mapGetters } from 'vuex';
import 'leaflet/dist/leaflet.css';

export default {
  name: 'LeaderDetail',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LIcon,
  },
  computed: {
    ...mapGetters('leaders', {
      getLeaderById: 'getLeaderById',
    }),
    getRouteId() {
      return this.$route.params.id;
    },
    getChatText() {
      return `Чат с ${this.leader.first_name}`;
    },
    leader() {
      const id = this.getRouteId;
      return this.leaderData ? this.leaderData : this.getLeaderById(parseInt(id, 10));
    },
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 8,
      leaderData: undefined,
    };
  },
  methods: {
    getVkLink(id) {
      return `https://vk.com/id${id}`;
    },
    async initLeader() {
      console.log('leader detail console', this.leader);
      if (!this.leader) {
        this.$q.loading.show({
          delay: 400,
        });
        const token = localStorage.getItem('token');
        const result = await this.$axios.get(`/api/leaders/${this.getRouteId}/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        this.leaderData = result.data;
        console.log('leader detail console', this.leader);
        this.$q.loading.hide();
      }
    },
  },
  created() {
    this.initLeader();
  },
};
</script>

<style lang="scss">
.leader-data {
  font-size: 17px;
}
.popup-content {
  padding: 16px;
  box-sizing: border-box;
}
</style>
