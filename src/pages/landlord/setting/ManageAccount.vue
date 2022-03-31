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

  <q-page class="defaultfont flex column">
    <q-list>
      <div class="q-ml-md q-mt-md defaultfont-semibold text-grey">
        PROFILE INFORMATION
      </div>
      <!-- EDIT FULL NAME -->
      <q-item clickable v-ripple="false" @click="$router.push('')">
        <q-item-section> First name </q-item-section>
        <q-item-section side style="width: 40%">
          <q-item-label lines="1" class="text-grey">
            {{ activeUser.firstname }}
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple="false" @click="$router.push('')">
        <q-item-section> Middle name </q-item-section>
        <q-item-section side style="width: 40%">
          <q-item-label lines="1" class="text-grey">
            {{ activeUser.middlename }}
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple="false" @click="$router.push('')">
        <q-item-section> Last name </q-item-section>
        <q-item-section side style="width: 40%">
          <q-item-label lines="1" class="text-grey">
            {{ activeUser.lastname }}
          </q-item-label>
        </q-item-section>
      </q-item>

      <!-- EDIT MOBILE NUMBER -->
      <q-item clickable v-ripple="false" @click="$router.push('')">
        <q-item-section> Phone number </q-item-section>

        <q-item-section side style="width: 40%">
          <q-item-label lines="1" class="text-grey">
            {{ activeUser.contact }}
          </q-item-label>
        </q-item-section>
      </q-item>

      <!-- EDIT EMAIL ADDRESS -->
      <q-item clickable v-ripple="false" @click="$router.push('')">
        <q-item-section> Email </q-item-section>
        <q-item-section side style="width: 40%">
          <q-item-label lines="1" class="text-grey">
            {{ activeUser.email }}
          </q-item-label>
        </q-item-section>
      </q-item>

      <!-- EDIT BIRTHDATE -->
      <q-item clickable v-ripple="false" @click="$router.push('')">
        <q-item-section> Date of birth </q-item-section>
        <q-item-section side style="width: 40%">
          <q-item-label lines="1" class="text-grey">
            {{ activeUser.birthdate }}
          </q-item-label>
        </q-item-section>
      </q-item>

      <!-- EDIT GENDER -->
      <q-item clickable v-ripple="false" @click="$router.push('')">
        <q-item-section> Gender </q-item-section>
        <q-item-section side style="width: 40%">
          <q-item-label lines="1" class="text-grey">
            {{ activeUser.gender }}
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-separator inset />

      <div class="q-ml-md q-mt-md defaultfont-semibold text-grey">
        HOUSING INFORMATION
      </div>
      <!-- EDIT HOUSING NAME -->
      <q-item clickable v-ripple="false" @click="$router.push('')">
        <q-item-section> Housing name </q-item-section>
        <q-item-section side style="width: 40%">
          <q-item-label lines="1" class="text-grey">
            {{ activeUser.housingName }}
          </q-item-label>
        </q-item-section>
      </q-item>

      <!-- EDIT FULL NAME -->
      <q-item clickable v-ripple="false" @click="$router.push('')">
        <q-item-section> Set housing address </q-item-section>
        <q-item-section side style="width: 40%">
          <q-item-label lines="1" class="text-grey">
            {{ activeUser.addressLine1 }}, {{ activeUser.addressLine2 }}
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
}
</script>
