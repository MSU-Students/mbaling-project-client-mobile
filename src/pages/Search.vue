<template>
  <q-header class="bg-white text-black q-pa-md">
    <q-form @submit="searchPosts()">
      <q-input
        v-model="search"
        square
        filled
        dense
        clearable
        placeholder="Search"
        :loading="loadingState"
        @clear="clearSearch()"
        @keyup.enter="searchPosts()"
      >
        <template v-slot:prepend>
          <q-btn flat round size="0.7rem" @click="searchPosts()">
            <q-icon size="1.5rem" type="submit" name="search" />
          </q-btn>
        </template>
      </q-input>
    </q-form>
  </q-header>

  <q-page>
    <q-tabs
      v-if="searchResult.length > 0"
      v-model="tabs"
      dense
      inline-label
      class="defaultfont-semibold text-grey q-px-md"
      active-color="black"
      indicator-color="transparent"
      align="justify"
    >
      <q-tab :ripple="false" name="posts" label="Posts" />
      <q-tab :ripple="false" name="users" label="Users" />
    </q-tabs>

    <q-separator
      v-if="searchResult.length > 0"
      inset
      size="0.1rem"
      color="black"
    />

    <!-- POSTS TAB -->
    <q-tab-panels v-if="searchResult.length > 0" v-model="tabs" animated>
      <q-tab-panel class="q-pa-none q-pt-md" name="posts">
        <div>
          <div v-for="(result, index) in searchResult" :key="index">
            <q-item class="q-pt-md">
              <q-item-section avatar top>
                <q-avatar size="xl">
                  <img :src="result.prfphoto" />
                </q-avatar>
              </q-item-section>

              <q-item-section top>
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
                <span class="text-grey" style="font-size: xx-small">
                  {{ result.date }}
                </span>
              </q-item-section>

              <q-item-section side top>
                <q-btn
                  dense
                  flat
                  :ripple="false"
                  class="text-black"
                  icon="bi-three-dots"
                />
              </q-item-section>
            </q-item>

            <div class="q-my-xs">
              <q-img :src="result.photo" />
            </div>

            <q-item class="">
              <q-item-section class="defaultfont-medium">
                <q-item-label lines="1" style="font-size: small">
                  {{ result.title }}
                </q-item-label>
                <q-item-label style="font-size: small">
                  {{ result.fee }} PHP monthly
                </q-item-label>
                <span
                  class="text-bold cursor-pointer"
                  style="font-size: x-small; text-align: right"
                  @click="this.$router.push('/post')"
                >
                  +View more
                </span>
              </q-item-section>
            </q-item>
            <q-separator inset color="primary" />
            <q-item>
              <div class="row">
                <q-btn
                  flat
                  round
                  :ripple="false"
                  color="primary"
                  size="sm"
                  icon="bi-heart"
                />
                <q-btn
                  flat
                  round
                  :ripple="false"
                  color="primary"
                  size="sm"
                  icon="bi-chat-right"
                />
                <q-btn
                  flat
                  round
                  :ripple="false"
                  color="primary"
                  size="sm"
                  icon="bi-bookmark"
                />
              </div>
              <q-space />
              <span
                class="defaultfont-medium absolute-bottom-right q-pr-md q-pb-md"
                style="font-size: x-small"
              >
                {{ result.likes }} Likes • {{ result.bookmarks }} Bookmarks
              </span>
            </q-item>
            <q-separator size="0.5rem" color="secondary" />
          </div>
        </div>
      </q-tab-panel>

      <!-- USERS TAB -->
      <q-tab-panel class="q-pa-none q-pt-md" name="users">
        <q-list
          v-for="(result, index) in searchResult"
          :key="index"
          @click="this.$router.push('/l/account')"
        >
          <q-item class="row items-center">
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

    <div
      v-if="searchResult.length == 0 && searchClicked"
      class="flex flex-center"
    >
      No result found!
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

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
  searchClicked = false;

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
        "Free boarding room size Apartment room w/ Private kitchen and bathroom",
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
    this.searchClicked = true;
  }

  // to clear search inputs and set search result into default value
  clearSearch() {
    this.searchResult = [];
    this.searchClicked = false;
  }
}
</script>
