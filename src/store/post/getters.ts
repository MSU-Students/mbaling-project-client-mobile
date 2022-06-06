import { GetterTree } from "vuex";
import { StateInterface } from "../index";
import { PostStateInterface } from "./state";

const getters: GetterTree<PostStateInterface, StateInterface> = {
  studentAccount(state) {
    return state.posts.filter((i) =>
      /^student$/i.test(i.description || '')
    );
  },
};

export default getters;
