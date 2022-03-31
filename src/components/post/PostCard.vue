<template>
  <q-list class="q-px-md bg-secondary">
    <q-card>
      <!-- POST PICTURE & TITLE -->
      <div class="q-my-xs">
        <slot name="photo" />
      </div>

      <!-- POST ACTION BUTTONS -->
      <q-card-actions align="evenly" class="text-primary">
        <slot name="button-left" />
        <slot name="button-middle" />
        <slot name="button-right" />
      </q-card-actions>
    </q-card>
    <q-separator size="0.5rem" color="secondary" />
  </q-list>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class PostCardComponent extends Vue {}
</script>
