<template>
    <q-page class="flex column">
    <q-header elevated class="bg-white" style="height: 3rem">
      <q-toolbar >
         <q-avatar> <q-img src="https://cdn.quasar.dev/img/avatar2.jpg" class="chat-avatar"/> </q-avatar>
         <q-toolbar-title class="text-black text-subtitle2">Azshara Highborne</q-toolbar-title>

          <q-btn 
          class="q-pr-none"
          color="black"
          flat
          icon="arrow_back" 
          :ripple="false"         
         @click="() => $router.replace('/inbox')"/>
      </q-toolbar>
    </q-header>
    <q-card flat bordered class="q-mt-md">
            <q-item class="bg-white">
              <q-item-section thumbnail class="q-ml-none">
                <img src="https://cdn.quasar.dev/img/parallax1.jpg" class="q-ml-sm" />
              </q-item-section>

              <q-item-section>
                <div><q-item-label>Hello Raian</q-item-label></div>
                <q-item-label caption class="q-mt-none q-pt-none"
                  >Muammar's Boarding House
                </q-item-label>
                <div class="button-apply">
                  <q-btn
                    style="width: 20%"
                    padding="xs"
                    size="0.5rem"
                    color="primary"
                    label="Apply"
                  />
                </div>
              </q-item-section>
            </q-item>
          </q-card>

<q-scroll-area class="q-pa-md column col justify-end" style="height: 38rem; max-width: 100%;">
   <div >
      <q-chat-message
        v-for="message in messages"
        :text-color="message.from == 'me' ? 'white' : 'black'"
        :key="message.text"
        :text="[message.text]"
        :bg-color="message.from == 'me' ? 'primary' : 'white'"
        :sent="message.from == 'me' ? true : false"
      />
    </div>
    </q-scroll-area>
  

    <q-footer class="bg-white">
      <q-toolbar>
        <q-toolbar-title>

        <q-input 
           class="full-width"
           bg-color="white" 
           rounded
           outlined 
           v-model="newMessage"
           placeholder="Message"
           dense>

            <template v-slot:append>
              <q-btn
              class=" q-pa-none"
              flat
              icon="send"
              :disable="!newMessage" 
              name="send" 
              @click="sendMessage" />
            </template>

            <template v-slot:after>
              <q-btn round dense flat icon="add_circle_outline" @click="show(true)" />
            </template>
          </q-input>
        </q-toolbar-title>
      </q-toolbar>

    </q-footer>
 
  </q-page>
</template>

<script>
import { Ripple, useQuasar } from 'quasar'
export default {
  data(){
    return{
      newMessage: '',
      messages: [
        {
          text: 'Hey Dodol, how r u boi',
          from: 'me'
        },
        {
          text: 'yow im fine boi',
          from: 'them'
        },
        {
          text: 'im just to chill',
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
  },
  setup () {
    const $q = useQuasar()

    function show (grid) {
      $q.bottomSheet({
        Ripple,
        message: 'More',
        grid,
        actions: [
          {
            label: 'Gallery',
            icon: 'bi-image',
            id: 'drive',
          },
          {
            label: 'Camera',
            icon: 'bi-camera',
            id: 'camera'
          },
          {
            label: 'Link',
            icon: 'bi-door-closed',
            id: 'link'
          },
          {},
        ]
      }).onOk(action => {
        // console.log('Action chosen:', action.id)
      }).onCancel(() => {
        // console.log('Dismissed')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }

    return { show }
  }
}
</script>
<style>

</style>