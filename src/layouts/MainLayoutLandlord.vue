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
          :ripple="false"
          size="lg"
          @click="$router.push('/landlord/home')"
        >
          <i
            :class="
              $route.fullPath.includes('/landlord/home')
                ? 'mbi-home-fill'
                : 'mbi-home'
            "
          />
        </q-btn>

        <q-btn
          :ripple="false"
          size="lg"
          @click="$router.push('/landlord/post')"
        >
          <i
            :class="
              $route.fullPath.includes('/landlord/post')
                ? 'mbi-post-fill'
                : 'mbi-post'
            "
          />
        </q-btn>

        <q-btn
          :ripple="false"
          size="lg"
          @click="$router.push('/landlord/inbox')"
        >
          <i
            :class="
              $route.fullPath.includes('/landlord/inbox')
                ? 'mbi-inbox-fill'
                : 'mbi-inbox'
            "
          />
        </q-btn>

        <q-btn
          :ripple="false"
          size="lg"
          @click="$router.push('/landlord/account')"
        >
          <i
            :class="
              $route.fullPath.includes('/landlord/account')
                ? 'mbi-account-fill'
                : 'mbi-account'
            "
          />
        </q-btn>
      </q-btn-group>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class MainLayoutLandlord extends Vue {}
</script>
