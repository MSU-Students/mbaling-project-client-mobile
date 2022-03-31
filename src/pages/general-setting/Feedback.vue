<template>
  <page-header>
    <template #button-left>
      <q-btn
        icon="bi-arrow-left"
        :ripple="false"
        dense
        flat
        color="black"
        class="q-pl-sm"
        @click="$router.go(-1)"
      />
    </template>
    <template #title> Feedback </template>
  </page-header>

  <q-page class="row items-center justify-evenly">
    <p class="defaultfont text-grey-5 text-center">
      <q-icon name="bi-envelope" color="grey-5" size="xl" class="q-mb-sm" />
      <br />
      FEEDBACK IS NOT <br />
      AVAILABLE YET
    </p>
  </q-page>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Feedback extends Vue {}
</script>
