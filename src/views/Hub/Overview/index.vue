<template>
    <el-container>
        <el-main>
            <h1 class="title">脸盲症的概述</h1>
            <section class="overview">
                <el-tag type="success" class="tag">简介</el-tag>
                <h2>脸盲症简介 😊</h2>
                <p>
                    脸盲症，又称为面孔失认症，是一种影响人们辨识面孔能力的神经障碍。患有脸盲症的人可能无法辨认熟悉的面孔，但通过特定的训练，可以改善这一能力。我们的平台致力于提供科学有效的训练方法，帮助用户提升面孔识别能力，增强日常生活中的面孔记忆和辨识。
                </p>
            </section>
            <section class="symptoms-causes">
                <el-tag type="info" class="tag">症状和原因</el-tag>
                <h2>症状和原因 🤔</h2>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <div class="card">
                            <el-tag type="danger" class="tag">症状</el-tag>
                            <h3>症状 🧐</h3>
                            <p>脸盲症的主要症状包括：</p>
                            <ul>
                                <li>难以识别熟悉的面孔</li>
                                <li>难以记住新认识的人的面孔</li>
                                <li>在人群中辨识面孔困难</li>
                            </ul>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="card">
                            <el-tag type="warning" class="tag">原因</el-tag>
                            <h3>原因 🤷‍♂️</h3>
                            <p>脸盲症通常与以下因素有关：</p>
                            <ul>
                                <li>脑部损伤，如中风或脑外伤</li>
                                <li>某些神经系统疾病</li>
                                <li>长时间缺乏面孔识别的练习</li>
                            </ul>
                        </div>
                    </el-col>
                </el-row>
            </section>
            <section class="solutions">
                <el-tag type="primary" class="tag">训练方法</el-tag>
                <h2>训练方法 💪</h2>
                <p>
                    尽管脸盲症可能无法完全治愈，但通过系统的训练，可以显著改善面孔识别能力。以下是我们提供的训练方法：
                </p>
                <ul>
                    <li>通过记忆和识别不同面孔的特征进行训练</li>
                    <li>使用面部识别游戏和测验来增强识别能力</li>
                    <li>提供反馈和进度跟踪，帮助用户了解自己的进步</li>
                </ul>
            </section>
            <section class="image-gallery">
                <el-tag type="success" class="tag">训练实例</el-tag>
                <h2>训练实例 📸</h2>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-card class="image-card">
                            <img
                                src="/public/source/example1.jpg"
                                alt="Training Example"
                                style="height: 150px"
                            />
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card class="image-card">
                            <img
                                src="/public/source/example2.jpg"
                                alt="Training Example"
                                style="height: 150px"
                            />
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card class="image-card">
                            <img
                                src="/public/source/example5.jpg"
                                alt="Training Example"
                                style="height: 150px"
                            />
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
export default {
    name: 'FaceBlindnessOverview',
};
</script>

<style lang="scss" scoped>
.el-main {
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

.overview {
    margin: 20px auto;
    max-width: 800px;
    font-size: 1.2em;
    line-height: 1.8;
    color: #555;
    background: linear-gradient(to right, #fff3e0, #ffcc80);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition:
        transform 0.3s,
        box-shadow 0.3s;
}

.overview:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.overview h2 {
    color: #ff9800;
    margin-bottom: 10px;
}

.symptoms-causes {
    margin: 20px auto;
    max-width: 800px;
}

.symptoms-causes h2 {
    color: #ff9800;
    margin-bottom: 10px;
}

.card {
    background: linear-gradient(to bottom, #fff3e0, #ffe0b2);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition:
        transform 0.3s,
        box-shadow 0.3s;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card h3 {
    color: #f57c00;
    margin-top: 10px;
}

.solutions {
    margin: 20px auto;
    max-width: 800px;
    font-size: 1.2em;
    line-height: 1.8;
    color: #555;
    background: linear-gradient(to right, #fff3e0, #ffcc80);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition:
        transform 0.3s,
        box-shadow 0.3s;
}

.solutions:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.solutions h2 {
    color: #ff9800;
    margin-bottom: 10px;
}

.image-gallery {
    margin: 20px auto;
    max-width: 800px;
}

.image-gallery h2 {
    color: #ff9800;
    margin-bottom: 10px;
}

.image-card {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    transition:
        transform 0.3s,
        box-shadow 0.3s;
}

.image-card:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.image-gallery img {
    width: 100%;
    height: auto;
    border-radius: 10px;
}

.footer-content {
    text-align: center;
    padding: 20px 0;
    background-color: #f57c00;
    color: #fff;
    border-radius: 10px 10px 0 0;
}
</style>
