<template>
  <q-layout view="hHh lpR fFf" class="defaultfont-light bg-primary text-white">
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="row justify-center" style="height: 3rem">
      <p class="defaultfont-light info-other cursor-pointer" @click="alert">
        Sign-up for an account
        <q-icon name="bi-question-circle" />
      </p>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class MainLayout extends Vue {
  alert() {
    this.$q.dialog({
      message:
        "Please proceed to the MSU Housing Management Division to sign-up for an account.",
    });
  }
}
</script>
