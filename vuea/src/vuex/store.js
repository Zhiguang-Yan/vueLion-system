/* eslint-disable quotes */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

// 状态
const state = {
  userinfo: JSON.parse(sessionStorage.getItem("userinfo")),
  userlist: [],
  login: false
}
// 改变操作state
const mutations = {
  // 保存用户数据
  SAVE_USERINFO (state, payload) {
    // 数据存入本地存贮
    sessionStorage.setItem("userinfo", JSON.stringify(payload))
    state.userinfo = payload
  },
  GET_USELIST (state, payload) {
    state.userlist = payload
  }
}
const actions = {
  GET_USELIST ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/getuserlist').then((result) => {
        commit('GET_USELIST', result.data)
        resolve()
      })
    })
  }
}
const getters = {
  vipUsers: state => {
    return state.userlist.filter((element) => {
      return element.age > 15
    })
  }
}
// 创建仓库暴露出去
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
