<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-white q-px-md q-py-sm" style="height: 3rem"></q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>

     <!-- <q-header elevated class="bg-white" style="height: 3rem">
      <q-toolbar >
         <q-avatar v-if="$route.fullPath.includes('/chat')"> 
            <q-img src="https://cdn.quasar.dev/img/avatar2.jpg" class="chat-avatar"/> 
            </q-avatar>
         <q-toolbar-title 
            v-if="$route.fullPath.includes('/chat')"
            class="text-black text-subtitle2">Azshara Highborne</q-toolbar-title>

          <q-btn 
          class="q-px-none"
          color="black"
          flat
          icon="arrow_back" 
          :ripple="false"         
           @click="$router.go(-1)"/>

        <q-space v-if="$route.fullPath.includes('/post')"/>
          <q-btn 
          v-if="$route.fullPath.includes('/post')"
          class="q-px-none"
          color="primary"          
          label="Post"
          size="sm"
          style="width:20%"
          unelevated
          :ripple="false"/>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout> -->
</template>