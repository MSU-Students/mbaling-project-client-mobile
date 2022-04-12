<template>
  <q-header class="defaultfont bg-secondary">
    <div class="q-px-md row items-center text-black" style="height: 4rem">
      <div align="left" class="col-10">
        <q-item-label
          lines="1"
          class="defaultfont-semibold text-primary"
          style="font-size: medium"
          >@{{ activeUser.username }}</q-item-label
        >
      </div>
      <div align="right" class="col">
        <q-btn
          icon="bi-gear-fill"
          dense
          flat
          :ripple="false"
          color="black"
          size="md"
          @click="$router.push('/landlord/settings')"
        />
      </div>
    </div>

    <div align="center" class="q-px-md q-pb-xs text-black">
      <q-avatar size="10rem" class="bg-primary">
        <q-img :src="activeUser.prfphoto" />
      </q-avatar>
      <div
        class="q-mt-md q-px-lg defaultfont-bold text-uppercase"
        style="font-size: large"
      >
        {{ activeUser.housingAddress }}
      </div>
      <div class="q-px-md" style="font-size: small">
        <p style="line-height: 1rem">
          {{ activeUser.addressLine1 }}, {{ activeUser.addressLine2 }} <br />
          {{ activeUser.addressLine3 }}, {{ activeUser.addressLine4 }}
        </p>
      </div>
    </div>
    <q-separator inset color="primary" size="0.1rem" class="q-my-sm" />
  </q-header>

  <q-page class="defaultfont">
  </q-page>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class LandlordAccount extends Vue {
  activeUser = {
    id: 202200001,
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
    housingAddress: "Zin-Azshari Boarding House",

    birthdate: "1999-08-31",
    gender: "Female",
    contact: "09531409858",
    email: "azshara.highborne@gmail.com",
  };
}
</script>
