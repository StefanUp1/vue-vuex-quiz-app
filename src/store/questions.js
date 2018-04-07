import questions from '../data/data.js'

const state = {
    questions: questions,
    questionIndex: 0,
    seen: false,
}

const mutations = {
    'NEXT'(state) {
        state.questionIndex++
    },
    'PREV'(state) {
        state.questionIndex--
    },
    'SEEN'(state) {
        state.seen = true
    }
}

const actions = {
    nextQ: ({commit}) => {
        commit('NEXT')
    },
    prevQ: ({commit}) => {
        commit('PREV')
    },
    seen: ({commit}) => {
        commit('SEEN')
    }
}

const getters = {
    questions: state => {
        return state.questions
    },
    questionIndex: state => {
        return state.questionIndex
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
