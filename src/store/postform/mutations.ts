import { MutationTree } from 'vuex';
import { PostStateInterface, PostInfo } from './state';

const mutation: MutationTree<PostStateInterface> = {
  // someMutation (/* state: ExampleStateInterface */) {
  //   // your code
  // }
  addAccount (state, newPost:PostInfo) {
    state.posts.push(newPost);
  },
};

export default mutation;
