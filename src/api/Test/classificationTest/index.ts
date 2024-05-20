import request from '@/utils/request';
enum API {
    // 请求题目的接口
    get_test_URL = '/classification_test/get_tests',
    // 存储记录的接口
    save_rocord_URL = '/classification_test/record',
}
// 获取题组的请求方法
export const getClassificationTestData = () => request.get(API.get_test_URL);
// 存储做题记录
export const saveClassificationTestRecords = (data) =>
    request.post(API.save_rocord_URL, data);
