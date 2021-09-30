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
        <q-toolbar-title>

        <q-input 
           class="full-width"
           bg-color="white" 
           rounded
           outlined 
           v-model="newMessage"
           label="Message" 
           dense>

            <template v-slot:append>
              <q-icon name="send" />
            </template>

            <template v-slot:after>
              <q-btn round dense flat icon="add_circle_outline" />
            </template>
          </q-input>
        </q-toolbar-title>
      </q-toolbar>

    </q-footer>
  </q-layout>
</template>