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
      <q-avatar size="10rem" class="bg-primary ion-avatar">
        <q-img :src="`http://localhost:3000/media/${currentUser.prfphoto}`" />
      </q-avatar>
      <div
        class="q-mt-md q-px-lg defaultfont-bold text-uppercase"
        style="font-size: large"
      >
        {{ currentUser.fName }} {{ currentUser.lName }}
      </div>
      <div class="q-px-md" style="font-size: small">
        <p style="line-height: 1rem">
          {{ currentUser.degree }} <br />
          {{ currentUser.department }} <br />
          {{ currentUser.college }}
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
            Set your campus housing
          </div>
          <div class="defaultfont text-grey" style="font-size: smaller">
            Please set your campus housing address to complete your student user
            record. <br />
            Go to Settings > Account settings > Campus housing.
          </div>
        </div>
        <div align="right" class="col">
          <q-icon name="bi-question-circle" size="lg" color="grey" />
        </div>
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
export default class StudentAccount extends Vue {
  authUser!: () => Promise<void>;
  currentUser!: AUser;

  async mounted() {
    await this.authUser();
  }
}
</script>

<style>
.ion-avatar img {
  border-radius: 100% !important;
  overflow: hidden !important;

  border: 2px solid rgb(190, 40, 45) !important;
}
</style>
