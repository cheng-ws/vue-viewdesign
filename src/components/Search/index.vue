<template>
    <div class="search">
        <div class="search-content"><Input search enter-button placeholder="模糊搜索......"/></div>
        <div class="search-btns">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "search_index"
    }
</script>

<style scoped lang="scss">
    .search {
        width: 100%;
        padding: 10px 20px 20px 0;
        height: 50px;
        line-height: 50px;

        .search-content {
            width: 300px;
            display: inline-block;
        }

        .search-btns {
            display: block;
            width: calc(100% - 300px);
            float: right;
            .search-btn {
                float: right;
                margin-right: 10px;
                &:first-child {
                    margin-right: 0;
                }
            }

        }

    }
</style>