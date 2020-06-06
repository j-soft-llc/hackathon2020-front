<template>
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
              to="/home/leader-detail">
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
      <div class="q-gutter-xs">
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
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'Representative',
};
</script>

<style>

</style>
