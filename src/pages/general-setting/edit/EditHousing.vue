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

export default class EditHousing extends Vue {
  editAccount!: (payload: UserDto) => Promise<void>;
  authUser!: () => Promise<void>;
  currentUser!: any;

  async mounted() {
    await this.authUser();
  }

  inputAccount: any = {
    housingunit: "",
  }

  // Edit Housing
  editLandlordHousing = false;

    async onEditLandlord(val: AUser) {
      this.editLandlordHousing = true;
      this.inputAccount = {...val}
    }

    async onSaveLandlord() {
      await this.editAccount(this.inputAccount);
      this.editLandlordHousing = false;
      this.$q.notify({
          position: 'bottom',
          color: "secondary",
          textColor: "primary",
          type: 'positive',
          classes: "defaultfont",
          message: 'Account Updated',
        });
        window.location.reload();
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
