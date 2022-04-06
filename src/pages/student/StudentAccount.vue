<template>
  <page-header>
    <template #button-right>
      <q-btn
        icon="bi-list"
        :ripple="false"
        dense
        flat
        color="black"
        @click="$router.push('/student/settings')"
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
            {{ activeUser.degree }}, {{ activeUser.yearAdmitted }} <br />
            {{ activeUser.department }} <br />
            {{ activeUser.college }}
          </p>
        </div>
      </div>
    </div>

    <!-- ACTIVITY SECTION -->
    <div class="q-pa-md q-mt-md">
      <q-card class="q-pa-md defaultfont">
        <div class="defaultfont-semibold">Set your campus address</div>
        <q-form class="q-my-sm">
          <q-input square filled dense clearable placeholder="Search">
            <template v-slot:prepend>
              <q-btn flat round size="0.7rem">
                <q-icon name="bi-search" size="1.25rem" type="submit" />
              </q-btn>
            </template>
          </q-input>
        </q-form>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class StudentAccount extends Vue {
  activeUser = {
    id: 201812730,
    username: "palawanexpress98",
    password: "password",
    isStudent: true,

    firstname: "Nahed",
    middlename: "Solaiman",
    lastname: "Bashier",
    prfphoto: "https://cdn.quasar.dev/img/boy-avatar.png",

    degree: "BS Information Technology (Database System)",
    department: "Department of Information Sciences",
    college: "College of Information and Computing Sciences",
    yearAdmitted: 2018,

    addressLine1: "0059 Disarip Street",
    addressLine2: "Bubonga Marawi",
    addressLine3: "Marawi City",
    addressLine4: "Lanao del Sur",
    housingName: "",

    birthdate: "October 19, 1998",
    gender: "Male",
    contact: "09531409858",
    email: "bashier.ns30@s.msumain.edu.ph",
  };
}
</script>
