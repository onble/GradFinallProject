<!-- src/components/CharacterCard.vue -->
<template>
    <el-card class="container" :class="[isCorrect, { done: done }]">
        <div class="character-card" @click="enlargedImage">
            <img :src="character.image" class="character-image" />
        </div>
        <el-dialog v-model="showDialog" width="50%">
            <div class="dialog-image-container">
                <img :src="character.image" class="enlarged-image" />
            </div>
        </el-dialog>
        <slot name="title"></slot>
    </el-card>
</template>

<script setup>
import { defineProps, ref, watch } from 'vue';
const props = defineProps({
    character: Object,
    done: Boolean,
    title: String,
});

const isCorrect = ref('');
const showDialog = ref(false);

function enlargedImage() {
    showDialog.value = true;
    console.log(111);
}
watch(
    () => props.done,
    (newValue) => {
        // 当 done 属性发生变化时执行的回调函数
        if (newValue === false) {
            // 在这里执行当 done 属性由 true 变为 false 时的逻辑
            // 例如重置样式变量
            isCorrect.value = '';
        }
    },
);
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 320px;
    margin: 0 10px;
    position: relative; /* 确保阴影可见 */

    .character-card {
        width: 220px;
        height: 280px;
        overflow: hidden;
        position: relative;
    }

    .character-image {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    .dialog-image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    .enlarged-image {
        max-width: 100%;
        max-height: 90%;
    }
}
</style>
