<template>

  <div class="q-px-sm defaultfont">
    <div v-for="post in posts" :key="post" class="q-mb-sm q-pa-xs">
      <div v-for="userID in posts.userID" :key="userID" class="q-mb-sm q-pa-xs">
        <div v-if="post.prfphoto == userID">
        <q-img
          :src="`http://localhost:3000/media/${post.url}`"
          fit="cover"
          class="bg-primary"
          style="width: 100%; height: 16rem; border-radius: 0.5rem"
          @click="$router.push('/post')"
        >
          <div class="absolute-bottom text-left">
            <q-item-label lines="2" style="font-size: medium">
              {{ post.title }}
            </q-item-label>
          </div>
        </q-img>


      <div class="q-my-xs q-px-xs row items-center">
        <div class="col">
          <span class="defaultfont-light text-bold" style="font-size: small">
            Posted on {{ post.date }}
          </span>
        </div>
        <div align="right" class="col-6">
          <q-btn
            label="Edit"
            unelevated
            rounded
            no-caps
            color="primary"
            class="text-center text-caption"
            style="width: 4rem"
            @click="$router.push('/post/edit')"
          />
          <q-btn
            label="Trash"
            unelevated
            rounded
            outline
            no-caps
            color="primary"
            class="q-ml-sm text-center text-caption"
            style="width: 4rem"
            @click="confirmDelete()"
          />
        </div>
      </div>
      </div>
      </div>
</div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { PostInterface } from "src/store/post/state";
import { mapActions, mapState } from "vuex";
import { PostDto } from "src/services/rest-api";
import { AUser } from "src/store/auth/state";
import { MediaInterface } from "src/store/media-module/state";

@Options({
  computed: {
    ...mapState("post", ["posts"]),
    ...mapState("media", ["allMedia"]),
    ...mapState('auth', ['currentUser']),
  },
  methods: {
    ...mapActions('post', ['getAllPost']),
    ...mapActions('media', ['getAllMedia']),
    ...mapActions('auth', ['authUser']),
  },
})
export default class PostPageComponent extends Vue {
  getAllPost! : () => Promise<void>
  authUser! : () => Promise<void>
  posts!: PostDto[];
  allMedia!: MediaInterface[];
  currentUser!: AUser


  async mounted() {
    await this.getAllPost();
    await this.authUser()
  }

  confirmDelete() {
    this.$q.dialog({
      title: "Confirm Delete",
      message: "Are you sure you want to delete this conversation?",
      cancel: true,
      persistent: true,
      class: "defaultfont",
    });
  }
}
</script>
