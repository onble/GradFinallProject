<template>
    <el-container class="container">
        <el-main>
            <h1 class="title">诊断与症状</h1>
            <section class="diagnosis">
                <el-tag type="success" class="tag">诊断流程</el-tag>
                <h2>诊断流程 🏥</h2>
                <p>脸盲症的诊断通常包括以下几个步骤：</p>
                <ol>
                    <li>
                        <strong>初步筛查：</strong>
                        医生会询问患者的病史，包括是否有面孔识别困难的经历，并进行一些基本的认知测试。
                    </li>
                    <li>
                        <strong>面孔识别测试：</strong>
                        使用一系列标准化的面孔识别测试来评估患者的面孔识别能力。
                    </li>
                    <li>
                        <strong>影像学检查：</strong>
                        通过磁共振成像（MRI）或其他影像学检查，观察患者大脑的结构和功能，以排除其他神经系统疾病。
                    </li>
                    <li>
                        <strong>综合评估：</strong>
                        结合上述测试结果，医生会做出综合评估，确定是否存在脸盲症。
                    </li>
                </ol>
            </section>
            <section class="symptoms">
                <el-tag type="info" class="tag">主要症状</el-tag>
                <h2>主要症状 🤔</h2>
                <p>脸盲症的主要症状包括但不限于：</p>
                <ul>
                    <li>难以识别熟悉的面孔，即使是亲近的家人或朋友。</li>
                    <li>难以记住新认识的人的面孔。</li>
                    <li>在人群中辨识面孔困难。</li>
                    <li>依赖非面部特征（如发型、声音、服饰）来识别他人。</li>
                    <li>对面孔相似的人特别容易混淆。</li>
                </ul>
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
export default {
    name: 'DiagnosisAndSymptoms',
};
</script>

<style lang="scss" scoped>
.container {
    background: $base-mian-background;
}
.title {
    text-align: center;
    margin-top: 20px;
    font-size: 2.5em;
    color: #333;
}

.tag {
    margin-bottom: 10px;
    display: inline-block;
}

.diagnosis {
    margin: 20px auto;
    max-width: 800px;
    font-size: 1.2em;
    line-height: 1.8;
    color: #555;
    background: linear-gradient(to right, #e0f7fa, #80deea);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition:
        transform 0.3s,
        box-shadow 0.3s;
}

.diagnosis:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.diagnosis h2 {
    color: #00897b;
    margin-bottom: 10px;
}

.symptoms {
    margin: 20px auto;
    max-width: 800px;
    font-size: 1.2em;
    line-height: 1.8;
    color: #555;
    background: linear-gradient(to right, #ffebee, #ffcdd2);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition:
        transform 0.3s,
        box-shadow 0.3s;
}

.symptoms:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.symptoms h2 {
    color: #d32f2f;
    margin-bottom: 10px;
}

.footer-content {
    text-align: center;
    padding: 20px 0;
    background-color: #d32f2f;
    color: #fff;
    border-radius: 10px 10px 0 0;
}
</style>
