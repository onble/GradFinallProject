import request from '@/utils/request';
enum API {
    // 请求题目的接口
    get_history_page_URL = '/trainRecords/history/pages',
    // 存储记录的接口
    save_rocord_URL = '/four_test/record',
}
// 获取题组的请求方法
export const getTest = () => request.post(API.get_test_URL);
// 存储做题记录
export const saveRecords = (data) => request.post(API.save_rocord_URL, data);
export const trainHistory = (page, items) =>
    request.get(API.get_history_page_URL + `?page=${page}&items=${items}`);
