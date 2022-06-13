import { createStore } from 'vuex'
import getters from './getters'

export default createStore({
  state: {
    signimage: "",
    company: null,
    signpdf: "",
  },
  mutations: {
    //缓存签名数据
    SET_SIGNIMAGE: (state, signimage) => {
      state.signimage = signimage
    },
    //缓存企业数据
    SET_COMPANY: (state, company) => {
      state.company = company
    },
    //缓存合同数据
    SET_SIGNPDF: (state, signpdf) => {
      state.signpdf = signpdf
    }
  },
  actions: {
    Setsign({ commit }, signimage) {
      commit('SET_SIGNIMAGE', signimage)
    },
    SetCompany({ commit }, company) {
      commit('SET_COMPANY', company)
    },
    SetSignPdf({ commit }, signpdf) {
      commit('SET_SIGNPDF', signpdf)
    }
  },
  modules: {
  },
  getters
})
