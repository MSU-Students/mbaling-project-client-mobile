<template>
  <q-header style="height: 3rem; background-color: transparent">
    <q-toolbar>
      <q-btn
        class="q-px-none"
        color="black"
        flat
        icon="bi-arrow-left"
        :ripple="false"
        @click="$router.go(-1)"
      />
      <q-space />
      <q-btn
        class="q-mr-sm"
        size="sm"
        unelevated
        :ripple="false"
        color="primary"
        label="post"
        @click="onPost()"
      />
    </q-toolbar>
  </q-header>

  <q-page class="defaultfont text-black">
    <!-- POST PHOTO SECTION -->
    <div class="bg-secondary" style="height: 20rem">
      <div
        v-if="!images[0]"
        class="bg-transparent row items-center justify-evenly"
        style="height: 20rem"
      >
        <q-icon size="xl" color="grey" name="bi-image" />
      </div>
      <q-carousel
        v-else
        arrows
        class="bg-secondary"
        animated
        v-model="slide"
        navigation
        infinite
        style="max-width: 100%; max-height: 100%"
      >
        <q-carousel-slide
          v-for="(image, index) in images"
          :key="image"
          :name="index"
          :img-src="image"
        />
      </q-carousel>
    </div>

    <!-- UPLOAD AND CAMERA BUTTONS -->
    <div class="q-mt-sm q-mb-lg q-px-lg">
      <q-btn-group flat spread>
        <q-btn
          flat
          size="sm"
          class="defaultfont-bold"
          color="primary"
          label="Upload"
          icon="bi-image"
          @click="choosepicture"
        />
        <input
          hidden
          multiple
          class="file-input"
          ref="fileInput"
          type="file"
          @change="onFileChange"
        />
        <q-btn
          flat
          size="sm"
          class="defaultfont-bold"
          color="primary"
          label="Capture"
          icon="bi-camera"
        />
      </q-btn-group>
    </div>

    <!-- INPUT FIELDS -->
    <div class="q-mx-md">
      <q-input
        class="q-my-sm"
        filled
        dense
        autogrow
        v-model="postForm.title"
        placeholder="Title"
      />

      <div class="row q-my-sm">
        <q-input
          class="q-mr-md"
          filled
          dense
          v-model="postForm.fee"
          style="width: 50%"
          placeholder="Fee (MONTHLY)"
        />
        <q-checkbox
          dense
          v-model="negotiableBox"
          label="Negotiable"
          color="primary"
        />
      </div>

      <div class="column q-pl-lg q-mt-md">
        <q-checkbox
          class="q-mb-sm"
          dense
          v-model="pkBox"
          label="Private Kitchen"
          color="primary"
        />
        <q-checkbox dense v-model="pcBox" label="Private CR" color="primary" />
      </div>

      <q-input
        class="q-mt-md"
        v-model="postForm"
        filled
        type="textarea"
        placeholder="Description"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { PostInfo } from "src/store/postform/state";
import { Vue, Options } from "vue-class-component";

@Options({})
export default class PostForm extends Vue {
  declare $refs: {
    fileInput: HTMLInputElement;
  };
  postForm: PostInfo = {
    fullname: "",
    housingName: "",
    prfphoto: "",
    title: "",
    fee: "",
    likes: "",
    bookmarks: "",
    date: "",
    photo: [],
  };
  negotiableBox = false;
  pkBox = false;
  pcBox = false;
  slide = 1;
  title = "";
  fee = "";
  description = ``;
  images = [];

  onPost() {
    console.log(this.postForm);
  }

  onFileChange() {
    const input = this.$refs.fileInput;
    const files = input.files;
    if (files && !files.length) return;
    this.createImage(files);
  }

  createImage(files: FileList | null) {
    let vm = this;
    let uploadPic: FileReader;
    if (files) {
      for (var index = 0; index < files.length; index++) {
        var reader = new FileReader();
        reader.onload = function (event: Event) {
          const imageUrl = event.target as FileReader;
          vm.images.push(imageUrl.result as never);
        };
        reader.readAsDataURL(files[index]);
      }
      this.postForm!.photo = vm.images;
    } else {
      throw new Error("No available files");
    }
  }

  removeImage(index: number) {
    this.images.splice(index, 1);
  }

  choosepicture() {
    this.$refs.fileInput.click();
  }
}
</script>

<style>
img {
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  object-fit: contain;
}
</style>