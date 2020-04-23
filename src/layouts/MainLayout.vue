<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          v-if="$route.fullPath.includes('/detail')"
          v-go-back.signle
          icon="arrow_back"
          flat
          dense
          lebel="Back"
        />

        <q-btn
          v-if="$route.fullPath.includes('/scan')"
          v-go-back.signle
          icon="arrow_back"
          flat
          dense
          lebel="Back"
        />

        <q-toolbar-title class="absolute-center">
          {{ title }}
        </q-toolbar-title>

        <q-btn
          v-if="!userDetails.userId"
          to="/login"
          class="absolute-right q-pr-sn"
          icon="account_circle"
          no-caps
          flat
          dense
          label="Login"
        />
        <q-btn
          v-else
          @click="logoutUser"
          class="absolute-right q-pr-sn"
          icon="account_circle"
          no-caps
          flat
          dense>
          ลงชื่อออก<br>{{ userDetails.name }}
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("store", ["userDetails"]),
    title() {
      console.log(this.$route);
      let currentPath = this.$route.fullPath;
      if (currentPath == "/") return "หน้าหลัก";
      else if (currentPath == "/detail") return "รายละเอียดสินค้า";
      else if (currentPath == "/login") return "เข้าสู่ระบบ";
      else if (currentPath == "/product") return "สินค้า";
      else if (currentPath == "/register") return "ลงทะเบียน";
      else if (currentPath == "/registershop") return "ลงทะเบียนร้านค้า";
      else if (currentPath == "/scan") return "แสกนสินค้า";
    }
  },
  methods: {
    ...mapActions('store', ['logoutUser'])
  }
};
</script>
<style lang="stylus">
  .q-toolbar
    .q-btn
      line-height: 1
</style>
