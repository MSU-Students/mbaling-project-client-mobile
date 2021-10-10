<template>
  <q-page>
    <div
      class="bg-secondary q-mt-md landscape"
      style="max-width: 100%; max-height: 100%"
    >
      <q-img
        :src="imageData"
        class=""
        style="max-width: 100%; max-height: 100%"
      />
    </div>

    <div class="q-mt-xs q-px-lg">
      <q-btn-group outline spread>
        <q-btn
          class="text-subtitle2"
          flat
          color="primary"
          label="Upload"
          icon="bi-image"
          @click="choosepicture"
        />
        <input
          hidden
          class="file-input"
          ref="fileInput"
          type="file"
          @input="onSelectFile"
        />
        <q-btn flat color="primary" label="Capture" icon="bi-camera" />
      </q-btn-group>
    </div>

    <div>
      <q-input 
      class="q-ma-md " 
      filled
      dense
      autogrow     
      v-model="title" 
      label="Title"/>

      <div class="row">
      <q-input 
      filled
      dense
      class="q-mx-md"
      prefix="₱" 
      v-model="fee" 
      style="width:50%"
      label="Fee" />

      <q-checkbox dense v-model="negotiableBox" label="Negotiable" color="primary" />

      </div>
      <div class="column q-pl-lg q-ma-sm">
       <q-checkbox 
       class="q-mb-sm" 
       dense 
       v-model="pkBox" 
       label="Private Kitchen" 
       color="primary" />

        <q-checkbox 
        dense 
        v-model="pcBox" 
        label="Private CR" 
        color="primary" />
      </div>
      
        <q-input
         class="q-pa-md"
          v-model="description"
          filled
          type="textarea"
          label="Description"
        />
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "",

 setup () {
    return {
      negotiableBox: ref(false),
      pkBox: ref(false),
      pcBox: ref(false),
    }
  },
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
