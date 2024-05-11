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
                    :disabled="data_index <= 0"
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
    </el-container>
</template>

<script setup>
import { ref } from 'vue';
import CharacterCard from '@/components/CharacterCard.vue';
import generateDatas from '@/utils/generateData';
import { ElMessage } from 'element-plus';
const isDisabled = ref(true); // 控制按钮是否禁用
const buttonType = ref('danger'); // 控制按钮的类型
const done = ref(false);
let data = generateDatas(20);
let data_index = ref(0);
const characters = ref(data[data_index.value]);
function clearInfo() {
    done.value = false;
    // 更改按钮的状态
    buttonType.value = 'danger';
    isDisabled.value = true;
}
function nextTest() {
    clearInfo();
    if (data_index.value < data.length - 1) {
        data_index.value = data_index.value + 1;
        characters.value = data[data_index.value];
    } else {
        ElMessage({
            type: 'warning',
            message: '开启新的一组题目',
        });
        data = generateDatas(20);
        data_index.value = 0;
        characters.value = data[data_index.value];
    }
}
function chooseTrue() {
    // 处理选中逻辑
    done.value = true;

    // 更改按钮的状态
    buttonType.value = 'success';
    isDisabled.value = false;
}
function previousTest() {
    clearInfo();
    data_index.value = data_index.value - 1;
    characters.value = data[data_index.value];
}
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
        margin: 20px 0;
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
}
</style>
