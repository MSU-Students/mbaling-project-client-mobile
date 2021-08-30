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
      <p class="info-username">@{{ sProfile.username }}</p>

      <p class="info-fullname defaultfont-bold text-uppercase">{{ sProfile.name }}</p>
      <p class="info-other">
        {{ sProfile.id }}<br />{{ sProfile.sDegree }}, {{sProfile.sYear}} <br />
        {{ sProfile.sDepartment }}<br />
        {{ sProfile.sCollege }}<br />
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
        <q-tab  :ripple="false" icon="bi-bookmark-fill" name="bookmark" label="BOOKMARK" />
        <q-tab  :ripple="false" icon='bi-file-text-fill' name="application" label="APPLICATION" />
      </q-tabs>
      
      <hr class="bg-black q-mt-none" style="width:87%"/>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="bookmark">
          <q-card class="my-card" flat bordered>
            <q-item>
              <q-item-section avatar>
                <q-avatar icon="account_circle" />
              </q-item-section>

              <q-item-section class="post-user">
              <div>  <q-item-label>Hello Raian </q-item-label> </div>
              <div>  <q-item-label caption> Muammar's Boarding House </q-item-label> </div>
                     <q-item-label caption> 3 days ago </q-item-label>
              
              </q-item-section>
            </q-item>

            <q-separator />
            <q-img src="~src\assets\post-picture-a002.jpg" class="card-post" />
            <q-card-section>
              <div>Family/Couple size Apartment room</div>
              <div>6,500 PHP monthly</div>
              <div class="view-more">•View more</div>
              <hr class="bg-red-14" />
              <q-toolbar>
                
                <div class="button-options" style="font-size: 20px">
                
                  <q-icon name="bi-heart" />
                  <q-icon class="q-ml-xs" name="bi-bookmark" />
                  <q-icon class="q-ml-xs" name="bi-chat-right" />
                  <div class="view-more">44 likes • 1 bookmarks</div> 
                  </div>
              </q-toolbar>
            </q-card-section>
          </q-card>
        </q-tab-panel>

         <q-tab-panel name="application">
          <q-item>
            <q-item-section thumbnail class="q-ml-none">
              <img src="~src\assets\post-picture-a002.jpg" />
            </q-item-section>

            <q-item-section>
             <div> <q-item-label>Hello Raian</q-item-label></div>
              <q-item-label caption class="q-mt-none q-pt-none">Muammar's Boarding House </q-item-label>
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
        </q-tab-panel>

      </q-tab-panels>
  <q-page>
  </q-page>

</template>

<script>
export default {
  data() {
    return {
      sProfile: {
        name: "Last M. First",
        id: "201845823",
        username: "Username1234",
        sDegree: "BS Information Technology (Database)",
        sDepartment: "Computer Studies Department",
        sCollege: "College of Information Technology",
        sYear: "2018"
      },
      lProfile:{
        

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