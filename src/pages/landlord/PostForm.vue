<template>
  <q-page>
    <div
      class=" q-mt-md landscape"
      style="max-width: 100%; max-height: 100%"
    >
     <q-icon
     v-if="!images[0]"
      class="post-icon"
      size="5rem"
      color="grey"
      name="bi-image"
    />

    
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




      <!-- <q-img
        :src="imageData"
        class=""
        style="max-width: 100%; max-height: 100%"
      /> -->
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
          multiple
          class="file-input"
          ref="fileInput"
          type="file"
          @change="onFileChange"
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
      slide: ref(1)
    }
  },
  data() {
    return {
      title: "",
      fee: "",
      description: "",
      images: [],
    };
  },
  methods: {
    onFileChange(e) {
      const input = this.$refs.fileInput;
      const files = input.files;
      if (!files.length) return;
      this.createImage(files);
    },
    createImage(files) {
      var vm = this;
      for (var index = 0; index < files.length; index++) {
        var reader = new FileReader();
        reader.onload = function(event) {
          const imageUrl = event.target.result;
           vm.images.push(imageUrl);
        }
        reader.readAsDataURL(files[index]);
      }
    },
    removeImage(index) {
      this.images.splice(index, 1)
    },
     choosepicture() {
      this.$refs.fileInput.click();
    },
  }
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
.post-icon{
  margin-left: 40%;
  margin-top: 20%;

}
</style>
