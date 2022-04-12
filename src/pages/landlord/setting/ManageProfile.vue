<template>
  <page-header style="height: 4rem">
    <template #slot-left>
      <q-btn
        icon="bi-chevron-left"
        dense
        flat
        :ripple="false"
        size="sm"
        color="black"
        class="q-ml-md"
        @click="$router.go(-1)"
      />
    </template>
    <template #slot-middle>
      <div
        class="defaultfont-light text-bold text-black"
        style="font-size: medium"
      >
        Edit profile
      </div>
    </template>
    <template #slot-right>
      <q-btn
        label="Save"
        unelevated
        rounded
        no-caps
        color="primary"
        class="q-mr-md defaultfont"
        style="height: 3rem"
        @click="confirmEdit()"
      />
    </template>
  </page-header>

  <q-page class="q-px-md defaultfont">
    <div align="center" class="q-pa-md">
      <q-avatar size="8rem" class="bg-primary">
        <q-img :src="activeUser.prfphoto" />
      </q-avatar>
      <div class="q-mt-sm">
        <q-btn
          label="Edit"
          unelevated
          rounded
          no-caps
          text-color="black"
          color="grey-3"
        />
      </div>
    </div>

    <div class="q-px-sm q-pb-xl">
      <q-input
        v-model="activeUser.firstname"
        label="First name"
        stack-label
        class="q-mt-lg"
        style="font-size: medium"
      />
      <q-input
        v-model="activeUser.middlename"
        label="Middle name"
        stack-label
        class="q-mt-lg"
        style="font-size: medium"
      />
      <q-input
        v-model="activeUser.lastname"
        label="Last name"
        stack-label
        class="q-mt-lg"
        style="font-size: medium"
      />
      <q-select
        v-model="activeUser.gender"
        :options="genderOptions"
        label="Gender"
        stack-label
        class="q-mt-lg"
        style="font-size: medium"
      />
      <q-input
        v-model="activeUser.birthdate"
        label="Date of birth"
        stack-label
        type="date"
        class="q-mt-lg"
        style="font-size: medium"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class LandlordManageProfile extends Vue {
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
  genderOptions = ["Male", "Female"];

  confirmEdit() {
    this.$q.dialog({
      title: "Confirm Edit",
      message: "Are you sure you want to publish the changes?",
      cancel: true,
      persistent: true,
      class: "defaultfont",
    });
  }
}
</script>
