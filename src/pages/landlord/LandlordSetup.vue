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
        <q-input type="text" dense input-class="text-center" />
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
          type="text"
          dense
          hint="e.g. House No., Building, Street Name"
          input-class="text-center"
        />
        <q-input
          type="text"
          dense
          hint="e.g. Barangay"
          input-class="text-center"
        />
        <q-input
          type="text"
          dense
          hint="e.g. City, Municipality"
          input-class="text-center"
        />
        <q-input
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
          @click="hAddSave()"
        />
      </div>
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
import { Vue } from "vue-class-component";

export default class LoginForm extends Vue {
  next = false;
  hnameEx = false;
  hnameExInput = "Alex Boarding House";
  haddEx = false;
  haddExInput1 = "001A 5th Street";
  haddExInput2 = "Dimaluna";
  haddExInput3 = "MSU, Marawi City";
  haddExInput4 = "Lanao del Sur";

  hNameSave() {
    this.$q.dialog({
      title: "Confirm Edit",
      message: "Are you sure you want to publish it?",
      cancel: true,
      persistent: true,
      class: "defaultfont",
    }).onOk(() => {
      this.next = !this.next;
    });
  }
  hAddSave() {
    this.$q.dialog({
      title: "Confirm Edit",
      message: "Are you sure you want to publish it?",
      cancel: true,
      persistent: true,
      class: "defaultfont",
    }).onOk(() => {
      this.$router.replace("/landlord/home");
    });
  }
}
</script>

<style></style>
