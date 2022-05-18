import { MutationTree } from "vuex";
import { HousingStateInterface } from "./state";

const mutation: MutationTree<HousingStateInterface> = {
  setNewHousing(state, payload) {
    state.newHousing = payload;
  },
  editHousing(state, payload) {
    state.newHousing = payload;
  },

  deleteHousing(state, payload) {
    state.allHousing.push(payload);
  },

  getAllHousing(state, payload) {
    state.allHousing = [];
    state.allHousing.push(...payload);
  },

  getOneHousing(state, payload) {
    state.allHousing = payload;
  },

  getProfile(state, payload) {
    state.allHousing = payload;
  },
};

export default mutation;
