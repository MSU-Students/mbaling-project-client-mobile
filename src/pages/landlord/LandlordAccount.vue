<template>
  <q-header style="height:3rem;background-color:transparent">
    <q-toolbar>
        <q-space/>
        <q-btn color="black" flat round dense icon="more_vert"> </q-btn>
    </q-toolbar>
  </q-header>

 <q-toolbar
    class="text-white profile_bg column items-center justify-center"
  >

  <!-- PROFILE TOP -->
    <q-avatar
      class="q-mb-md q-mt-lg"
      size="120px"
      font-size="52px"
      color="grey"
      text-color="white"
      icon="account_circle"
    />
    <div class="column items-center justify-center">
      <p class="info-username">@{{ lProfile.username }}</p>

      <p class="info-fullname defaultfont-bold text-uppercase">{{ lProfile.name }}</p>
      <p class="info-other">
        {{lProfile.housing}}<br/>
        {{lProfile.address1}}, {{lProfile.address2}},<br/>
        {{lProfile.address3}}, {{lProfile.address4}}
      </p>
    </div>
  </q-toolbar>
   <q-tabs
        inline-label
        v-model="tab"
        dense
        color="secondary"
        class="text-grey"
        active-color="black"
        indicator-color="transparent"
        align="justify"
        narrow-indicator
      >
        <q-tab  :ripple="false" icon="bi-pin-angle-fill" name="post" label="POSTS" />
        <q-tab  :ripple="false" icon='bi-file-text-fill' name="application" label="APPLICATIONS" />
      </q-tabs>
      
      <hr class="bg-black q-mt-none" style="width:87%"/>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="post">
          <h6>POSTS</h6>
        </q-tab-panel>

         <q-tab-panel name="application">
          <h6>APPLICATIONS</h6>
        </q-tab-panel>

      </q-tab-panels>
  <q-page>
  </q-page>

</template>

<script>
export default {
  data() {
    return {
      lProfile:{
        username: "pirateking_home",
        name: "Monkey D. Luffy",
        housing: "Pirate King Apartment",
        address1:"0259 5th Street",
        address2:"Brgy.Dimalna I",
        address3:"Mindanao State University",
        address4:"Marawi City"


      },
       tab: "mails",
    };
  },
};
</script>

<style lang="sass">
  .card-post
    .q-img
      min-width: 100px
</style>