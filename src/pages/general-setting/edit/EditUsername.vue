<template>
<!-- Edit Student Username -->
<div v-if="editStudentUserName">
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
        Username
      </div>
    </template>
    <template #slot-right>
      <q-btn
        label="save"
        unelevated
        rounded
        no-caps
        color="primary"
        class="q-mr-md defaultfont"
        style="height: 3rem"
        @click="onSaveStudent"
      />
    </template>
  </page-header>

  <q-page class="q-px-md q-pb-xl defaultfont">
    <div class="q-pt-md">
      <q-input
        v-model="inputAccount.username"
        label="Username"
        bottom-slots
        stack-label
        counter
        maxlength="18"
        type="text"
        style="font-size: medium"
      >
        <template v-slot:hint> Characters </template>
      </q-input>
    </div>
  </q-page>
  </div>

<!--  -->

<div v-else>
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
        Username
      </div>
    </template>
    <template #slot-right>
      <q-btn
        label="edit"
        unelevated
        rounded
        no-caps
        outline
        color="primary"
        class="q-mr-md defaultfont"
        style="height: 3rem"
        @click="onEditStudent(currentUser)"
      />
    </template>
  </page-header>

  <q-page class="q-px-md q-pb-xl defaultfont">
    <div class="q-pt-md">
      <q-input
        v-model="currentUser.username"
        label="Username"
        bottom-slots
        stack-label
        readonly
        disable
        counter
        maxlength="18"
        type="text"
        style="font-size: medium"
      >
        <template v-slot:hint> Characters </template>
      </q-input>
    </div>
  </q-page>
  </div>
</template>

<script lang="ts">
import { UserDto } from "src/services/rest-api";
import { mapActions, mapState } from "vuex";
import { Options, Vue } from "vue-class-component";
import { AUser } from "src/store/auth/state";

@Options({
  methods: {
    ...mapActions("auth", ["authUser"]),
    ...mapActions("account", ["editAccount", "getAllUser"]),
  },
  computed: {
    ...mapState("auth", ["currentUser"]),
  },
})

export default class EditUsermane extends Vue {
  editAccount!: (payload: UserDto) => Promise<void>;
  authUser!: () => Promise<void>;
  currentUser!: any;

  async mounted() {
    await this.authUser();
  }

  inputAccount: any = {
    username: "",
  }

  // Edit UserName
  editStudentUserName = false;

    async onEditStudent(val: AUser) {
      this.editStudentUserName = true;
      this.inputAccount = {...val}
    }

    async onSaveStudent() {
      this.$q
        .dialog({
          title: "Confirm Edit",
          message: "Are you sure you want to publish the changes?",
          cancel: true,
          persistent: true,
          class: "defaultfont",
    })
        .onOk(() => {
          this.editAccount(this.inputAccount);
          this.editStudentUserName = false;
          this.$router.go(-1)
          this.$q.notify({
            type: "positive",
            message: "Successfully change",
          });
      });
    }

  // confirmEdit() {
  //   this.$q.dialog({
  //     title: "Confirm Edit",
  //     message: "Are you sure you want to publish the changes?",
  //     cancel: true,
  //     persistent: true,
  //     class: "defaultfont",
  //   });
  // }
}
</script>
