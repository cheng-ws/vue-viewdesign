<template>
    <div class="js-box">
        <div class="js-card-4  card-b-one">
            <card title="使用CSS重置(reset)">
                <template>
                    <div>

                    </div>
                </template>
            </card>
        </div>
        <div class="js-card-4">
            <card title="时间格式化1"></card>
        </div>
        <div class="js-card-4">
            <card title="时间格式化1" ref="card"></card>
        </div>
        <div class="js-card-4">
            <card title="时间格式化1" ref="card"></card>
        </div>
    </div>
</template>

<script>
    import Card from '@/components/Card';

    export default {
        name: "js_index",
        components: {
            Card,
        },
        data() {
            return {};
        },
        methods: {}
    }
</script>

<style scoped lang="scss">
    .js-box {
        width: 100%;
        height: 100%;
        padding: 10px;

        .js-card-4 {
            display: inline-block;
            width: 25%;
            height: 300px;
            padding: 10px;
        }

        .card-b-one {
            animation: cardAnimate 5s;
        }

        @keyframes cardAnimate {
            0% {
                width: 0%;
            }
            25% {
                width: 25%;
            }
            50% {
                width: 50%;
            }
            75% {
                width: 75%;
            }
            100% {
                width: 100%;
            }
        }
    }
</style>