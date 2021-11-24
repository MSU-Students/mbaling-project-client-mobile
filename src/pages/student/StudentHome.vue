<template>
  <q-header style="height: 3rem; background-color: transparent" />

  <q-page class="defaultfont bg-secondary text-black">
    <q-list class="q-pt-sm">
      <q-list v-for="post in posts" :key="post.date" class="bg-white">
        <q-item class="q-pt-md">
          <q-item-section avatar top>
            <q-avatar size="xl">
              <img :src="post.prfphoto" />
            </q-avatar>
          </q-item-section>

          <q-item-section top>
            <q-item-label
              lines="1"
              class="defaultfont-semibold"
              style="font-size: medium"
            >
              {{ post.fullname }}
            </q-item-label>
            <q-item-label lines="1" style="font-size: small">
              {{ post.housingName }}
            </q-item-label>
            <span class="text-grey" style="font-size: xx-small">
              {{ post.date }}
            </span>
          </q-item-section>

          <q-item-section side top>
            <q-btn
              dense
              flat
              :ripple="false"
              class="text-black"
              icon="bi-three-dots"
            />
          </q-item-section>
        </q-item>

        <div class="q-my-xs">
          <q-img :src="post.photo" />
        </div>

        <q-item>
          <q-item-section class="defaultfont-medium">
            <q-item-label lines="1" style="font-size: small">
              {{ post.title }}
            </q-item-label>
            <q-item-label style="font-size: small">
              {{ post.fee }} PHP monthly
            </q-item-label>
            <span
              class="text-bold cursor-pointer"
              style="font-size: x-small; text-align: right"
              @click="this.$router.push('/s/viewMore')"
            >
              +View more
            </span>
          </q-item-section>
        </q-item>
        <q-separator inset color="primary" />

        <q-item>
          <div class="row">
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
        <q-separator size="0.5rem" color="secondary" />
      </q-list>
    </q-list>
  </q-page>
</template>

<script lang="ts">
export default {
  name: "StudentHome",
  data() {
    return {
      posts: [
        {
          date: 1631096539262,
          fullname: "Azshara Highborne",
          housingName: "Zin-Azshari Boarding House",
          prfphoto: "https://cdn.quasar.dev/img/avatar2.jpg",
          title:
            "Free boarding room @ Zin-Azshari Boarding House 5th street MSU-Marawi",
          fee: "1,200",
          likes: 44,
          bookmarks: 1,
          photo: "https://cdn.quasar.dev/img/parallax1.jpg",
        },
        {
          date: 1631096551509,
          fullname: "Monkey D. Luffy",
          housingName: "Pirate King Apartment",
          prfphoto: "https://cdn.quasar.dev/img/avatar4.jpg",
          title:
            "Family/Couple size Apartment room w/ Private kitchen and bathroom",
          fee: "6,500",
          likes: 32,
          bookmarks: 4,
          photo: "https://cdn.quasar.dev/img/parallax2.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
