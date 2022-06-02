import userService from "src/services/user.service";
import postService from "src/services/postform.service";
import { ActionTree } from "vuex";
import { StateInterface } from "../index";
import { PostStateInterface } from "./state";

const actions: ActionTree<PostStateInterface, StateInterface> = {
  async addPost(context, payload: any): Promise<any> {
    const result = await postService.create(payload);
    context.commit("setPost", result);
    return result
    await context.dispatch("getAllUser");
  },

  async editPost(context, payload: any): Promise<any> {
    const result = await postService.update(payload.id, payload);
    context.commit("updatePost", result);
    await context.dispatch("getAllPost");
    return result
  },

  async deletePost(context, user_id: number): Promise<any> {
    const result = await postService.delete(user_id);
    context.commit("deletePost", result);
  },

  async getAllPost(context): Promise<any> {
    const res = await postService.getAll();
    context.commit("getAllUser", res);
  },

  async getProfile(context): Promise<any> {
    const res = await userService.getUserProfile();
    context.commit("getProfile", res);
    return res;
  },

  async getPostById(context, id: number) {
    const res = await postService.getOnePostById(id);
    context.commit("getPostById", res);
  },
};

export default actions;
