<template>
  <q-page class="defaultfont">
    <div class="bg-black">
      <q-carousel
        v-model="slide"
        navigation
        arrows
        animated
        infinite
        swipeable
        transition-prev="slide-right"
        transition-next="slide-left"
        height="20rem"
        autoplay="2"
        class="bg-primary"
        style="border-radius: 2rem 2rem 0 0"
      >
        <template v-slot:navigation-icon="{ active, onClick }">
          <q-btn
            v-if="active"
            icon="bi-circle-fill"
            flat
            round
            dense
            size="0.4rem"
            color="primary"
            @click="onClick"
          />
          <q-btn
            v-else
            icon="bi-circle"
            flat
            round
            dense
            size="0.4rem"
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

    <div class="q-pa-sm bg-white">
      <q-item class="row items-center">
        <q-item-section avatar>
          <q-avatar size="xl" class="bg-primary">
            <img :src="post.prfphoto" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label
            lines="1"
            class="defaultfont-semibold"
            style="font-size: medium"
          >
            {{ post.housingAddress }}
          </q-item-label>
          <q-item-label lines="1" style="font-size: small">
            @{{ post.username }}
          </q-item-label>
        </q-item-section>

        <q-item-section avatar>
          <q-btn
            flat
            round
            color="black"
            size="md"
            @click="$router.push('/profile')"
          >
            <q-icon
              name="bi-arrow-up-short"
              size="lg"
              style="transform: rotate(45deg)"
            />
          </q-btn>
        </q-item-section>
      </q-item>
    </div>

    <div class="q-px-md bg-white">
      <div
        align="center"
        class="q-mt-xs defaultfont-semibold"
        style="font-size: large"
      >
        {{ post.title }}
      </div>
      <div align="center" class="q-py-xs" style="font-size: medium">
        {{ post.fee }} PHP monthly
      </div>
      <div class="q-pa-md" style="font-size: medium">
        <div>
          <q-icon
            :name="
              post.prvKitchen ? 'bi-check-square-fill' : 'bi-x-square-fill'
            "
            size="xs"
          />
          Private Kitchen
        </div>
        <div>
          <q-icon
            :name="post.prvCR ? 'bi-check-square-fill' : 'bi-x-square-fill'"
            size="xs"
          />
          Private CR
        </div>
      </div>
      <div class="q-pb-md description-content">
        {{ post.description }}
      </div>
    </div>

    <q-page-sticky position="top-left" :offset="[18, 18]">
      <q-btn
        icon="bi-arrow-left-short"
        unelevated
        round
        color="black"
        style="opacity: 0.5"
        @click="$router.go(-1)"
      />
    </q-page-sticky>
  </q-page>

  <q-footer
    bordered
    class="q-px-sm defaultfont bg-white text-black"
    style="height: 4rem"
  >
    <div class="row items-center" style="height: 4rem">
      <div align="left" class="col">
        <q-btn
          flat
          round
          :ripple="false"
          color="black"
          size="md"
          icon="bi-chat-fill"
          @click="$router.push('/chat')"
        />
      </div>
      <div align="center" class="col-6"></div>
      <div align="right" class="col">
        <post-options />
      </div>
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
    fee: "1200",
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

    housingAddress: "Zin-Azshari Boarding House",
    username: "zinboarding",
    prfphoto: "https://cdn.quasar.dev/img/avatar2.jpg",
  };
}
</script>

<style>
.description-content {
  white-space: pre-line;
  font-size: small;
}
</style>
