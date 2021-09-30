<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-white q-px-md q-py-sm" style="height: 3rem">

      <q-toolbar-title>
        <q-img
          src="~assets/mbaling-logo-horizontal.svg"
          style="max-width: 8rem"
        />
      </q-toolbar-title>

      <q-btn 
        v-if="$route.fullPath.includes('/inbox')"
        class="absolute-right q-pr-md"
        @click="$router.go(-1)"
        :ripple="false"
        color="black"
        icon="send"
        rounded
        dense
        flat
        />
        
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-primary text-white">
      <q-btn-group flat spread style="height: 3rem">
        <q-btn
          :ripple="false"
          size="lg"
          @click="() => $router.replace('/s/home')"
        >
          <i :class="btnHome"></i>
        </q-btn>
        <q-btn
          :ripple="false"
          size="lg"
          @click="() => $router.replace('/search')"
        >
          <i :class="btnSearch"></i>
        </q-btn>
        <q-btn
          :ripple="false"
          size="lg"
          @click="() => $router.replace('/inbox')"
        >
          <i :class="btnInbox"></i>
        </q-btn>
        <q-btn
          :ripple="false"
          size="lg"
          @click="() => $router.replace('/s/account')"
        >
          <i :class="btnAccount"></i>
        </q-btn>
      </q-btn-group>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class MainLayout extends Vue {
  btnHome = "mbi-home";
  btnSearch = "mbi-search";
  btnInbox = "mbi-inbox";
  btnAccount = "mbi-account";
}
</script>
