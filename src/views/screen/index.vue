<template>
    <el-container>
        <el-main>
            <h1 class="title">数据分析</h1>
            <section class="charts-section">
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-card class="chart-card">
                            <h3>女性明星人脸数据</h3>
                            <div ref="femaleChart" class="chart"></div>
                        </el-card>
                    </el-col>
                    <el-col :span="12">
                        <el-card class="chart-card">
                            <h3>男性明星人脸数据</h3>
                            <div ref="maleChart" class="chart"></div>
                        </el-card>
                    </el-col>
                </el-row>
            </section>
            <el-footer>
                <div class="footer-content">
                    <p>&copy; 2024 人脸辨识训练网站. All rights reserved.</p>
                </div>
            </el-footer>
        </el-main>
    </el-container>
</template>

<script>
import * as echarts from 'echarts';

export default {
    name: 'DataAnalysis',
    data() {
        return {
            femaleCharacters: {
                Angelababy: 8,
                迪丽热巴: 36,
                范冰冰: 9,
                杨幂: 46,
                赵丽颖: 9,
            },
            maleCharacters: {
                李晨: 12,
                鹿晗: 16,
                郑恺: 20,
            },
        };
    },
    mounted() {
        this.initFemaleChart();
        this.initMaleChart();
    },
    methods: {
        initFemaleChart() {
            const femaleChart = echarts.init(this.$refs.femaleChart);
            const femaleData = Object.entries(this.femaleCharacters).map(
                ([name, value]) => ({
                    name,
                    value,
                }),
            );
            const femaleOption = {
                title: {
                    text: '女性明星人脸数据',
                    left: 'center',
                },
                tooltip: {
                    trigger: 'item',
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                },
                series: [
                    {
                        name: '数量',
                        type: 'pie',
                        radius: '50%',
                        data: femaleData,
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)',
                            },
                        },
                    },
                ],
            };
            femaleChart.setOption(femaleOption);
        },
        initMaleChart() {
            const maleChart = echarts.init(this.$refs.maleChart);
            const maleData = Object.entries(this.maleCharacters).map(
                ([name, value]) => ({
                    name,
                    value,
                }),
            );
            const maleOption = {
                title: {
                    text: '男性明星人脸数据',
                    left: 'center',
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                    },
                },
                xAxis: {
                    type: 'category',
                    data: Object.keys(this.maleCharacters),
                },
                yAxis: {
                    type: 'value',
                },
                series: [
                    {
                        name: '数量',
                        type: 'bar',
                        data: Object.values(this.maleCharacters),
                        itemStyle: {
                            color: '#3398DB',
                        },
                        emphasis: {
                            itemStyle: {
                                color: '#FF7F50',
                            },
                        },
                    },
                ],
            };
            maleChart.setOption(maleOption);
        },
    },
};
</script>

<style lang="scss" scoped>
.title {
    text-align: center;
    margin-top: 20px;
    font-size: 2.5em;
    color: #333;
}

.charts-section {
    margin: 20px auto;
    max-width: 1000px;
}

.chart-card {
    background: linear-gradient(to right, #e0f7fa, #b2ebf2);
    border-radius: 10px;
    padding: 20px;
    transition:
        transform 0.3s,
        box-shadow 0.3s;
    &:hover {
        transform: scale(1.02);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
}

.chart {
    width: 100%;
    height: 400px;
}

.footer-content {
    text-align: center;
    padding: 20px 0;
    background-color: #0288d1;
    color: #fff;
    border-radius: 10px 10px 0 0;
}
</style>
