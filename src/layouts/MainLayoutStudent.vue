<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      v-if="!$route.fullPath.includes('/student/search')"
      elevated
      class="q-px-md q-py-sm bg-white"
      style="height: 3rem"
    >
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

    <q-footer
      class="bg-primary text-white"
    >
      <q-btn-group flat spread style="height: 3rem">
        <q-btn :ripple="false" size="lg" @click="$router.push('/student/home')">
          <i
            :class="
              $route.fullPath.includes('/student/home')
                ? 'mbi-home-fill'
                : 'mbi-home'
            "
          ></i>
        </q-btn>

        <q-btn
          :ripple="false"
          size="lg"
          @click="$router.push('/student/search')"
        >
          <i
            :class="
              $route.fullPath.includes('/student/search')
                ? 'mbi-search-fill'
                : 'mbi-search'
            "
          ></i>
        </q-btn>

        <q-btn
          :ripple="false"
          size="lg"
          @click="$router.push('/student/inbox')"
        >
          <i
            :class="
              $route.fullPath.includes('/student/inbox')
                ? 'mbi-inbox-fill'
                : 'mbi-inbox'
            "
          ></i>
        </q-btn>

        <q-btn
          :ripple="false"
          size="lg"
          @click="$router.push('/student/account')"
        >
          <i
            :class="
              $route.fullPath.includes('/student/account')
                ? 'mbi-account-fill'
                : 'mbi-account'
            "
          ></i>
        </q-btn>
      </q-btn-group>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class MainLayoutStudent extends Vue {}
</script>
