import {request} from './request'

export function getDetail(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

export function getRecommend() {
  return request({
    url:'/recommend'
  })
}
//面向对象编程  把数据整合到一起，方便使用
//Class是ES6写法定义对象  1：创建Class定义对象  2：对象内容定义一个函数可用于传值 3 定义的对象进行new值,用个值来接收数据
export class Goods {
  constructor(itemInfo,columns,services){
    this.desc = itemInfo.desc
    this.title = itemInfo.title
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.realPrice = itemInfo.lowNowPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
  }
}

/*Object.keys(Goods).length === 0  //判断对象是否有值*/

export class shop {
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}
