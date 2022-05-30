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
          v-if="currentUser.prfphoto"
          :src="`http://localhost:3000/media/${currentUser.prfphoto}`"
          class="avatar"
        />
        <q-img
          v-if="!currentUser.prfphoto"
          class="avatar q-pt-none q-mt-none"
          src="https://i.postimg.cc/FzcjmLj3/LOGO.jpg"
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
      <q-form @submit="chatlinkSave(currentUser)">
        <q-input
          type="url"
          :disable="!chatlinkEdit"
          v-model="inputAccount.chatLink"
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
            type="submit"
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
      </q-form>
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
      <q-form @submit="maplinkSave(currentUser)">
        <q-input
          type="url"
          :disable="!maplinkEdit"
          v-model="inputAccount.mapLink"
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
            type="submit"
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
      </q-form>

      <!-- Pending Applications -->

      <div class="q-mt-lg">
        <div class="q-ma-xs">
          <q-item-label
            class="defaultfont-semibold text-grey-5"
            style="font-size: small"
          >
            Pending Applications
          </q-item-label>
          <div class="row">
            <div class="col">
              <q-list>
                <q-item
                  clickable
                  dense
                  class="q-pt-md q-my-sm row items-center"
                  style="height: 3rem"
                >
                  <q-item-section class="q-pb-md" avatar>
                    <q-avatar size="xl">
                      <img
                        class="avatar q-pt-none q-mt-none"
                        src="https://i.postimg.cc/FzcjmLj3/LOGO.jpg"
                      />
                    </q-avatar>
                  </q-item-section>
                  <div>
                    <q-item-section>
                      <q-item-label
                        class="defaultfont-semibold"
                        style="font-size: small"
                      >
                        {{data.name}}
                      </q-item-label>
                      <q-item-label lines="1" style="font-size: small">
                        <p>@{{data.username}}</p>
                      </q-item-label>
                    </q-item-section>
                  </div>
                </q-item>
              </q-list>
            </div>
            <div class="col-3">
              <q-btn
                :ripple="false"
                unelevated
                rounded
                dense
                no-caps
                outline
                class="text-#BE282D q-mb-sm"
                style="height: 1.5rem; width: 5rem; font-size: smaller"
                color="primary"
                label="pending"
              />
              <q-btn
                :ripple="false"
                unelevated
                rounded
                dense
                no-caps
                outline
                class="text-#BE282D"
                style="height: 1.5rem; width: 5rem; font-size: smaller"
                color="primary"
                label="decline"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { UserDto } from "src/services/rest-api";
import { AUser } from "src/store/auth/state";
import { Options, Vue } from "vue-class-component";
import { mapActions, mapState } from "vuex";

@Options({
  methods: {
    ...mapActions("auth", ["authUser"]),
    ...mapActions("account", ["editAccount", "getAllUser"]),
    ...mapActions('application', ['getAllApplication', 'updateApplication']),
  },
  computed: {
    ...mapState("auth", ["currentUser"]),
    ...mapState('application', ['applications']),
  },
})
export default class LandlordAccount extends Vue {
  getAllApplication!: () => Promise<void>;
  editAccount!: (payload: UserDto) => Promise<void>;
  authUser!: () => Promise<void>;
  applications!: any[];
  data: any = [];
  currentUser!: any;
  chatlinkEdit = false;
  maplinkEdit = false;

  async mounted() {
    await this.authUser();
    this.inputAccount = { ...this.currentUser };
    await this.getAllApplication();
    this.data = this.applications
      .filter((i) => i.status == 'pending' && i.landlordID == this.currentUser.id)
      .map((a: any) => {
        return {
          id: a.id,
          name: a.student.fName + ' ' + a.student.lName,
          username: a.student.username
        };
      });
    console.log(this.data);
  }

  inputAccount: any = {
    chatLink: "",
    mapLink: "",
  };

  async chatlinkSave(val: AUser) {
    await this.editAccount(this.inputAccount);
    this.inputAccount = { ...val };
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
        window.location.reload();
      });
  }
  async maplinkSave(val: AUser) {
    await this.editAccount(this.inputAccount);
    this.inputAccount = { ...val };
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
        window.location.reload();
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
/* #url-type-styled-input:invalid {
  border-color: rgba(203,0,2,.8);
  box-shadow: inset 0 0.625em 0.125 rgba(0,0,0,.2), 0 0 0.125em rgba(203,0,2,.08);
} */
</style>

