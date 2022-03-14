<template>
  <q-header bordered style="height: 3rem; background-color: transparent">
    <q-toolbar>
      <q-btn
        class="q-pl-sm"
        color="black"
        flat
        icon="bi-arrow-left"
        :ripple="false"
        @click="$router.go(-1)"
      />
    </q-toolbar>
  </q-header>

  <q-page class="defaultfont flex column">
    <q-list class="q-mx-sm">
      <template v-for="(menuItem, index) in menuList" :key="index">
        <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple="false">
          <q-item-section  style="max-width: 1.75rem">
            <q-icon :name="menuItem.icon" size="xs"/>
          </q-item-section>
          <q-item-section>
            {{ menuItem.label }}
          </q-item-section>
        </q-item>
        <q-separator :key="'sep' + index" v-if="menuItem.separator" />
      </template>
    </q-list>
  </q-page>

  <q-footer class="row justify-center bg-white" style="height: 3rem">
    <p class="defaultfont-light text-primary">v1.0.0(2022)</p>
  </q-footer>
</template>

<script>
const menuList = [
  {
    icon: "bi-person",
    label: "Manage Account",
    separator: false,
  },
  {
    icon: "bi-shield-lock",
    label: "Privacy",
    separator: true,
  },
  {
    icon: "bi-question-circle",
    label: "Help Center",
    separator: false,
  },
  {
    icon: "bi-envelope",
    label: "Feedback",
    separator: true,
  },
  {
    icon: "bi-journal-text",
    label: "Terms of Service",
    separator: false,
  },
  {
    icon: "bi-file-earmark-lock",
    label: "Privacy Policy",
    separator: true,
  },
  {
    icon: "bi-box-arrow-left",
    label: "Logout",
    separator: false,
  },
];

export default {
  setup() {
    return {
      menuList,
    };
  },
};
</script>

<style></style>
