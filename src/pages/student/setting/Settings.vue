<template>
  <page-header>
    <template #button-left>
      <q-btn
        icon="bi-arrow-left"
        :ripple="false"
        dense
        flat
        color="black"
        class="q-pl-sm"
        @click="$router.go(-1)"
      />
    </template>
    <template #title> Settings and Privacy </template>
  </page-header>

  <q-page class="defaultfont flex column">
    <q-list>
      <q-item class="q-mt-md defaultfont-semibold text-grey">
        <q-item-section> ACCOUNT </q-item-section>
      </q-item>
      <!-- MANAGE ACCOUNT -->
      <q-item
        clickable
        v-ripple="false"
        @click="$router.push('/student/settings/account')"
      >
        <q-item-section style="max-width: 1.75rem">
          <q-icon name="bi-person" size="xs" />
        </q-item-section>
        <q-item-section> Manage Account </q-item-section>
      </q-item>

      <!-- MANAGE PRIVACY -->
      <q-item
        clickable
        v-ripple="false"
        @click="$router.push('/student/settings/privacy')"
      >
        <q-item-section style="max-width: 1.75rem">
          <q-icon name="bi-shield-lock" size="xs" />
        </q-item-section>
        <q-item-section> Privacy </q-item-section>
      </q-item>
      <q-separator inset class="q-mt-md" />

      <q-item class="q-mt-md defaultfont-semibold text-grey">
        <q-item-section> SUPPORT </q-item-section>
      </q-item>
      <!-- HELP CENTER -->
      <q-item
        clickable
        v-ripple="false"
        @click="$router.push('/settings/help')"
      >
        <q-item-section style="max-width: 1.75rem">
          <q-icon name="bi-question-circle" size="xs" />
        </q-item-section>
        <q-item-section> Help Center </q-item-section>
      </q-item>

      <!-- FEEDBACK -->
      <q-item
        clickable
        v-ripple="false"
        @click="$router.push('/settings/feedback')"
      >
        <q-item-section style="max-width: 1.75rem">
          <q-icon name="bi-envelope" size="xs" />
        </q-item-section>
        <q-item-section> Feedback </q-item-section>
      </q-item>
      <q-separator inset class="q-mt-md" />

      <q-item class="q-mt-md defaultfont-semibold text-grey">
        <q-item-section> ABOUT </q-item-section>
      </q-item>
      <!-- TERMS OF SERVICE -->
      <q-item
        clickable
        v-ripple="false"
        @click="$router.push('/settings/terms-of-service')"
      >
        <q-item-section style="max-width: 1.75rem">
          <q-icon name="bi-journal-text" size="xs" />
        </q-item-section>
        <q-item-section> Terms of Service </q-item-section>
      </q-item>

      <!-- PRIVACY POLICY -->
      <q-item
        clickable
        v-ripple="false"
        @click="$router.push('/settings/privacy-policy')"
      >
        <q-item-section style="max-width: 1.75rem">
          <q-icon name="bi-file-earmark-lock" size="xs" />
        </q-item-section>
        <q-item-section> Privacy Policy </q-item-section>
      </q-item>
      <q-separator inset class="q-mt-md" />

      <q-item class="q-mt-md defaultfont-semibold text-grey">
        <q-item-section> LOGIN </q-item-section>
      </q-item>
      <!-- SYSTEM LOG-OUT -->
      <q-item clickable v-ripple="false">
        <q-item-section style="max-width: 1.75rem">
          <q-icon name="bi-box-arrow-left" size="xs" />
        </q-item-section>
        <q-item-section> Logout </q-item-section>
      </q-item>
    </q-list>
  </q-page>

  <q-footer class="row justify-center bg-white" style="height: 3rem">
    <p class="defaultfont-light text-primary">v1.0.0(2022)</p>
  </q-footer>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class StudentSettings extends Vue {}
</script>
