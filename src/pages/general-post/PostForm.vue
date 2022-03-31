<template>
  <page-header style="background-color: white">
    <template #button-left>
      <q-btn
        icon="bi-arrow-left"
        :ripple="false"
        flat
        color="black"
        class="q-pl-sm"
        @click="$router.go(-1)"
      />
    </template>
    <template #button-right>
      <q-btn
        label="post"
        :ripple="false"
        unelevated
        size="sm"
        color="primary"
        class="q-mr-sm"
      />
    </template>
  </page-header>

  <q-page class="defaultfont text-black">
    <!-- POST PHOTO SECTION -->
    <div class="bg-secondary" style="height: 15rem">
      <div class="row items-center justify-evenly" style="height: 100%">
        <q-icon name="bi-image" size="xl" color="grey" />
      </div>
    </div>

    <!-- UPLOAD AND CAMERA BUTTONS -->
    <div class="q-mt-sm q-mb-lg q-px-lg">
      <q-btn-group flat spread>
        <q-btn
          icon="bi-image"
          label="Upload"
          flat
          size="sm"
          color="primary"
          class="defaultfont-bold"
        />
        <input ref="fileInput" hidden multiple type="file" class="file-input" />
        <q-btn
          icon="bi-camera"
          label="Capture"
          flat
          size="sm"
          color="primary"
          class="defaultfont-bold"
        />
      </q-btn-group>
    </div>

    <!-- INPUT FIELDS -->
    <div class="q-mx-md">
      <q-input class="q-my-sm" filled dense autogrow placeholder="Title" />

      <div class="row q-my-sm">
        <q-input
          class="q-mr-md"
          filled
          dense
          style="width: 50%"
          placeholder="Fee"
        />
        <span class="q-mt-sm q-pt-xs">MONTHLY FEE</span>
      </div>

      <div class="q-pl-lg q-mt-md column">
        <q-checkbox
          label="Private Kitchen"
          v-model="pkBox"
          dense
          color="primary"
          class="q-mb-sm"
        />
        <q-checkbox label="Private CR" v-model="pcBox" dense color="primary" />
      </div>

      <q-input
        filled
        type="textarea"
        placeholder="Description"
        class="q-mt-md"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { ref } from "vue";
import { Vue } from "vue-class-component";

export default class PostForm extends Vue {
  pkBox = ref(false);
  pcBox = ref(false);
}
</script>
