<template>
    <div class="sort">
        <h1>Sort your questions</h1>
        <div class="sortOptions">
        <input type="checkbox" id="checkbox" v-model="checkedA">
<label for="checkbox">A</label>
<input type="checkbox" id="checkbox" v-model="checkedB">
<label for="checkbox">B</label>
<input type="checkbox" id="checkbox" v-model="checkedC">
<label for="checkbox">C</label>
<input type="checkbox" id="checkbox" v-model="checkedD">
<label for="checkbox">D</label>
</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                checkedA: false,
                checkedB: false,
                checkedC: false,
                checkedD: false,
            }
        },
        beforeUpdate() {
            const checkedFilt = [
                {tag: "a", enabled: this.checkedA},
                {tag: "b", enabled: this.checkedB},
                {tag: "c", enabled: this.checkedC},
                {tag: "d", enabled: this.checkedD},
            ]
            const checkedFilters = []
            checkedFilt.forEach(filter => {
                if (filter.enabled) {
                    checkedFilters.push(filter)
                }
            })
            this.$store.commit('questions/filter', checkedFilters)
            this.$store.commit('questions/filterQuestions', checkedFilters)
        }
    }
</script>
<style scoped>
    .sort {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
</style>