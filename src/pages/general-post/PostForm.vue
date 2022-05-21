<template>
  <q-page class="defaultfont text-black">
    <div class="bg-black" style="height: 20rem">
      <div
        class="bg-grey-4 row items-center justify-evenly"
        style="height: 100%; border-radius: 2rem 2rem 0 0"
      >
        <q-icon name="bi-image" size="8rem" color="grey" />
      </div>
    </div>

    <!-- <div align="right" class="q-px-md q-py-sm row items-center">
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
    </div> -->

<!-- Upload Picture -->
    <div class="row">
    <div class="col">
       <q-file
        class="q-pr-lg text-primary"
        outlined
        label="Upload"
        accept=".jpg, image/*"
        v-model="imageAttachement"
        item-aligned
        style="width: 13rem;"
      >
        <template v-slot:prepend>
          <q-icon name="album" />
        </template>
      </q-file>
    </div>
    <div class="col">
      <q-file
        class="q-pr-lg text-primary"
        outlined
        disable
        label="Capture"
        accept=".jpg, image/*"
        item-aligned
        style="width: 13rem;"
        @click="alert()"
      >
        <template v-slot:prepend>
          <q-icon name="camera" />
        </template>
      </q-file>
    </div>
    </div>
<!--  -->

    <div class="q-mt-sm q-px-md">
      <q-input
        v-model="inputPost.title"
        filled
        dense
        type="text"
        placeholder="Title"
        input-class="text-on-left"
        style="font-size: medium"
      />
      <div class="row">
        <div class="col">
      <q-input
        class="q-mt-sm"
        v-model="inputPost.fee"
        prefix="P"
        dense
        filled
        type="number"
        placeholder="Monthly Fee"
        input-class="text-on-left"
        style="font-size: medium"
      />
      </div>
      <div class="col q-pt-sm q-pl-sm">
          <q-checkbox
            label="Negotiable"
            v-model="inputPost.Negotiable"
            color="primary"
            style="font-size: medium"
          />
      </div>
      </div>

        <div class="q-pt-md q-pl-lg">
          <q-checkbox
            label="Private Kitchen"
            v-model="inputPost.prvKitchen"
            color="primary"
            style="font-size: medium"
            dense
          />
        </div>
        <div class="q-pt-md q-pl-lg">
          <q-checkbox
            label="Private CR"
            v-model="inputPost.prvCR"
            color="primary"
            style="font-size: medium"
            dense
          />
        </div>

      <q-input
        v-model="inputPost.description"
        type="textarea"
        filled
        placeholder="Description"
        class="q-mt-md q-pb-lg"
        style="font-size: md;"
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
import { Options, Vue } from "vue-class-component";
import { mapState, mapActions } from "vuex";

@Options({
  computed: {
    ...mapState("post", ["posts"]),
    ...mapState("auth", ["currentUser"]),
  },
  methods: {
    ...mapActions("post", ["addPost"]),
    ...mapActions("auth", ["authUser"]),
    ...mapActions("media", ["uploadMedia"]),
  },
})
export default class PostForm extends Vue {
  uploadMedia!: (payload: File) => Promise<MediaDto>;
  addPost!: (payload: PostDto) => Promise<void>;
  authUser!: () => Promise<void>;

  currentUser!: AUser;

  async mounted() {
    await this.authUser();
  }

  pkBox = false;
  pcBox = false;
  showClearBtn = false;
  addnewPost = false;
  model = "";
  imageAttachement: File[] | File = [];

  inputPost: any = {
    description: ``,
    fee: "",
    Negotiable: false,
    prvCR: false,
    prvKitchen: false,
    photos: "https://cdn.quasar.dev/img/quasar.jpg",
    title: "",
    date: 0,
    housingAddress: "",
    prfphoto: 0,
    url: 0,
    landlordID: 0,
  };

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
      landlordID: 0,
    };
  }

  async createPost() {
    const media = await this.uploadMedia(this.imageAttachement as File);
    await this.addPost({
      ...this.inputPost,
      prfphoto: this.currentUser.prfphoto || this.inputPost.prfphoto,
      userID: this.currentUser.id,
      url: media.id,
    });
    this.addnewPost = false;
    this.$q.notify({
      type: "positive",
      message: "Successfully Adeded.",
    });
  }

  alert() {
    this.$q.dialog({
      message: "This feature is not available yet.",
      class: "defaultfont",
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
