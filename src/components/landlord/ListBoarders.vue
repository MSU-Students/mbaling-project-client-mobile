<template>
  <div class="text-h6" align="right">
    <span class="defaultfont-bold float-left" style="font-size: medium">
      List of Boarders
    </span>
    <q-btn
      icon="add"
      label="Insert Boarders"
      dense
      unelevated
      rounded
      no-caps
      color="primary"
      class="text-caption defaultfont"
      style="width: 10rem"
      @click="showAddAccount()"
    />
  </div>

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
                v-model="inputAccount.fName"
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
                v-model="inputAccount.lName"
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
                v-model="inputAccount.college"
                placeholder="College"
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
                v-model="inputAccount.department"
                placeholder="Department"
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
                v-model="inputAccount.degree"
                placeholder="Degree"
                style="width: 18rem; font-size: small"
                lazy-rules
                :rules="[
                  (val) =>
                    (val && val.length > 0) || 'Please Input your LastName',
                ]"
                hide-bottom-space
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
                  label="cancel"
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
                />
              </div>
            </div>
          </div>
        </q-form>
      </q-card>
  </q-dialog>

  <q-table
    dense
    flat
    hide-bottom
    :columns="columns"
    :rows="data"
    row-key="status">
      <template v-slot:body-cell-action="props">
        <q-td :props="props">
          <q-btn
            color="red-5"
            icon="delete"
            size="sm"
            class="q-ml-sm"
            flat
            round
            dense
            @click="deleteAcceptedStudent(props.row)"
          />
        </q-td>
      </template>
  </q-table>

  <div class="text-h6">
    <span class="defaultfont-bold" style="font-size: medium">
      Non-Account
    </span>
  </div>

  <q-table
  dense
    flat
    hide-bottom
    :columns="nonAccountColumns"
    :rows="nonAccountdata"
    row-key="status">
      <template v-slot:body-cell-action="props">
        <q-td :props="props">
          <q-btn
            color="red-5"
            icon="delete"
            size="sm"
            class="q-ml-sm"
            flat
            round
            dense
            @click="deleteAcceptedStudent(props.row)"
          />
        </q-td>
      </template>
  </q-table>
</template>

<script lang="ts">
import { ApplicationDto, NonAccountDto } from "src/services/rest-api";
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters, mapState } from "vuex";

@Options({
  methods: {
    ...mapActions("auth", ["authUser"]),
    ...mapActions("account", ["editAccount", "getAllUser"]),
    ...mapActions("application", ["getAllApplication", "updateApplication"]),
    ...mapActions("nonaccount", ["createNonAccount", "getAllNonAccount"])

  },
  computed: {
    ...mapState("nonaccount", ["allNonAccount"]),
    ...mapState("auth", ["currentUser"]),
    ...mapState("application", ["applications"]),
    ...mapGetters("application", ["getAcceptedAccount"]),
  },
})
export default class ListBoarders extends Vue {
  createNonAccount!: (payload: any) => Promise<void>;
  updateApplication!: (payload: any) => Promise<void>;
  getAllApplication!: () => Promise<void>;
  getAllNonAccount!: () => Promise<void>;
  allNonAccount!: NonAccountDto[]
  applications!: ApplicationDto[];
  getAcceptedAccount!: ApplicationDto[];
  currentUser!: any;
  data: any = [];
  nonAccountdata: any = [];

  // add non account
  dialog = false;
  addNewAccount= false

  async showAddAccount(){
    this.dialog = true;
  }

  inputAccount: any={
    fName: "",
    lName: "",
    degree: "",
    department: "",
    college: ""
  }

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

  nonAccountColumns =[
    {
      name: "fName",
      label: "Name",
      align: "left",
      field:(row: NonAccountDto) =>
        row.fName + " " + row.lName,
    },
  ]

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

  async addNonAccount(){
    try {
   await this.createNonAccount({...this.inputAccount, landlord: this.currentUser.id});
    this.addNewAccount = false;
     this.$q.notify({
          position: 'bottom',
          color: "secondary",
          textColor: "primary",
          type: 'positive',
          classes: "defaultfont",
          message: 'Student Created',
        });
        window.location.reload();
        } catch (error) {
          this.$q.notify({
          position: 'bottom',
          color: "primary",
          textColor: "secondary",
          type: 'negative',
          classes: "defaultfont",
          message: 'Username is already exist!',
        });
        }

  }

  async deleteAcceptedStudent(id: any) {
    console.log("Delete here");
  }

  disapproveApplicant(id: any) {
    console.log("DisApprove here");
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
