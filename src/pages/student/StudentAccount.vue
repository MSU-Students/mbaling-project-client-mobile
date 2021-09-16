<template>
  <q-header style="height: 3rem; background-color: transparent">
    <q-toolbar>
      <q-space />
      <q-btn
        dense
        flat
        :ripple="false"
        color="black"
        icon="bi-three-dots-vertical"
      />
    </q-toolbar>
  </q-header>

  <q-page class="defaultfont bg-secondary text-black">
    <!-- PROFILE SECTION -->
    <div class="bg-primary flex-center text-center q-pa-md">
      <q-avatar class="q-mt-md" size="8rem">
        <img :src="student.prfphoto" />
      </q-avatar>
      <div class="text-white q-mt-lg">
        <p class="info-username">{{ student.username }}</p>
        <span class="defaultfont-bold info-fullname text-uppercase">
          {{ student.fullname }}
        </span>
        <p class="info-other">
          {{ student.studentID }} <br />
          {{ student.degree }}, {{ student.yearAdmit }} <br />
          {{ student.department }} <br />
          {{ student.college }}
        </p>
      </div>
    </div>

    <!-- BOOKMARK & APPLICATION TAB -->
    <div class="q-mt-sm">
      <q-tabs
        v-model="tab"
        dense
        inline-label
        class="defaultfont-semibold text-grey q-px-md"
        style="max-height: 2rem"
        active-color="black"
        indicator-color="transparent"
        align="justify"
      >
        <q-tab :ripple="false" name="bookmarks">
          <p class="row items-center" style="font-size: smaller">
            <q-icon name="bi-bookmark-fill" class="q-mr-xs" size="1rem" />
            BOOKMARK
          </p>
        </q-tab>
        <q-tab :ripple="false" name="applications">
          <p class="row items-center" style="font-size: smaller">
            <q-icon
              name="bi-file-earmark-text-fill"
              class="q-mr-xs"
              size="1rem"
            />
            APPLICATIONS
          </p>
        </q-tab>
      </q-tabs>

      <q-separator inset size="0.1rem" color="black" />

      <q-tab-panels v-model="tab" animated class="bg-transparent">
        <!-- BOOKMARK TAB PANEL -->
        <q-tab-panel name="bookmarks">
          <q-card flat bordered>
            <q-item>
              <q-item-section avatar>
                <q-avatar icon="account_circle" />
              </q-item-section>

              <q-item-section class="post-user">
                <div><q-item-label>Hello Raian </q-item-label></div>
                <div>
                  <q-item-label caption>
                    Muammar's Boarding House
                  </q-item-label>
                </div>
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

        <!-- APPLICATION TAB PANEL-->
        <q-tab-panel name="applications">
          <q-card flat bordered>
            <q-item class="bg-white">
              <q-item-section thumbnail class="q-ml-none">
                <img src="~src\assets\post-picture-a002.jpg" />
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
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  data() {
    return {
      student: {
        username: "@palawanexpress98",
        prfphoto: "https://cdn.quasar.dev/img/boy-avatar.png",
        studentID: 201812730,
        fullname: "Nahed S. Bashier",
        degree: "BS Information Technology (Database System)",
        yearAdmit: 2018,
        department: "Department of Information Sciences",
        college: "College of Information and Computing Sciences",
      },
    };
  },
  setup() {
    return {
      tab: ref("mails"),
    };
  },
};
</script>

<style lang="sass">
.card-post
  .q-img
    min-width: 100px
</style>
