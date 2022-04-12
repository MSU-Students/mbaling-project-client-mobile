<template>
  <q-header
    class="q-pa-md defaultfont bg-secondary text-black"
    style="height: 4.5rem"
  >
    <!-- SEARCH INPUT FIELD -->
    <q-form @submit="searchAction()">
      <q-input
        v-model="search"
        rounded
        outlined
        dense
        clearable
        placeholder="Search"
        class="searchinput"
        @clear="clearSearch()"
        @keyup.enter="searchAction()"
      >
        <template v-slot:prepend>
          <q-btn flat round size="sm">
            <q-icon name="bi-search" type="submit" size="xs" />
          </q-btn>
        </template>
      </q-input>
    </q-form>
  </q-header>

  <q-page v-if="(searchResultPost.length || searchResultUser.length) > 0">
    <div v-if="searchResultUser.length > 0" class="q-pt-sm q-px-sm defaultfont">
      <div class="q-ml-sm defaultfont-semibold text-body1">USERS</div>
      <div class="q-px-xs">
        <q-scroll-area :visible="false" style="height: 5.5rem; max-width: 100%">
          <div class="q-pt-xs q-gutter-sm row items-start no-wrap">
            <div v-for="(result, index) in searchResultUser" :key="index">
              <q-avatar
                size="4rem"
                class="bg-primary"
                @click="$router.push('/profile')"
              >
                <q-img :src="result.prfphoto">
                  <q-tooltip>
                    {{ result.housingAddress }}
                  </q-tooltip>
                </q-img>
              </q-avatar>
            </div>
          </div>
        </q-scroll-area>
      </div>
    </div>

    <div
      v-if="searchResultPost.length > 0"
      class="q-pt-sm q-px-sm q-pb-md defaultfont"
    >
      <div class="q-ml-sm defaultfont-semibold text-body1">POSTS</div>
      <div class="defaultfont row items-start">
        <div
          v-for="(result, index) in searchResultPost"
          :key="index"
          class="q-pa-xs"
          style="width: 50%"
        >
          <div v-for="photo in result.photos" :key="photo.id">
            <q-img
              v-if="photo.id === 1"
              :src="photo.url"
              fit="cover"
              class="bg-primary"
              style="width: 100%; height: 18rem; border-radius: 0.5rem"
              @click="$router.push('/post')"
            >
              <div class="absolute-bottom text-left">
                <q-item-label lines="2" style="font-size: medium">
                  {{ result.title }}
                </q-item-label>
              </div>
            </q-img>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { ref } from "vue";
import { Vue, Options } from "vue-class-component";
import { PostInterface } from "src/store/post/state";
import { UserInterface } from "src/store/user/state";
import { mapState } from "vuex";

@Options({
  computed: {
    ...mapState("posts", ["posts"]),
    ...mapState("user", ["users"]),
  },
})
export default class StudentSearch extends Vue {
  search = "";
  tab = ref("posts");
  loadingState = false;

  posts!: PostInterface[];
  users!: UserInterface[];

  searchResultPost: PostInterface[] = [];
  searchResultUser: UserInterface[] = [];

  searchAction() {
    const resultPosts = this.posts.filter((post) =>
      post.title.toLowerCase().includes(this.search.toLowerCase())
    );
    const resultUsers = this.users.filter(
      (user) =>
        user.housingAddress.toLowerCase().includes(this.search.toLowerCase()) ||
        user.username.toLowerCase().includes(this.search.toLowerCase())
    );
    this.searchResultPost = resultPosts;
    this.searchResultUser = resultUsers;
  }

  clearSearch() {
    this.searchResultPost = [];
    this.searchResultUser = [];
    this.search = "";
  }
}
</script>

<style>
.searchinput {
  font-size: medium;
  background-color: #f2f2f2;
  border-radius: 10rem;
}
</style>
