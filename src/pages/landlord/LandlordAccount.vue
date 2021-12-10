<template>
  <q-header style="height: 3rem; background-color: transparent">
    <q-toolbar>
      <q-space />
      <q-btn
        dense
        flat
        :ripple="false"
        color="black"
        icon="bi-three-dots-vertical"
      />
    </q-toolbar>
  </q-header>

  <q-page class="defaultfont bg-secondary text-black">
    <!-- PROFILE SECTION -->
    <div class="bg-primary flex-center text-center q-pa-md">
      <q-avatar class="q-mt-md" size="8rem">
        <img :src="landlord.prfphoto" />
      </q-avatar>
      <div class="text-white q-mt-lg">
        <p class="info-username">{{ landlord.username }}</p>
        <span class="defaultfont-bold info-fullname text-uppercase">
          {{ landlord.fullname }}
        </span>
        <p class="info-other">
          {{ landlord.housingName }} <br />
          {{ landlord.housingAdd1 }}, {{ landlord.housingAdd2 }}, <br />
          {{ landlord.housingAdd3 }}, {{ landlord.housingAdd4 }}
        </p>
      </div>
    </div>

    <!-- POST & APPLICATION TAB -->
    <div class="q-mt-sm">
      <q-tabs
        v-model="tab"
        dense
        inline-label
        class="defaultfont-semibold text-grey q-px-md"
        active-color="black"
        indicator-color="transparent"
        align="justify"
      >
        <q-tab :ripple="false" name="posts">
          <span class="row items-center" style="font-size: smaller">
            <q-icon name="bi-pin-angle-fill" class="q-mr-xs" size="xs" />
            POSTS
          </span>
        </q-tab>
        <q-tab :ripple="false" name="applications">
          <span class="row items-center" style="font-size: smaller">
            <q-icon
              name="bi-file-earmark-text-fill"
              class="q-mr-xs"
              size="xs"
            />
            APPLICATIONS
          </span>
        </q-tab>
      </q-tabs>

      <q-separator inset size="0.1rem" color="black" />

      <q-tab-panels v-model="tab" animated class="bg-transparent">
        <!-- POST TAB PANEL -->
        <q-tab-panel name="posts">
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
                    @click="this.$router.push('/post')"
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
                    icon="bi-pencil-square"
                  />
                </div>
                <q-space />
                <span
                  class="
                    defaultfont-medium
                    absolute-bottom-right
                    q-pr-md q-pb-md
                  "
                  style="font-size: x-small"
                >
                  {{ post.likes }} Likes • {{ post.bookmarks }} Bookmarks
                </span>
              </q-item>
              <q-separator size="0.5rem" color="secondary" />
            </q-list>
          </q-list>
        </q-tab-panel>

        <!-- APPLICATION TAB PANEL-->
        <q-tab-panel name="applications">
          <h6>APPLICATIONS</h6>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  data() {
    return {
      landlord: {
        username: "@pirateking_home",
        prfphoto: "https://cdn.quasar.dev/img/avatar4.jpg",
        fullname: "Monkey D. Luffy",
        housingName: "Pirate King Apartment",
        housingAdd1: "0259 5th Street",
        housingAdd2: "Brgy. Dimalna II",
        housingAdd3: "MSU-Marawi",
        housingAdd4: "Marawi City",
      },
      posts: [
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
  setup() {
    return {
      tab: ref("mails"),
    };
  },
};
</script>

<style lang="sass">
.card-post
  .q-img
    min-width: 100px
</style>
