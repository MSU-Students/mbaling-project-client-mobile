<template>
  <q-page class="defaultfont">
    <div class="bg-black">
          <q-img :src="`http://localhost:3000/media/${post.url}`"/>
      <!-- <q-carousel
        v-model="slide"
        navigation
        arrows
        animated
        infinite
        swipeable
        transition-prev="slide-right"
        transition-next="slide-left"
        height="20rem"
        autoplay="2"
        class="bg-primary"
        style="border-radius: 2rem 2rem 0 0"
      >
        <template v-slot:navigation-icon="{ active, onClick }">
          <q-btn
            v-if="active"
            icon="bi-circle-fill"
            flat
            round
            dense
            size="0.4rem"
            color="primary"
            @click="onClick"
          />
          <q-btn
            v-else
            icon="bi-circle"
            flat
            round
            dense
            size="0.4rem"
            color="white"
            @click="onClick"
          />
        </template>
      </q-carousel> -->
    </div>

    <div class="q-pa-sm bg-white">
      <q-item class="row items-center">
        <q-item-section avatar>
          <q-avatar size="xl" class="bg-primary">
             <q-img :src="`http://localhost:3000/media/${post.prfphoto}`"/>
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label
            lines="1"
            class="defaultfont-semibold"
            style="font-size: medium"
          >
            {{ post.housingAddress }}
          </q-item-label>
          <q-item-label lines="1" style="font-size: small">
            @{{ post.title }}
          </q-item-label>
        </q-item-section>

        <q-item-section avatar>
          <q-btn
            flat
            round
            color="black"
            size="md"
            @click="redirect(post)"
          >
            <q-icon
              name="bi-arrow-up-short"
              size="lg"
              style="transform: rotate(45deg)"
            />
          </q-btn>
        </q-item-section>
      </q-item>
    </div>

    <div class="q-px-md bg-white">
      <div
        align="center"
        class="q-mt-xs defaultfont-semibold"
        style="font-size: large"
      >
        {{ post.title }}
      </div>
      <div align="center" class="q-py-xs" style="font-size: medium">
        {{ post.fee }} PHP monthly
      </div>
      <div class="q-pa-md" style="font-size: medium">
        <div>
          <q-icon
            :name="
              post.prvKitchen ? 'bi-check-square-fill' : 'bi-x-square-fill'
            "
            size="xs"
          />
          Private Kitchen
        </div>
        <div>
          <q-icon
            :name="post.prvCR ? 'bi-check-square-fill' : 'bi-x-square-fill'"
            size="xs"
          />
          Private CR
        </div>
      </div>
      <div class="q-pb-md description-content">
        {{ post.description }}
      </div>
    </div>

    <q-page-sticky position="top-left" :offset="[18, 18]">
      <q-btn
        icon="bi-arrow-left-short"
        unelevated
        round
        color="black"
        style="opacity: 0.5"
        @click="$router.go(-1)"
      />
    </q-page-sticky>
  </q-page>

  <q-footer
    bordered
    class="q-px-sm defaultfont bg-white text-black"
    style="height: 4rem"
  >
    <div class="row items-center" style="height: 4rem">
      <div align="left" class="col">
        <a
          href="https://m.me/basam.serad.79"
          target="_blank"
          style="text-decoration: none"
        >
          <q-icon size="1.4rem" color="black" class="q-pl-sm bi bi-chat-fill">
          </q-icon>
        </a>
      </div>
      <div align="center" class="col-6"></div>
      <div align="right" class="col">
        <post-options />
      </div>
    </div>
  </q-footer>
</template>

<script lang="ts">
import { PostDto } from "src/services/rest-api";
import { Options, Vue } from "vue-class-component";
import { mapActions, mapState } from "vuex";

@Options({
  computed: {
    ...mapState("post", ["newPost"]),
  },
  methods: {
    ...mapActions("post", ["getPostById"]),
  },
})
export default class Post extends Vue {
  getPostById!: (id: any) => Promise<void>;
  newPost!: any;

  slide = 1;
  fullscreen = false;
  isStudent = true;

  post: PostDto = {
    description: "",
    fee: "",
    prvCR: false,
    prvKitchen: false,
    photos: "",
    title: "",
    date: 0,
    housingAddress: "",
    prfphoto: 0,
    url: 0,
    userID: 0
  };

  async mounted() {
    const postId = this.$route.params.id;
    await this.getPostById(postId);
    this.post = this.newPost;
    console.log(this.post);
  }

  async redirect(post: any) {
    console.log(post);
    const postID = post.userID;
    await this.$router.push(`/profile/${postID}`);
  }
}

</script>

<style>
.description-content {
  white-space: pre-line;
  font-size: small;
}
</style>
