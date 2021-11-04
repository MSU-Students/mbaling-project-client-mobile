<template>
  <q-header style="height: 3rem; background-color: transparent">
    <q-toolbar>
      <q-space />
      <q-btn dense flat :ripple="false" color="black" icon="send" />
    </q-toolbar>
  </q-header>

  <q-page class="defaultfont bg-secondary text-black">
    <q-list class="q-pt-xs">
      <q-list
        v-for="contact in contacts"
        :key="contact.username"
        class="bg-white"
      >
        <q-item clickable v-ripple to="/chat">
          <q-item-section avatar>
            <q-avatar size="lg">
              <img :src="contact.prfphoto" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label
              lines="1"
              class="defaultfont-semibold"
              style="font-size: small"
            >
              {{ contact.fullname }}
            </q-item-label>
            <q-item-label lines="1" style="font-size: smaller">
              {{ contact.message }}
            </q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-btn
              dense
              flat
              :ripple="false"
              class="text-black"
              size="sm"
              icon="bi-three-dots-vertical"
            />
          </q-item-section>
        </q-item>
        <q-separator size="0.25rem" color="secondary" />
      </q-list>
    </q-list>
  </q-page>
</template>

<script>
export default {
  setup() {
    return {
      contacts: [
        {
          username: 1,
          fullname: "Ruddy Jedrzej",
          message: "Hey Dodol, how r u boi",
          prfphoto: "https://cdn.quasar.dev/img/avatar1.jpg",
        },
        {
          username: 2,
          fullname: "Mallorie Alessandrini",
          message: "Hey Babe whacha doin..",
          prfphoto: "https://cdn.quasar.dev/img/avatar2.jpg",
        },
        {
          username: 3,
          fullname: "Elisabetta Wicklen",
          message: "anda so kantonn!!",
          prfphoto: "https://cdn.quasar.dev/img/avatar3.jpg",
        },
        {
          username: 4,
          fullname: "Seka Fawdrey",
          message: "Antae tao sa college>",
          prfphoto: "https://cdn.quasar.dev/img/avatar4.jpg",
        },
      ],
    };
  },
};
</script>