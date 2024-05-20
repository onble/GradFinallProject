<template>
    <div>
        <main>
            <div class="testBox">
                <h2 class="text-highlight">请根据AB人物进行分类</h2>
            </div>
            <aside>
                <section>
                    <BlankCharacterCard :character="classification_data.A">
                        <template v-slot:title>
                            <div class="title A">
                                {{ classification_data.A.name }}
                            </div>
                        </template>
                    </BlankCharacterCard>
                </section>
                <section>
                    <BlankCharacterCard :character="classification_data.B">
                        <template v-slot:title>
                            <div class="title B">
                                {{ classification_data.B.name }}
                            </div>
                        </template>
                    </BlankCharacterCard>
                </section>
            </aside>
            <section>
                <div class="items">
                    <BlankCharacterCardWithAnswer
                        v-for="(item, $index) in classification_data.tests"
                        @answer="(answer) => handleAnswer(item, answer)"
                        :key="$index"
                        class="item"
                        :character="item"
                        :done="done"
                    ></BlankCharacterCardWithAnswer>
                </div>
            </section>
            <div class="subButton">
                <el-button
                    :disabled="countAnswer != TestNumber"
                    type="primary"
                    size="default"
                    @click="nextTest"
                >
                    下一组题目
                </el-button>
            </div>
        </main>
        <Timer class="timer" ref="timerRef"></Timer>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BlankCharacterCard from '@/views/TestView/ClassificationTest/BlankCharacterCard.vue';
import BlankCharacterCardWithAnswer from '@/views/TestView/ClassificationTest/BlankCharacterCardWithAnswer.vue';
// const data = generateDatas(20);
import getData from '@/utils/generateData_fourTest';
import {
    getClassificationTestData,
    saveClassificationTestRecords,
} from '@/api/Test/classificationTest';
import { onMounted } from 'vue';
import { ElMessage } from 'element-plus';
// 引入计时器组件
import Timer from '@/components/Timer.vue';
import { watch } from 'vue';
const timerRef = ref(null);
let classification_data = ref(getData());
// 题组是否完成
let done = ref(false);
// 每页题目的数量
const TestNumber = 10;
// 记录答题个数
let countAnswer = ref(0);
// 记录正确的答题个数
let countAnswerRight = ref(0);
// let classification_data = ref({
//     A: {
//         id: 1,
//         image: 'public/face/范冰冰/6.jpg',
//         name: '范冰冰',
//     },
//     B: {
//         id: 1,
//         image: 'public/face/Angelagbaby/6.jpg',
//         name: 'Angelagbaby',
//     },
//     tests: [
//         {
//             id: 1,
//             image: 'public/face/Angelagbaby/7.jpg',
//             name: 'Angelagbaby',
//             answer: 'B',
//         },
//         {
//             id: 1,
//             image: 'public/face/范冰冰/1.jpg',
//             name: '范冰冰',
//             answer: 'A',
//         },
//         {
//             id: 1,
//             image: 'public/face/范冰冰/2.jpg',
//             name: '范冰冰',
//             answer: 'A',
//         },
//         {
//             id: 1,
//             image: 'public/face/Angelagbaby/2.jpg',
//             name: 'Angelagbaby',
//             answer: 'B',
//         },
//         {
//             id: 1,
//             image: 'public/face/Angelagbaby/8.jpg',
//             name: 'Angelagbaby',
//             answer: 'B',
//         },
//         {
//             id: 1,
//             image: 'public/face/Angelagbaby/4.jpg',
//             name: 'Angelagbaby',
//             answer: 'B',
//         },
//         {
//             id: 1,
//             image: 'public/face/范冰冰/4.jpg',
//             name: '范冰冰',
//             answer: 'A',
//         },
//         {
//             id: 1,
//             image: 'public/face/范冰冰/9.jpg',
//             name: '范冰冰',
//             answer: 'A',
//         },
//         {
//             id: 1,
//             image: 'public/face/Angelagbaby/1.jpg',
//             name: 'Angelagbaby',
//             answer: 'B',
//         },
//         {
//             id: 1,
//             image: 'public/face/范冰冰/3.jpg',
//             name: '范冰冰',
//             answer: 'A',
//         },
//     ],
// });
// let data_index = ref(0);
// const characters = ref(data[data_index.value]);
watch(countAnswer, (count) => {
    if (count == TestNumber) {
        // 停止定时器
        timerRef.value.stopTimer();
        // 存储消耗时间
        classification_data.value.answerSeconds =
            timerRef.value.getElapsedTime();
    }
});
watch(classification_data, () => {
    //开启定时器
    timerRef.value.startTimer();
});
function handleAnswer(item, reslut: boolean) {
    item.choose = reslut;
    if (reslut) {
        countAnswerRight.value = countAnswerRight.value + 1;
    }
    countAnswer.value = countAnswer.value + 1;
}
async function getClassificationData() {
    const reslut = await getClassificationTestData();
    if (reslut.code == 200) {
        classification_data.value = reslut.data.test;
    } else {
        ElMessage({ type: 'error', message: '网络错误,请检查服务器' });
        classification_data.value = getData();
    }
}
onMounted(() => {
    getClassificationData();
});
// 获取下一组题目
async function nextTest() {
    // 去发请求存储数据
    try {
        // 调用可能会返回被拒绝的 Promise 的函数
        let reslut = await saveClassificationTestRecords(
            classification_data.value,
        );
        if (reslut.code != 200) {
            ElMessage({ type: 'error', message: '存储进度失败' });
        }
    } catch (error) {
        // 处理被拒绝的 Promise
        console.error('出现问题:', error);
    }

    done.value = !done.value;
    // 更新数据
    getClassificationData();
    // 更新记录
    countAnswer.value = 0;
    countAnswerRight.value = 0;
}
</script>

<style lang="scss" scoped>
main {
    display: flex;
    flex-direction: row;
    justify-content: space-between; /* 确保左右两部分之间的间距 */
    height: calc(100vh - 100px);

    .testBox {
        padding: 8px 16px;
        background-color: rgb(235, 245, 255);
        border-radius: 8px;
        border-left: 5px solid rgb(64, 158, 255);
        margin: 20px 0;

        position: fixed; // 固定定位
        top: 10%; // 居中显示，与视口顶部的距离
        left: 60%; // 居中显示，与视口左侧的距离
        transform: translate(-50%, -50%); // 精确居中定位
        width: 40%; // 可以根据需要调整宽度
        text-align: center; // 文本居中
        z-index: 1000; // 确保文本浮于其他元素之上
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); // 文本框阴影
        /* 定义渐变背景颜色 */
        .text-highlight {
            font-size: 25px;
            border-radius: 5px; /* 使边角变得圆润 */
            // padding-bottom: 15px;
            padding: 15px 0;
            font-weight: 700;
            // border-bottom: 1px double rgba(52, 119, 164, 0.3);
            color: #212529;
        }
    }

    aside {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;

        section {
            flex: 1;
            .title {
                margin: 5px;
                background-color: #f0f0f0; /* 灰色背景 */
                border-radius: 15px; /* 四周圆角 */
                padding: 5px 15px; /* 内边距，使内容与边框之间有间隔 */
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 阴影效果 */
                text-align: center;
                &.A::before {
                    content: 'A:';
                    float: left; /* 使伪元素居左 */
                }
                &.B::before {
                    content: 'B:';
                    float: left; /* 使伪元素居左 */
                }
            }
        }
    }

    section {
        flex: 4; /* 右侧部分占据更多空间 */
        display: flex;
        flex-direction: row; /* 确保横向排列 */
        justify-content: space-between; /* 控制组件间的间距 */
        align-items: center; /* 确保组件在交叉轴上居中 */

        .items {
            display: flex;
            flex-direction: row; /* 确保横向排列 */
            justify-content: space-between; /* 控制组件间的间距 */
            align-items: center; /* 确保组件在交叉轴上居中 */
            .item {
                flex: 1; /* 确保每个组件占据相等空间 */
            }
        }
    }

    // 提交按钮
    .subButton {
        position: fixed; // 固定定位
        bottom: 5%; // 居中显示，与视口顶部的距离
        left: 60%; // 居中显示，与视口左侧的距离
        transform: translate(-50%, -50%); // 精确居中定位
        z-index: 1000;
    }
}
.timer {
    position: fixed;
    width: 220px;
    height: 50px;
    top: calc($base-tabbar-height + 10px);
    right: 30px;
    border: 1px solid #4caf50;
    border-radius: 5px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Arial', sans-serif;
    color: #333;
}
</style>
