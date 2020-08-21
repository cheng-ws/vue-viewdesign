<template>
    <div class="card-box" :class="activeClass" :style="activeStyle" >
        <div class="card-b-t">
            <div class="t-l"><h5>{{title}}</h5></div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "card_index",
        props: {
            title: {
                type: String,
                default: ""
            },
            activeClass: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
               activeStyle: {
                   width: '100%',
                   height: '100%',
               }
            };
        },
        methods: {
            //重置基础样式
            _resetStyle(obj) {
                this.activeStyle = obj;
            },
        }
    }
</script>

<style scoped lang="scss">
.card-box {
    padding: 10px;
    box-shadow: 0 0 5px 5px #e9e9e9;
    .card-b-t {
        height: 40px;
        font-size: 16px;
        position: relative;
        .t-l {
            width: 50%;
            line-height: 40px;
            padding-left: 10px;
            text-shadow: 0 0 3px 3px #E6E6E6;
        }
    }
    .card-b-one {
        animation: cardAnimate 5s;
    }
}
@keyframes cardAnimate
{
    0%   {width: 0%; }
    25%  {width: 25%; }
    50%  {width: 50%; }
    75%  {width: 75%; }
    100% {width: 100%; }
    /*from {*/
    /*    width: 0%;*/
    /*}*/
    /*to {*/
    /*    width: 25%;*/
    /*}*/
}

@-webkit-keyframes cardAnimate /* Safari 与 Chrome */
{
    from {background: red;}
    to {background: yellow;}
}
</style>