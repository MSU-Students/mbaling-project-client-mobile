<template>
  <q-header style="height: 3rem; background-color: transparent">
    <q-toolbar>
      <slot name="button-left" />
      <q-space />
      <div class="defaultfont-semibold text-black text-body2 absolute-center">
        <slot name="title" />
      </div>
      <q-space />
      <slot name="button-right" />
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class PageHeaderComponent extends Vue {
}
</script>

