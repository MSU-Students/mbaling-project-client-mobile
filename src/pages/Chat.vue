<template>
<q-page class="flex column">
    <div class="q-pa-md column col justify-end">
    <q-chat-message name="me" :text="['hey, how are you?']" sent />
    <q-chat-message name="Jane" :text="['doing fine, how r you?']" />
    </div>
 
  </q-page>
</template>