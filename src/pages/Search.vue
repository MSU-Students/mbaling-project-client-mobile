<template>
  <q-header class="bg-white text-black q-pa-md">
    <q-input
      :loading="loadingState"
      square
      filled
      dense
      v-model="search"
      type="search"
      placeholder="Search"
    >
      <template v-slot:prepend>
        <q-btn flat round size="0.7rem">
          <q-icon size="1.5rem" name="search" />
        </q-btn>
      </template>
    </q-input>
  </q-header>

  <q-page class="text-black row items-center justify-evenly">
    <h1>SEARCH</h1>
  </q-page>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { ref } from "vue";

export default class Search extends Vue {
  search = "";
  loadingState = false;
}
</script>
