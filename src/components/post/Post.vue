<template>
  <q-list class="bg-white">
    <!-- POST PROFILE -->
    <q-item class="q-pt-md">
      <q-item-section avatar top>
        <q-avatar size="xl">
          <slot name="prfphoto" />
        </q-avatar>
      </q-item-section>

      <q-item-section top>
        <q-item-label
          lines="1"
          class="defaultfont-semibold"
          style="font-size: medium"
        >
          <slot name="fullname" />
        </q-item-label>
        <q-item-label lines="1" style="font-size: small">
          <slot name="housingName" />
        </q-item-label>
        <span class="text-grey" style="font-size: xx-small">
          <slot name="date" />
        </span>
      </q-item-section>

      <q-item-section side top>
        <post-options></post-options>
      </q-item-section>
    </q-item>

    <!-- POST PICTURE -->
    <div class="q-my-xs">
      <slot name="photo" />
    </div>

    <!-- POST INFO -->
    <q-item>
      <q-item-section class="defaultfont-medium">
        <q-item-label lines="1" style="font-size: small">
          <slot name="title" />
        </q-item-label>
        <q-item-label style="font-size: small">
          <slot name="fee" /> PHP monthly
        </q-item-label>
      </q-item-section>
    </q-item>
    <q-separator inset color="primary" />

    <!-- POST ACTION BUTTONS -->
    <q-card-actions align="evenly" class="text-primary">
      <slot name="buttons" />
    </q-card-actions>
    <q-separator size="0.5rem" color="secondary" />
  </q-list>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class PostComponent extends Vue {}
</script>
