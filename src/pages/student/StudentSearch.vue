<template>
  <q-header class="defaultfont bg-white text-black q-pa-md">
    <!-- SEARCH INPUT FIELD -->
    <q-form @submit="searchPosts()">
      <q-input
        v-model="search"
        :loading="loadingState"
        square
        filled
        dense
        clearable
        placeholder="Search"
        @clear="clearSearch()"
        @keyup.enter="searchPosts()"
      >
        <template v-slot:prepend>
          <q-btn flat round size="0.7rem">
            <q-icon name="bi-search" size="1.25rem" type="submit" />
          </q-btn>
        </template>
      </q-input>
    </q-form>
  </q-header>

  <q-page v-if="searchResult.length > 0">
    <!-- POSTS & USERS TAB -->
    <q-tabs
      v-model="tab"
      dense
      inline-label
      active-color="black"
      indicator-color="transparent"
      align="justify"
      class="q-px-md defaultfont-semibold text-grey"
    >
      <q-tab :ripple="false" name="posts" label="Posts" />
      <q-tab :ripple="false" name="users" label="Users" />
    </q-tabs>
    <q-separator inset size="0.1rem" color="black" />

    <q-tab-panels v-model="tab" animated>
      <!-- POSTS TAB PANEL -->
      <q-tab-panel name="posts" class="q-pa-md">
        <div class="row items-start">
          <div
            v-for="(result, index) in searchResult"
            :key="index"
            style="width: 50%"
          >
            <div class="q-pa-sm">
              <q-img
                :src="result.photo"
                fit="none"
                style="width: 100%; height: 15rem; border-radius: 0.5rem"
                @click="$router.push('/post')"
              >
                <div class="absolute-bottom text-left">
                  <q-item-label lines="2" style="font-size: small">
                    {{ result.title }}
                  </q-item-label>
                </div>
              </q-img>
            </div>
          </div>
        </div>
      </q-tab-panel>

      <!-- USERS TAB PANEL -->
      <q-tab-panel name="users" class="q-pa-none q-pt-md">
        <q-list
          v-for="(result, index) in searchResult"
          :key="index"
        >
          <q-item clickable class="row items-center" @click="$router.push('/profile')">
            <q-item-section avatar>
              <q-avatar size="xl">
                <img :src="result.prfphoto" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label
                lines="1"
                class="defaultfont-semibold"
                style="font-size: medium"
              >
                {{ result.fullname }}
              </q-item-label>
              <q-item-label lines="1" style="font-size: small">
                {{ result.housingName }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>

  <!-- NOTHING FOUND WARNING -->
  <q-page
    v-if="searchResult.length == 0 && searchClicked"
    class="row items-center justify-evenly"
  >
    <p class="defaultfont text-grey-5 text-center">
      <q-icon
        name="bi-question-circle"
        color="grey-5"
        size="xl"
        class="q-mb-sm"
      />
      <br />
      NOTHING FOUND
    </p>
  </q-page>
</template>

<script lang="ts">
import { ref } from "vue";
import { Vue, Options } from "vue-class-component";

interface IPost {
  date: number;
  fullname: string;
  housingName: string;
  prfphoto: string;
  title: string;
  fee: string;
  likes: number;
  bookmarks: number;
  photo: string;
}

@Options({})
export default class StudentSearch extends Vue {
  search = "";
  tab = ref("posts");
  loadingState = false;
  searchClicked = false;

  posts: IPost[] = [
    {
      date: 1631096539262,
      fullname: "Azshara Highborne",
      housingName: "Zin-Azshari Boarding House",
      prfphoto: "https://cdn.quasar.dev/img/avatar2.jpg",
      title:
        "Free boarding room @ Zin-Azshari Boarding House 5th street MSU-Marawi",
      fee: "1,200",
      likes: 44,
      bookmarks: 1,
      photo: "https://cdn.quasar.dev/img/parallax1.jpg",
    },
    {
      date: 1631096551509,
      fullname: "Monkey D. Luffy",
      housingName: "Pirate King Apartment",
      prfphoto: "https://cdn.quasar.dev/img/avatar4.jpg",
      title:
        "Free boarding room size Apartment room w/ Private kitchen and bathroom",
      fee: "6,500",
      likes: 32,
      bookmarks: 4,
      photo: "https://cdn.quasar.dev/img/parallax2.jpg",
    },
  ];

  searchResult: IPost[] = [];

  searchPosts() {
    const result = this.posts.filter(
      (post) =>
        post.fullname.toLowerCase().includes(this.search.toLowerCase()) ||
        post.title.toLowerCase().includes(this.search.toLowerCase()) ||
        post.housingName.toLowerCase().includes(this.search.toLowerCase())
    );
    this.searchResult = result;
    this.searchClicked = true;
  }

  clearSearch() {
    this.searchResult = [];
    this.searchClicked = false;
  }
}
</script>
