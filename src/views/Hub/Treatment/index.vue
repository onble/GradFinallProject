<template>
    <el-container class="container">
        <el-main>
            <h1 class="title">治疗方法</h1>
            <section class="treatment-options">
                <el-tag type="success" class="tag">治疗选项</el-tag>
                <h2>治疗选项 🩺</h2>
                <p>
                    虽然脸盲症目前没有根治的方法，但以下几种治疗选项和方法可以帮助患者改善面孔识别能力：
                </p>
                <ul>
                    <li>
                        <strong>认知行为疗法：</strong>
                        通过训练患者识别和记住面部特征，提高面孔识别能力。
                    </li>
                    <li>
                        <strong>面部识别训练软件：</strong>
                        使用专门设计的软件进行系统的面部识别训练。
                    </li>
                    <li>
                        <strong>心理咨询：</strong>
                        通过心理咨询，帮助患者应对脸盲症带来的社会和情感挑战。
                    </li>
                </ul>
            </section>
            <section class="case-stories">
                <el-tag type="info" class="tag">实际案例</el-tag>
                <h2>实际案例 📖</h2>
                <p>
                    以下是一些成功的实际案例，展示了不同的治疗方法如何帮助患者改善面孔识别能力：
                </p>
                <div class="case">
                    <h3>案例一：认知行为疗法</h3>
                    <p>
                        小李通过认知行为疗法，逐渐学会了通过特征识别来辨认亲人和朋友。经过几个月的训练，她的面孔识别能力有了显著提高。
                    </p>
                </div>
                <div class="case">
                    <h3>案例二：面部识别训练软件</h3>
                    <p>
                        张先生使用面部识别训练软件，每天坚持训练。软件提供了多样化的训练模式和反馈机制，使他的面孔识别能力得到了显著改善。
                    </p>
                </div>
                <div class="case">
                    <h3>案例三：心理咨询</h3>
                    <p>
                        通过定期的心理咨询，小王学会了如何更好地应对脸盲症带来的社交困扰，并建立了更多的社会支持网络。
                    </p>
                </div>
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
    name: 'TreatmentMethods',
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

.treatment-options,
.case-stories {
    margin: 20px auto;
    max-width: 800px;
    font-size: 1.2em;
    line-height: 1.8;
    color: #555;
    background: linear-gradient(to right, #f0f4c3, #dce775);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition:
        transform 0.3s,
        box-shadow 0.3s;
    &:hover {
        transform: scale(1.02);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
}

.treatment-options h2,
.case-stories h2 {
    color: #9e9d24;
    margin-bottom: 10px;
}

.treatment-options ul,
.case-stories .case {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
}

.treatment-options ul li,
.case-stories .case {
    margin-bottom: 10px;
}

.case-stories .case h3 {
    color: #827717;
    margin-top: 10px;
}

.footer-content {
    text-align: center;
    padding: 20px 0;
    background-color: #827717;
    color: #fff;
    border-radius: 10px 10px 0 0;
}
</style>
