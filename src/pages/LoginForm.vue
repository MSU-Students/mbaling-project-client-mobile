<template>
  <q-page
    class="window-heightwindow-width row justify-center items-center"
    style="background-color: #be272c"
  >
    <div class="absolute-center">
      <q-card-section>
        <q-form class="">
          <!-- LogoPicture -->
          <div class="row justify-center q-pa-xl q-gutter-xl">
            <q-avatar square size="6rem">
              <img src="../assets/mbaling-logo-vertical.svg" />
            </q-avatar>
          </div>

          <!-- UserName&PasswordInput -->
          <div class="q-gutter-sd" style="max-width: 300px">
            <q-input
              dark
              dense
              input-class="text-center"
              color="white"
              v-model="username"
              type="username"
              placeholder="username"
            >
            </q-input>

            <q-input
              dark
              dense
              color="white"
              input-class="text-center"
              v-model="password"
              type="password"
              placeholder="password"
            >
            </q-input>
          </div>

          <!-- LoginButton -->
          <div class="row justify-center q-pa-md q-gutter-sm">
            <q-btn
              :ripple="false"
              unelevated
              dense
              rounded
              no-caps
              class="text-red text-bold"
              style="height: 1.5rem; width: 6rem; font-size: small"
              color="white"
              label="log-in"
              @click="loginUser()"
            />
          </div>
        </q-form>
      </q-card-section>
    </div>
  </q-page>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  name: "Login",
  setup() {
    return {
      username: ref(""),
      password: ref(""),
    };
  },
  methods: {
    async loginUser() {
      if (this.username == "user" && this.password == "password") {
        await this.$router.replace("/s/home");
      } else {
        this.$q.notify({
          color: "secondary",
          textColor: "primary",
          position: "top",
          message: "Incorrect username or password.",
        });
      }
    },
  },
};
</script>
