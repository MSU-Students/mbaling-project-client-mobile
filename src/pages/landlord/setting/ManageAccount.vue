<template>
  <page-header>
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
    <template #title> Manage Account </template>
  </page-header>

  <q-page class="defaultfont">
    <q-list>
      <!-- EDIT USER PROFILE INFO -->
      <q-item class="q-mt-md defaultfont-semibold text-grey">
        <q-item-section> PROFILE INFORMATION </q-item-section>
        <q-item-section side>
          <q-icon
            name="bi-pencil-square"
            size="xs"
            class="text-grey cursor-pointer"
            @click="$router.push('/settings/profile')"
          />
        </q-item-section>
      </q-item>

      <q-item
        v-for="profile in profileInfo"
        :key="profile.label"
        clickable
        v-ripple="false"
      >
        <q-item-section> {{ profile.label }} </q-item-section>
        <q-item-section side style="width: 40%">
          <q-item-label lines="1" class="text-grey">
            {{ profile.value }}
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-separator inset class="q-mt-md" />

      <!-- EDIT USER ADDRESS INFO -->
      <q-item class="q-mt-md defaultfont-semibold text-grey">
        <q-item-section> HOUSING INFORMATION </q-item-section>
        <q-item-section side>
          <q-icon
            name="bi-pencil-square"
            size="xs"
            class="text-grey cursor-pointer"
            @click="$router.push('/settings/address')"
          />
        </q-item-section>
      </q-item>

      <q-item
        v-for="housing in housingInfo"
        :key="housing.label"
        clickable
        v-ripple="false"
      >
        <q-item-section> {{ housing.label }} </q-item-section>
        <q-item-section side style="width: 40%">
          <q-item-label lines="1" class="text-grey">
            {{ housing.value }}
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
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

    birthdate: "August 31, 1989",
    gender: "Female",
    contact: "09090206852",
    email: "azshara.highborne@gmail.com",
  };

  profileInfo = [
    {
      label: "First name",
      value: this.activeUser.firstname,
    },
    {
      label: "Middle name",
      value: this.activeUser.middlename,
    },
    {
      label: "Last name",
      value: this.activeUser.lastname,
    },
    {
      label: "Phone number",
      value: this.activeUser.contact,
    },
    {
      label: "Email",
      value: this.activeUser.email,
    },
    {
      label: "Date of birth",
      value: this.activeUser.birthdate,
    },
    {
      label: "Gender",
      value: this.activeUser.gender,
    },
  ];

  housingInfo = [
    {
      label: "Housing name",
      value: this.activeUser.housingName,
    },
    {
      label: "Set housing address",
      value: this.activeUser.addressLine1 + ", " + this.activeUser.addressLine2,
    },
  ];
}
</script>
