import { mbalingApiService } from './mbaling-api.service';
import { HousingDto } from './rest-api';
import { DefaultApi } from './rest-api/api';

class HousingService extends DefaultApi {
  async addHousing(payload: HousingDto): Promise<HousingDto> {
    const response = await mbalingApiService.addHousingUnit(payload);
    return response.data;
  }
  async getAll(): Promise<HousingDto[]> {
    const response = await mbalingApiService.getHousingUnit();
    return response.data as unknown as HousingDto[];
  }

  async getHousingbyName(name: string): Promise<HousingDto> {
    const response = await mbalingApiService.getHousingName(name);
    return response.data;
  }

  async update(id: number, payload: any) {
    const response = await mbalingApiService.updateHousingname(id, payload);
    return response.data;
  }


}

const housingService = new HousingService();
export default housingService;
