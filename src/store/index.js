import { createStore } from "vuex";
import { Times } from "./Times";

export default createStore({
    state: {
        availableTimes: [Times, Times, Times, Times, Times, Times, Times],
        filteredTimes: [Times, Times, Times, Times, Times, Times, Times],
        addHours: [false, false, false, false, false, false, false],
        error: [false, false, false, false, false, false, false],
        hoursCount: [[1], [1], [1], [1], [1], [1], [1]],
        startTime: 1200,
    },
    mutations: {
        filterTimes(state, payload) {
            state.filteredTimes[payload.index] = state.availableTimes[payload.index].filter(
                (time) => time.value > payload.timeValue
            );
        },
        showAddHours(state, payload) {
            state.addHours[payload] = true;
        },
        showError(state, payload) {
            state.error[payload] = true;
        },
        removeError(state, payload) {
            state.error[payload] = false;
        },
        setStartTime(state, payload) {
            state.startTime = payload;
        },
        addHours(state, payload) {
            state.hoursCount[payload].splice(0, 0, 1);
        },
        resetHours(state, payload) {
            state.hoursCount[payload] = [1];
        },
    },
    actions: {},
    modules: {},
});
