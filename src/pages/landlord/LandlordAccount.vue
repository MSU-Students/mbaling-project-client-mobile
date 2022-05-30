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

  <q-page class="defaultfont bg-seacondary">
    <q-tabs
      v-model="tab"
      dense
      align="left"
      active-color="black"
      indicator-color="transparent"
      class="q-px-lg text-grey"
      :breakpoint="0"
    >
      <q-tab
        :ripple="false"
        name="link"
        icon="bi-link-45deg"
        style="max-width: 2rem"
      />
      <q-tab
        :ripple="false"
        name="list"
        icon="bi-list-ul"
        style="max-width: 4rem"
      />
      <q-tab
        :ripple="false"
        name="apply"
        icon="bi-clipboard-plus"
        style="max-width: 2rem"
      >
        <q-badge floating color="primary"> 2 </q-badge>
      </q-tab>
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="link">
        <links />
      </q-tab-panel>

      <q-tab-panel name="list">
        <list-boarders />
      </q-tab-panel>

      <q-tab-panel name="apply">
        <list-applicants />
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapState } from "vuex";

@Options({
  computed: {
    ...mapState("auth", ["currentUser"]),
  },
})
export default class LandlordAccount extends Vue {
  currentUser!: any;
  tab = "link";
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
