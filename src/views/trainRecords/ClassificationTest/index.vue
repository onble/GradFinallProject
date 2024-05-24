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
                <el-table-column min-width="145px" label="人物A" align="center">
                    <template #default="scope">
                        <ImageBox
                            :image="scope.row.testA_baseInfo.imageIndex"
                        ></ImageBox>
                    </template>
                </el-table-column>
                <el-table-column min-width="145px" label="人物B" align="center">
                    <template #default="scope">
                        <ImageBox
                            :image="scope.row.testB_baseInfo.imageIndex"
                        ></ImageBox>
                    </template>
                </el-table-column>
                <el-table-column
                    min-width="680px"
                    label="测试题目"
                    align="center"
                >
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
                            <ImageBox
                                :image="scope.row.test5_baseInfo.imageIndex"
                            ></ImageBox>
                            <ImageBox
                                :image="scope.row.test6_baseInfo.imageIndex"
                            ></ImageBox>
                            <ImageBox
                                :image="scope.row.test7_baseInfo.imageIndex"
                            ></ImageBox>
                            <ImageBox
                                :image="scope.row.test8_baseInfo.imageIndex"
                            ></ImageBox>
                            <ImageBox
                                :image="scope.row.test9_baseInfo.imageIndex"
                            ></ImageBox>
                            <ImageBox
                                :image="scope.row.test10_baseInfo.imageIndex"
                            ></ImageBox>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                    label="测试时间"
                    align="center"
                    show-overflow-tooltip
                    min-width="200px"
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
                <el-table-column
                    min-width="200px"
                    label="操作记录"
                    align="center"
                >
                    <template #default="scope">
                        <div class="circles">
                            <Circle
                                :true="
                                    scope.row.classificationTestAction.action1
                                "
                                :people="
                                    getPeople(
                                        scope.row.test1_baseInfo.peopleId,
                                        scope.row.testA_baseInfo.peopleId,
                                        scope.row.classificationTestAction
                                            .action1,
                                    )
                                "
                            ></Circle>
                            <Circle
                                :true="
                                    scope.row.classificationTestAction.action2
                                "
                                :people="
                                    getPeople(
                                        scope.row.test2_baseInfo.peopleId,
                                        scope.row.testA_baseInfo.peopleId,
                                        scope.row.classificationTestAction
                                            .action2,
                                    )
                                "
                            ></Circle>
                            <Circle
                                :true="
                                    scope.row.classificationTestAction.action3
                                "
                                :people="
                                    getPeople(
                                        scope.row.test3_baseInfo.peopleId,
                                        scope.row.testA_baseInfo.peopleId,
                                        scope.row.classificationTestAction
                                            .action3,
                                    )
                                "
                            ></Circle>
                            <Circle
                                :true="
                                    scope.row.classificationTestAction.action4
                                "
                                :people="
                                    getPeople(
                                        scope.row.test4_baseInfo.peopleId,
                                        scope.row.testA_baseInfo.peopleId,
                                        scope.row.classificationTestAction
                                            .action4,
                                    )
                                "
                            ></Circle>
                            <Circle
                                :true="
                                    scope.row.classificationTestAction.action5
                                "
                                :people="
                                    getPeople(
                                        scope.row.test5_baseInfo.peopleId,
                                        scope.row.testA_baseInfo.peopleId,
                                        scope.row.classificationTestAction
                                            .action5,
                                    )
                                "
                            ></Circle>
                            <Circle
                                :true="
                                    scope.row.classificationTestAction.action6
                                "
                                :people="
                                    getPeople(
                                        scope.row.test6_baseInfo.peopleId,
                                        scope.row.testA_baseInfo.peopleId,
                                        scope.row.classificationTestAction
                                            .action6,
                                    )
                                "
                            ></Circle>
                            <Circle
                                :true="
                                    scope.row.classificationTestAction.action7
                                "
                                :people="
                                    getPeople(
                                        scope.row.test7_baseInfo.peopleId,
                                        scope.row.testA_baseInfo.peopleId,
                                        scope.row.classificationTestAction
                                            .action7,
                                    )
                                "
                            ></Circle>
                            <Circle
                                :true="
                                    scope.row.classificationTestAction.action8
                                "
                                :people="
                                    getPeople(
                                        scope.row.test8_baseInfo.peopleId,
                                        scope.row.testA_baseInfo.peopleId,
                                        scope.row.classificationTestAction
                                            .action8,
                                    )
                                "
                            ></Circle>
                            <Circle
                                :true="
                                    scope.row.classificationTestAction.action9
                                "
                                :people="
                                    getPeople(
                                        scope.row.test9_baseInfo.peopleId,
                                        scope.row.testA_baseInfo.peopleId,
                                        scope.row.classificationTestAction
                                            .action9,
                                    )
                                "
                            ></Circle>
                            <Circle
                                :true="
                                    scope.row.classificationTestAction.action10
                                "
                                :people="
                                    getPeople(
                                        scope.row.test10_baseInfo.peopleId,
                                        scope.row.testA_baseInfo.peopleId,
                                        scope.row.classificationTestAction
                                            .action10,
                                    )
                                "
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
import { ref } from 'vue';
import { onMounted } from 'vue';
import ImageBox from '@/views/trainRecords/ClassificationTest/imageBox.vue';
import Circle from '@/views/trainRecords/ClassificationTest/circle.vue';
import { classificationHistory } from '@/api/trainRecords/classification';
import { computed } from 'vue';
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
    const result = await classificationHistory(pageNo.value, pageSize.value);
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
function getPeople(testPeopleId, APeopleId, action) {
    if (action > 0) {
        if (testPeopleId == APeopleId) {
            return 'A';
        } else {
            return 'B';
        }
    } else {
        if (testPeopleId == APeopleId) {
            return 'B';
        } else {
            return 'A';
        }
    }
}
</script>

<style scoped>
.table-container {
    transform: scale(0.8); /* 缩小到 80% */
    transform-origin: top left; /* 可以根据需要调整缩放原点 */
    width: 100%;
    height: 100%;
}
.circles {
    width: 200px;
    display: flex;
    justify-content: baseline;
    align-items: center;
    flex-wrap: wrap; /* 允许内容换行 */
}
.imagebox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap; /* 允许内容换行 */
    width: 650px;
}
.form {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
<style>
.el-scrollbar__bar.is-horizontal {
    height: 20px !important;
}
</style>
