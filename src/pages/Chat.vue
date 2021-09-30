<template>
    <q-page class="flex column">
    <q-header elevated class="bg-white q-px-md q-py-sm" style="height: 3rem">
      <q-toolbar-title>
        <q-img
          src="~assets/mbaling-logo-horizontal.svg"
          style="max-width: 8rem"
        />
      </q-toolbar-title>
    </q-header>

   <div class="q-pa-md column col justify-end">
      <q-chat-message
      v-for="message in messages"
        :key="message.text"
        :name="message.from"
        :text="[message.text]"
        :sent="message.from == 'me' ? true : false"
      />
    </div>

    <q-footer class="bg-white">
      <q-toolbar>
        <q-toolbar-title>

        <q-input 
           class="full-width"
           bg-color="white" 
           rounded
           outlined 
           v-model="newMessage"
           label="Message" 
           dense>

            <template v-slot:append>
              <q-icon name="send" @click="sendMessage" />
            </template>

            <template v-slot:after>
              <q-btn round dense flat icon="add_circle_outline" />
            </template>
          </q-input>
        </q-toolbar-title>
      </q-toolbar>

    </q-footer>
 
  </q-page>
</template>

<script>
export default {
  data(){
    return{
      newMessage: '',
      messages: [
        {
          text: 'Hey Dodol, how r u mf',
          from: 'me'
        },
        {
          text: 'yow mf im f fine boi',
          from: 'them'
        },
        {
          text: 'stfu u bastard i only do the cursing word',
          from: 'me'
        },
      ]
    }
  },
  methods:{
    sendMessage(){
      this.messages.push({
        text: this.newMessage,
        from: 'me'
      })
      this.newMessage = ''
    }
  }
}
</script>