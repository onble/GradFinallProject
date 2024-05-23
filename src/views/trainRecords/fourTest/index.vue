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
                <el-table-column width="520px" label="测试题目" align="center">
                    <template #default="scope">
                        <div class="imagebox">
                            <ImageBox
                                :image="scope.row.test1_baseInfo.imageIndex"
                            ></ImageBox>
                            <ImageBox
                                :image="scope.row.test2_baseInfo.imageIndex"
                            ></ImageBox>
                            <ImageBox
                                :image="scope.row.test3_baseInfo.imageIndex"
                            ></ImageBox>
                            <ImageBox
                                :image="scope.row.test4_baseInfo.imageIndex"
                            ></ImageBox>
                        </div>
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
                <el-table-column label="操作记录" align="center">
                    <template #default="scope">
                        <div class="circles">
                            <Circle
                                v-if="scope.row.fourTestActions.action1"
                                :action="scope.row.fourTestActions.action1"
                            ></Circle>
                            <Circle
                                v-if="scope.row.fourTestActions.action2"
                                :action="scope.row.fourTestActions.action2"
                            ></Circle>
                            <Circle
                                v-if="scope.row.fourTestActions.action3"
                                :action="scope.row.fourTestActions.action3"
                            ></Circle>
                            <Circle
                                v-if="scope.row.fourTestActions.action4"
                                :action="scope.row.fourTestActions.action4"
                            ></Circle>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页器 -->
            <el-pagination
                v-model:current-page="pageNo"
                :page-size="pageSize"
                :page-sizes="[3, 5, 8, 10, 12]"
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
import { fourTestHistory } from '@/api/trainRecords/fourTest';
import { ref } from 'vue';
import { onMounted } from 'vue';
import ImageBox from '@/views/trainRecords/fourTest/imageBox.vue';
import Circle from '@/views/trainRecords/fourTest/circle.vue';
// 默认页码
let pageNo = ref<number>(1);
// 一页展示几条数据
let pageSize = ref<number>(5);
// 用户总个数
let total = ref<number>(0);
let inf_list = ref();
onMounted(() => {
    getDatas();
});
async function getDatas(pager = 1) {
    pageNo.value = pager;
    const result = await fourTestHistory(pageNo.value, pageSize.value);
    console.log(result);
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
.circles {
    display: flex;
    justify-content: baseline;
    align-items: center;
}
.imagebox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
}
.form {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
