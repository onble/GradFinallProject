// 对外暴露配置路由(常量路由)
export const constantRoute = [
    {
        // 登录
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        name: 'login', // 命名路由
        meta: {
            title: '登录', // 菜单路由
            hidden: true, // 代表路由标题再菜单中是否隐藏 true：隐藏 false：不隐藏
            icon: 'Promotion', // 菜单文字左侧的图标，支持element-plus全部图标
        },
    },
    {
        // 登录成功以后展示数据的路由
        path: '/',
        component: () => import('@/layout/index.vue'),
        name: 'layout',
        meta: {
            title: '',
            hidden: false,
            icon: '',
        },
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: () => import('@/views/home/index.vue'),
                meta: {
                    title: '首页',
                    hidden: false,
                    icon: 'HomeFilled',
                },
            },
        ],
    },
    {
        path: '/404',
        component: () => import('@/views/404/index.vue'),
        name: '404',
        meta: {
            title: '404',
            hidden: true,
            icon: 'DocumentDelete',
        },
    },
    {
        path: '/screen',
        component: () => import('@/views/screen/index.vue'),
        name: 'Screen',
        meta: {
            hidden: false,
            title: '数据分析',
            icon: 'Platform',
        },
    },
    {
        path: '/test',
        component: () => import('@/layout/index.vue'),
        name: 'Test',
        meta: {
            title: '练习',
            icon: 'Aim',
        },
        redirect: '/test/fourTest',
        children: [
            {
                path: '/test/fourTest',
                component: () => import('@/views/TestView/fourTest/index.vue'),
                name: 'FourTest',
                meta: {
                    title: '基础测试',
                    hidden: false,
                    icon: 'Discount',
                },
            },
            {
                path: '/test/classificationTest',
                component: () =>
                    import('@/views/TestView/ClassificationTest/index.vue'),
                name: 'ClassificationTest',
                meta: {
                    title: '分类测试',
                    hidden: false,
                    icon: 'Operation',
                },
            },
        ],
    },
    {
        path: '/acl',
        component: () => import('@/layout/index.vue'),
        name: 'Acl',
        meta: {
            title: '训练记录',
            hidden: false,
            icon: 'Lock',
        },
        redirect: '/acl/user',
        children: [
            {
                path: '/acl/user',
                component: () => import('@/views/acl/user/index.vue'),
                name: 'Acl',
                meta: {
                    title: '用户管理',
                    hidden: false,
                    icon: 'User',
                },
            },
            {
                path: '/acl/role',
                component: () => import('@/views/acl/role/index.vue'),
                name: 'Role',
                meta: {
                    title: '角色管理',
                    hidden: false,
                    icon: 'UserFilled',
                },
            },
            {
                path: '/acl/permission',
                component: () => import('@/views/acl/permission/index.vue'),
                name: 'Permission',
                meta: {
                    title: '菜单管理',
                    hidden: false,
                    icon: 'Monitor',
                },
            },
        ],
    },
    {
        path: '/product',
        component: () => import('@/layout/index.vue'),
        name: 'Product',
        meta: {
            title: '相关知识',
            icon: 'Goods',
            hidden: false,
        },
        redirect: '/product/trademark',
        children: [
            {
                path: '/product/trademark',
                component: () => import('@/views/product/trademark/index.vue'),
                name: 'Trademark',
                meta: {
                    title: '品牌管理',
                    icon: 'ShoppingCartFull',
                },
            },
            {
                path: '/product/attr',
                component: () => import('@/views/product/attr/index.vue'),
                name: 'Attr',
                meta: {
                    title: '属性管理',
                    icon: 'ChromeFilled',
                },
            },
            {
                path: '/product/spu',
                component: () => import('@/views/product/spu/index.vue'),
                name: 'Spu',
                meta: {
                    title: 'SPU管理',
                    icon: 'Calendar',
                },
            },
            {
                path: '/product/sku',
                component: () => import('@/views/product/sku/index.vue'),
                name: 'Sku',
                meta: {
                    title: 'SKU管理',
                    icon: 'Orange',
                },
            },
        ],
    },
    {
        path: '/xunzhan',
        component: () => import('@/views/screen/index.vue'),
        name: 'XunZhang',
        meta: {
            hidden: false,
            title: '勋章墙',
            icon: 'Platform',
        },
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        name: 'Any',
        meta: {
            title: '任意路由',
            hidden: true,
            icon: 'DataLine',
        },
    },
];
