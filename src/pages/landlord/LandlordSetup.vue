<template>
  <q-header
    class="defaultfont-semibold bg-secondary text-primary"
    style="height: 4rem"
  >
    <div align="center" class="q-pt-xl" style="font-size: medium">
      Setting up your account
    </div>
  </q-header>

  <q-page class="q-px-lg defaultfont row">
    <div v-show="!next" class="col self-center">
      <div
        align="center"
        class="defaultfont-semibold text-grey-8"
        style="font-size: medium"
      >
        Set your housing name
      </div>
      <div class="defaultfont text-grey text-center" style="font-size: smaller">
        Please input below the business name of your housing firm.
      </div>
      <div align="center" class="q-mt-md">
        <q-input v-model="inputAccount.housingunit" type="text" dense input-class="text-center" />
      </div>
      <div align="center" class="q-mt-sm">
        <q-btn
          label="Save"
          unelevated
          rounded
          no-caps
          color="primary"
          class="text-center text-caption"
          style="width: 4rem"
          @click="hNameSave()"
        />
      </div>

<!-- Housing Name Example -->

      <div align="center" class="q-mt-md">
        <p
          class="defaultfont-light cursor-pointer text-black"
          style="font-size: smaller; line-height: 0.85rem"
          @click="hnameEx = true"
        >
          Click here for example
          <q-icon name="bi-question-circle" />
        </p>
      </div>
    </div>
    <q-dialog v-model="hnameEx">
      <q-card class="defaultfont">
        <q-card-section>
          <div
            align="center"
            class="defaultfont-semibold text-grey-8"
            style="font-size: small"
          >
            Set your housing name
          </div>
          <div
            class="defaultfont text-grey text-center"
            style="font-size: x-small"
          >
            Please input below the business name of your housing firm.
          </div>
          <div align="center" class="q-mt-sm">
            <q-input
              v-model="hnameExInput"
              type="text"
              dense
              disable
              input-class="text-center"
            />
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

<!--  -->

    <div v-show="next" class="col self-center">
      <div
        align="center"
        class="defaultfont-semibold text-grey-8"
        style="font-size: medium"
      >
        Set your housing address
      </div>
      <div class="defaultfont text-grey text-center" style="font-size: smaller">
        Please input below the address of your housing firm.
      </div>
      <div align="center" class="q-mt-md">
        <q-input
          v-model="currentUser.address1"
          type="text"
          dense
          hint="e.g. House No., Building, Street Name"
          input-class="text-center"
        />
        <q-input
          v-model="currentUser.address2"
          type="text"
          dense
          hint="e.g. Barangay"
          input-class="text-center"
        />
        <q-input
          v-model="currentUser.address3"
          type="text"
          dense
          hint="e.g. City, Municipality"
          input-class="text-center"
        />
        <q-input
          v-model="currentUser.address4"
          type="text"
          dense
          hint="e.g. Province, State"
          input-class="text-center"
        />
      </div>
      <div align="center" class="q-mt-sm">
        <q-btn
          label="Save"
          unelevated
          rounded
          no-caps
          color="primary"
          class="text-center text-caption"
          style="width: 4rem"
          @click="hAddSaved()"
        />
      </div>

<!-- Housing Address Example -->

      <div align="center" class="q-mt-md">
        <p
          class="defaultfont-light cursor-pointer text-black"
          style="font-size: smaller; line-height: 0.85rem"
          @click="haddEx = true"
        >
          Click here for example
          <q-icon name="bi-question-circle" />
        </p>
      </div>
    </div>
    <q-dialog v-model="haddEx">
      <q-card class="defaultfont">
        <q-card-section>
          <div
            align="center"
            class="defaultfont-semibold text-grey-8"
            style="font-size: small"
          >
            Set your housing address
          </div>
          <div
            class="defaultfont text-grey text-center"
            style="font-size: x-small"
          >
            Please input below the address of your housing firm.
          </div>
          <div align="center" class="q-mt-sm">
            <q-input
              v-model="haddExInput1"
              type="text"
              dense
              disable
              hint="e.g. House No., Building, Street Name"
              input-class="text-center"
            />
            <q-input
              v-model="haddExInput2"
              type="text"
              dense
              disable
              hint="e.g. Barangay"
              input-class="text-center"
            />
            <q-input
              v-model="haddExInput3"
              type="text"
              dense
              disable
              hint="e.g. City, Municipality"
              input-class="text-center"
            />
            <q-input
              v-model="haddExInput4"
              type="text"
              dense
              disable
              hint="e.g. Province, State"
              input-class="text-center"
            />
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import { UserDto, HousingDto } from "src/services/rest-api";
import { AUser } from "src/store/auth/state";
import { HousingInterface } from "src/store/housing-module/state";
import { Options, Vue } from "vue-class-component";
import { mapState, mapActions } from "vuex";

@Options({
  computed: {
    ...mapState("post", ["posts"]),
    ...mapState("auth", ["currentUser"]),
    ...mapState("housing", ["allHousing", "newHousing"]),
  },
  methods: {
    ...mapActions("post", ["addPost"]),
    ...mapActions("auth", ["authUser"]),
    ...mapActions("account", ["editAccount", "getAllUser"]),
    ...mapActions("housing", ["addHousing", "getAllHousing", "getOneHousing"]),
  },
})
export default class LoginForm extends Vue {
  editAccount!: (payload: UserDto) => Promise<void>;
  addHousing!: (payload: HousingDto) => Promise<HousingDto>;
  authUser!: () => Promise<void>;
  getAllHousing!: () => Promise<void>;
  getOneHousing!: (name: any) => Promise<void>;
  newHousing!: any;
  allHousing!: HousingInterface;
  currentUser!: any;

  async mounted() {
    console.log("Mounted here");
    console.log(this.authUser);
    await this.authUser();
  }
  // Nahed Code HAHAHA

  editLandlordInfo = false;

  async onEditLandlord(){
    this.editLandlordInfo = true;
  }

  async onSaveLandlord(){
    this.editLandlordInfo = false;
  }

  //
  updateAccount = false;

  next = false;
  hnameEx = false;
  hnameExInput = "Alex Boarding House";
  haddEx = false;
  haddExInput1 = "001A 5th Street";
  haddExInput2 = "Dimaluna";
  haddExInput3 = "MSU, Marawi City";
  haddExInput4 = "Lanao del Sur";


  inputAccount: any = {
    address1: "",
    address2: "",
    address3: "",
    address4: "",
    housingunit: "",
  };

  inputHousing: any={
    name: "",
    userID: 0
  }

  // resetModel() {
  //   this.inputAccount = {
  //     prfphoto: 0,
  //     fName: "",
  //     lName: "",
  //     type: "",
  //     status: "",
  //     username: "",
  //     password: "",
  //     birthdate: "",
  //     degree: "",
  //     department: "",
  //     college: "",
  //     contact: "",
  //     gender: "",
  //     year: "",
  //     address1: "",
  //     address2: "",
  //     address3: "",
  //     address4: "",
  //     housingunit: "",
  //   };
  // }
  async hNameSave() {
    await this.editAccount(this.currentUser);
    this.next = !this.next;
  }
  // async hNameSaved(){
  //   await this.editAccount(this.currentUser);
  //   await this.$router.replace("/landlord/home");
  // }
  async hAddSaved() {
    console.log('HERE')
    const addhousing = await this.addHousing({...this.inputHousing, name: this.inputAccount.housingunit, userID: this.currentUser.id,})
    console.log(addhousing)
    console.log(addhousing.name)
    console.log(addhousing.userID)
    console.log(addhousing.id)

    await this.editAccount({
      ...this.currentUser,
      id: this.currentUser.id,
      address1: this.inputAccount.address1,
      address2: this.inputAccount.address2,
      address3: this.inputAccount.address3,
      address4: this.inputAccount.address4,
      housingunit: this.inputAccount.housingunit,
      housingID: addhousing.id
    });

    this.updateAccount = false;
    this.$q.notify({
      type: "positive",
      message: "Successfully Added.",
    })
    await this.$router.replace("/landlord/home");
  }
}
</script>

<style></style>
