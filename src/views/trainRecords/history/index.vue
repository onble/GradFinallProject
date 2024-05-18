<!-- eslint-disable vue/valid-attribute-name -->
<template>
    <el-card style="margin: 10px 0px">
        <template #header>
            <div class="card-header">
                <span>训练历史</span>
            </div>
        </template>
        <div>
            <!-- table展示用户信息 -->
            <el-table style="margin: 10px 0px" border :data="userArr">
                <el-table-column
                    label="#"
                    align="center"
                    type="index"
                ></el-table-column>
                <el-table-column
                    label="测试类型"
                    align="center"
                    prop="id"
                ></el-table-column>
                <el-table-column
                    label="测试时间"
                    align="center"
                    prop="username"
                    show-overflow-tooltip
                ></el-table-column>
                <el-table-column
                    label="完成耗时(s)"
                    align="center"
                    prop="name"
                    show-overflow-tooltip
                ></el-table-column>
            </el-table>
            <!-- 分页器 -->
            <el-pagination
                v-model:current-page="pageNo"
                :page-size="pageSize"
                :page-sizes="[5, 7, 9, 11]"
                @size-change="handleSizeChange"
                @current-change="getHasUser"
                layout="prev, pager, next, jumper, ->, sizes, total"
                :total="total"
                :background="true"
            ></el-pagination>
        </div>
    </el-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// 默认页码
let pageNo = ref<number>(1);
// 一页展示几条数据
let pageSize = ref<number>(5);
// 用户总个数
let total = ref<number>(0);
</script>

<style scoped>
.form {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
