import request from '@/utils/request';
enum API {
    // 请求题目的接口
    get_history_page_URL = '/trainRecords/classificationTest/pages',
}
export const classificationHistory = (page, items) =>
    request.get(API.get_history_page_URL + `?page=${page}&items=${items}`);
