<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white text-black">
      <q-toolbar>
        <q-img src="~src\assets\mbaling-logo-horizontal.svg" style="width:8rem"/>
      </q-toolbar>
    </q-header>

    <q-page-container class="defaultfont">
      <router-view />
    </q-page-container>

    <q-footer elevated style="height:3rem">
        <q-btn-group spread style="height:3rem">
          <q-btn :ripple="false" color="primary" to="/s/home" size="1.25rem">
            <i class="mbi-home"></i>
          </q-btn>
          <q-btn :ripple="false" color="primary"  to="/search" size="1.25rem">
            <i class="mbi-search"></i>
          </q-btn>
          <q-btn :ripple="false" color="primary"  to="/inbox" size="1.25rem">
          <i class="mbi-inbox"></i>
          </q-btn>
          <q-btn :ripple="false" color="primary"  to="/s/account" size="1.25rem">
          <i class="mbi-account"></i>
          </q-btn>
        </q-btn-group>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
export default {
  data() {
    return {
      tab: "mails",
    }
  },
};
</script>
