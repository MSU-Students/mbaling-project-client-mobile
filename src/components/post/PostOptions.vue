<template>
  <q-btn
    icon="bi-three-dots"
    :ripple="false"
    dense
    flat
    class="text-black"
    @click="showOptions()"
  />
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class PostOptionsComponent extends Vue {
  showOptions() {
    this.$q
      .bottomSheet({
        grid: false,
        class: "q-px-sm q-py-md defaultfont",
        actions: [
          {
            label: "Report post",
            icon: "bi-flag",
          },
          {
            label: "Copy link",
            icon: "bi-link-45deg",
          },
        ],
      })
      .onOk(() => {
        // console.log('Action chosen:', action.id)
      })
      .onCancel(() => {
        // console.log('Dismissed')
      })
      .onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      });
  }
}
</script>
