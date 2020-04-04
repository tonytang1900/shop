import {ADD_COUNTER, ADD_TO_CART} from '@/store/mutation-types'

export default {
  addToCart(context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartlist.find(item => item.iid === payload.iid)
      if (oldProduct) {
        // oldProduct.count++
        context.commit(ADD_COUNTER, oldProduct)
        resolve('已添加商品+1')
      } else {
        context.commit(ADD_TO_CART, payload)
        resolve('已添加商品')
      }
    })
  }
}
