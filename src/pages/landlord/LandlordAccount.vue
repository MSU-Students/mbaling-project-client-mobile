<template>
  <q-header class="defaultfont bg-secondary">
    <div align="center" class="q-pt-lg" style="height: 4rem">
      <q-item-label
        lines="1"
        class="defaultfont-semibold text-primary"
        style="font-size: medium"
      >
        @{{ currentUser.username }}
      </q-item-label>
    </div>

    <div align="center" class="q-px-md q-pb-xs text-black">
      <q-avatar size="10rem" class="bg-primary">
        <q-img
          :src="`http://localhost:3000/media/${currentUser.prfphoto}`"
          class="avatar"
        />
      </q-avatar>
      <div
        class="q-mt-md q-px-lg defaultfont-bold text-uppercase"
        style="font-size: large"
      >
        {{ currentUser.housingunit }}
      </div>
      <div class="q-px-md" style="font-size: small">
        <p style="line-height: 1rem">
          {{ currentUser.address1 }}, {{ currentUser.address2 }} <br />
          {{ currentUser.address3 }}, {{ currentUser.address4 }}
        </p>
      </div>
    </div>
    <q-separator inset color="primary" size="0.1rem" class="q-my-sm" />
  </q-header>

  <q-page class="defaultfont">
    <div class="q-px-lg q-py-md">
      <div align="left" class="row items-center">
        <div align="left" class="col-10">
          <div
            class="defaultfont-semibold text-grey-8"
            style="font-size: medium"
          >
            Set chat link
          </div>
          <div class="defaultfont text-grey" style="font-size: smaller">
            Please input below your Facebook Messenger username to connect it
            with your account. <br />
            Click the icon on the right for tutorial.
          </div>
        </div>
        <div align="right" class="col">
          <q-icon
            name="bi-question-circle"
            size="lg"
            color="grey"
            @click="$router.push('/tutorial/chatlink')"
          />
        </div>
      </div>
      <q-input
        :disable="!chatlinkEdit"
        dense
        class="q-mb-xs"
        style="font-size: medium"
      />
      <div align="right">
        <q-btn
          v-show="chatlinkEdit"
          label="Save"
          dense
          unelevated
          rounded
          no-caps
          color="primary"
          class="text-center text-caption"
          style="width: 4rem"
          @click="chatlinkSave()"
        />
        <q-btn
          v-show="!chatlinkEdit"
          v-on:click="chatlinkEdit = !chatlinkEdit"
          label="Edit"
          dense
          outline
          rounded
          no-caps
          color="primary"
          class="text-center text-caption"
          style="width: 4rem"
        />
      </div>
    </div>

    <div class="q-px-lg q-pb-lg">
      <div align="left" class="row items-center">
        <div align="left" class="col-10">
          <div
            class="defaultfont-semibold text-grey-8"
            style="font-size: medium"
          >
            Set map link
          </div>
          <div class="defaultfont text-grey" style="font-size: smaller">
            Please input below the link of your Google Map location to connect
            it with your account. <br />
            Click the icon on the right for tutorial.
          </div>
        </div>
        <div align="right" class="col">
          <q-icon
            name="bi-question-circle"
            size="lg"
            color="grey"
            @click="$router.push('/tutorial/maplink')"
          />
        </div>
      </div>
      <q-input
        :disable="!maplinkEdit"
        dense
        class="q-mb-xs"
        style="font-size: medium"
      />
      <div align="right">
        <q-btn
          v-show="maplinkEdit"
          label="Save"
          dense
          unelevated
          rounded
          no-caps
          color="primary"
          class="text-center text-caption"
          style="width: 4rem"
          @click="maplinkSave()"
        />
        <q-btn
          v-show="!maplinkEdit"
          v-on:click="maplinkEdit = !maplinkEdit"
          label="Edit"
          dense
          outline
          rounded
          no-caps
          color="primary"
          class="text-center text-caption"
          style="width: 4rem"
        />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { AUser } from "src/store/auth/state";
import { Options, Vue } from "vue-class-component";
import { mapActions, mapState } from "vuex";

@Options({
  methods: {
    ...mapActions("auth", ["authUser"]),
  },
  computed: {
    ...mapState("auth", ["currentUser"]),
  },
})
export default class LandlordAccount extends Vue {
  authUser!: () => Promise<void>;
  currentUser!: AUser;
  chatlinkEdit = false;
  maplinkEdit = false;

  async mounted() {
    await this.authUser();
  }

  chatlinkSave() {
    this.$q
      .dialog({
        title: "Confirm Edit",
        message: "Are you sure you want to publish the changes?",
        cancel: true,
        persistent: true,
        class: "defaultfont",
      })
      .onOk(() => {
        this.chatlinkEdit = !this.chatlinkEdit;
      });
  }
  maplinkSave() {
    this.$q
      .dialog({
        title: "Confirm Edit",
        message: "Are you sure you want to publish the changes?",
        cancel: true,
        persistent: true,
        class: "defaultfont",
      })
      .onOk(() => {
        this.maplinkEdit = !this.maplinkEdit;
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
