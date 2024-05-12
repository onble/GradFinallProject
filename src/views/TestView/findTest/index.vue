<template>
    <div class="container">
        <main>
            <div class="testBox">
                <h2 class="text-highlight">请从下面找到左侧目标人物</h2>
            </div>
            <div class="left"></div>
            <div class="right"></div>
        </main>
    </div>
</template>

<script setup lang="ts">
import BlankCharacterCard from '@/views/TestView/ClassificationTest/BlankCharacterCard.vue';
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
    .left {
        flex: 1;
    }
    .right {
        flex: 3;
    }
}
</style>
