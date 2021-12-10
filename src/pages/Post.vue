<template>
  <q-header style="height: 3rem; background-color: transparent">
    <q-toolbar>
      <q-space />
      <q-btn
        dense
        flat
        :ripple="false"
        class="q-mr-sm"
        color="black"
        icon="bi-arrow-left"
        @click="$router.go(-1)"
      />
      <q-btn dense flat :ripple="false" color="black" icon="bi-three-dots" />
    </q-toolbar>
  </q-header>

  <q-page class="defaultfont text-black">
    <div v-for="post in posts" :key="post.date">
      <q-item
        v-for="land in post.landlord"
        :key="land.username"
        class="q-pt-md"
      >
        <q-item-section avatar top>
          <q-avatar size="xl">
            <img :src="land.prfphoto" />
          </q-avatar>
        </q-item-section>

        <q-item-section top>
          <q-item-label
            lines="1"
            class="defaultfont-semibold"
            style="font-size: medium"
          >
            {{ land.fullname }}
          </q-item-label>
          <q-item-label lines="1" style="font-size: small">
            {{ land.housingName }}
          </q-item-label>
          <span class="text-grey" style="font-size: xx-small">
            {{ post.date }}
          </span>
        </q-item-section>
      </q-item>

      <div class="q-my-xs">
        <q-carousel
          v-model="slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          height="15rem"
          autoplay="2"
          animated
          infinite
          control-color="white"
          navigation
          arrows
        >
          <q-carousel-slide
            v-for="photo in post.photo"
            :key="photo.id"
            :name="photo.id"
            :img-src="photo.url"
          />
        </q-carousel>
      </div>

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
              <q-icon
                v-else
                name="bi-x-square-fill"
                style="font-size: large"
              />
              Private Kitchen
            </div>
            <div class="q-mt-xs">
              <q-icon
                v-if="post.prvCR"
                name="bi-check-square-fill"
                style="font-size: large"
              />
              <q-icon
                v-else
                name="bi-x-square-fill"
                style="font-size: large"
              />
              Private CR
            </div>
          </q-item-label>

          <span class="text-grey q-mt-md" style="font-size: x-small">
            Description
          </span>
          <q-item-label class="description-content q-mt-sm">
            {{ post.description }}
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item class="bg-transparent" style="height: 3.5rem" />
    </div>
  </q-page>
  <q-footer class="defaultfont text-black">
    <q-item
      v-for="post in posts"
      :key="post.date"
      class="fixed-bottom bg-white"
      style="height: 3.5rem"
    >
      <q-separator
        inset
        color="primary"
        class="fixed-bottom"
        style="bottom: 3rem"
      />
      <div class="row q-mt-sm">
        <q-btn
          flat
          round
          :ripple="false"
          color="primary"
          size="sm"
          icon="bi-heart"
        />
        <q-btn
          flat
          round
          :ripple="false"
          color="primary"
          size="sm"
          icon="bi-chat-right"
        />
        <q-btn
          flat
          round
          :ripple="false"
          color="primary"
          size="sm"
          icon="bi-bookmark"
        />
      </div>
      <q-space />
      <span
        class="defaultfont-medium absolute-bottom-right q-pr-md q-pb-md"
        style="font-size: x-small"
      >
        {{ post.likes }} Likes • {{ post.bookmarks }} Bookmarks
      </span>
    </q-item>
  </q-footer>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

@Options({})
export default class PostPage extends Vue {
  slide = "style";
  val = true;
  posts = [
    {
      id: "zinboarding1631096539262",
      date: 1631096539262,
      landlord: [
        {
          username: "@zinboarding",
          fullname: "Azshara Highborne",
          housingName: "Zin-Azshari Boarding House",
          prfphoto: "https://cdn.quasar.dev/img/avatar2.jpg",
        },
      ],
      title:
        "Free boarding room @ Zin-Azshari Boarding House 5th street MSU-Marawi",
      fee: "1,200",
      prvKitchen: true,
      prvCR: true,
      description: `Room dimension: 12x10ft
        Beds: 2 (single bed)
        rent fee is per person
        w/ Personal cabinet and shelves
        w/ 24/7 security camera surveillance

        POLICIEs:
        -Observe cleanliness and personal privacy
        -Respect other boarders (if you have problems with other boarder, in the manager to settle them)
        -Always lock the door when leaving your room
        -The management will not be liable of your stolen properties
        -No visitors allowed
        -Curfew is 9pm-5am`,
      photo: [
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
      likes: 44,
      bookmarks: 1,
    },
  ];
}
</script>

<style>
.description-content {
  white-space: pre-line;
  font-size: small;
}
</style>
