// 创建四选一相关的小仓库
import { defineStore } from 'pinia';
// 创建用户小仓库
const fourTestStore = defineStore('FourTest', {
    // 小仓库存储数据地方
    state: (): fourTestStore => {
        return {
            test_record: {
                // 做题记录
                action: [],
                testGroupId: 0,
                tests: [],
                answerSeconds: 0,
            },
        };
    },
    // 异步|逻辑的地方
    actions: {
        // 初始化传入数据
        initData(rowData) {
            this.test_record.tests = rowData.tests;
            this.test_record.testGroupId = rowData.test_group_id;
        },
        // 增加行动记录
        addAction(action) {
            this.test_record.action.push(action);
        },
        // 重置 test_record
        resetTestRecord() {
            this.test_record = {
                action: [],
                test_group_id: 0,
                tests: [],
            };
        },
        setAnswerSeconds(seconds) {
            this.test_record.answerSeconds = seconds;
        },
    },
    getters: {},
});
// 对外暴露获取小仓库方法
export default fourTestStore;
