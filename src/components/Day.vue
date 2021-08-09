<template>
    <div class="day-wrapper">
        <div @click="toggleActiveDay" class="day" :class="isActive ? 'active-day' : ''">
            <p>{{day}}</p>
        </div>
        <div class="hours">
            <div class="hour" :key="index" v-for="(hour, index) in hours">
                <div>
                    <HoursSelect :isActive="isActive" :toTime="false" :dayIndex="idx" :times="from" />
                </div>
                <div>
                    <span></span>
                </div>
                <div>
                    <HoursSelect :isActive="isActive" :toTime="true" :dayIndex="idx" :times="to" /> 
                </div>
            </div>
        </div>
        <div v-if="showAddHours && isActive && !error">
            <button @click="handleAddHours">Add Hours</button>
        </div>
    </div>
</template>

<script>
import HoursSelect from './HoursSelect.vue'
export default {
    name: 'Day',
    props: ['day', 'from', 'to', 'idx', 'showAddHours', 'error', 'hours'],
    components: {HoursSelect},
    data() {
        return {
            isActive: true,
        }
    },
    methods: {
        toggleActiveDay() {
            this.isActive = !this.isActive;
            this.$store.commit('resetHours', this.idx)
        },
        handleAddHours() {
            this.$store.commit('addHours', this.idx)
        }
    },
}
</script>

<style scoped>
.day-wrapper {display: flex}
.day-wrapper > .hours div + div,
.day-wrapper > div + div {margin-left: 1em}
.hour + div {margin: 1em 0 0 0 !important}
.hour {display: flex}
.day-wrapper  div  span {position: absolute}
.day-wrapper  div  span::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 22.5px;
    width: 12px;
    height: 1.5px;
    background-color: var(--clr-grey);
}
.day {
    width: 50px;
    height: 50px;
    background-color: var(--clr-grey);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-weight: 600;
    cursor: pointer;
    transition: .2s ease;
}
.active-day {background-color: var(--clr-primary)}
.day > p {
    pointer-events: none;
    user-select: none
}
button {
    background-color: #fff;
    padding: 1em;
    border: none;
    color: var(--clr-primary);
    border: 1px solid var(--clr-primary);
    border-radius: 8px;
    cursor: pointer;
    transition: .25s ease-out;
}
button:hover {background-color: hsl(220, 100%, 94%)}
</style>