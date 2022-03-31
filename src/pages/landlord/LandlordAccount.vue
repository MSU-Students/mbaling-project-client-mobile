<template>
  <page-header>
    <template #button-right>
      <q-btn
        icon="bi-list"
        :ripple="false"
        dense
        flat
        color="black"
        @click="$router.push('/landlord/settings')"
      />
    </template>
  </page-header>

  <q-page class="defaultfont bg-secondary text-black">
    <!-- PROFILE SECTION -->
    <div class="q-pa-md bg-primary flex-center text-center">
      <q-avatar size="8rem" class="q-mt-md">
        <img :src="activeUser.prfphoto" />
      </q-avatar>

      <!-- USER PROFILE -->
      <div class="q-mt-lg text-white">
        <p style="font-size: medium">@{{ activeUser.username }}</p>
        <span class="defaultfont-bold text-uppercase" style="font-size: large">
          {{ activeUser.firstname }} {{ activeUser.middlename.charAt(0) }}.
          {{ activeUser.lastname }}
        </span>
        <div>
          <p style="font-size: smaller; line-height: 0.85rem">
            {{ activeUser.housingName }} <br />
            {{ activeUser.addressLine1 }}, {{ activeUser.addressLine2 }},
            <br />
            {{ activeUser.addressLine3 }}, {{ activeUser.addressLine4 }}
          </p>
        </div>
      </div>
    </div>

    <!-- ACTIVITY SECTION -->
    <div class="q-mt-sm"></div>
  </q-page>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class LandlordAccount extends Vue {
  activeUser = {
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
}
</script>
