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
        Set map link
      </div>
    </template>
  </page-header>

  <div class="q-pb-lg flex flex-center defaultfont" style="font-size: 25px">
    Setting up your Map Link
  </div>

  <q-page class="q-px-md q-pb-xl defaultfont">
    <p>
      Step 1: Open your “Maps or Google map” from your android phone, make sure
      your google account is logged in, if not then please do login your account.
    </p>
    <q-img src="~src\assets\Map-Link\maplink-01.jpg" class="q-mb-md rounded-borders border" />

    <p>
      Step 2: Click on GPS icon from right corner to find your location. Make
      sure your “GPS or location” is turn on or else this icon won’t appear,
      you’ll have to find your location manually.
    </p>
    <q-img src="~src\assets\Map-Link\maplink-02.jpg" class="q-mb-md rounded-borders border" />

    <p>
      Step 3: Now long press on your location to set your “Dropped pin or mark
      location”.
    </p>
    <q-img src="~src\assets\Map-Link\maplink-03.jpg" class="q-mb-md rounded-borders border" />
    <p>
      Step 4: Upon setting-up your location an option menu will appear from bottom.
      Now find and click the “Share” option.
    </p>
    <q-img src="~src\assets\Map-Link\maplink-04.jpg" class="q-mb-md rounded-borders border" />
    <p>Step 5: Now click on “Copy to clipboard”.</p>
    <q-img src="~src\assets\Map-Link\maplink-05.jpg" class="q-mb-md rounded-borders border" />
    <p>
      Step 6: Visit your profile from “mbaling” apps and paste your link onto
      the map link and save it. Make sure to remove the word “Dropped pin” from
      the beginning of your link before you save it.
    </p>
    <q-img src="~src\assets\Map-Link\maplink-06.jpg" class="q-mb-md rounded-borders border" />
  </q-page>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class ChatLink extends Vue {}
</script>
<style>
.border {
  width: 100%;
  height: 100%;
  border: 2px solid rgb(190, 40, 45) !important;
}
</style>
