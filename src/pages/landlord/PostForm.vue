<template>
  <q-page>
    <div
      class="bg-grey-4 q-mt-md landscape"
      style="max-width: 100%; max-height: 100%"
    >
      <q-img
        :src="imageData"
        class=""
        style="max-width: 100%; max-height: 100%"
      />
    </div>

    <div class="q-mt-xs">
      <q-btn-group outline spread>
        <q-btn
          flat
          color="primary"
          label="Upload Picture"
          icon="image"
          @click="choosepicture"
        />
        <input
          hidden
          class="file-input"
          ref="fileInput"
          type="file"
          @input="onSelectFile"
        />
        <q-btn flat color="primary" label="Capture" icon="camera" />
      </q-btn-group>
    </div>

    <div>
      <q-input 
      autogrow
      class="q-mx-md" 
      v-model="title" 
      label="Title" />

      <q-input 
      class="q-mx-md"
      prefix="₱" 
      v-model="fee" 
      label="Fee" />

      <div class="q-pa-md" style="max-width:100%">
        <q-input
          v-model="description"
          filled
          type="textarea"
          label="Description"
        />
      </div>
    </div>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn label="post" icon-right="send" color="primary" />
    </q-page-sticky>
  </q-page>
</template>

<script>
export default {
  name: "",

  data() {
    return {
      title: "",
      fee: "",
      description: "",
      imageData: null,
    };
  },
  methods: {
    onSelectFile() {
      const input = this.$refs.fileInput;
      const files = input.files;
      this.FileImage = files[0];
      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(files[0]);
        this.$emit("input", files[0]);
      }
    },
    choosepicture() {
      this.$refs.fileInput.click();
    },
  },
};
</script>

<style>
.landscape {
  height: 15rem;
  width: 23.4rem;
}
img {
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  object-fit: contain;
}
</style>
