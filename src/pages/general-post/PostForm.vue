<template>
  <q-page class="defaultfont text-black">
    <div class="bg-black" style="height: 20rem">
      <div
        class="bg-grey-4 row items-center justify-evenly"
        style="height: 100%; border-radius: 2rem 2rem 0 0"
      >
        <q-icon name="bi-image" size="xl" color="grey" />
      </div>
    </div>

    <div align="right" class="q-px-md q-py-sm row items-center">
      <div class="col">
        <q-btn
          v-on:click="showClearBtn = !showClearBtn"
          label="Upload"
          unelevated
          rounded
          no-caps
          color="primary"
          class="q-ml-sm text-center"
          style="height: 2rem"
        />

        <Transition name="appear">
          <q-btn
            v-show="showClearBtn"
            icon="bi-x-circle"
            flat
            dense
            :ripple="false"
            size="md"
            class="q-ml-sm text-primary"
          />
        </Transition>
      </div>
    </div>
 <div class="col">
                      <q-file
                        outlined
                        label="Upload Image"
                        accept=".jpg, image/*"
                        v-model="imageAttachement"
                      >
                        <template v-slot:prepend>
                          <q-icon name="camera" />
                        </template>
                      </q-file>
                    </div>
    <div class="q-mt-sm q-px-md">
      <q-input
        v-model="inputPost.title"
        autogrow
        dense
        type="text"
        placeholder="Title"
        input-class="text-center"
        style="font-size: medium"
      />
      <q-input
        v-model="inputPost.fee"
        dense
        type="number"
        placeholder="Monthly Fee"
        input-class="text-center"
        class="q-mt-xs q-px-xl"
        style="font-size: medium"
      />

      <div class="q-px-md q-mt-md row items-center">
        <div align="center" class="col">
          <q-checkbox
            label="Private Kitchen"
            v-model="inputPost.prvKitchen"
            dense
            color="primary"
          />
        </div>
        <div align="center" class="col">
          <q-checkbox
            label="Private CR"
            v-model="inputPost.prvCR"
            dense
            color="primary"
          />
        </div>
      </div>

      <q-input
        v-model="inputPost.description"
        type="textarea"
        placeholder="Description"
        class="q-mt-md q-pb-lg"
        style="font-size: small"
      />
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
    class="q-px-md defaultfont bg-white row items-center"
    style="height: 4rem"
  >
    <div align="right" class="col">
      <q-btn
        label="Post"
        unelevated
        rounded
        no-caps
        color="primary"
        style="height: 3rem; width: 5rem"
        @click="createPost()"
      />

    </div>
  </q-footer>
</template>

<script lang="ts">
import { QFile } from "quasar";
import { MediaDto, PostDto } from "src/services/rest-api";
import { AUser } from "src/store/auth/state";
import { Options, Vue,} from "vue-class-component";
import { mapState, mapActions } from "vuex";


@Options({
  computed: {
    ...mapState("post", ["posts"]),
    ...mapState('auth', ['currentUser']),
  },
  methods: {
    ...mapActions('post', ['addPost']),
    ...mapActions('auth', ['authUser']),
    ...mapActions('media', ['uploadMedia']),
  },
})

export default class PostForm extends Vue {

  uploadMedia!: (payload: File) => Promise<MediaDto>;
  addPost!: (payload: PostDto) => Promise<void>;
  authUser! : () => Promise<void>

  currentUser!: AUser

  async mounted() {
    await this.authUser();
  }

  pkBox = false;
  pcBox = false;
  showClearBtn = false;
  addnewPost = false;
  model = ""
  imageAttachement: File[] | File = [];


  inputPost: any ={
    description: ``,
    fee: "",
    prvCR: false,
    prvKitchen: false,
    photos: "https://cdn.quasar.dev/img/quasar.jpg",
    title: "",
    date: 0,
    housingAddress: "",
    prfphoto: 0,
    url: 0,
    landlordID: 0
  }

  async resetModel() {
    this.inputPost = {
    description: ``,
    fee: "",
    prvCR: false,
    prvKitchen: false,
    photos: "",
    title: "",
    date: 0,
    housingAddress: "",
    prfphoto: "",
    url: 0,
    landlordID: 0

    };
  }

  async createPost() {
   const media = await this.uploadMedia(this.imageAttachement as File);
   await this.addPost({...this.inputPost,
                  prfphoto: this.currentUser.prfphoto,
                  userID: this.currentUser.id,
                  url: media.id});
    this.addnewPost = false;
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Adeded.',
    });
  }

}
</script>

<style>
.appear-enter-active {
  animation: bounce-in 0.5s;
}
.appear-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
