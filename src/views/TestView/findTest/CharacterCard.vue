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
        <div class="button-container">
            <el-button
                circle
                type="default"
                size="large"
                @click="chooseAnswer"
                icon="Check"
            ></el-button>
        </div>
        <div class="character-name">{{ character.name }}</div>
        <!-- 添加样式 -->
    </el-card>
</template>

<script setup>
import { ElMessage } from 'element-plus';
import { defineProps, defineEmits, ref, watch } from 'vue';
const props = defineProps({
    character: Object,
    done: Boolean,
});

const $emit = defineEmits(['chooseTrue']);
const isCorrect = ref('');
const showDialog = ref(false);

function chooseAnswer() {
    // 检查答案是否正确
    const ifCorrect = props.character.answer;

    // 根据答案是否正确手动添加或删除类
    if (ifCorrect) {
        isCorrect.value = 'correct';
        // 显示正确信息
        ElMessage({
            type: 'success',
            message: '恭喜选出正确答案!  经验+1',
        });
        $emit('chooseTrue');
    } else {
        isCorrect.value = 'wrong';
    }
}
function enlargedImage() {
    showDialog.value = true;
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
    height: 390px;
    margin: 0 4px;
    position: relative; /* 确保阴影可见 */

    .character-card {
        width: 180px;
        height: 240px;
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

    .button-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
    }

    .character-name {
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 10px;
        margin-top: 10px;
        transition: all 0.3s;
        display: none;

        &.correct {
        }

        &.wrong {
        }
    }
    &.correct,
    &.wrong,
    &.done {
        .button-container {
            display: none;
        }
        .character-name {
            display: block;
        }
        .character-name {
            display: block;
        }
    }
    &.correct {
        box-shadow: 0 0 10px rgba(56, 137, 56, 1); /* 绿色阴影 */
        .character-name {
            background-color: rgb(56, 137, 56); /* 正确时显示绿色 */
        }
    }

    &.wrong {
        box-shadow: 0 0 10px rgba(173, 65, 65, 1); /* 红色阴影 */
        .character-name {
            background-color: rgb(173, 65, 65); /* 错误时显示红色 */
        }
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
