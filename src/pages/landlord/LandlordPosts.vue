<template>
  <page-header />
  <q-page class="defaultfont bg-secondary">
    <div class="q-pt-sm" />
    <post-card v-for="post in posts" :key="post.date">
      <template #photo>
        <div v-for="photo in post.photos" :key="photo.id">
          <q-img
            v-if="photo.id === 1"
            :src="photo.url"
            fit="cover"
            style="height: 15rem"
          >
            <div class="absolute-bottom text-left">
              <q-item-label lines="2" style="font-size: medium">
                {{ post.title }}
              </q-item-label>
            </div>
          </q-img>
        </div>
      </template>
      <template #button-left>
        <q-btn
          label="Edit"
          :ripple="false"
          dense
          flat
          @click="$router.push('/post')"
        />
      </template>
      <template #button-right>
        <q-btn
          label="Delete"
          :ripple="false"
          dense
          flat
          @click="confirmDelete()"
        />
      </template>
    </post-card>
  </q-page>
</template>

<script lang="ts">
import { PostInterface } from "src/store/post/state";
import { Vue, Options } from "vue-class-component";
import { mapState } from "vuex";

@Options({
  computed: {
    ...mapState("posts", ["posts"]),
  },
})
export default class LandlordPosts extends Vue {
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
