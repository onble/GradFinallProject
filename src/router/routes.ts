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
        // 用户登录
        path: '/user_login',
        component: () => import('@/views/userLogin/index.vue'),
        name: 'userLogin', // 命名路由
        meta: {
            title: '用户登录', // 菜单路由
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
                    title: '辨别测试',
                    hidden: false,
                    icon: 'Operation',
                },
            },
            {
                path: '/test/findTest',
                component: () => import('@/views/TestView/findTest/index.vue'),
                name: 'FindTest',
                meta: {
                    title: '搜寻测试',
                    hidden: false,
                    icon: 'ZoomIn',
                },
            },
        ],
    },
    {
        path: '/record',
        component: () => import('@/layout/index.vue'),
        name: 'Record',
        meta: {
            title: '训练记录',
            hidden: false,
            icon: 'Histogram',
        },
        redirect: '/record/histroy',
        children: [
            {
                path: '/record/histroy',
                component: () =>
                    import('@/views/trainRecords/history/index.vue'),
                name: 'Acl',
                meta: {
                    title: '训练历史',
                    hidden: false,
                    icon: 'Postcard',
                },
            },
            {
                path: '/record/fourTest',
                component: () =>
                    import('@/views/trainRecords/fourTest/index.vue'),
                name: 'RFourTest',
                meta: {
                    title: '基础测试',
                    hidden: false,
                    icon: 'Discount',
                },
            },
            {
                path: '/record/classificationTest',
                component: () =>
                    import('@/views/trainRecords/ClassificationTest/index.vue'),
                name: 'RClassificationTest',
                meta: {
                    title: '辨别测试',
                    hidden: false,
                    icon: 'Operation',
                },
            },
            {
                path: '/record/findTest',
                component: () =>
                    import('@/views/trainRecords/findTest/index.vue'),
                name: 'RFindTest',
                meta: {
                    title: '搜寻测试',
                    hidden: false,
                    icon: 'ZoomIn',
                },
            },
        ],
    },
    {
        path: '/hub',
        component: () => import('@/layout/index.vue'),
        name: 'Hub',
        meta: {
            title: '相关知识',
            hidden: false,
            icon: 'Management',
        },
        redirect: '/hub/overview',
        children: [
            {
                path: '/hub/overview',
                component: () => import('@/views/Hub/Overview/index.vue'),
                name: 'Overview',
                meta: {
                    title: '脸盲症概述',
                    hidden: false,
                    icon: 'InfoFilled',
                },
            },
            {
                path: '/hub/diagnosis',
                component: () => import('@/views/Hub/Diagnosis/index.vue'),
                name: 'Diagnosis',
                meta: {
                    title: '诊断与症状',
                    hidden: false,
                    icon: 'Odometer',
                },
            },
            {
                path: '/hub/treatment',
                component: () => import('@/views/Hub/Treatment/index.vue'),
                name: 'Treatment',
                meta: {
                    title: '治疗方法',
                    hidden: false,
                    icon: 'Checked',
                },
            },
            {
                path: '/hub/resources',
                component: () => import('@/views/Hub/Resources/index.vue'),
                name: 'Resources',
                meta: {
                    title: '资源与支持',
                    hidden: false,
                    icon: 'Guide',
                },
            },
        ],
    },
    {
        path: '/xunzhan',
        component: () => import('@/views/modalWall/index.vue'),
        name: 'XunZhang',
        meta: {
            hidden: false,
            title: '勋章墙',
            icon: 'GoldMedal',
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
