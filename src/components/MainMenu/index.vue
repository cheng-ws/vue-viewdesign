<template>
    <ul class="menu-ul">
        <li class="menu-li" v-for="item in menuListData" :key="item._id" @click="handleRouterClick(item)" :class="{'menu-active-li': item.path === currentPath}">
            <i class="iconfont iconaixin" :class="{'menu-active-icon': item.path === currentPath}"/>
            <span class="menu-span">{{item.name}}</span>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "main-menu-index",
        props: {
            menuListData: {
                type: Array,
                default: ()=>[]
            },
            newPath: {
                type: String,
                default: '/home'
            }
        },
        data() {
            return {
                currentPath: this.newPath,
            };
        },
        watch: {

        },
        computed: {

        },
        mounted() {
        },
        methods: {
            handleRouterClick(item) {
                this.$emit('locationPush', item.path);
                this.currentPath = item.path;
            },
        }
    }
</script>

<style scoped lang="scss">
    .menu-ul {
        width: 100%;
        height: 100%;
        margin-left: 150px;
        .menu-li {
            display: inline-block;
            width: 10%;
            height: 100%;
            line-height: 50px;
            cursor: pointer;
            border: 1px solid rgba(1,1,1,0);
            text-align: center;
            transition: all 1s;
            &:hover {
                /*background: #ff6666;*/
                border-bottom: 2px solid #ff6666;
            }
            .menu-active-icon {
                color: #ff6666;
            }

            .menu-span {
                padding: 4px 0px 4px 10px;
            }
        }
        .menu-active-li {
            border-bottom: 2px solid #ff6666;
            .menu-span {
                color: #ff6666;
            }
        }
    }
</style>