import { GetterTree } from "vuex";
import { StateInterface } from "../index";
import { PostStateInterface } from "./state";

const getters: GetterTree<PostStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
