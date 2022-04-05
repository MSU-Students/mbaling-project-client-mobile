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
    <template #title> Privacy </template>
  </page-header>

  <q-page class="defaultfont">
    <q-list>
      <q-item class="q-mt-md defaultfont-semibold text-grey">
        <q-item-section> CREDENTIALS </q-item-section>
      </q-item>
      <!-- EDIT USERNAME -->
      <q-item clickable v-ripple="false" @click="$router.push('')">
        <q-item-section> Username </q-item-section>
        <q-item-section side style="width: 40%">
          <q-item-label lines="1" class="text-grey">
            @{{ activeUser.username }}
          </q-item-label>
        </q-item-section>
      </q-item>

      <!-- EDIT PASSWORD -->
      <q-item clickable v-ripple="false" @click="$router.push('')">
        <q-item-section> Password </q-item-section>
      </q-item>
      <q-separator inset class="q-mt-md" />

      <q-item class="q-mt-md defaultfont-semibold text-grey">
        <q-item-section> DISCOVERABILITY </q-item-section>
      </q-item>
      <!-- EDIT HOUSING ADDRESS -->
      <q-item clickable v-ripple="false" @click="confirmEdit()">
        <q-item-section> Display username </q-item-section>
        <q-item-section size style="max-width: 1.75rem">
          <q-icon
            name="bi-toggle-on"
            size="md"
            class="text-grey cursor-pointer"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class LandlordManagePrivacy extends Vue {
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

  confirmEdit() {
    this.$q.dialog({
      title: "Confirm Edit",
      message: "Are you sure you want to toggle this option?",
      cancel: true,
      persistent: true,
      class: "defaultfont",
    });
  }
}
</script>
