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
        @click="oneditAccount()"
      />
    </template>
  </page-header>

  <q-page class="defaultfont">
    <div align="center" class="q-pa-md">
      <q-avatar size="8rem" class="bg-primary">
        <q-img
          :src="`http://localhost:3000/media/${currentUser.prfphoto}`"
          class="avatar"
        />
      </q-avatar>
      <div class="q-mt-sm q-px-xl">
        <q-file
          outlined
          label="Upload Image"
          accept=".jpg, image/*"
          v-model="imageAttachement"
        >
        </q-file>
      </div>
    </div>

    <div class="q-px-lg q-pb-lg">
      <q-input
        v-model="currentUser.fName"
        :placeholder="`${currentUser.fName}`"
        label="First name"
        stack-label
        class="q-mt-lg"
        style="font-size: medium"
      />
      <q-input
        v-model="inputAccount.mName"
        :placeholder="`${currentUser.mName}`"
        label="Middle name"
        stack-label
        class="q-mt-lg"
        style="font-size: medium"
      />
      <q-input
        v-model="inputAccount.lName"
        :placeholder="`${currentUser.lName}`"
        label="Last name"
        stack-label
        class="q-mt-lg"
        style="font-size: medium"
      />
      <q-select
        v-model="inputAccount.gender"
        :placeholder="`${currentUser.gender}`"
        :options="genderOptions"
        label="Gender"
        stack-label
        class="q-mt-lg"
        style="font-size: medium"
      />
      <q-input
        v-model="inputAccount.birthdate"
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
        <q-icon name="bi-question-circle" size="lg" color="grey" @click="$router.replace('/tutorial/chatlink')"/>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { MediaDto, UserDto } from "src/services/rest-api";
import { AUser } from "src/store/auth/state";
import { Options, Vue } from "vue-class-component";
import { mapActions, mapState } from "vuex";
import { ref, Ref } from "vue";

@Options({
  methods: {
    ...mapActions("auth", ["authUser"]),
    ...mapActions("account", ["editAccount", "getAllUser"]),
    ...mapActions("media", ["uploadMedia"]),
  },
  computed: {
    ...mapState("auth", ["currentUser"]),
  },
})
export default class StudentManageProfile extends Vue {
  editAccount!: (payload: UserDto) => Promise<void>;
  uploadMedia!: (payload: File) => Promise<MediaDto>;
  authUser!: () => Promise<void>;
  currentUser!: AUser;

  imageAttachement: File[] | File = [];
  updateAccount = false;
  genderOptions = ["Male", "Female"];

  async mounted() {
    console.log("Mounted here");
    console.log(this.authUser);
    await this.authUser();
  }

  inputAccount: any = {
    prfphoto: 0,
    fName: "",
    lName: "",
    type: "",
    status: "",
    username: "",
    password: "",
    birthdate: "",
    degree: "",
    department: "",
    college: "",
    contact: "",
    gender: "",
    year: "",
    address1: "",
    address2: "",
    address3: "",
    address4: "",
    housingunit: "",
  };

  async oneditAccount() {
    const media = await this.uploadMedia(this.imageAttachement as File);
    console.log(this.currentUser.id);
    await this.editAccount({
      ...this.inputAccount,
      id: this.currentUser.id,
      prfphoto: media.id,
      type: this.currentUser.type,
      status: this.currentUser.status,
      username: this.currentUser.username,
      password: this.currentUser.password,
      birthdate: this.currentUser.birthdate,
      degree: this.currentUser.degree,
      department: this.currentUser.department,
      college: this.currentUser.college,
      contact: this.currentUser.contact,
      gender: this.currentUser.gender,
      year: this.currentUser.year,
      address1: this.currentUser.address1,
      address2: this.currentUser.address2,
      address3: this.currentUser.address3,
      address4: this.currentUser.address4,
      housingunit: this.currentUser.housingunit,
    });
    this.updateAccount = false;
    this.resetModel();
    this.$q.notify({
      type: "positive",
      message: "Successfully Edit.",
    });
  }
  resetModel() {
    this.inputAccount = {
      prfphoto: 0,
      fName: "",
      lName: "",
      type: "",
      status: "",
      username: "",
      password: "",
      birthdate: "",
      degree: "",
      department: "",
      college: "",
      contact: "",
      gender: "",
      year: "",
      address1: "",
      address2: "",
      address3: "",
      address4: "",
      housingunit: "",
    };
  }

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

<style>
.avatar {
  width: 100%;
  height: 100%;
  border-radius: 50% !important;
  border: 2px solid rgb(190, 40, 45) !important;
}
</style>
