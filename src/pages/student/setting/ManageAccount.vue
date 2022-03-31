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

      <!-- EDIT FULL COURSE -->
      <q-item clickable v-ripple="false" @click="alert()">
        <q-item-section> Set course </q-item-section>
        <q-item-section size style="max-width: 1.75rem">
          <q-icon
            name="bi-question-circle"
            size="xs"
            class="text-grey cursor-pointer"
          />
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

      <!-- EDIT BIRTHDATE -->
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
        CAMPUS ADDRESS
      </div>
      <!-- EDIT HOUSING ADDRESS -->
      <q-item clickable v-ripple="false" @click="$router.push('')">
        <q-item-section> Housing address </q-item-section>
        <q-item-section side style="width: 40%">
          <q-item-label lines="1" class="text-grey">
            {{ activeUser.housingName }}
          </q-item-label>
        </q-item-section>
      </q-item>

      <!-- SEND VERIFICATION OF HOUSING ADDRESS -->
      <q-item clickable v-ripple="false" @click="$router.push('')">
        <q-item-section> Verification </q-item-section>
        <q-item-section side style="width: 40%">
          <q-item-label lines="1" class="text-grey">
            Not verified
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-separator inset />

      <div class="q-ml-md q-mt-md defaultfont-semibold text-grey">
        ADDRESS INFORMATION
      </div>
      <!-- EDIT FULL NAME -->
      <q-item clickable v-ripple="false" @click="$router.push('')">
        <q-item-section> Set address </q-item-section>
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

  alert() {
    this.$q.dialog({
      message:
        "Please proceed to the MSU Housing Management Division to edit this section.",
      class: "defaultfont",
    });
  }
}
</script>
