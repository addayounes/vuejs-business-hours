<template>
    <select :disabled="!isActive" @change="handleChange">
        <option v-for="(time, idx) in times" :key="idx" :value="time.value">
            {{time.time}}
        </option>
    </select>
</template>

<script>
export default {
    name: 'HoursSelect',
    props: ['times', 'dayIndex', 'toTime', 'isActive'],
    methods: {
        handleChange(e) {
            this.$store.commit('removeError', this.dayIndex)
            if(!this.toTime) {
                this.$store.commit('filterTimes', {timeValue: e.target.value, index: this.dayIndex})
                this.$store.commit('setStartTime', e.target.value)
                return
            } else {
                if(this.$store.state.filteredTimes[this.dayIndex].length) {
                    this.$store.commit('showAddHours', this.dayIndex)
                    if(e.target.value < this.$store.state.startTime) {
                        this.$store.commit('showError', this.dayIndex)
                    }
                }
            }
        }
    }
}
</script>

<style scoped>
select {
    padding: .85rem .5rem;
    outline: none;
    border-radius: 10px;
    border: 1px solid #CFD5DB;
}
</style>