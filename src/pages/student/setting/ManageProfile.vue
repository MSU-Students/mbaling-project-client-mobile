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

  <q-page class="defaultfont">
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

    <div class="q-px-lg q-pb-lg">
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
    <q-separator class="q-mt-sm" />

    <div align="left" class="q-mt-lg q-px-lg q-pb-xl row items-center">
      <div align="left" class="col-10">
        <div class="defaultfont-semibold text-grey-8" style="font-size: medium">
          Set student course
        </div>
        <div class="defaultfont text-grey" style="font-size: smaller">
          Please proceed to the MSU Housing Management Division to edit your
          student course information.
        </div>
      </div>
      <div align="right" class="col">
        <q-icon name="bi-question-circle" size="lg" color="grey" />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class StudentManageProfile extends Vue {
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
