<template>
    <el-container class="container">
        <el-main>
            <h1 class="title">资源与支持</h1>
            <section class="resources">
                <el-tag type="success" class="tag">资源</el-tag>
                <h2>资源 📚</h2>
                <p>以下是一些有助于了解和应对脸盲症的资源和研究资料：</p>
                <ul>
                    <li>
                        <a href="https://www.prosopagnosia.com" target="_blank">
                            <strong>Prosopagnosia Research Center</strong>
                        </a>
                        - 提供最新的脸盲症研究和信息。
                    </li>
                    <li>
                        <a href="https://www.faceblind.org" target="_blank">
                            <strong>Face Blindness Support</strong>
                        </a>
                        - 脸盲症患者的支持小组和社区。
                    </li>
                    <li>
                        <a href="https://www.ncbi.nlm.nih.gov" target="_blank">
                            <strong>NCBI脸盲症研究</strong>
                        </a>
                        - 访问有关脸盲症的科学研究和论文。
                    </li>
                </ul>
            </section>
            <section class="support-groups">
                <el-tag type="info" class="tag">支持小组</el-tag>
                <h2>支持小组 🤝</h2>
                <p>
                    参与支持小组可以帮助您与其他脸盲症患者交流，分享经验和获取支持：
                </p>
                <ul>
                    <li>
                        <strong>脸盲症支持论坛：</strong>
                        一个在线社区，用户可以在这里交流和分享经验。
                    </li>
                    <li>
                        <strong>本地支持小组：</strong>
                        在您所在的城市寻找和参加脸盲症支持小组。
                    </li>
                    <li>
                        <strong>在线研讨会：</strong>
                        参加由专业人士主持的脸盲症主题的在线研讨会。
                    </li>
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
    name: 'ResourcesAndSupport',
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

.resources,
.support-groups {
    margin: 20px auto;
    max-width: 800px;
    font-size: 1.2em;
    line-height: 1.8;
    color: #555;
    background: linear-gradient(to right, #e1f5fe, #b3e5fc);
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

.resources h2,
.support-groups h2 {
    color: #0288d1;
    margin-bottom: 10px;
}

.resources ul,
.support-groups ul {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
}

.resources ul li,
.support-groups ul li {
    margin-bottom: 10px;
}

.footer-content {
    text-align: center;
    padding: 20px 0;
    background-color: #0288d1;
    color: #fff;
    border-radius: 10px 10px 0 0;
}
</style>
