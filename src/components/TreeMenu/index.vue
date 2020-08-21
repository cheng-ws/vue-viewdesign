<template>
    <div class="menu-ul-tree">
        <div class="menu-li-tree" v-for="item in treeMenuListData" :key="item._id">
            <div class="li-self" @click="handleParentClick(item)">
                <i class="iconfont startParent" :class="calcParentClass('startParent',item)"/>
                <span class="li-text">{{item.name}}</span>
                <i class="iconfont endParent" :class="calcParentClass('endParent',item)"/>
            </div>
            <div class="ul-children" v-if="item.show">
                <div class="li-self li-children" v-for="child in item.children" :key="child._id">
                    <div class="li-self" @click="handleChildClick(child)">
                        <i class="iconfont startParent" :class="child.icon"/>
                        <span class="li-c-text">{{child.name}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tree_menu_index",
        props: {
            treeMenuListData: {
                type: Array,
                default: () => []
            },
            newTreePath: {
                type: String,
                default: ''
            },
        },
        data() {
            return {
                currentPath: this.newTreePath,
            };
        },
        methods: {
            //计算样式
            calcParentClass(type, data) {
                let sendClass = "";
                let childBool = data.children.length > 0;
                if (type === 'startParent') {
                    sendClass = childBool ? 'iconliebiao' : data.icon;
                }
                if (type === 'endParent') {
                    sendClass = childBool ? (data.show ? 'iconguanbi_xiangxia1': 'icontop') : '';
                }
                return sendClass;
                // [item.path === currentPath 'menu-active-icon',: ]
            },
            //处理父级点击
            handleParentClick(data) {
                let vm = this;
                if(data.children.length > 0 ) {
                    vm.treeMenuListData.map(item=>{
                        item._id === data._id ? item.show = !data.show : '';
                    });
                }else {
                    vm.$router.push(data.path);
                }
            },
            //处理子级点击
            handleChildClick(data) {
                this.$router.push(data.path);
            }
        }
    }
</script>

<style scoped lang="scss">
    .menu-ul-tree {
        width: 100%;
        height: 100%;
        .menu-li-tree {
            width: 100%;
            .li-self {
                width: 100%;
                height: 40px;
                line-height: 40px;
                padding-left: 10px;
                .startParent {
                    margin-right: 10px;
                }
                .endParent {
                    float: right;
                    margin-right: 10px;
                }
                .li-text {
                    width: calc(100% - 60px);
                    overflow: hidden;
                }

                &:hover {
                    cursor: pointer;
                }
            }
            .li-children {
                .li-self {
                    float: right;
                }
            }
            .menu-active-icon {
                color: #ff6666;
            }
        }
    }
</style>