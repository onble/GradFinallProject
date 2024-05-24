<template>
    <div class="box" :class="[ChooseColor]">
        <div class="content">{{ people }}</div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { defineProps } from 'vue';
const props = defineProps({
    true: Number,
    people: String,
});
const ChooseColor = computed(() => {
    return props.true > 0 ? 'green' : 'red';
});
</script>

<style lang="scss" scoped>
.box {
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 50%;
    color: whitesmoke;
    &.green {
        background-color: rgb(103, 194, 58);
    }
    &.red {
        background-color: rgb(191, 73, 73);
    }
    .content {
        flex: 1;
    }
}
</style>
