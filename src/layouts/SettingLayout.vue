<template>
  <transition
    appear
    enter-active-class="animated slideInRight"
    leave-active-class="animated slideOutRight"
  >
    <q-layout view="hHh lpR fFf">
      <q-header
        bordered
        class="q-px-md q-py-sm bg-white"
        style="height: 3rem"
      />

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </transition>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class SettingLayout extends Vue {}
</script>
