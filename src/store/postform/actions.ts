import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { PostStateInterface, PostInfo } from './state';

const actions: ActionTree<PostStateInterface, StateInterface> = {
  // someAction (/* context */) {
  //   // your code
  // }
  newAccount (context, newPost:PostInfo) {
    // call your server API
    context.commit ('addPost', newPost);
  }
};

export default actions;
