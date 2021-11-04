<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-white q-px-md q-py-sm" style="height: 3rem">
      <q-toolbar-title>
        <q-img
          src="~assets/mbaling-logo-horizontal.svg"
          style="max-width: 8rem"
        />
      </q-toolbar-title>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-primary text-white">
      <q-btn-group flat spread style="height: 3rem">
        <q-btn
          v-if="
            $route.fullPath.includes('/s/home') ||
            $route.fullPath.includes('/l/home')
          "
          :ripple="false"
          size="lg"
          @click="() => $router.replace('/s/home')"
        >
          <i class="mbi-home-filled"></i>
        </q-btn>
        <q-btn
          v-else
          :ripple="false"
          size="lg"
          @click="() => $router.replace('/s/home')"
        >
          <i class="mbi-home"></i>
        </q-btn>

        <q-btn
          v-if="$route.fullPath.includes('/search')"
          :ripple="false"
          size="lg"
          @click="() => $router.replace('/search')"
        >
          <i class="mbi-search-filled"></i>
        </q-btn>
        <q-btn
          v-else
          :ripple="false"
          size="lg"
          @click="() => $router.replace('/search')"
        >
          <i class="mbi-search"></i>
        </q-btn>

        <q-btn
          v-if="$route.fullPath.includes('/inbox')"
          :ripple="false"
          size="lg"
          @click="() => $router.replace('/inbox')"
        >
          <i class="mbi-inbox-filled"></i>
        </q-btn>
        <q-btn
          v-else
          :ripple="false"
          size="lg"
          @click="() => $router.replace('/inbox')"
        >
          <i class="mbi-inbox"></i>
        </q-btn>

        <q-btn
          v-if="
            $route.fullPath.includes('/s/account') ||
            $route.fullPath.includes('/l/account')
          "
          :ripple="false"
          size="lg"
          @click="() => $router.replace('/s/account')"
        >
          <i class="mbi-account-filled"></i>
        </q-btn>
        <q-btn
          v-else
          :ripple="false"
          size="lg"
          @click="() => $router.replace('/s/account')"
        >
          <i class="mbi-account"></i>
        </q-btn>
      </q-btn-group>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class MainLayout extends Vue {}
</script>