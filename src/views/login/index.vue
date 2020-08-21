<template>
    <div class="login-clock G-pos">
        <!--        <div class="single-demo">-->
        <!--            <div class="flip down" id="flip">-->
        <!--                <div class="digital front number0"></div>-->
        <!--                <div class="digital back number1"></div>-->
        <!--            </div>-->
        <!--            <div class="btn-con">-->
        <!--                <button id="btn1">向下翻+1</button>-->
        <!--                <button id="btn2">向上翻-1</button>-->
        <!--            </div>-->
        <!--        </div>-->
        <!--    <div class="date" id="date">-->

        <!--    </div>-->
        <div class="clock" id="clock">
            <div class="flip down">
                <div class="digital front" :class="'number'+time.number1"></div>
                <div class="digital back number1"></div>
            </div>
            <div class="flip down">
                <div class="digital front" :class="'number'+time.number2"></div>
                <div class="digital back number1"></div>
            </div>
            <em>:</em>
            <div class="flip down">
                <div class="digital front" :class="'number'+time.number3"></div>
                <div class="digital back number1"></div>
            </div>
            <div class="flip down">
                <div class="digital front" :class="'number'+time.number4"></div>
                <div class="digital back number1"></div>
            </div>
            <em>:</em>
            <div class="flip down">
                <div class="digital front" :class="'number'+time.number5"></div>
                <div class="digital back number1"></div>
            </div>
            <div class="flip down">
                <div class="digital front" :class="['number'+time.number6]"></div>
                <div class="digital back number1"></div>
            </div>
            <!--            <svg width="10000" height="11.515625">:class="{'up':flag[6]}"-->
            <!--                <text-->
            <!--                        dominant-baseline="baseline"-->
            <!--                        font-size="10"-->
            <!--                        y="9.515625"-->
            <!--                        style="line-height: 1; vertical-align: middle;"-->
            <!--                >-->
            <!--                    千山鸟飞绝 - from hill to hill no bird in flight-->
            <!--                </text>-->
            <!--            </svg>-->
        </div>
        <div class="login-Info">
            <input type="text" v-model.trim="username" placeholder="请输入用户名" @keydown.enter="handleGoLogin"/>
            <i class="iconfont iconlogin login-Info-icon" v-show="isVisibleUser" @click="handleGoLogin" title="登录"/>
            <br/>
            <input type="password" v-model.trim="password" placeholder="请输入密码" @keydown.enter="handleGoLogin"/>
            <i class="iconfont iconlogin login-Info-icon" v-show="isVisiblePass" @click="handleGoLogin" title="密码"/>
            <br/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login_index",
        data() {
            return {
                time: {
                    number1: '0',
                    number2: '0',
                    number3: '0',
                    number4: '0',
                    number5: '0',
                    number6: '0'
                },
                username: '',
                password: '',
                // //是否显示登录图标
                // isVisible: false,
            };
        },
        watch: {},
        computed: {
            isVisibleUser() {
                return this.username.length > 0;
            },
            isVisiblePass() {
                return this.password.length > 0;
            }
        },
        mounted() {
            this.timer = setInterval(() => {
                this.getForm();
            }, 1000);
        },
        beforeDestroy() {
            clearInterval(this.timer);
        },
        methods: {
            getForm() {
                let date = new Date();
                let hours = date.getHours();
                let minutes = date.getMinutes();
                let seconds = date.getSeconds();
                hours < 10 ? hours = '0' + hours : '';
                minutes < 10 ? minutes = '0' + minutes : '';
                seconds < 10 ? seconds = '0' + seconds : '';
                this.time = {
                    number1: hours.toString().slice(0, 1),
                    number2: hours.toString().slice(-1),
                    number3: minutes.toString().slice(0, 1),
                    number4: minutes.toString().slice(-1),
                    number5: seconds.toString().slice(0, 1),
                    number6: seconds.toString().slice(-1),
                };
                console.log(hours, minutes, seconds);
            },
            //输入框聚焦
            handleFoucus() {
                let vm = this;
                vm.isVisible = !vm.isVisible;
            },
            handleGoLogin() {
                let vm = this;
                if (vm.username.length > 0 && vm.password.length > 0) {
                    let userInfo = {
                        username: vm.username,
                        password: vm.password,
                    };
                    sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
                    vm.$router.push('/home');
                } else {
                    this.$Message.error({
                        background: true,
                        content: '用户和密码不能为空'
                    });
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .login-clock {
        top: 40%;

        .single-demo {
            margin: 50px auto;
            padding: 30px;
            width: 600px;
            text-align: center;
            border: solid 1px #999;
        }

        .flip {
            display: inline-block;
            position: relative;
            width: 60px;
            height: 100px;
            line-height: 100px;
            border: solid 1px #000;
            border-radius: 10px;
            background: #fff;
            font-size: 66px;
            color: #fff;
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
            text-align: center;
            font-family: "Helvetica Neue";
        }

        .flip .digital:before,
        .flip .digital:after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            background: #000;
            overflow: hidden;
            box-sizing: border-box;
        }

        .flip .digital:before {
            top: 0;
            bottom: 50%;
            border-radius: 10px 10px 0 0;
            border-bottom: solid 1px #666;
        }

        .flip .digital:after {
            top: 50%;
            bottom: 0;
            border-radius: 0 0 10px 10px;
            line-height: 0;
        }

        /*向下翻*/
        .flip.down .front:before {
            z-index: 3;
        }

        .flip.down .back:after {
            z-index: 2;
            transform-origin: 50% 0%;
            transform: perspective(160px) rotateX(180deg);
        }

        .flip.down .front:after,
        .flip.down .back:before {
            z-index: 1;
        }

        .flip.down.go .front:before {
            transform-origin: 50% 100%;
            animation: frontFlipDown 0.6s ease-in-out both;
            box-shadow: 0 -2px 6px rgba(255, 255, 255, 0.3);
            backface-visibility: hidden;
        }

        .flip.down.go .back:after {
            animation: backFlipDown 0.6s ease-in-out both;
        }

        /*向上翻*/
        .flip.up .front:after {
            z-index: 3;
        }

        .flip.up .back:before {
            z-index: 2;
            transform-origin: 50% 100%;
            transform: perspective(160px) rotateX(-180deg);
        }

        .flip.up .front:before,
        .flip.up .back:after {
            z-index: 1;
        }

        .flip.up.go .front:after {
            transform-origin: 50% 0;
            animation: frontFlipUp 0.6s ease-in-out both;
            box-shadow: 0 2px 6px rgba(255, 255, 255, 0.3);
            backface-visibility: hidden;
        }

        .flip.up.go .back:before {
            animation: backFlipUp 0.6s ease-in-out both;
        }

        @keyframes frontFlipDown {
            0% {
                transform: perspective(160px) rotateX(0deg);
            }

            100% {
                transform: perspective(160px) rotateX(-180deg);
            }
        }

        @keyframes backFlipDown {
            0% {
                transform: perspective(160px) rotateX(180deg);
            }

            100% {
                transform: perspective(160px) rotateX(0deg);
            }
        }

        @keyframes frontFlipUp {
            0% {
                transform: perspective(160px) rotateX(0deg);
            }

            100% {
                transform: perspective(160px) rotateX(180deg);
            }
        }

        @keyframes backFlipUp {
            0% {
                transform: perspective(160px) rotateX(-180deg);
            }

            100% {
                transform: perspective(160px) rotateX(0deg);
            }
        }

        .flip .number0:before,
        .flip .number0:after {
            content: "0";
        }

        .flip .number1:before,
        .flip .number1:after {
            content: "1";
        }

        .flip .number2:before,
        .flip .number2:after {
            content: "2";
        }

        .flip .number3:before,
        .flip .number3:after {
            content: "3";
        }

        .flip .number4:before,
        .flip .number4:after {
            content: "4";
        }

        .flip .number5:before,
        .flip .number5:after {
            content: "5";
        }

        .flip .number6:before,
        .flip .number6:after {
            content: "6";
        }

        .flip .number7:before,
        .flip .number7:after {
            content: "7";
        }

        .flip .number8:before,
        .flip .number8:after {
            content: "8";
        }

        .flip .number9:before,
        .flip .number9:after {
            content: "9";
        }

        .clock {
            text-align: center;
            /*margin-bottom: 200px;*/
        }

        .clock em {
            display: inline-block;
            line-height: 102px;
            font-size: 66px;
            font-style: normal;
            vertical-align: top;
        }

        .login-Info {
            text-align: center;
            margin-top: 20px;

            input {
                width: 300px;
                height: 30px;
                font-size: 12px;
                text-align: center;
                padding: 5px 10px;
                border: 1px solid #fff;
            }

            i {
                &:hover {
                    color: #ff6666;
                }
            }

            .login-Info-icon {
                margin-left: -25px;
                vertical-align: middle;
            }
        }
    }
</style>