import { mbalingApiService } from './mbaling-api.service';
import { MediaDto } from './rest-api';
import { DefaultApi } from './rest-api/api';

class MediaService extends DefaultApi {
  async getPicture(id: number): Promise<MediaDto> {
    const response = await mbalingApiService.getMedia(id);
    return response.data;
  }

  async uploadPicture(file: File[]): Promise<MediaDto> {
    const response = await mbalingApiService.uploadMedia(file);
    return response.data;
  }

  async getAll(): Promise<MediaDto[]> {
    const response = await mbalingApiService.getAllMedia();
    return response.data as unknown as MediaDto[];
  }

}

const mediaService = new MediaService();
export default mediaService;
