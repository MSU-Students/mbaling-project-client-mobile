<template>
  <!--  -->
  <div>
    <q-list>
      <div class="row flex flex-center">
        <div class="col">
          <div
            class="q-my-md defaultfont text-grey-6"
            style="font-size: x-small"
          >
            List of Boarders:
          </div>
        </div>
        <div class="col-2">
          <div class="defaultfont" style="font-size: small">
            {{this.data.length + this.nonAccountdata.length}}
          </div>
        </div>
      </div>
      <div
        class="row q-my-xs"
        v-for="pending in getAcceptedAccount"
        :key="pending"
      >
        <template v-if="currentUser.id == pending.landlord?.id">
          <div class="col-2">
            <q-avatar size="3rem">
              <q-img
                v-if="pending.student?.prfphoto"
                class="avatar"
                :src="`http://localhost:3000/prfmedia/${pending.student?.prfphoto}`"
              />
              <q-img
                v-else
                class="avatar"
                src="https://i.postimg.cc/FzcjmLj3/LOGO.jpg"
              />
            </q-avatar>
          </div>
          <div class="col q-mt-xs defaultfont" style="font-size: medium">
            {{ pending.student?.fName }} {{ pending.student?.lName }}
            <div class="q-ma-none" style="font-size: x-small">{{pending.student?.degree}}</div>
          </div>
          <div class="col-2 flex flex-center">
            <q-icon
              size="1rem"
              color="primary"
              class="bi-trash"
              @click="deleteAcceptedStudent(pending.id)"
            />
          </div>
        </template>
      </div>
    </q-list>
  </div>

  <div>
    <q-list>
      <div class="row flex flex-center">
        <div class="col">
          <div
            class="q-my-md defaultfont text-grey-6"
            style="font-size: x-small"
          >
            List of Boarders (Non-Account):
          </div>
        </div>
        <div class="col">
          <q-btn
            icon="add"
            label="Insert Boarders"
            dense
            unelevated
            rounded
            no-caps
            color="primary"
            class="text-caption defaultfont float-right"
            style="width: 10rem"
            @click="showAddAccount()"
          />
        </div>
      </div>
      <div
        class="row q-my-xs"
        v-for="nonAccount in allNonAccount"
        :key="nonAccount"
      >
      <template v-if="currentUser.id == nonAccount.landlord?.id">
        <div class="col-2">
          <q-avatar size="3rem">
            <q-img
              class="avatar"
              src="https://i.postimg.cc/FzcjmLj3/LOGO.jpg"
            />
          </q-avatar>
        </div>
        <div class="col">
        <div v-if="(nonAccount.degree != '')" class="q-mt-xs defaultfont" style="font-size: medium">
          {{ nonAccount.fName }} {{ nonAccount.lName }}
          <div class="q-ma-none" style="font-size: x-small">
            {{ nonAccount.degree }}
          </div>
        </div>
        <div v-if="(nonAccount.degree == '')" class="q-mt-sm defaultfont float-left" style="font-size: medium">
          {{ nonAccount.fName }} {{ nonAccount.lName }}
        </div>
        </div>
        <div class="col-2 flex flex-center">
          <q-icon
            size="1rem"
            color="primary"
            class="bi-trash"
            @click="deleteAcceptedNonStudent(nonAccount)"
          />
        </div>
        </template>
      </div>
    </q-list>
  </div>
  <!--  -->

  <q-dialog v-model="dialog" persistent>
    <q-card>
      <q-form @submit="addNonAccount()" greedy>
        <div class="defaultfont column">
          <div class="col flex flex-center q-mt-md" style="width: 20rem">
            <span class="defaultfont-bold" style="font-size: large">
              Add non-student Account
            </span>
          </div>
          <div class="col q-gutter-y-sm q-my-md flex flex-center">
            <q-input
              dense
              filled
              v-model="inputNonAccount.fName"
              placeholder="Firstname"
              style="width: 18rem; font-size: small"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Please Input your FirstName',
              ]"
              hide-bottom-space
            />

            <q-input
              dense
              filled
              v-model="inputNonAccount.lName"
              placeholder="Lastname"
              style="width: 18rem; font-size: small"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Please Input your LastName',
              ]"
              hide-bottom-space
            />

            <q-input
              dense
              filled
              v-model="inputNonAccount.college"
              placeholder="College"
              style="width: 18rem; font-size: small"

            />

            <q-input
              dense
              filled
              v-model="inputNonAccount.department"
              placeholder="Department"
              style="width: 18rem; font-size: small"

            />

            <q-input
              dense
              filled
              v-model="inputNonAccount.degree"
              placeholder="Degree"
              style="width: 18rem; font-size: small"

            />
          </div>
          <div class="col">
            <div class="flex flex-center">
              <q-btn
                :ripple="false"
                unelevated
                rounded
                dense
                no-caps
                outline
                class="text-#BE282D q-ma-md"
                style="height: 1.5rem; width: 6rem; font-size: small"
                color="primary"
                label="close"
                v-close-popup
              />
              <q-btn
                :ripple="false"
                unelevated
                rounded
                dense
                no-caps
                class="text-white q-ma-md"
                style="height: 1.5rem; width: 6rem; font-size: small"
                color="primary"
                label="create"
                type="submit"
                v-close-popup
              />
            </div>
          </div>
        </div>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { ApplicationDto, NonAccountDto, UserDto } from "src/services/rest-api";
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters, mapState } from "vuex";

@Options({
  methods: {
    ...mapActions("auth", ["authUser"]),
    ...mapActions("account", ["editAccount", "getAllUser"]),
    ...mapActions("application", [
      "getAllApplication",
      "updateApplication",
      "deleteApplication",
      "getOneApplication",
    ]),
    ...mapActions("nonaccount", [
      "createNonAccount",
      "getAllNonAccount",
      "deleteNonAccount",
    ]),
  },
  computed: {
    ...mapState("nonaccount", ["allNonAccount"]),
    ...mapState("auth", ["currentUser"]),
    ...mapState("application", ["applications"]),
    ...mapGetters("application", ["getAcceptedAccount"]),
  },
})
export default class ListBoarders extends Vue {
  getOneApplication!: (payload: ApplicationDto) => Promise<ApplicationDto>;
  editAccount!: (payload: UserDto) => Promise<void>;
  deleteNonAccount!: (id: NonAccountDto) => Promise<void>;
  deleteApplication!: (id: ApplicationDto) => Promise<void>;
  createNonAccount!: (payload: any) => Promise<void>;
  updateApplication!: (payload: any) => Promise<void>;
  getAllApplication!: () => Promise<void>;
  getAllNonAccount!: () => Promise<void>;
  allNonAccount!: NonAccountDto[];
  applications!: ApplicationDto[];
  getAcceptedAccount!: ApplicationDto[];
  currentUser!: any;
  data: any = [];
  nonAccountdata: any = [];

  // add non account
  dialog = false;
  addNewAccount = false;

  async showAddAccount() {
    this.resetModel()
    this.dialog = true;
  }

  inputNonAccount: any = {
    fName: "",
    lName: "",
    degree: "",
    department: "",
    college: "",
  };
  inputAccount: any = {};

  columns = [
    {
      name: "name",
      label: "Name",
      align: "left",
      field: (row: ApplicationDto) =>
        row.student?.fName + " " + row.student?.lName,
    },
    {
      name: "action",
      required: true,
      label: "  ",
      align: "left",
      field: "action",
    },
  ];

  nonAccountColumns = [
    {
      name: "fName",
      label: "Name",
      align: "left",
      field: (row: NonAccountDto) => row.fName + " " + row.lName,
    },
    {
      name: "action",
      required: true,
      label: "  ",
      align: "left",
      field: "action",
    },
  ];

  async mounted() {
    await this.getAllNonAccount();
    this.nonAccountdata = this.allNonAccount.filter(
      (i) => i.landlord?.id == this.currentUser.id
    );
    await this.getAllApplication();
    this.data = this.getAcceptedAccount.filter(
      (i) => i.landlord?.id == this.currentUser.id
    );
    console.log(this.data);
  }

  async addNonAccount() {
    try {
      await this.createNonAccount({
        ...this.inputNonAccount,
        landlord: this.currentUser.id,
      });
      this.addNewAccount = false;
      await this.getAllNonAccount();
      this.nonAccountdata = this.allNonAccount.filter(
        (i) => i.landlord?.id == this.currentUser.id
      );
      // await this.resetModel();
      this.$q.notify({
        position: "top",
        color: "secondary",
        textColor: "primary",
        type: "positive",
        classes: "defaultfont",
        message: "Student Created",
      });
    } catch (error) {
      this.$q.notify({
        position: "top",
        color: "primary",
        textColor: "secondary",
        type: "negative",
        classes: "defaultfont",
        message: "Username is already exist!",
      });
    }
  }
  // deleteAcceptedStudent
  async deleteAcceptedStudent(val: any) {
    this.$q
      .dialog({
        title: "Confirm Edit",
        message: "Are you sure you want to delete?",
        cancel: true,
        persistent: true,
        class: "defaultfont",
      })
      .onOk(async () => {
        const edit = await this.getOneApplication(val);
        console.log(edit.student?.id);
        await this.editAccount({
          ...this.inputAccount,
          id: edit.student?.id,
          housing: null,
        });

        await this.deleteApplication(val);
        await this.getAllApplication();
        this.data = this.getAcceptedAccount.filter(
          (i) => i.landlord?.id == this.currentUser.id
        );
        this.$q.notify({
          type: "positive",
          caption: "",
          message: "Successfully Deleted",
          position: "top",
          color: "secondary",
          textColor: "primary",
          classes: "defaultfont",
        });
        console.log("delete Here");
      });
  }

  async deleteAcceptedNonStudent(val: any) {
    this.$q
      .dialog({
        title: "Confirm Edit",
        message: "Are you sure you want to publish the changes?",
        cancel: true,
        persistent: true,
        class: "defaultfont",
      })
      .onOk(async () => {
        await this.deleteNonAccount(val.id as any);
        await this.getAllNonAccount();
        this.nonAccountdata = this.allNonAccount.filter(
          (i) => i.landlord?.id == this.currentUser.id
        );
        this.$q.notify({
          type: "positive",
          caption: "",
          message: "Successfully Deleted",
          position: "top",
          color: "secondary",
          textColor: "primary",
          classes: "defaultfont",
        });
        console.log("delete Here");
      });
  }

  disapproveApplicant(id: any) {
    console.log("DisApprove here");
  }

  async resetModel() {
    this.inputNonAccount = {
      fName: "",
      lName: "",
      degree: "",
      department: "",
      college: "",
    };
  }

  colorManipulation(status: string) {
    console.log("status", status);
    if (status == "pending") {
      return "orange";
    } else if (status == "banned") {
      return "red";
    } else {
      return "green";
    }
  }
  labelManipulation(status: string) {
    if (status == "pending") {
      return "Pending";
    } else if (status == "banned") {
      return "Banned";
    } else {
      return "Available";
    }
  }
}
</script>
<style>
</style>
