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
    <q-chat-message name="me" :text="['hey, how are you?']" sent />
    <q-chat-message name="Jane" :text="['doing fine, how r you?']" />
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
              <q-icon name="send" />
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