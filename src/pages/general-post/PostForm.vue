<template>
  <q-page class="defaultfont text-black">
    <div class="bg-black" style="height: 20rem">
      <div
        class="bg-grey-4 row items-center justify-evenly"
        style="height: 100%; border-radius: 2rem 2rem 0 0"
      >
        <q-icon name="bi-image" size="xl" color="grey" />
      </div>
    </div>

    <div align="right" class="q-px-md q-py-sm row items-center">
      <div class="col">
        <q-btn
          v-on:click="showClearBtn = !showClearBtn"
          label="Upload"
          unelevated
          rounded
          no-caps
          color="primary"
          class="q-ml-sm text-center"
          style="height: 2rem"
        />
        <Transition name="appear">
          <q-btn
            v-show="showClearBtn"
            icon="bi-x-circle"
            flat
            dense
            :ripple="false"
            size="md"
            class="q-ml-sm text-primary"
          />
        </Transition>
      </div>
    </div>

    <div class="q-mt-sm q-px-md">
      <q-input
        v-model="title"
        autogrow
        dense
        placeholder="Title"
        input-class="text-center"
        style="font-size: medium"
      />
      <q-input
        v-model="fee"
        dense
        placeholder="Monthly Fee"
        input-class="text-center"
        class="q-mt-xs q-px-xl"
        style="font-size: medium"
      />

      <div class="q-px-md q-mt-md row items-center">
        <div align="center" class="col">
          <q-checkbox
            label="Private Kitchen"
            v-model="pkBox"
            dense
            color="primary"
          />
        </div>
        <div align="center" class="col">
          <q-checkbox
            label="Private CR"
            v-model="pcBox"
            dense
            color="primary"
          />
        </div>
      </div>

      <q-input
        v-model="description"
        type="textarea"
        placeholder="Description"
        class="q-mt-md q-pb-lg"
        style="font-size: small"
      />
    </div>

    <q-page-sticky position="top-left" :offset="[18, 18]">
      <q-btn
        icon="bi-arrow-left-short"
        unelevated
        round
        color="black"
        style="opacity: 0.5"
        @click="$router.go(-1)"
      />
    </q-page-sticky>
  </q-page>

  <q-footer
    bordered
    class="q-px-md defaultfont bg-white row items-center"
    style="height: 4rem"
  >
    <div align="right" class="col">
      <q-btn
        label="Post"
        unelevated
        rounded
        no-caps
        color="primary"
        style="height: 3rem; width: 5rem"
      />
    </div>
  </q-footer>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class PostForm extends Vue {
  title = "";
  fee = "";
  description = ``;
  pkBox = false;
  pcBox = false;

  showClearBtn = false;
}
</script>

<style>
.appear-enter-active {
  animation: bounce-in 0.5s;
}
.appear-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
