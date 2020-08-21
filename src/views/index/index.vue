<template>
    <div class="parent">
        <header>
            <div class="downMenu">
                <Dropdown trigger='custom' style="margin-left: 20px" :visible="downMenuVisible">
                    <Button type="primary" @click="handleChange">
                        <Icon type="md-contact" size="16"></Icon>
                        {{username}}
                        <Icon :type="downMenuVisible ? 'ios-arrow-down':'ios-arrow-up'"></Icon>
                    </Button>
                    <DropdownMenu slot="list">
                        <DropdownItem><Button @click="handleLoginOut">注销</Button></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </header>
        <div class="content">
            <div class="left-side">
                <Menu theme="light">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-paper" />
                            内容管理
                        </template>
                        <MenuItem name="1-1">文章管理</MenuItem>
                        <MenuItem name="1-2">评论管理</MenuItem>
                        <MenuItem name="1-3">举报管理</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-people" />
                            用户管理
                        </template>
                        <MenuItem name="2-1">新增用户</MenuItem>
                        <MenuItem name="2-2">活跃用户</MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-stats" />
                            统计分析
                        </template>
                        <MenuGroup title="使用">
                            <MenuItem name="3-1">新增和启动</MenuItem>
                            <MenuItem name="3-2">活跃分析</MenuItem>
                            <MenuItem name="3-3">时段分析</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="留存">
                            <MenuItem name="3-4">用户留存</MenuItem>
                            <MenuItem name="3-5">流失用户</MenuItem>
                        </MenuGroup>
                    </Submenu>
                </Menu>
            </div>
            <div class="main">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    // import MainMenu from '@/components/MainMenu';
    // import TreeMenu from '@/components/TreeMenu';
    import menuList from "@/assets/javascripts/menu";
    export default {
        name: "index_index",
        components: {
            // MainMenu,
            // TreeMenu,
        },
        data() {
            return {
                downMenuVisible: false,
                activeStyle: {},
                menuList:menuList,
                newPath: '/home',
                treeMenuList: [],
                newTreePath: "",
            };
        },
        watch: {
            '$route.path': {
                handler(val) {
                    val !== this.newPath ? this.newPath = val : '';
                },
                immediate: true,
            }
        },
        computed: {
            username () {
                let userInfo = sessionStorage.getItem('userInfo');
                userInfo = JSON.parse(userInfo);
                return userInfo.username||'';
            }
        },
        mounted() {
            // let arr = [
            //     {
            //         _id: '1',
            //         name: 'htmlPAGE',
            //         path: '',
            //         icon: 'iconchuangzuo',
            //         show: true,
            //         children: [
            //             {
            //                 _id: '1-1',
            //                 name: '星球动画',
            //                 path: '/html_page',
            //                 icon: 'iconwode2',
            //             }
            //         ]
            //     },
            //     {
            //         _id: '2',
            //         name: 'CSSPAGE',
            //         path: '/css_page',
            //         icon: 'iconchuangzuo',
            //         show: true,
            //         children: []
            //     }
            // ];
            // this.treeMenuList = arr;
            // this.newTreePath = arr[0].children[0].path;
        },
        beforeDestroy() {
            // removeEventListener('resize',this.handleResize());
        },
        methods: {
            handleChange() {
                // console.log(e);
                this.downMenuVisible = !this.downMenuVisible;
            },
            handleLocationPush(path) {
                this.$router.push(path);
            },
            handleLocationJump(path) {
                this.$router.push(path);
            },
            handleLoginOut(e) {
                console.log(e);
                sessionStorage.removeItem('userInfo');
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped lang="scss">
    .parent {
        width: 100%;
        min-width: 1320px;
        height: 100%;
        overflow: hidden;
        background-color: #ffffff;
        header {
            width: 100%;
            height: 50px;
            margin: 0 auto;
            .downMenu {
                float: right;
                line-height: 50px;
                margin-right: 20px;
            }
        }
        .content {
            width: 100%;
            height: 100%;
            .left-side {
                display: inline-block;
                width: 240px;
                height: 100%;

            }
            .main {
                display: inline-block;
                position: absolute;
                left: 240px;
                width: calc(100% - 240px);
                min-width: 1080px;
                height: 100%;
                padding: 10px 0 0 20px;
                box-shadow: 5px 5px;
            }
        }

        footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 100px;
        }
    }
</style>