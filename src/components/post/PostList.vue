<template>
  <div class="q-px-sm defaultfont">
    <div v-for="post in posts" :key="post.id" class="q-mb-sm q-pa-xs">
      <div v-for="photo in post.photos" :key="photo.id">
        <q-img
          v-if="photo.id === 1"
          :src="photo.url"
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
      </div>

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
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { PostInterface } from "src/store/post/state";
import { mapState } from "vuex";

@Options({
  computed: {
    ...mapState("posts", ["posts"]),
  },
})
export default class PostPageComponent extends Vue {
  posts!: PostInterface[];

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
