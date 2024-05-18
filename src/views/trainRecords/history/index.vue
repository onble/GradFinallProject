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
            <el-table style="margin: 10px 0px" border :data="inf_list">
                <el-table-column
                    label="#"
                    align="center"
                    type="index"
                ></el-table-column>
                <el-table-column label="测试类型" align="center">
                    <template #default="scope">
                        <span>
                            {{ transform(scope.row.groupKind) }}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="测试时间"
                    align="center"
                    show-overflow-tooltip
                >
                    <template #default="scope">
                        <div>
                            <el-icon><timer /></el-icon>
                            <span style="margin-left: 10px">
                                {{ scope.row.doneTime }}
                            </span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                    label="完成耗时(s)"
                    align="center"
                    prop="timeSpendSeconds"
                    show-overflow-tooltip
                ></el-table-column>
            </el-table>
            <!-- 分页器 -->
            <el-pagination
                v-model:current-page="pageNo"
                :page-size="pageSize"
                :page-sizes="[5, 10, 15, 20]"
                @size-change="handleSizeChange"
                @current-change="getDatas"
                layout="prev, pager, next, jumper, ->, sizes, total"
                :total="total"
                :background="true"
            ></el-pagination>
        </div>
    </el-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { trainHistory } from '@/api/trainRecords/history';
import { onMounted } from 'vue';
// 默认页码
let pageNo = ref<number>(1);
// 一页展示几条数据
let pageSize = ref<number>(10);
// 用户总个数
let total = ref<number>(0);
let inf_list = ref();
onMounted(() => {
    getDatas();
});
function transform(groupKind) {
    switch (groupKind) {
        case 1:
            return '基础测试';
        case 2:
            return '辨别测试';
        case 3:
            return '搜寻测试';
        default:
            throw new Error('Invalid groupKind value');
    }
}
async function getDatas(pager = 1) {
    pageNo.value = pager;
    const result = await trainHistory(pageNo.value, pageSize.value);
    if (result.code == 200) {
        total.value = result.data.total;
        inf_list.value = result.data.inf_list;
    }
}
// 分页器下拉菜单的自定义事件的回调
const handleSizeChange = (size: number) => {
    pageSize.value = size;
    getDatas();
};
</script>

<style scoped>
.form {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
