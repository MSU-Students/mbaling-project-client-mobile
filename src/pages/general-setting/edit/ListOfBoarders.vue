<template>
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
        List of Boarders
      </div>
    </template>
  </page-header>
  <q-page>
    <div class="column">
      <div class="col flex flex-center">
        <span class="defaultfont-bold" style="font-size: large">
          {{ currentUser.housingunit }}
        </span>
      </div>
      <div class="col flex flex-center">
        <span class="defaultfont" style="font-size: medium">
          List of boarders
        </span>
      </div>

  <!-- Student List -->
      <div class="col q-ma-xs">
        <q-item-label
          class="defaultfont-semibold text-grey-5 q-ml-md"
          style="font-size: x-small"
        >
          Student List
        </q-item-label>
        <div v-for="n in 5" :key="n" class="q-py-xs">
          <q-list>
            <q-item
              clickable
              dense
              class="q-pt-md q-my-sm row items-center"
              style="height: 3rem;"
            >
              <q-item-section class="q-pb-md" avatar>
                <q-avatar size="lg">
                  <img
                    class="avatar q-pt-none q-mt-none"
                    src="https://i.postimg.cc/FzcjmLj3/LOGO.jpg"
                  />
                </q-avatar>
              </q-item-section>
              <!--  -->
              <!-- <template v-if="choice">
              <div class="col">
                <q-item-section>
                  <q-item-label
                    class="defaultfont-semibold"
                    style="font-size: medium"
                  >
                    FirstName LastName
                  </q-item-label>
                  <q-item-label lines="1" style="font-size: small">
                    <p>@user</p>
                  </q-item-label>
                </q-item-section>
              </div>
              <div class="col-3 q-gutter-xs" style="height: 3rem">
                <q-icon size="2rem" name="check"/>
                <q-icon size="2rem" name="check"/>
              </div>
              </template> -->
              <!--  -->
              <!-- <template v-else>
              <div class="col">
                <q-item-section>
                  <q-item-label
                    class="defaultfont-semibold"
                    style="font-size: medium"
                  >
                    FirstName LastName
                  </q-item-label>
                  <q-item-label lines="1" style="font-size: small">
                    <p>@user</p>
                  </q-item-label>
                </q-item-section>
              </div>
              <div class="col-3">
                <q-icon class="float-right" size="1rem" name="person" @click="choiceMenu()"/>
              </div>
              </template> -->
              <!--  -->
              <template v-if="choice">
              <div style="height: 3rem">
                <q-icon class="q-ml-lg" size="2rem" name="check"/> Decline
                <q-icon class="q-ml-lg" size="2rem" name="check"/> Accept
                <q-icon class="q-mt-md q-mr-md absolute-right" size="1rem" name="person" @click="choiceClose()"/>
              </div>
              </template>
              <!--  -->
              <template v-else>
              <div class="col">
                <q-item-section>
                  <q-item-label
                    class="defaultfont-semibold"
                    style="font-size: medium"
                  >
                    FirstName LastName
                  </q-item-label>
                  <q-item-label lines="1" style="font-size: small">
                    <p>@user</p>
                  </q-item-label>
                </q-item-section>
              </div>
              <div class="col-3">
                <q-icon class="q-mt-md q-mr-md absolute-right" size="1rem" name="person" @click="choiceMenu()"/>
              </div>
              </template>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>

    <!-- non Student Account -->

    <q-item-label
      class="defaultfont-semibold text-grey-5 q-ml-md"
      style="font-size: x-small"
    >
      non-student Account
    </q-item-label>
    <div v-for="n in 5" :key="n" class="q-py-xs">
      <q-list>
        <q-item
          clickable
          dense
          class="q-pt-md q-my-sm row items-center"
          style="height: 3rem"
        >
          <q-item-section class="q-pb-md q-ml-xs" avatar>
            <q-avatar size="lg">
              <img
                class="avatar q-pt-none q-mt-none"
                src="https://i.postimg.cc/FzcjmLj3/LOGO.jpg"
              />
            </q-avatar>
          </q-item-section>
          <div>
            <q-item-section>
              <q-item-label
                class="defaultfont-semibold q-mb-md"
                style="font-size: medium"
              >
                FirstName LastName
              </q-item-label>
            </q-item-section>
          </div>
        </q-item>
      </q-list>
    </div>
    <!--  -->

    <div>
      <q-page-sticky :offset="[30, 30]" position="bottom-right">
        <q-btn
          icon="bi-plus"
          fab
          color="primary"
          @click="addNonStudentAccount()"
        />
      </q-page-sticky>
    </div>
    <q-dialog v-model="Dialog" persistent>
      <q-card>
        <q-form @submit="addStudent()" greedy>
          <div class="column">
            <div class="col flex flex-center q-mt-md" style="width: 20rem">
              <span class="defaultfont-bold" style="font-size: large">
                Add non-student Account
              </span>
            </div>
            <div class="col q-gutter-y-sm q-my-md flex flex-center">
              <q-input
                dense
                filled
                v-model="inputStudent.fName"
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
                v-model="inputStudent.lName"
                placeholder="Lastname"
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
  </q-page>
</template>
<script lang="ts">
import { UserDto } from "src/services/rest-api";
import { mapActions, mapState } from "vuex";
import { Options, Vue } from "vue-class-component";
import { AUser } from "src/store/auth/state";

@Options({
  methods: {
    ...mapActions("auth", ["authUser"]),
    ...mapActions("account", ["addAccount", "deleteAccount", "getAllUser"]),
  },
  computed: {
    ...mapState("auth", ["currentUser"]),
    ...mapState("account", ["allAccount"]),
  },
})
export default class ListOfBoarders extends Vue {
  addAccount!: (payload: any) => Promise<void>;
  authUser!: () => Promise<void>;
  currentUser!: any;

  async mounted() {
    await this.authUser();
  }

  // Options
  choice = false;

  async choiceMenu(){
    this.choice = true;
    console.log("Option HERE")
  }

  async choiceClose(){
    this.choice = false;
  }


  // Add Non Student Account
  inputStudent: any = {
    fName: "",
    lName: "",
  };

  Dialog = false;

  async addNonStudentAccount() {
    this.Dialog = true;
  }

  async addStudent() {
    try {
      await this.addAccount(this.inputStudent);
      this.$q.notify({
        position: "bottom",
        color: "secondary",
        textColor: "primary",
        type: "positive",
        classes: "defaultfont",
        message: "Student Created",
      });
      window.location.reload();
    } catch (error) {
      this.$q.notify({
        position: "bottom",
        color: "primary",
        textColor: "secondary",
        type: "negative",
        classes: "defaultfont",
        message: "Username is already exist!",
      });
    }
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
