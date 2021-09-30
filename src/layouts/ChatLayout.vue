<template>
  <q-layout class="bg-grey-3" view="hHh lpR fFf">
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

     <q-footer class="bg-white">
        <q-toolbar>
          <q-toolbar-title>Footer</q-toolbar-title>
        </q-toolbar>
      </q-footer>
  </q-layout>
</template>