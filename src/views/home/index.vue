<template>
    <div class="content">
        <h1>欢迎来到互动式人脸辨识训练网站</h1>
        <p>这是一个旨在帮助用户提升人脸识别能力的互动式训练平台。</p>

        <h2>功能特色</h2>
        <ul class="feature-list">
            <li>多种训练模式，从初级到高级，逐步提升你的识别技能。</li>
            <li>实时反馈与进度跟踪，随时掌握自己的学习成效。</li>
            <li>互动元素和游戏化设计，学习过程更加轻松有趣。</li>
        </ul>

        <h2>用户评价</h2>
        <blockquote>
            "使用这个平台让我在社交场合更加自信，能够快速记住新朋友的面孔。" -
            李明
        </blockquote>

        <div class="call-to-action">
            <p>立即注册，开始你的人脸辨识训练之旅！</p>
            <el-button type="primary" size="large">立即注册</el-button>
        </div>
    </div>
    <div class="footer">
        <p>&copy; 2024 互动式人脸辨识训练网站. All Rights Reserved.</p>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.content {
    font-family: 'Roboto', sans-serif;
    background-color: #f9f9f9;
    color: #333;
    padding: 40px 20px;
    text-align: center;
    max-width: 1200px;
    margin: 0 auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background: linear-gradient(to bottom right, #ffffff, #e3f2fd);
}

h1 {
    color: #007bbd;
    font-size: 3rem;
    margin-bottom: 20px;
    font-weight: bold;
}

h2 {
    color: #007bbd;
    font-size: 2.5rem;
    margin: 40px 0 20px;
    font-weight: bold;
}

p {
    color: #666;
    font-size: 1.4rem;
    margin: 20px 0;
}

.feature-list {
    list-style: none;
    padding: 0;
    font-size: 1.4rem;
    line-height: 2;
}

.feature-list li {
    margin-bottom: 15px;
    padding-left: 25px;
    position: relative;
    text-align: left;
    color: #333;
}

.feature-list li::before {
    content: '✔️';
    color: #007bbd;
    position: absolute;
    left: 0;
    top: 0;
}

blockquote {
    font-size: 1.6rem;
    font-style: italic;
    color: #555;
    border-left: 5px solid #007bbd;
    padding-left: 15px;
    margin: 30px auto;
    max-width: 800px;
    background-color: #e3f2fd;
    border-radius: 5px;
    padding: 15px 20px;
}

.call-to-action {
    background: linear-gradient(to right, #e0f7fa, #b2ebf2);
    color: #fff;
    padding: 30px 20px;
    margin-top: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: 40px auto;
}

.call-to-action p {
    font-size: 1.6rem;
    margin: 20px 0;
}

.footer {
    text-align: center;
    padding: 20px 0;
    background: linear-gradient(to right, #e0f7fa, #b2ebf2);
    color: #fff;
    margin-top: 30px;
    border-radius: 10px;
}
</style>
