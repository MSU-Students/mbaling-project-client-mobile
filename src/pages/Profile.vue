<template>
  <page-header style="background-color: primary">
    <template #button-left>
      <q-btn
        icon="bi-arrow-left"
        :ripple="false"
        flat
        class="q-pl-sm"
        @click="$router.go(-1)"
      />
    </template>
    <template #button-right>
      <q-btn
        icon="bi-envelope-fill"
        :ripple="false"
        flat
        @click="$router.push('/chat')"
      />
    </template>
  </page-header>

  <q-page class="defaultfont bg-secondary text-black">
    <!-- PROFILE SECTION -->
    <div class="q-pa-md bg-primary flex-center text-center">
      <q-avatar size="8rem" class="q-mt-md">
        <img :src="user.prfphoto" />
      </q-avatar>

      <!-- USER PROFILE -->
      <div class="q-mt-lg text-white">
        <p style="font-size: medium">@{{ user.username }}</p>
        <span class="defaultfont-bold text-uppercase" style="font-size: large">
          {{ user.firstname }} {{ user.middlename.charAt(0) }}.
          {{ user.lastname }}
        </span>
        <p style="font-size: smaller; line-height: 0.85rem">
          {{ user.housingName }} <br />
          {{ user.addressLine1 }}, {{ user.addressLine2 }},
          <br />
          {{ user.addressLine3 }}, {{ user.addressLine4 }}
        </p>
        <!-- <div class="q-my-md">
          <q-btn
            :ripple="false"
            unelevated
            no-caps
            color="white"
            size="md"
            text-color="primary"
          >

          </q-btn>
        </div> -->
      </div>
    </div>

    <!-- USER POST DISPLAY LIST -->
    <div class="q-mt-sm q-pa-md">
      <post v-for="post in posts" :key="post.date">
        <template #prfphoto>
          <q-img :src="post.prfphoto" @click="$router.push('/profile')" />
        </template>
        <template #fullname>
          <span @click="$router.push('/profile')">
            {{ post.firstname }} {{ post.middlename.charAt(0) }}.
            {{ post.lastname }}
          </span>
        </template>
        <template #housingName>
          <span @click="$router.push('/profile')">
            {{ post.housingName }}
          </span>
        </template>
        <template #date> {{ post.date }} </template>
        <template #photo>
          <div v-for="photo in post.photos" :key="photo.id">
            <q-img
              v-if="photo.id === 1"
              :src="photo.url"
              fit="cover"
              style="height: 15rem"
            />
          </div>
        </template>
        <template #title> {{ post.title }} </template>
        <template #fee> {{ post.fee }} </template>
        <template #expand>
          <span
            class="text-bold cursor-pointer"
            style="font-size: x-small; text-align: right"
            @click="$router.push('/post')"
          >
            +View more
          </span>
        </template>
        <template #likes> {{ post.likes }} </template>
        <template #bookmarks> {{ post.bookmarks }} </template>
      </post>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Profile extends Vue {
  user = {
    id: 20220001,
    username: "zinboarding",
    password: "password",
    isStudent: false,

    firstname: "Azshara",
    middlename: "Queldorei",
    lastname: "Highborne",
    prfphoto: "https://cdn.quasar.dev/img/avatar2.jpg",

    degree: "",
    department: "",
    college: "",
    yearAdmitted: 0,

    addressLine1: "1205 5th Street",
    addressLine2: "Dimaluna I",
    addressLine3: "Marawi City",
    addressLine4: "Lanao del Sur",
    housingName: "Zin-Azshari Boarding House",

    birthdate: "August 31, 1989",
    gender: "Female",
    contact: "09090206852",
    email: "azshara.highborne@gmail.com",
  };
  posts = [
    {
      id: 135413523,
      title:
        "Free boarding room @ Zin-Azshari Boarding House 5th street MSU-Marawi",
      fee: 1200,
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

      firstname: "Azshara",
      middlename: "Queldorei",
      lastname: "Highborne",
      prfphoto: "https://cdn.quasar.dev/img/avatar2.jpg",
      housingName: "Zin-Azshari Boarding House",

      date: 1631096539262,
      likes: 44,
      bookmarks: 1,
    },
  ];
}
</script>
