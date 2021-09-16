<template>
  <q-page class="row items-center justify-evenly">
    <q-card flat class="bg-transparent text-center" style="width: 12rem">
      <!-- LOGO PICTURE -->
      <div>
        <q-img
          src="~assets/mbaling-logo-vertical.svg"
          style="width: 6rem"
        />
      </div>
      <!-- USERNAME & PASSWORD INPUT -->
      <div class="q-mt-xl">
        <q-input
          dark
          dense
          input-class="text-center"
          color="white"
          v-model="username"
          type="username"
          placeholder="username"
        />
        <q-input
          dark
          dense
          color="white"
          input-class="text-center"
          v-model="password"
          type="password"
          placeholder="password"
        />
        <!-- LOG-IN BUTTON -->
        <q-btn
          :ripple="false"
          unelevated
          rounded
          dense
          no-caps
          class="text-red text-bold q-mt-md"
          style="height: 1.5rem; width: 6rem; font-size: smaller"
          color="white"
          label="log-in"
          @click="loginUser()"
        />
      </div>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  name: "LoginForm",
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
