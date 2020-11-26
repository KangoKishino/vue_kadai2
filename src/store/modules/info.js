const state = {
    gender: '',
    year: 1990,
    month: 1,
    day: 1,
    sign: '',
    hospitalize: '',
    surgery: '',
    content: '',
    nthQuestion: 1
}

const mutations = {
    changed(state, value) {
        state.gender = value
    },
    isSign(state, value) {
        state.sign = value
    },
    isHospitalize(state, value) {
        state.hospitalize = value
    },
    isSurgery(state, value) {
        state.surgery = value
    },
    prevQuestion(state) {
        state.nthQuestion--;
    },
    nextQuestion(state) {
        state.nthQuestion++;
    },
    setYear(state, value) {
        state.year = value;
    },
    setMonth(state, value) {
        state.month = value;
    },
    setDay(state, value) {
        state.day = value;
    },
    changeContent(state, value) {
        state.content = value;
    },
    clearDay(state) {
        state.day = '';
    }
}

const getters = {
    gender: state => state.gender,
    year: state => state.year,
    month: state => state.month,
    day: state => state.day,
    sign: state => state.sign,
    hospitalize: state => state.hospitalize,
    surgery: state => state.surgery,
    content: state => state.content,
    nthQuestion: state => state.nthQuestion
}

const actions = {
}

export default {
    state,
    getters,
    actions,
    mutations
}