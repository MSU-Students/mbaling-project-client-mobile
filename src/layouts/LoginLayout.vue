<template>
  <q-layout class="defaultfont">
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="row justify-center" style="height: 3rem">
      <div class="defaultfont-light info-other cursor-pointer">
        <p @click="alert">
          Sign-up for an account
          <q-icon name="bi-question-circle" />
        </p>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  methods: {
    alert() {
      this.$q.dialog({
        message: "Please proceed to the MSU Housing Management Division to sign-up for an account."
      });
    },
  },
};
</script>