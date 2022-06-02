<template>
  <q-form @submit="onSaveStudent()" v-if="editStudentEmail">
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
          E-mail
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
          type="submit"
        />
      </template>
    </page-header>

    <q-page class="q-px-md q-pb-xl defaultfont">
      <div class="q-pt-md">
        <q-input
          v-model="inputAccount.email"
          label="E-mail"
          stack-label
          type="email"
          style="font-size: medium"
        />
      </div>
    </q-page>
  </q-form>

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
          E-mail
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
          v-model="currentUser.email"
          label="E-mail"
          stack-label
          readonly
          disable
          type="email"
          style="font-size: medium"
        />
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
export default class EditEmail extends Vue {
  editAccount!: (payload: UserDto) => Promise<void>;
  authUser!: () => Promise<void>;
  currentUser!: any;

  async mounted() {
    await this.authUser();
  }

  inputAccount: any = {
    email: "",
  };

  // Edit Email
  editStudentEmail = false;

  async onEditStudent(val: AUser) {
    this.editStudentEmail = true;
    this.inputAccount = { ...val };
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
        this.editStudentEmail = false;
        // window.location.reload()
        this.$q.notify({
          type: "positive",
          color: "secondary",
          textColor: "primary",
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
