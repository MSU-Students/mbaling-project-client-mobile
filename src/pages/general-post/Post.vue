<template>
  <q-header elevated class="q-px-md q-py-sm bg-white" style="height: 3rem">
    <q-toolbar-title>
      <q-img
        src="~assets/mbaling-logo-horizontal.svg"
        style="max-width: 8rem"
      />
    </q-toolbar-title>
    <page-header>
      <template #button-right>
        <q-btn
          icon="bi-arrow-left"
          :ripple="false"
          flat
          color="black"
          class="q-pr-sm"
          @click="$router.go(-1)"
        />
      </template>
    </page-header>
  </q-header>

  <q-page class="defaultfont text-black">
    <!-- POST PROFILE -->
    <q-item class="q-pt-md" clickable>
      <q-item-section avatar top>
        <q-avatar size="xl">
          <img :src="post.prfphoto" @click="$router.push('/profile')" />
        </q-avatar>
      </q-item-section>

      <q-item-section top>
        <q-item-label
          lines="1"
          class="defaultfont-semibold"
          style="font-size: medium"
          @click="$router.push('/profile')"
        >
          {{ post.firstname }} {{ post.middlename.charAt(0) }}.
          {{ post.lastname }}
        </q-item-label>
        <q-item-label
          lines="1"
          style="font-size: small"
          @click="$router.push('/profile')"
        >
          {{ post.housingName }}
        </q-item-label>
        <span class="text-grey" style="font-size: xx-small">
          {{ post.date }}
        </span>
      </q-item-section>
    </q-item>

    <!-- POST PICTURE CAROUSEL -->
    <div class="q-my-xs">
      <q-carousel
        v-model="slide"
        navigation
        arrows
        animated
        infinite
        swipeable
        transition-prev="slide-right"
        transition-next="slide-left"
        height="15rem"
        autoplay="2"
      >
        <template v-slot:navigation-icon="{ active, onClick }">
          <q-btn
            v-if="active"
            icon="bi-circle-fill"
            flat
            round
            dense
            size="xs"
            color="primary"
            @click="onClick"
          />
          <q-btn
            v-else
            icon="bi-circle"
            flat
            round
            dense
            size="xs"
            color="white"
            @click="onClick"
          />
        </template>
        <q-carousel-slide
          v-for="photo in post.photos"
          :key="photo.id"
          :name="photo.id"
          :img-src="photo.url"
        />
      </q-carousel>
    </div>

    <!-- POST INFO -->
    <q-item>
      <q-item-section class="defaultfont-medium">
        <q-item-label style="font-size: small">
          {{ post.title }}
        </q-item-label>
        <q-item-label class="q-py-xs" style="font-size: small">
          {{ post.fee }} PHP monthly
        </q-item-label>

        <q-item-label class="q-pa-sm">
          <div>
            <q-icon
              v-if="post.prvKitchen"
              name="bi-check-square-fill"
              style="font-size: large"
            />
            <q-icon v-else name="bi-x-square-fill" style="font-size: large" />
            Private Kitchen
          </div>
          <div class="q-mt-xs">
            <q-icon
              v-if="post.prvCR"
              name="bi-check-square-fill"
              style="font-size: large"
            />
            <q-icon v-else name="bi-x-square-fill" style="font-size: large" />
            Private CR
          </div>
        </q-item-label>

        <span class="q-mt-md text-grey" style="font-size: x-small">
          Description
        </span>
        <q-item-label class="q-mt-sm description-content">
          {{ post.description }}
        </q-item-label>
      </q-item-section>
    </q-item>
    <q-item class="bg-transparent" style="height: 3.5rem" />
  </q-page>

  <!-- POST ACTION BUTTONS (FOOTER) -->
  <q-footer class="defaultfont">
    <div class="fixed-bottom bg-white" style="height: 3.5rem">
      <q-separator
        inset
        color="primary"
        class="fixed-bottom"
        style="bottom: 3rem"
      />
      <q-card-actions align="evenly" class="text-primary">
        <q-btn
          v-if="isStudent"
          label="Chat"
          :ripple="false"
          flat
          class="q-mt-xs"
          @click="$router.push('/chat')"
        />
        <post-options />
      </q-card-actions>
    </div>
  </q-footer>
</template>

<script lang="ts">
import { ref } from "vue";
import { Vue } from "vue-class-component";

export default class Post extends Vue {
  slide = ref(1);
  fullscreen = false;
  isStudent = true;

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
}
</script>

<style>
.description-content {
  white-space: pre-line;
  font-size: small;
}
</style>
