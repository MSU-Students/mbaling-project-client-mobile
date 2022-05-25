import housingService from 'src/services/housing.service';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { HousingStateInterface } from './state';

const actions: ActionTree<HousingStateInterface, StateInterface> = {
  async addHousing(context, payload: any) {
    const result = await housingService.addHousing(payload);
    context.commit('setNewHousing', result);
    return result;
  },

  async getAllHousing(context): Promise<any> {
    const res = await housingService.getAll();
    context.commit('getAllHousing', res);
  },
  async getOneHousing(context, payload: any): Promise<any> {
    console.log('GetOneHousing Action here')
    const res = await housingService.getHousingbyName(payload);
    console.log(payload.id)
    console.log(res)
    console.log('GetOneHousing Action here 2')
    context.commit('getOneHousing', res);
  },

  async editHousingName(context, payload: any): Promise<any> {
    await housingService.update(payload.id, payload);
    console.log('edit housing here 2')
    await context.dispatch('updateHousing');
  },

};

export default actions;
