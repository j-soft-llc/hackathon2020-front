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
      <q-card flat class="q-pa-sm">
        <q-card-section>
          <div class="col">
            <div class="col flex flex-center q-py-md">
              <q-avatar size="20rem">
                <q-img src="https://www.vhv.rs/dpng/d/409-4091658_stock-avatar-hd-png-download.png"/>
              </q-avatar>
            </div>
            <!-- <div class="q-gutter-xs q-pb-sm">
              <q-chip dense>
                <q-avatar color="red" text-color="white">67</q-avatar>
                Дорожное хозяйство
                <q-tooltip content-style="font-size: 12px" >
                  67 голосов в поддержку представителя по данному направлению
                </q-tooltip>
              </q-chip>
              <q-chip dense>
                <q-avatar color="red" text-color="white">39</q-avatar>
                ЖКХ
                <q-tooltip content-style="font-size: 12px" >
                  39 голосов в поддержку представителя по данному направлению
                </q-tooltip>
              </q-chip>
            </div> -->
            <div class="col leader-data">
              <div class="row flex-center">
                <div class="col text-primary">Роль</div>
                <q-input dense v-model="form.role"/>
              </div>
              <div class="row flex-center">
                <div class="col text-primary">Фамилия</div>
                <q-input dense v-model="form.lastName"/>
              </div>
              <div class="row flex-center">
                <div class="col text-primary">Имя</div>
                <q-input dense v-model="form.name"/>
              </div>
              <div class="row flex-center">
                <div class="col text-primary">Телефон</div>
                <q-input dense v-model="form.phone"/>
              </div>
              <div class="row flex-center">
                <div class="col text-primary">E-mail</div>
                <q-input dense v-model="form.email"/>
              </div>
              <div class="row flex-center">
                <div class="col text-primary">VK</div>
                <q-input dense v-model="form.vk"/>
              </div>
              <!-- <div class="row justify-center q-pt-md">
                <q-btn
                  to="/home/chat-page"
                  color="accent"
                  text-color="white"
                  icon="create"
                  label="Чат с Михаилом" />
              </div> -->
              <div class="row q-pt-md">
                <div class="col-12 text-primary q-pb-none">Территория представителя:</div>
                <q-input
                  label="Город/Район/Улица"
                  dense v-model="form.territory" class="full-width"/>
                <!-- <l-map
                  style="height: 30vh"
                  :zoom="zoom"
                  :center="center">
                  <l-tile-layer :url="url"></l-tile-layer>
                  <l-marker :lat-lng="markerLatLng">
                    <l-icon :icon-anchor="[23, 5]">
                      <q-icon name="room" size="xl" color="primary"/>
                    </l-icon>
                    <l-popup>
                      <div class="popup-content">
                        Центр
                      </div>
                    </l-popup>
                  </l-marker>
                </l-map> -->
              </div>
              <div class="row q-pt-md">О представителе:</div>
                <q-input
                  v-model="form.about"
                  filled
                  type="textarea"
                />
              <div class="row q-pt-md">Видео:</div>
                <q-input
                  class="full-width"
                  v-model="form.video"
                  filled
                  type="textarea"
                />
                <q-btn
                  class="full-width q-mt-xl"
                  color="primary"
                  label="Сохранить изменения"/>
                <!-- <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/zMhAOUgTHJQ"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen>
                </iframe> -->
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import 'leaflet/dist/leaflet.css';

export default {
  name: 'LeaderDetail',
  components: {
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 8,
      center: [55.7540471, 37.620405],
      markerLatLng: [55.7540471, 37.620405],
      form: {
        role: 'Пользователь',
        lastName: 'Арсентьев',
        name: 'Михаил',
        phone: '+7 (902) 507-54-19',
        email: 'mixarsen@yandex.ru',
        vk: 'https://vk.com/m_arsentev',
        territory: '',
        about: 'Lorem ipsum dolor sit amet'
          + 'consectetur adipisicing elit. Rerum'
          + ' repellendus sit voluptate voluptas eveniet'
          + ' porro. Rerum blanditiis perferendis totam, '
          + 'ea at omnis vel numquam exercitationem aut, '
          + 'natus minima, porro labore.',
        video: '<iframe width="560" height="315" '
          + 'src="https://www.youtube.com/embed/zMhAOUgTHJQ" '
          + 'frameborder="0" allow="accelerometer; autoplay; '
          + 'encrypted-media; gyroscope; picture-in-picture" '
          + 'allowfullscreen> </iframe>',
      },
    };
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
