import request from '@/utils/request';
enum API {
    // 请求题目的接口
    get_test_URL = '/four_test/get_tests',
}
// 获取题组的请求方法
export const getTest = () => request.post(API.get_test_URL);
