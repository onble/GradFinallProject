<template>
    <div class="timer-container">
        <p>消耗时间: {{ elapsedSeconds }} 秒</p>
    </div>
</template>

<script setup>
import { ref, onUnmounted, defineExpose } from 'vue';

// 计时器状态
const elapsedSeconds = ref(0);
let timerInterval = null;

// 开始计时
const startTimer = () => {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    elapsedSeconds.value = 0;
    timerInterval = setInterval(() => {
        elapsedSeconds.value += 1;
    }, 1000);
};

// 获取计时结果
const getElapsedTime = () => {
    return elapsedSeconds.value;
};

// 结束计时并返回计时结果
const stopTimer = () => {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    return getElapsedTime();
};

// 在组件卸载时清理计时器
onUnmounted(() => {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
});

// 通过 defineExpose 方法暴露方法给父组件使用
defineExpose({
    startTimer,
    getElapsedTime,
    stopTimer,
});
</script>

<style scoped>
.timer-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    border: 2px solid #4caf50;
    border-radius: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;
    color: #333;
}

.timer-container p {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
}
</style>
