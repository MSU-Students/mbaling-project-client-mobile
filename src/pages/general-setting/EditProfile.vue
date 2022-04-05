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
    <template #title> Edit profile </template>
  </page-header>

  <q-page class="defaultfont">
    <q-list class="q-mt-md">
      <q-item>
        <q-item-section style="width: 30%"> First name </q-item-section>
        <q-item-section side style="width: 70%">
          <q-input
            v-model="activeUser.firstname"
            outlined
            dense
            class="bg-secondary"
            style="width: 100%"
          />
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section style="width: 30%"> Middle name </q-item-section>
        <q-item-section side style="width: 70%">
          <q-input
            v-model="activeUser.middlename"
            outlined
            dense
            class="bg-secondary"
            style="width: 100%"
          />
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section style="width: 30%"> Last name </q-item-section>
        <q-item-section side style="width: 70%">
          <q-input
            v-model="activeUser.lastname"
            outlined
            dense
            class="bg-secondary"
            style="width: 100%"
          />
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section style="width: 30%"> Phone number </q-item-section>
        <q-item-section side style="width: 70%">
          <q-input
            v-model="activeUser.contact"
            outlined
            dense
            unmasked-value
            mask="####-###-####"
            class="bg-secondary"
            style="width: 100%"
          />
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section style="width: 30%"> Email</q-item-section>
        <q-item-section side style="width: 70%">
          <q-input
            v-model="activeUser.email"
            outlined
            dense
            class="bg-secondary"
            style="width: 100%"
          />
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section style="width: 30%"> Date of birth</q-item-section>
        <q-item-section side style="width: 70%">
          <q-input
            v-model="activeUser.birthdate"
            outlined
            dense
            type="date"
            class="bg-secondary"
            style="width: 100%"
          />
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section style="width: 30%"> Gender</q-item-section>
        <q-item-section side style="width: 70%">
          <q-select
            v-model="activeUser.gender"
            :options="genderOptions"
            outlined
            dense
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
