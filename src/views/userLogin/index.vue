<template>
    <div class="body">
        <div class="container" ref="container">
            <!-- Sign Up -->
            <div class="container__form container--signup">
                <form class="form" id="register">
                    <h2 class="form__title">现在注册</h2>
                    <div class="item">
                        <div
                            class="inf"
                            id="wrong_username"
                            ref="wrong_username"
                        >
                            <i
                                class="fa fa-exclamation-triangle"
                                aria-hidden="true"
                            ></i>
                            &nbsp;该用户名已存在
                        </div>
                        <div class="box">
                            <span class="label_name">用户名:</span>
                            <input
                                type="text"
                                name="username"
                                placeholder="请输入用户名"
                                class="input"
                                v-model="registerForm.username"
                                autocomplete="username"
                                @input.once="handleUsernameInput"
                            />
                        </div>
                    </div>
                    <div class="item">
                        <div class="box">
                            <span class="label_name">密码:</span>
                            <input
                                type="password"
                                name="password"
                                placeholder="请输入密码"
                                class="input"
                                autocomplete="new-password"
                                v-model="registerForm.password"
                            />
                        </div>
                    </div>
                    <div class="item">
                        <div class="box">
                            <div
                                class="inf"
                                id="wrong_repassword"
                                ref="wrong_repassword"
                            >
                                <i
                                    class="fa fa-exclamation-triangle"
                                    aria-hidden="true"
                                ></i>
                                &nbsp;重复密码不一致
                            </div>
                            <span class="label_name">重复密码:</span>
                            <input
                                type="password"
                                name="repassword"
                                placeholder="请重复输入密码"
                                autocomplete="new-password"
                                class="input"
                                v-model="registerForm.repassword"
                            />
                        </div>
                    </div>
                    <div class="item">
                        <div class="box">
                            <div
                                class="inf"
                                id="invitation_code"
                                ref="invitation_code"
                            >
                                <i
                                    class="fa fa-exclamation-triangle"
                                    aria-hidden="true"
                                ></i>
                                &nbsp;该邀请码不存在
                            </div>
                            <span class="label_name">邀请码:</span>
                            <input
                                name="invitation_code"
                                type="text"
                                placeholder="找我要邀请码啊~"
                                class="input"
                                v-model="registerForm.invitation_code"
                                @input.once="handleInvitationInput"
                            />
                        </div>
                    </div>

                    <div
                        class="btn"
                        id="btn_register"
                        ref="btn_register"
                        @click="btn_registerHandle"
                    >
                        注册
                    </div>
                </form>
            </div>

            <!-- Sign In -->
            <div class="container__form container--signin">
                <form class="form" id="login">
                    <h1 class="web__title">欢迎来到脸盲辨识训练网站</h1>
                    <h2 class="form__title">马上登录</h2>
                    <div class="item">
                        <div class="box">
                            <div class="inf" id="wrong_login" ref="wrong_login">
                                <i
                                    class="fa fa-exclamation-triangle"
                                    aria-hidden="true"
                                ></i>
                                &nbsp;用户名或密码有误
                            </div>
                            <span class="label_name">用户名</span>
                            <input
                                type="text"
                                name="username"
                                placeholder="请输入用户名"
                                class="input"
                                autocomplete="username"
                                v-model="loginForm.username"
                            />
                        </div>
                    </div>
                    <div class="item">
                        <div class="box">
                            <span class="label_name">密码</span>
                            <input
                                type="password"
                                name="password"
                                placeholder="请输入密码"
                                class="input"
                                autocomplete="current-password"
                                v-model="loginForm.password"
                            />
                        </div>
                    </div>
                    <!-- <div class="link">忘记密码?</div> -->
                    <div
                        class="btn"
                        id="btn_login"
                        ref="btn_login"
                        @click="btn_loginHandle"
                    >
                        登录
                    </div>
                </form>
            </div>

            <!-- Overlay -->
            <div class="container__overlay">
                <div class="overlay">
                    <div class="overlay__panel overlay--left">
                        <div
                            class="btn"
                            id="signIn"
                            ref="signInBtn"
                            @click="signInBtnHandle"
                        >
                            马上登录
                        </div>
                    </div>
                    <div class="overlay__panel overlay--right">
                        <div
                            class="btn"
                            id="signUp"
                            ref="signUpBtn"
                            @click="signUpBtnHandle"
                        >
                            现在注册
                        </div>
                    </div>
                </div>
            </div>
            <div id="success_register" ref="uccess_register_box">
                <p>注册成功，请登录</p>
                <span
                    ref="success_register_btn"
                    @click="success_register_btnHandle"
                >
                    确定
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { userRegister } from '@/api/user';
import { ElNotification } from 'element-plus';
// 引入用户相关的小仓库
import useUserStore from '@/store/modules/user';
import { useRouter, useRoute } from 'vue-router';
// 引入获取当前时间的函数
import { getTime } from '@/utils/time';
import { onMounted } from 'vue';
const loginForm = ref({ username: '', password: '' });
const registerForm = ref({
    username: '',
    password: '',
    repassword: '',
    invitation_code: '',
});
const signInBtn = ref();
const signUpBtn = ref();
const container = ref();
const success_register_btn = ref();
const success_register_box = ref();
const wrong_repassword = ref();
const wrong_username = ref();
const wrong_invitation_code = ref();
const btn_register = ref();
const wrong_login = ref();
const btn_login = ref();
// 获取路由器
let $router = useRouter();
// 获取路由
let $route = useRoute();
let useStore = useUserStore();
function signInBtnHandle() {
    // 清除数据
    Object.assign(loginForm.value, {
        username: registerForm.value.username,
        password: '',
    });
    container.value.classList.remove('right-panel-active');
}
function signUpBtnHandle() {
    // 清除数据
    Object.assign(registerForm.value, {
        username: '',
        password: '',
        repassword: '',
        invitation_code: '',
    });
    container.value.classList.add('right-panel-active');
}
function success_register_btnHandle() {
    success_register_box.value.style.zIndex = -101;
}
function handleUsernameInput() {
    wrong_username.value.style.display = 'none';
}
function handleInvitationInput() {
    wrong_invitation_code.value.style.display = 'none';
}
async function btn_registerHandle() {
    // 下面编写前端对注册信息的验证
    // 当点击提交的时候检查两次密码是否一致
    const password = registerForm.value.password;
    const repassword = registerForm.value.repassword;
    if (repassword != password) {
        // 此时两次密码不一致
        // 展示提示信息
        wrong_repassword.value.style.display = 'block';
        return;
    } else {
        wrong_repassword.value.style.display = 'none';
    }
    // 创建ajax进行传递数据
    const result = await userRegister(registerForm.value);
    // TODO 这里应该让按钮变成转圈状态，表示正在等待服务器的校验
    // 先修改文字展示
    btn_register.value.innerHTML = '正在注册中...';
    // 4.事件绑定
    if (result.code === 200) {
        // 提示成功
        ElNotification({
            type: 'success',
            message: '注册成功',
            title: `HI,请${registerForm.value.username}登录吧`,
        });
        btn_register.value.innerHTML = '注册';
        // 根据返回结果进行反馈结果
        if (result['username_check'] === false) {
            wrong_username.value.style.display = 'block';
        }
        if (result['repassword_check'] === false) {
            wrong_repassword.value.style.display = 'block';
        }
        if (result['invitation_code_check'] === false) {
            wrong_invitation_code.value.style.display = 'block';
        }
        if (result['creat_user'] == true) {
            // 进行提示注册成功请登录
            success_register_box.value.style.zIndex = 101;
            container.value.classList.remove('right-panel-active');
        }
        // 切换到登录
        signInBtnHandle();
    }
}
async function btn_loginHandle() {
    wrong_login.value.style.display = 'none';
    btn_login.value.innerHTML = '正在登录中...';
    try {
        // 可以书写.then语法
        // 保证登录成功
        await useStore.userLogin(loginForm.value);
        // 编程时导航跳转到展示数据首页
        // 判断登录的时候，路由路径当中是否有query参数，如果有就往query参数跳转，没有就跳转到首页
        let redirect: any = $route.query.redirect;
        $router.push({ path: redirect || '/' });
        // 登录成功提示信息
        ElNotification({
            type: 'success',
            message: '欢迎回来',
            title: `HI,${getTime()}好`,
        });
    } catch (error) {
        console.log(error);
        // 登录失败的提示信息
        ElNotification({
            type: 'error',
            message: (error as Error).message,
        });
        wrong_login.value.style.display = 'block';
    } finally {
        btn_login.value.innerHTML = '登录';
    }
}
</script>
<style lang="scss" scoped>
.web__title {
    font-size: 32px;
    font-weight: bold;
    margin: 15px 0;
}
:root {
}
* {
    padding: 0;
    margin: 0;
}
.body {
    width: 100vw;
    height: 100vh;
    align-items: center;
    background-color: var(--white);
    background: url('@/assets/images/backgroud.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    place-items: center;
}
ul {
    list-style: none;
}
.form__title {
    font-weight: 300;
    margin: 0;
}

.link {
    color: var(--gray);
    font-size: 0.9rem;
    margin: 1.5rem 0;
    text-decoration: none;
}

.container {
    /* COLORS */
    --white: #e9e9e9;
    --gray: #333;
    --blue: #0367a6;
    --lightblue: #008997;

    /* RADII */
    --button-radius: 0.7rem;

    /* SIZES */
    --max-width: 758px;
    --max-height: 420px;

    font-size: 16px;
    font-family: 'Microsoft YaHei', 'Heiti SC', tahoma, arial,
        'Hiragino Sans GB', 宋体, sans-serif;

    border-radius: var(--button-radius);
    box-shadow:
        0 0.9rem 1.7rem rgba(0, 0, 0, 0.25),
        0 0.7rem 0.7rem rgba(0, 0, 0, 0.22);
    height: var(--max-height);
    max-width: var(--max-width);
    overflow: hidden;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -379px;
    margin-top: -210px;
    width: 100%;
}

.container__form {
    height: 100%;
    position: absolute;
    top: 0;
    transition: all 0.6s ease-in-out;
}
.container__form .item {
    width: 100%;
    position: relative;
}
.container__form .item .inf {
    position: absolute;
    top: 5px;
    left: 70px;
    font-size: 12px;
    color: #ff7979;
    display: none;
}
.container__form .item .box {
    font-size: 14px;
    display: flex;
    border: 1px solid #e7e7e7;
    border-radius: 8px;
    background-color: #fff;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 24px;
    padding-right: 10px;
}
.container__form .item input {
    float: left;
    outline: none;
    border: none;
    padding-left: 0;
    line-height: 100%;
}
.container__form .item span {
    color: #212121;
    line-height: 100%;
    width: 100px;
}
.container--signin {
    left: 0;
    width: 50%;
    z-index: 2;
}

.container.right-panel-active .container--signin {
    transform: translateX(100%);
}

.container--signup {
    left: 0;
    opacity: 0;
    width: 50%;
    z-index: 1;
}

.container.right-panel-active .container--signup {
    animation: show 0.6s;
    opacity: 1;
    transform: translateX(100%);
    z-index: 5;
}

.container__overlay {
    height: 100%;
    left: 50%;
    overflow: hidden;
    position: absolute;
    top: 0;
    transition: transform 0.6s ease-in-out;
    width: 50%;
    z-index: 100;
}

.container.right-panel-active .container__overlay {
    transform: translateX(-100%);
}

.overlay {
    background-color: var(--lightblue);
    background: url('@/assets/images/backgroud.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    left: -100%;
    position: relative;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
    width: 200%;
}

.container.right-panel-active .overlay {
    transform: translateX(50%);
}

.overlay__panel {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    position: absolute;
    text-align: center;
    top: 0;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
    width: 50%;
}

.overlay--left {
    transform: translateX(-20%);
}

.container.right-panel-active .overlay--left {
    transform: translateX(0);
}

.overlay--right {
    right: 0;
    transform: translateX(0);
}

.container.right-panel-active .overlay--right {
    transform: translateX(20%);
}

.btn {
    background-color: var(--blue);
    background-image: linear-gradient(
        90deg,
        var(--blue) 0%,
        var(--lightblue) 74%
    );
    border-radius: 20px;
    border: 1px solid var(--blue);
    color: var(--white);
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
    padding: 0.9rem 4rem;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
}

.form > .btn {
    margin-top: 1.5rem;
}

.btn:active {
    transform: scale(0.95);
}

.btn:focus {
    outline: none;
}
#btn_register,
#btn_login {
    width: 168px;
    padding: 0.9rem 0;
}
#success_register {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: -101;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 1);
    width: 200px;
    padding: 20px;
    height: 100px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 8px;
    margin-top: -70px;
    margin-left: -120px;
    font-size: 18px;
}
#success_register p {
    text-align: center;
}
#success_register span {
    border: 1px solid #008eff;
    border-radius: 4px;
    background-color: #ff7979;
    padding: 5px 10px;
    cursor: pointer;
    color: #fff;
    display: block;
    width: 58px;
    margin: 0 auto;
    text-align: center;
    margin-top: 34px;
}
.form {
    background-color: var(--white);
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 3rem;
    height: 100%;
    text-align: center;
    display: flex;
}

.input {
    background-color: #fff;
    border: none;
    padding: 0.45rem 0.9rem;
    margin: 0.25rem 0;
    width: 100%;
}

@keyframes show {
    0%,
    49.99% {
        opacity: 0;
        z-index: 1;
    }

    50%,
    100% {
        opacity: 1;
        z-index: 5;
    }
}
</style>
