<!-- src/views/CharacterSelection.vue -->
<template>
    <el-container>
        <el-row>
            <div class="testBox">
                <h2 class="text-highlight">
                    请在下面四张图片中，选出一个与其他三张图片，不是同一个人的图片。
                </h2>
            </div>
        </el-row>
        <el-row justify="center">
            <el-col
                v-for="(character, index) in characters"
                :key="index"
                :span="6"
            >
                <CharacterCard
                    :character="character"
                    @chooseTrue="chooseTrue(character)"
                    :done="done"
                />
            </el-col>
        </el-row>
        <el-row justify="center">
            <el-col :span="3" :offset="0">
                <el-button
                    round
                    type="primary"
                    size="large"
                    @click="previousTest"
                    :disabled="data_index <= 0 || isDisabled"
                >
                    <el-icon>
                        <ArrowLeft />
                    </el-icon>
                    上一个
                </el-button>
            </el-col>
            <el-col :span="3" :offset="0">
                <el-button
                    round
                    :disabled="isDisabled"
                    :type="buttonType"
                    size="large"
                    @click="nextTest()"
                >
                    下一个
                    <el-icon>
                        <ArrowRight />
                    </el-icon>
                </el-button>
            </el-col>
        </el-row>
        <Timer class="timer" ref="timerRef"></Timer>
    </el-container>
</template>

<script setup>
import { ref } from 'vue';
import CharacterCard from '@/views/TestView/fourTest/CharacterCard.vue';
// import generateDatas from '@/utils/generateData';
import { ElMessage } from 'element-plus';
import { onMounted } from 'vue';
import { getTest, saveRecords } from '@/api/Test/fourTest';
import useFourTestStore from '@/store/modules/fourTest.ts';
import { watch } from 'vue';
// 引入计时器组件
import Timer from '@/components/Timer.vue';
const isDisabled = ref(true); // 控制按钮是否禁用
const buttonType = ref('danger'); // 控制按钮的类型
const done = ref(false);
// let data = generateDatas(20);
// 从网络获取数据
let data = undefined;
let fourTestStore = useFourTestStore();
let data_index = ref(0);
const timerRef = ref(null);
const characters = ref(null);
watch(characters, () => {
    fourTestStore.initData(data[data_index.value]);
    //开启定时器
    timerRef.value.startTimer();
});
function clearInfo() {
    done.value = false;
    // 更改按钮的状态
    buttonType.value = 'danger';
    isDisabled.value = true;
}
async function save_records(records) {
    const result = await saveRecords(records);
    if (result.code != 200) {
        ElMessage({ type: 'error', message: result.message });
    }
}
function nextTest() {
    // 去发请求进行记录
    const records = fourTestStore.test_record;
    fourTestStore.resetTestRecord();
    save_records(records);
    clearInfo();
    if (data_index.value < data.length - 1) {
        data_index.value = data_index.value + 1;
        characters.value = data[data_index.value].tests;
    } else {
        ElMessage({
            type: 'warning',
            message: '开启新的一组题目',
        });
        generateData();
        data_index.value = 0;
    }
}
function chooseTrue() {
    // 处理选中逻辑
    done.value = true;

    // 更改按钮的状态
    buttonType.value = 'success';
    isDisabled.value = false;
    // 停止定时器
    timerRef.value.stopTimer();
    // 存储消耗时间
    fourTestStore.setAnswerSeconds(timerRef.value.getElapsedTime());
}
function previousTest() {
    clearInfo();
    data_index.value = data_index.value - 1;
    characters.value = data[data_index.value].tests;
}
async function generateData() {
    const result = await getTest();
    if (result.code == 200) {
        data = result.data.test_list;
    } else {
        ElMessage({ type: 'error', message: '网络问题' });
    }
    characters.value = data[data_index.value].tests;
}
onMounted(() => {
    generateData();
});
</script>

<style lang="scss" scoped>
.el-container {
    height: 100%; /* 确保容器高度覆盖整个页面 */
    width: 100%;
    display: flex;
    flex-direction: column; /* 允许元素垂直排列 */
    justify-content: space-between; /* 确保元素在顶部和底部对齐 */

    .testBox {
        padding: 8px 16px;
        background-color: rgb(235, 245, 255);
        border-radius: 8px;
        border-left: 5px solid rgb(64, 158, 255);
        margin: 10px 0;
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
    .timer {
        position: absolute;
        width: 220px;
        height: 50px;
        top: 10px;
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
}
</style>
