<template>
    <div class="table-list">
        <Table border ref="selection" :columns="columns4" :data="data1">
            <template slot="action">
                 <slot></slot>
            </template>
        </Table>
        <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
                <Page :total="100" :current="1" @on-change="changePage"></Page>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "table_index",
        props: {},
        data() {
            return {
                columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    },
                    {
                        title: 'Action',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            };
        },
        mounted() {

        },
        methods: {
            changePage() {

            }
        }
    }
</script>

<style scoped lang="scss">
    .table-list {
        width: 100%;
        height: 100%;
        padding: 10px 20px 20px 0;

        .table-title {
            height: 50px;
            line-height: 50px;

            .table-search {
                width: 300px;
                display: inline-block;
            }

            .table-btns {
                width: calc(100% - 300px);
                float: right;
            }
        }

        .table-content {
            width: 100%;
            height: 100%;
        }
    }
</style>