<template>
    <div class="box">
        <img :src="image" class="image" />
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
    image: String,
});
</script>

<style scoped lang="scss">
.box {
    width: 120px;
    height: 200px;
    overflow: hidden;
    position: relative;
}

.image {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    object-fit: cover;
    object-position: center;
}
</style>
