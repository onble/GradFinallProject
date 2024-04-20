// SPU管理模块的接口
import request from '@/utils/request';
import { HasSpuResponseData } from './type';
enum API {
    // 获取已有的SPU的数据
    HASSPU_URL = '/admin/product/',
}
// 获取某一个三级分类下已有的SPU数据
export const reqHasSpu = (
    page: number,
    limmit: number,
    category3Id: string | number,
) =>
    request.get<any, HasSpuResponseData>(
        API.HASSPU_URL + `${page}/${limmit}?category3Id=${category3Id}`,
    );
