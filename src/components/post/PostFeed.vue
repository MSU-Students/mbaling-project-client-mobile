<template>
  <div class="q-px-sm defaultfont row items-start">
    <div
      v-for="post in posts"
      :key="post.id"
      class="q-pa-xs"
      style="width: 50%"
    >
      <div>
        <q-img
          :src="post.photos"
          fit="cover"
          class="bg-primary"
          style="width: 100%; height: 18rem; border-radius: 0.5rem"
          @click="$router.push('/post')"
        >
          <div class="absolute-bottom text-left">
            <q-item-label lines="2" style="font-size: medium">
              {{ post.title }}
            </q-item-label>
          </div>
        </q-img>
      </div>

      <div class="q-my-xs q-px-xs row items-center">
        <div class="col-9">
          <q-item-label lines="1" class="defaultfont-semibold">
            <q-avatar size="sm" class="bg-primary">
              <q-img :src="post.prfphoto" />
            </q-avatar>
            <span class="q-ml-sm" style="font-size: small">
              {{ post.housingAddress }}
            </span>
          </q-item-label>
        </div>
        <div align="right" class="col">
          <post-options />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { PostInterface } from "src/store/post/state";
import { mapActions, mapState } from "vuex";

@Options({
  computed: {
    ...mapState("post", ["posts"]),
  },
  methods: {
    ...mapActions('post', ['getAllPost']),
  },
})
export default class PostFeedComponent extends Vue {
  getAllPost! : () => Promise<void>
  posts!: PostInterface[];

  async mounted() {
    await this.getAllPost();
  }
}
</script>
