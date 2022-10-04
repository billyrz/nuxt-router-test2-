export const state = () => ({
  token: ''
})
export const mutations = {
  setToken (state, value) {
    this.state.token = value
  }
}
export const actions = {
  nuxtServerInit (context) {
    // 这里 设置获取token 或者检测登录与否
    context.commit('setToken', '0XFF0000')
    console.log('nuxtServerInit', context)
    console.log('=============nuxtServerInit Can use this as Store==============')
    this.commit('setToken', '#FF000000')
  }
}
