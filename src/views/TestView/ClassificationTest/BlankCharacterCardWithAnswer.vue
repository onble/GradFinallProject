<!-- src/components/CharacterCard.vue -->
<template>
    <el-card class="container" :class="[isCorrect]">
        <div class="character-card" @click="enlargedImage">
            <img :src="character.image" class="character-image" />
        </div>
        <el-dialog v-model="showDialog" width="50%">
            <div class="dialog-image-container">
                <img :src="character.image" class="enlarged-image" />
            </div>
        </el-dialog>
        <div class="button_container">
            <el-button
                :type="AButtonType"
                circle
                @click="chooseA"
                :disabled="buttonsDisable"
            >
                A
            </el-button>
            <el-button
                :type="BButtonType"
                circle
                @click="chooseB"
                :disabled="buttonsDisable"
            >
                B
            </el-button>
        </div>
    </el-card>
</template>

<script setup>
import { ElMessage } from 'element-plus';
import { defineProps, ref, defineEmits, watch } from 'vue';
const props = defineProps({
    character: Object,
    title: String,
    done: Boolean,
});
const $emit = defineEmits(['answer']);
const isCorrect = ref('');
const showDialog = ref(false);
const AButtonType = ref('info');
const BButtonType = ref('info');
const buttonsDisable = ref(false);

function enlargedImage() {
    showDialog.value = true;
}
function chooseA() {
    // 判断是否正确
    if (props.character.answer == 'A') {
        isCorrect.value = 'correct';
        AButtonType.value = 'success';
        ElMessage({
            type: 'success',
            message: '恭喜选出正确答案!  经验+1',
        });
        // 通知父亲正误
        $emit('answer', true);
    } else {
        isCorrect.value = 'wrong';
        AButtonType.value = 'danger';
        // 通知父亲正误
        $emit('answer', false);
    }
    // 禁用按钮点击
    buttonsDisable.value = true;
}
function chooseB() {
    // 判断是否正确
    if (props.character.answer == 'B') {
        isCorrect.value = 'correct';
        BButtonType.value = 'success';
        // 通知父亲正误
        $emit('answer', true);
    } else {
        isCorrect.value = 'wrong';
        BButtonType.value = 'danger';
        $emit('answer', false);
    }
    // 禁用按钮点击
    buttonsDisable.value = true;
}
watch(
    () => props.done,
    (newValue) => {
        // 当 done 属性发生变化时执行的回调函数
        // 允许按钮点击
        buttonsDisable.value = false;
        isCorrect.value = '';
        BButtonType.value = '';
        AButtonType.value = '';
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
    .button_container {
        margin-top: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
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
}
</style>
