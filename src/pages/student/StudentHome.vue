<template>
  <page-header />
  <q-page class="defaultfont bg-secondary">
    <!-- POST COMPONENT -->
    <post v-for="post in posts" :key="post.date">
      <template #prfphoto>
        <q-img :src="post.prfphoto" @click="$router.push('/profile')" />
      </template>
      <template #fullname>
        <span @click="$router.push('/profile')">
          {{ post.firstname }} {{ post.middlename.charAt(0) }}.
          {{ post.lastname }}
        </span>
      </template>
      <template #housingName>
        <span @click="$router.push('/profile')">
          {{ post.housingName }}
        </span>
      </template>
      <template #date> {{ post.date }} </template>
      <template #photo>
        <div v-for="photo in post.photos" :key="photo.id">
          <q-img
            v-if="photo.id === 1"
            :src="photo.url"
            fit="cover"
            style="height: 15rem"
          />
        </div>
      </template>
      <template #title> {{ post.title }} </template>
      <template #fee> {{ post.fee }} </template>
      <template #buttons>
        <q-btn
          label="Chat"
          :ripple="false"
          dense
          flat
          @click="$router.push('/chat')"
        />
        <q-btn
          label="Expand"
          :ripple="false"
          dense
          flat
          @click="$router.push('/post')"
        />
      </template>
    </post>

    <!-- NO POSTS WARNING -->
    <div class="row items-center justify-evenly" style="height: 7.5rem">
      <q-spinner color="primary" size="3em" />
    </div>
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
export default class StudentHome extends Vue {
  posts!: PostInterface[];
}
</script>
