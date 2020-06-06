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
      <div class="absolute-edit-button">
        <q-btn
          @click="$router.push('/home/profile-edit')"
          flat
          icon="edit"
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
            <div class="q-gutter-xs q-pb-sm">
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
            </div>
            <div class="col leader-data">
              <div class="row">
                <div class="col text-primary">Роль</div>
                <div class="col">Пользователь</div>
              </div>
              <div class="row">
                <div class="col text-primary">Фамилия</div>
                <div class="col">Арсентьев</div>
              </div>
              <div class="row">
                <div class="col text-primary">Имя</div>
                <div class="col">Михаил</div>
              </div>
              <div class="row">
                <div class="col text-primary">Телефон</div>
                <div class="col">
                  <a href="tel:+79025075419">+7 (902) 507-54-19</a>
                </div>
              </div>
              <div class="row">
                <div class="col text-primary">E-mail</div>
                <div class="col">
                  <a href="mailto:mixarsen@yandex.ru">mixarsen@yandex.ru</a>
                </div>
              </div>
              <div class="row">
                <div class="col text-primary">VK</div>
                <div class="col">
                  <a target="blank" href="https://vk.com/m_arsentev">Михаил Арсентьев</a>
                </div>
              </div>
              <div class="row justify-center q-pt-md">
                <q-btn
                  to="/home/chat-page"
                  color="accent"
                  text-color="white"
                  icon="create"
                  label="Чат с Михаилом" />
              </div>
              <div class="row q-pt-md">
                <div class="col-12 text-primary q-pb-sm">Территория представителя:</div>
                <l-map
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
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 8,
      center: [55.7540471, 37.620405],
      markerLatLng: [55.7540471, 37.620405],
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
