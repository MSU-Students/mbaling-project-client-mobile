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
        label="save"
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
      <q-input
        v-model="title"
        filled
        dense
        placeholder="Title"
        class="q-my-sm"
      />

      <div class="row q-my-sm">
        <q-input
          v-model="fee"
          filled
          dense
          placeholder="Fee"
          class="q-mr-md"
          style="width: 50%"
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
        v-model="description"
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

export default class PostEdit extends Vue {
  post = {
    id: 135413523,
    title:
      "Free boarding room @ Zin-Azshari Boarding House 5th street MSU-Marawi",
    fee: 1200,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    prvKitchen: false,
    prvCR: false,
    photos: [
      {
        id: 1,
        url: "https://cdn.quasar.dev/img/parallax1.jpg",
      },
      {
        id: 2,
        url: "https://cdn.quasar.dev/img/mountains.jpg",
      },
      {
        id: 3,
        url: "https://cdn.quasar.dev/img/quasar.jpg",
      },
    ],
    date: 1631096539262,

    firstname: "Azshara",
    middlename: "Queldorei",
    lastname: "Highborne",
    prfphoto: "https://cdn.quasar.dev/img/avatar2.jpg",
    housingName: "Zin-Azshari Boarding House",
  };

  title = ref(this.post.title);
  fee = ref(this.post.fee);
  pkBox = ref(this.post.prvKitchen);
  pcBox = ref(this.post.prvCR);
  description = ref(this.post.description);
}
</script>
