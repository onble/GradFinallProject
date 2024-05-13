<template>
    <div class="container">
        <main>
            <div class="left">
                <section>
                    <div class="testBox">
                        <h2 class="text-highlight">请找到目标人物</h2>
                    </div>
                    <BlankCharacterCard :character="classification_data.target">
                        <template v-slot:title>
                            <div class="title">
                                {{ classification_data.target.name }}
                            </div>
                        </template>
                    </BlankCharacterCard>
                    <el-button
                        class="btn"
                        round
                        :disabled="isDisabled"
                        :type="buttonType"
                        size="large"
                        @click="nextTest()"
                    >
                        下一题
                        <el-icon>
                            <ArrowRight />
                        </el-icon>
                    </el-button>
                </section>
            </div>
            <div class="right">
                <main>
                    <CharacterCard
                        v-for="(character, index) in classification_data.tests"
                        :key="index"
                        class="character-card"
                        :character="character"
                        @chooseTrue="chooseTrue(character)"
                        :done="done"
                    />
                </main>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BlankCharacterCard from '@/views/TestView/ClassificationTest/BlankCharacterCard.vue';
import CharacterCard from '@/views/TestView/findTest/CharacterCard.vue';
let done = ref(false);
const buttonType = ref('danger'); // 控制按钮的类型
// 控制能否下一题
let isDisabled = ref(true);
// 页面渲染数据
let classification_data = ref({
    target: {
        id: 1,
        image: 'public/face/范冰冰/6.jpg',
        name: '范冰冰',
    },
    tests: [
        {
            id: 1,
            image: 'public/face/Angelagbaby/6.jpg',
            name: 'Angelagbaby',
            answer: false,
        },
        {
            id: 1,
            image: 'public/face/Angelagbaby/7.jpg',
            name: 'Angelagbaby',
            answer: false,
        },
        {
            id: 1,
            image: 'public/face/范冰冰/3.jpg',
            name: '范冰冰',
            answer: true,
        },
        {
            id: 1,
            image: 'public/face/Angelagbaby/1.jpg',
            name: 'Angelagbaby',
            answer: false,
        },
        {
            id: 1,
            image: 'public/face/Angelagbaby/6.jpg',
            name: 'Angelagbaby',
            answer: false,
        },
        {
            id: 1,
            image: 'public/face/Angelagbaby/7.jpg',
            name: 'Angelagbaby',
            answer: false,
        },
        {
            id: 1,
            image: 'public/face/Angelagbaby/6.jpg',
            name: 'Angelagbaby',
            answer: false,
        },
        {
            id: 1,
            image: 'public/face/Angelagbaby/7.jpg',
            name: 'Angelagbaby',
            answer: false,
        },
    ],
});
function chooseTrue() {
    // 处理选中的逻辑
    done.value = true;
    // 更改按钮的状态
    buttonType.value = 'success';
    isDisabled.value = false;
}
function nextTest() {
    // 下一题
    clearInfo();
}
function clearInfo() {
    done.value = false;
    // 更改按钮的状态
    buttonType.value = 'danger';
    isDisabled.value = true;
}
</script>

<style lang="scss" scoped>
main {
    display: flex;
    flex-direction: row;
    justify-content: space-between; /* 确保左右两部分之间的间距 */
    height: calc(100vh - 100px);

    .left {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        .testBox {
            width: 90%;
            padding: 8px 8px;
            background-color: rgb(235, 245, 255);
            border-radius: 8px;
            border-left: 5px solid rgb(64, 158, 255);
            margin: 20px 0;

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
        section {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            .title {
                margin: 5px;
                background-color: #f0f0f0; /* 灰色背景 */
                border-radius: 15px; /* 四周圆角 */
                padding: 5px 15px; /* 内边距，使内容与边框之间有间隔 */
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 阴影效果 */
                text-align: center;
            }
            .btn {
                margin-top: 100px;
            }
        }
    }
    .right {
        flex: 3;
        main {
            display: flex;
            flex-wrap: wrap; // 允许内容换行
            justify-content: space-between; // 在项目之间保持等距

            .character-card {
                flex: 0 0 calc(25% - 10px); // 减去 margin 的宽度
                margin: 5px; // 设置外边距，可以根据需要调整
                height: 50%; // 设置高度为自动，根据内容调整
            }
        }
    }
}
</style>
