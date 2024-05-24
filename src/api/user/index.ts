// 统一管理咱们项目用户相关的接口
import request from '@/utils/request';
import type {
    loginFormData,
    loginResponseData,
    userInfoReponseData,
} from './type';
// 项目用户相关的请求地址
enum API {
    user_login_URL = '/login_user',
    user_register_URL = '/user/register',
    user_info_URL = '/user/info',
    user_logout_URL = '/user/logout',
    LOGIN_URL = '/admin/acl/index/login',
    USERINFO_URL = '/admin/acl/index/info',
    LOGOUT_URL = '/admin/acl/index/logout',
}

// 登录接口
export const reqLogin = (data: loginFormData) =>
    request.post<any, loginResponseData>(API.LOGIN_URL, data);
// 获取用户信息
export const reqUserInfo = () =>
    request.get<any, userInfoReponseData>(API.USERINFO_URL);
// 退出登录
// 因为路由拦截器会加上Token，所以不需要手动添加Token
export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL);
// 登录接口
export const userLogin = (data) =>
    request.post<any, any>(
        API.user_login_URL +
            `?username=${data.username}&password=${data.password}`,
    );
// 注册接口
export const userRegister = (data) =>
    request.post(
        API.user_register_URL +
            `?account=${data.username}&password=${data.password}&repassword=${data.repassword}&invitation_code=${data.invitation_code}`,
    );
export const user_info = () => {
    try {
        const result = request.get(API.user_info_URL);
        return result;
    } catch (error) {
        console.log(error);
    }
};
export const user_logout = () => request.post<any, any>(API.user_logout_URL);
