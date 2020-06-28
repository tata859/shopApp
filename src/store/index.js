import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[]
  },
  mutations: {
    //mutations唯一目的修改state的状态，信息修改,有if等判断语句一般放入actions里执行
    addCartcount(state,payload){
      payload.count ++
    }
  },
  actions: {
    addCart(context,payload){   //context联系上下文
      //在cartlist数组里查找与新传入来的商品是否匹配存在
      return new Promise((resolve,reject)=>{
      let oldProduct = context.state.cartList.find(function(item){
        return item.iid === payload.iid
      })
      if(oldProduct){     //找到，数量加一
        context.commit('addCartcount',oldProduct)
        resolve('商品数量加一')
      }
      else {    //没找到，则新增，数量为一
        payload.count = 1
        payload.isred = false
        context.state.cartList.push(payload)
        resolve('添加购物车成功')
      }
      })
    }
  },
  modules: {
  }
})
