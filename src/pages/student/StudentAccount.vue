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
        <img :src="student.prfphoto" />
      </q-avatar>
      <div class="text-white q-mt-lg">
        <p class="info-username">{{ student.username }}</p>
        <span class="defaultfont-bold info-fullname text-uppercase">
          {{ student.fullname }}
        </span>
        <p class="info-other">
          {{ student.studentID }} <br />
          {{ student.degree }}, {{ student.yearAdmit }} <br />
          {{ student.department }} <br />
          {{ student.college }}
        </p>
      </div>
    </div>

    <!-- BOOKMARK & APPLICATION TAB -->
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
        <q-tab :ripple="false" name="bookmarks">
          <span class="row items-center" style="font-size: smaller">
            <q-icon name="bi-bookmark-fill" class="q-mr-xs" size="xs" />
            BOOKMARK
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
        <!-- BOOKMARK TAB PANEL -->
        <q-tab-panel name="bookmarks">
          <q-list class="q-mt-sm">
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
                    icon="bi-bookmark-fill"
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
          <q-card flat bordered>
            <q-item class="bg-white">
              <q-item-section thumbnail class="q-ml-none">
                <img src="~src\assets\post-picture-a002.jpg" />
              </q-item-section>

              <q-item-section>
                <div><q-item-label>Hello Raian</q-item-label></div>
                <q-item-label caption class="q-mt-none q-pt-none"
                  >Muammar's Boarding House
                </q-item-label>
                <div class="button-apply">
                  <q-btn
                    style="width: 20%"
                    padding="xs"
                    size="0.5rem"
                    color="primary"
                    label="Apply"
                  />
                </div>
              </q-item-section>
            </q-item>
          </q-card>
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
      student: {
        username: "@palawanexpress98",
        prfphoto: "https://cdn.quasar.dev/img/boy-avatar.png",
        studentID: 201812730,
        fullname: "Nahed S. Bashier",
        degree: "BS Information Technology (Database System)",
        yearAdmit: 2018,
        department: "Department of Information Sciences",
        college: "College of Information and Computing Sciences",
      },
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
