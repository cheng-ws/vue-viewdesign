<template>
    <div>
        <search>
            <template>
                <Button class="search-btn" type="primary"  @click="show(index)">add</Button>
                <Button class="search-btn" type="error"  @click="remove(index)">del</Button>
            </template>
        </search>
        <table-list>
                <template>
                    <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">View</Button>
                    <Button type="error" size="small" @click="remove(index)">Delete</Button>
                </template>
        </table-list>
    </div>
</template>

<script>
    import TableList from '@/components/TableList';
    import Search from '@/components/Search';

    export default {
        name: "home_index",
        components: {
            TableList,
            Search,
        }
    }
</script>

<style scoped>

</style>