<template>
  <q-header style="height: 3rem; background-color: transparent">
    <q-toolbar>
      <q-space />
      <q-btn
        v-if="$route.fullPath.includes('/s/viewMore')"
        dense
        flat
        :ripple="false"
        color="black"
        icon="arrow_back"
        @click="$router.go(-1)"
      />
      <q-btn dense flat :ripple="false" color="black" icon="bi-three-dots" />
    </q-toolbar>
  </q-header>

  <q-layout class="defaultfont ">
    <q-page class="defaultfont bg-secondary text-black bg-white">
      <q-list class="q-mt-sm">
        <q-list v-for="post in posts" :key="post.date">
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
          </q-item>

          <!-- <div class="q-my-xs">
          <q-img :src="post.photo" />
        </div> -->
          <!-- --------------------------------------------------------------------------------------------------- -->
          <div class="q-pa-md">
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
                :name="1"
                img-src= "https://cdn.quasar.dev/img/parallax1.jpg"
              />
              <q-carousel-slide
                :name="2"
                img-src= "https://cdn.quasar.dev/img/mountains.jpg"
              />
              <q-carousel-slide
                :name="3"
                img-src= "https://cdn.quasar.dev/img/quasar.jpg"
              />
            </q-carousel>
          </div>

          <!-- --------------------------------------------------------------------------------------------------- -->

          <q-item>
            <q-item-section class="defaultfont-medium">
              <q-item-label style="font-size: small">
                {{ post.title }}
              </q-item-label>
              <q-item-label class="q-py-xs" style="font-size: small">
                {{ post.fee }} PHP monthly
              </q-item-label>

              <q-item-label class="q-pa-sm">
                 <q-checkbox dense disable v-model="val" color="black" />
                Private Kitchen <br>
                 <q-checkbox dense disable v-model="val" color="black" />
                Private CR
              </q-item-label>

              <span class="text-grey q-py-xs" style="font-size: x-small">
                Description
              </span>

              <q-item-label
                class="Description-content"
                style="font-size: small"
              >
              <pre class="defaultfont Description-content ">
                Room dimension: 12x10ft
                Beds: 2 (single bed)
                rent fee is per person
                w/ Personal cabinet and shelves

                POLICIEs:
                -Always lock the door when leaving
                -No visitors allowed
                -Curfew is 9pm-5am
                </pre>
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-item class="fixed-bottom q-mb-xl bg-white">
          <q-separator inset color="primary" class="fixed-bottom fixedP"/>
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
        </q-list>
      </q-list>
    </q-page>
  </q-layout>
</template>

<script>
import { ref } from "vue";
export default {
  name: "",
  data() {
    return {
      slide: ref("style"),
       val: ref(true),
      posts: [
        {
          date: 1631096539262,
          fullname: "Azshara Highborne",
          housingName: "Zin-Azshari Boarding House",
          prfphoto: "https://cdn.quasar.dev/img/avatar2.jpg",
          title:
            "Free boarding room @ Zin-Azshari Boarding House 5th street MSU-Marawi",
          fee: "1,200",
          Checklist: "Private Kitchen Private CR",
          Description:
            "Room dimension: 12x10ft Beds: 2 (single bed) rent fee is per person w/ Personal cabinet and shelves POLICIEs: -Always lock the door when leaving -No visitors allowed -Curfew is 9pm-5am",
          likes: 44,
          bookmarks: 1,
          photo: [
            {
              id: 1,
              url: "https://cdn.quasar.dev/img/parallax1.jpg",
              id: 2,
              url: "https://cdn.quasar.dev/img/mountains.jpg",
              id: 3,
              url: "https://cdn.quasar.dev/img/quasar.jpg",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
.Description-content {
  white-space: pre-line;
  font-size: small;
}
.fixedP {
  bottom: 6rem;
}
</style>

