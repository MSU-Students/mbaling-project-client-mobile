<template>
<div v-if="editLandlordHousing">
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
        Housing name
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
        @click="onSaveLandlord()"
      />
    </template>
  </page-header>

  <q-page class="q-px-md q-pb-xl defaultfont">
    <div class="q-pt-md">
      <q-input
        v-model="inputAccount.housingunit"
        label="Housing name"
        stack-label
        type="text"
        style="font-size: medium"
      />
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
        Housing name
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
        @click="onEditLandlord(currentUser)"
      />
    </template>
  </page-header>

  <q-page class="q-px-md q-pb-xl defaultfont">
    <div class="q-pt-md">
      <q-input
        v-model="currentUser.housingunit"
        label="Housing name"
        stack-label
        readonly
        disable
        type="text"
        style="font-size: medium"
      />
    </div>
  </q-page>
  </div>
</template>

<script lang="ts">
import { HousingDto, UserDto } from "src/services/rest-api";
import { mapActions, mapState } from "vuex";
import { Options, Vue } from "vue-class-component";
import { AUser } from "src/store/auth/state";

@Options({
  methods: {
    ...mapActions("auth", ["authUser"]),
    ...mapActions("account", ["editAccount", "getAllUser"]),
    ...mapActions("housing", ["addHousing", "getAllHousing","editHousingName", "getHousingById"]),
  },
  computed: {
    ...mapState("auth", ["currentUser"]),
    ...mapState("housing", ["allHousing", "newHousing"]),
  },
})

export default class EditHousing extends Vue {
  editHousingName!: (payload: HousingDto) => Promise<HousingDto>;
  editAccount!: (payload: UserDto) => Promise<void>;
  getHousingById!: (id: any) => Promise<void>;
  authUser!: () => Promise<void>;
  currentUser!: any;

  async mounted() {
    await this.authUser();
  }

  inputHousing: any = {
    name: "",
    userID: 0
  }

  inputAccount: any = {
    housingunit:  ""
  };

  // Edit Housing
  editLandlordHousing = false;

    async onEditLandlord(val: any) {
      this.editLandlordHousing = true;
      this.inputAccount = {...val}
    }

    async onSaveLandlord() {
    console.log('CurrentUser ID: ' + this.currentUser.housingID)
    await this.editHousingName({...this.inputHousing,
                        id: this.currentUser.housingID,
                        name: this.inputAccount.housingunit,
                        userID: this.currentUser.id,})
    await this.editAccount({
      ...this.currentUser,
      id: this.currentUser.id,
      housingunit: this.inputAccount.housingunit
    });
      this.$q
        .dialog({
          title: "Confirm Edit",
          message: "Are you sure you want to publish the changes?",
          cancel: true,
          persistent: true,
          class: "defaultfont",
    })
        .onOk(() => {
          this.editLandlordHousing = false;
          window.location.reload();
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
