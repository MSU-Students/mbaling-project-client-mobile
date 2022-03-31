<template>
  <page-header />
  <q-page class="defaultfont bg-secondary text-black">
    <!-- CONTACT/INBOX LIST -->
    <q-list class="q-pt-xs">
      <q-list
        v-for="contact in contacts"
        :key="contact.username"
        class="bg-white"
      >
        <q-item :v-ripple="false" clickable>
          <q-item-section avatar @click="$router.push('/chat')">
            <q-avatar size="lg">
              <img :src="contact.prfphoto" />
            </q-avatar>
          </q-item-section>

          <q-item-section @click="$router.push('/chat')">
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

          <!-- OPTION BUTTON -->
          <q-item-section side>
            <q-btn
              icon="bi-trash"
              :ripple="false"
              dense
              flat
              size="sm"
              color="primary"
              @click="confirmDelete()"
            />
          </q-item-section>
        </q-item>
        <q-separator size="0.25rem" color="secondary" />
      </q-list>
    </q-list>
  </q-page>
</template>

<script>
import { Vue } from "vue-class-component";

export default class Inbox extends Vue {
  contacts = [
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
  ];

  confirmDelete() {
    this.$q.dialog({
      title: "Confirm Delete",
      message: "Are you sure you want to delete this conversation?",
      cancel: true,
      persistent: true,
      class: "defaultfont",
    });
  }
}
</script>
