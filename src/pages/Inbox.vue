<template>
  <q-page>
 <q-list >
      <q-item v-for="contact in contacts" :key="contact.id" to="/chat" class="q-my-sm" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar size="xl">
              <img :src="contact.prfphoto" />
            </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ contact.name }}</q-item-label>
          <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
        </q-item-section>

      </q-item>
    </q-list>

  </q-page>
</template>

<script>

export default {
  setup () {
    return {
      contacts: [{
            id: 1,
            name: 'Ruddy Jedrzej',
            email: 'rjedrzej0@discuz.net',
            prfphoto: "https://cdn.quasar.dev/img/avatar4.jpg",
          }, {
            id: 2,
            name: 'Mallorie Alessandrini',
            email: 'malessandrini1@marketwatch.com',
             prfphoto: "https://cdn.quasar.dev/img/avatar2.jpg",
          }, {
            id: 3,
            name: 'Elisabetta Wicklen',
            email: 'ewicklen2@microsoft.com',
             prfphoto: "https://cdn.quasar.dev/img/avatar3.jpg",
          }, {
            id: 4,
            name: 'Seka Fawdrey',
            email: 'sfawdrey3@wired.com',
             prfphoto: "https://cdn.quasar.dev/img/avatar1.jpg",
          } ]
            
    }
  }
}
</script>