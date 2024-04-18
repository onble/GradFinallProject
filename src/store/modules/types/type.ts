import { CategoryObj } from '@/api/product/attr/type';
import { RouteRecordRaw } from 'vue-router';
// 定义小仓库数据state类型
export interface UserState {
    token: string | null;
    menuRoutes: RouteRecordRaw[];
    username: string;
    avatar: string;
}

// 定义分类仓库state对象的ts类型
export interface CategoryState {
    c1Id: string | number;
    c1Arr: CategoryObj[];
}
