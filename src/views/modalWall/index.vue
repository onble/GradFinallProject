<template>
    <el-container>
        <el-main>
            <h1 class="title">勋章墙</h1>
            <section class="badge-wall">
                <el-row :gutter="20">
                    <el-col :span="8" v-for="badge in badges" :key="badge.id">
                        <el-card class="badge-card" shadow="hover">
                            <img
                                :src="badge.image"
                                alt="Badge Image"
                                class="badge-image"
                            />
                            <div class="badge-info">
                                <h3>{{ badge.title }}</h3>
                                <p>{{ badge.description }}</p>
                            </div>
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
    name: 'BadgeWall',
    data() {
        return {
            badges: [
                {
                    id: 1,
                    image: 'https://via.placeholder.com/150?text=Badge+1',
                    title: '初学者勋章',
                    description: '完成了第一阶段训练，迈出了重要的一步。',
                },
                {
                    id: 2,
                    image: 'https://via.placeholder.com/150?text=Badge+2',
                    title: '进阶者勋章',
                    description: '成功完成了进阶训练，能力得到了提升。',
                },
                {
                    id: 3,
                    image: 'https://via.placeholder.com/150?text=Badge+3',
                    title: '专家勋章',
                    description: '达到了专家级水平，识别能力非常出色。',
                },
                // 添加更多勋章信息...
            ],
        };
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

.badge-wall {
    margin: 20px auto;
    max-width: 1000px;
}

.badge-card {
    background: linear-gradient(to right, #ffeb3b, #ffc107);
    border-radius: 10px;
    padding: 20px;
    transition:
        transform 0.3s,
        box-shadow 0.3s;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
}

.badge-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
}

.badge-info {
    text-align: center;
    margin-top: 10px;
}

.badge-info h3 {
    color: #ff9800;
    margin-bottom: 10px;
}

.badge-info p {
    color: #555;
}

.footer-content {
    text-align: center;
    padding: 20px 0;
    background-color: #ff9800;
    color: #fff;
    border-radius: 10px 10px 0 0;
}
</style>
