<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-white q-px-md q-py-sm" style="height: 3rem">
      <q-toolbar-title v-if="$route.fullPath.includes('/post')">
        <q-img
          src="~assets/mbaling-logo-horizontal.svg"
          style="max-width: 8rem"
        />
      </q-toolbar-title>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>