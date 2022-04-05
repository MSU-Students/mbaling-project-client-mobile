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

      <q-item clickable v-ripple="false" @click="alert()">
        <q-item-section> Set course </q-item-section>
        <q-item-section size style="max-width: 1.25rem">
          <q-icon
            name="bi-question-circle"
            size="xs"
            class="text-grey cursor-pointer"
          />
        </q-item-section>
      </q-item>
      <q-separator inset class="q-mt-md" />

      <!-- EDIT USER ADDRESS INFO -->
      <q-item class="q-mt-md defaultfont-semibold text-grey">
        <q-item-section> ADDRESS INFORMATION </q-item-section>
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
        v-for="address in addressInfo"
        :key="address.label"
        clickable
        v-ripple="false"
      >
        <q-item-section> {{ address.label }} </q-item-section>
        <q-item-section side style="width: 40%">
          <q-item-label lines="1" class="text-grey">
            {{ address.value }}
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class StudentManageAccount extends Vue {
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

  addressInfo = [
    {
      label: "Campus address",
      value: this.activeUser.housingName,
    },
    {
      label: "Set home address",
      value: this.activeUser.addressLine1 + ", " + this.activeUser.addressLine2,
    },
  ];

  alert() {
    this.$q.dialog({
      message:
        "Please proceed to the MSU Housing Management Division to edit this section.",
      class: "defaultfont",
    });
  }
}
</script>
