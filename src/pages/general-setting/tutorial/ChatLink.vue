<template>
  <page-header style="height: 4rem">
    <template #slot-left>
      <q-btn
        icon="bi-chevron-left"
        dense
        flat
        :ripple="false"
        size="sm"
        color="black"
        class="q-ml-md"
        @click="$router.go(-1)"
      />
    </template>
    <template #slot-middle>
      <div
        class="defaultfont-light text-bold text-black"
        style="font-size: medium"
      >
        Set chat link
      </div>
    </template>
  </page-header>

  <q-page class="q-px-md q-pb-xl defaultfont">

  </q-page>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class ChatLink extends Vue {}
</script>
