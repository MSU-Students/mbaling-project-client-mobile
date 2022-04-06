<template>
  <q-header class="defaultfont bg-white text-black q-pa-md">
    <!-- SEARCH INPUT FIELD -->
    <q-form @submit="searchAction()">
      <q-input
        v-model="search"
        :loading="loadingState"
        square
        filled
        dense
        clearable
        placeholder="Search"
        @clear="clearSearch()"
        @keyup.enter="searchAction()"
      >
        <template v-slot:prepend>
          <q-btn flat round size="0.7rem">
            <q-icon name="bi-search" size="1.25rem" type="submit" />
          </q-btn>
        </template>
      </q-input>
    </q-form>
  </q-header>

  <q-page v-if="searchResultPost.length > 0 || searchResultUser.length > 0">
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
        <div v-if="searchResultPost.length > 0" class="row items-start">
          <div
            v-for="(result, index) in searchResultPost"
            :key="index"
            style="width: 50%"
          >
            <div v-for="photo in result.photos" :key="photo.id" class="q-pa-sm">
              <q-img
                v-if="photo.id === 1"
                :src="photo.url"
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
        <q-page v-else class="row items-center justify-evenly">
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
      </q-tab-panel>

      <!-- USERS TAB PANEL -->
      <q-tab-panel name="users" class="q-pa-none q-pt-md">
        <div v-if="searchResultUser.length > 0">
          <q-list v-for="(result, index) in searchResultUser" :key="index">
            <q-item
              clickable
              class="row items-center"
              @click="$router.push('/profile')"
            >
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
                  {{ result.firstname }} {{ result.middlename.charAt(0) }}.
                  {{ result.lastname }}
                </q-item-label>
                <q-item-label lines="1" style="font-size: small">
                  {{ result.housingName }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <q-page v-else class="row items-center justify-evenly">
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
      </q-tab-panel>
    </q-tab-panels>
  </q-page>

  <!-- NOTHING FOUND WARNING -->
  <q-page
    v-if="
      searchResultPost.length == 0 &&
      searchResultUser.length == 0 &&
      searchClicked
    "
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
import { PostInterface } from "src/store/post/state";
import { mapState } from "vuex";

@Options({
  computed: {
    ...mapState("posts", ["posts"]),
  },
})
export default class StudentSearch extends Vue {
  search = "";
  tab = ref("posts");
  loadingState = false;
  searchClicked = false;

  posts!: PostInterface[];

  searchResultPost: PostInterface[] = [];
  searchResultUser: PostInterface[] = [];

  searchAction() {
    // if (this.search != "") {
    const resultPosts = this.posts.filter(
      (post) =>
        post.title.toLowerCase().includes(this.search.toLowerCase())
    );
    const resultUsers = this.posts.filter(
      (post) =>
        post.firstname.toLowerCase().includes(this.search.toLowerCase()) ||
        post.middlename.toLowerCase().includes(this.search.toLowerCase()) ||
        post.lastname.toLowerCase().includes(this.search.toLowerCase()) ||
        post.housingName.toLowerCase().includes(this.search.toLowerCase())
    );
    this.searchResultPost = resultPosts;
    this.searchResultUser = resultUsers;
    this.searchClicked = true;
    // }
  }

  clearSearch() {
    this.searchResultPost = [];
    this.searchResultUser = [];
    this.searchClicked = false;
  }
}
</script>
