import {request} from './request'

export function getGoodDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

//获取详情页面底部要展示的【推荐商品】
export function getGoodsRecommend() {
  return request({
    url: '/recommend'
  })
}
export class GoodsInfo {
  constructor(itemInfo, columns, services){
    this.title = itemInfo.title
    this.highNowPrice = itemInfo.highNowPrice
    this.highPrice = itemInfo.highPrice
    this.discountBgColor = itemInfo.discountBgColor
    this.discountDesc = itemInfo.discountDesc

    this.columns = columns

    this.services = services
  }
}

export class ShopInfo {
  constructor(shopInfo){
    this.name = shopInfo.name
    this.shopLogo = shopInfo.shopLogo
    this.cSells = shopInfo.cSells
    this.cGoods = shopInfo.cGoods
    this.score = shopInfo.score
  }
}

export class GoodsComments {
  constructor(comments){
    this.content = comments[0].content
    this.created = comments[0].created
    this.avatar = comments[0].user.avatar
    this.uname = comments[0].user.uname
  }
}


