import { MutationTree } from "vuex";
import { PostStateInterface } from "./state";

const mutation: MutationTree<PostStateInterface> = {
  setAccount(state, payload) {
    state.newPost = payload;
  },
  updateAccount(state, payload) {
    state.newPost = payload;
  },
  deleteAccount(state, payload) {
    state.posts.push(payload);
  },

  getAllUser(state, payload) {
    state.posts = [];
    state.posts.push(...payload);
  },

  getOneUser(state, payload) {
    state.posts = payload;
  },

  getProfile(state, payload) {
    state.posts = payload;
  },
};

export default mutation;
