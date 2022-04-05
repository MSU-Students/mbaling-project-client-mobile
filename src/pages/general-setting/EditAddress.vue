<template>
  <page-header class="bg-white">
    <template #button-left>
      <q-btn
        icon="bi-arrow-left"
        :ripple="false"
        dense
        flat
        color="black"
        class="q-pl-sm"
        @click="$router.go(-1)"
      />
    </template>
    <template #title> Edit address </template>
  </page-header>

  <q-page class="defaultfont">
    <q-list class="q-mt-md">
      <q-item>
        <q-item-section v-if="activeUser.isStudent"> Set address </q-item-section>
        <q-item-section v-else> Set housing address </q-item-section>
      </q-item>

      <q-item>
        <q-item-section>
          <q-input
            v-model="activeUser.addressLine1"
            outlined
            dense
            placeholder="Address line 1 (e.g. house number, street)"
            class="bg-secondary"
            style="width: 100%"
          />
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section>
          <q-input
            v-model="activeUser.addressLine2"
            outlined
            dense
            placeholder="Address line 2 (e.g. baranggay)"
            class="bg-secondary"
            style="width: 100%"
          />
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section>
          <q-input
            v-model="activeUser.addressLine3"
            outlined
            dense
            placeholder="Address line 3 (e.g. city, municipality)"
            class="bg-secondary"
            style="width: 100%"
          />
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section>
          <q-input
            v-model="activeUser.addressLine4"
            outlined
            dense
            placeholder="Address line 4 (e.g. province, state)"
            class="bg-secondary"
            style="width: 100%"
          />
        </q-item-section>
      </q-item>
    </q-list>

    <div class="q-mt-lg flex flex-center">
      <q-btn
        label="save"
        :ripple="false"
        unelevated
        rounded
        dense
        no-caps
        color="primary"
        text-color="white"
        style="height: 2rem; width: 7rem; font-size: small"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class LandlordManageAccount extends Vue {
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

    birthdate: "1999-08-31",
    gender: "Female",
    contact: "09090206852",
    email: "azshara.highborne@gmail.com",
  };

  genderOptions = ["Male", "Female"];
}
</script>
