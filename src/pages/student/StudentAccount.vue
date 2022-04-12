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
          @click="$router.push('/student/settings')"
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
        {{ activeUser.firstname }} {{ activeUser.lastname }}
      </div>
      <div class="q-px-md" style="font-size: small">
        <p style="line-height: 1rem">
          {{ activeUser.degree }} <br />
          {{ activeUser.department }} <br />
          {{ activeUser.college }}
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
    housingAddress: "",

    birthdate: "1998-10-19",
    gender: "Male",
    contact: "09090206852",
    email: "bashier.ns30@s.msumain.edu.ph",
  };
}
</script>
