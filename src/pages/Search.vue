<template>
  <q-header class="bg-white text-black q-pa-md">
    <q-input
      v-model="search"
      square
      filled
      dense
      clearable
      placeholder="Search"
      :loading="loadingState"
      @clear="clearSearch()"
    >
      <template v-slot:prepend>
        <q-btn flat round size="0.7rem" @click="searchPosts()">
          <q-icon size="1.5rem" name="search" />
        </q-btn>
      </template>
    </q-input>
  </q-header>

  <q-page class="q-px-md">
    <q-tabs v-if="searchResult.length > 0" v-model="tabs" class="text-grey-9">
      <q-tab name="posts" label="Posts"> </q-tab>
      <q-tab name="users" label="Users" />
    </q-tabs>

    <q-tab-panels v-if="searchResult.length > 0" v-model="tabs" animated>
      <q-tab-panel class="q-pa-none q-pt-md" name="posts">
        <div class="row items-center justify-center">
          <div
            v-for="(result, index) in searchResult"
            :key="index"
            class="col-6 row items-center justify-center"
          >
            <img :src="result.prfphoto" width="170" height="170" />
          </div>
        </div>
      </q-tab-panel>
      <q-tab-panel class="q-pa-none q-pt-md" name="users">
        <div class="row items-center justify-center">
          <q-card
            v-for="(result, index) in searchResult"
            :key="index"
            class="col-6 row items-center justify-center"
          >
            <img :src="result.prfphoto" />
          </q-card>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { FiltersJS, Operation } from "filtersjs";

// this is just a interface you need to practice this because TS required it a lot
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
export default class Search extends Vue {
  search = "";
  tabs = "posts";
  loadingState = false;

  // dummy posts. expected this data will fetch to your local db.
  // i just call the interface here
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
        "Family/Couple size Apartment room w/ Private kitchen and bathroom",
      fee: "6,500",
      likes: 32,
      bookmarks: 4,
      photo: "https://cdn.quasar.dev/img/parallax2.jpg",
    },
  ];

  // i will store the search result here
  searchResult: IPost[] = [];

  // search post methods to filter fullname, title, housingname
  searchPosts() {
    const result = this.posts.filter(
      (post) =>
        post.fullname.toLowerCase().includes(this.search.toLowerCase()) ||
        post.title.toLowerCase().includes(this.search.toLowerCase()) ||
        post.housingName.toLowerCase().includes(this.search.toLowerCase())
    );
    this.searchResult = result;
  }

  // to clear search inputs and set search result into default value
  clearSearch() {
    this.searchResult = [];
  }
}
</script>
