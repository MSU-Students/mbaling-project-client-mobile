<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      v-if="!$route.fullPath.includes('/landlord/search')"
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

    <q-footer class="bg-primary text-white">
      <q-btn-group flat spread style="height: 3rem">
        <q-btn
          v-if="$route.fullPath.includes('/landlord/home')"
          :ripple="false"
          size="lg"
          @click="$router.push('/landlord/home')"
        >
          <i class="mbi-home-fill"></i>
        </q-btn>
        <q-btn
          v-else
          :ripple="false"
          size="lg"
          @click="$router.push('/landlord/home')"
        >
          <i class="mbi-home"></i>
        </q-btn>

        <q-btn
          v-if="$route.fullPath.includes('/landlord/posts')"
          :ripple="false"
          size="lg"
          @click="$router.push('/landlord/posts')"
        >
          <i class="mbi-post-fill"></i>
        </q-btn>
        <q-btn
          v-else
          :ripple="false"
          size="lg"
          @click="$router.push('/landlord/posts')"
        >
          <i class="mbi-post"></i>
        </q-btn>

        <q-btn
          v-if="$route.fullPath.includes('/landlord/inbox')"
          :ripple="false"
          size="lg"
          @click="$router.push('/landlord/inbox')"
        >
          <i class="mbi-inbox-fill"></i>
        </q-btn>
        <q-btn
          v-else
          :ripple="false"
          size="lg"
          @click="$router.push('/landlord/inbox')"
        >
          <i class="mbi-inbox"></i>
        </q-btn>

        <q-btn
          v-if="$route.fullPath.includes('/landlord/account')"
          :ripple="false"
          size="lg"
          @click="$router.push('/landlord/account')"
        >
          <i class="mbi-account-fill"></i>
        </q-btn>
        <q-btn
          v-else
          :ripple="false"
          size="lg"
          @click="$router.push('/landlord/account')"
        >
          <i class="mbi-account"></i>
        </q-btn>
      </q-btn-group>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class MainLayoutLandlord extends Vue {}
</script>
