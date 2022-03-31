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

    <q-footer v-if="!$route.fullPath.includes('/post')" class="bg-primary text-white">
      <q-btn-group flat spread style="height: 3rem">
        <q-btn
          v-if="$route.fullPath.includes('/student/home')"
          :ripple="false"
          size="lg"
          @click="$router.push('/student/home')"
        >
          <i class="mbi-home-fill"></i>
        </q-btn>
        <q-btn v-else :ripple="false" size="lg" @click="$router.push('/student/home')">
          <i class="mbi-home"></i>
        </q-btn>

        <q-btn
          v-if="$route.fullPath.includes('/student/search')"
          :ripple="false"
          size="lg"
          @click="$router.push('/student/search')"
        >
          <i class="mbi-search-fill"></i>
        </q-btn>
        <q-btn
          v-else
          :ripple="false"
          size="lg"
          @click="$router.push('/student/search')"
        >
          <i class="mbi-search"></i>
        </q-btn>

        <q-btn
          v-if="$route.fullPath.includes('/student/inbox')"
          :ripple="false"
          size="lg"
          @click="$router.push('/student/inbox')"
        >
          <i class="mbi-inbox-fill"></i>
        </q-btn>
        <q-btn v-else :ripple="false" size="lg" @click="$router.push('/student/inbox')">
          <i class="mbi-inbox"></i>
        </q-btn>

        <q-btn
          v-if="$route.fullPath.includes('/student/account')"
          :ripple="false"
          size="lg"
          @click="$router.push('/student/account')"
        >
          <i class="mbi-account-fill"></i>
        </q-btn>
        <q-btn
          v-else
          :ripple="false"
          size="lg"
          @click="$router.push('/student/account')"
        >
          <i class="mbi-account"></i>
        </q-btn>
      </q-btn-group>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class MainLayoutStudent extends Vue {}
</script>
