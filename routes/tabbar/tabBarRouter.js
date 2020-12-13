const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index.html')
})

router.get('/tabbar', (req, res) => {
  res.status(200).json({
    code: 200,
    message: '请求成功',
    result: [
      {
        name: '首页',
        path: '/home',
        iconPath: '/public/img/tabbar/home.svg',
        iconActivePath: '/public/img/tabbar/home_active.svg'
      },
      {
        name: '分类',
        path: '/category',
        iconPath: '/public/img/tabbar/category.svg',
        iconActivePath: '/public/img/tabbar/category_active.svg'
      },
      {
        name: '购物车',
        path: '/shopcart',
        iconPath: '/public/img/tabbar/shopcart.svg',
        iconActivePath: '/public/img/tabbar/shopcart_active.svg'
      },
      {
        name: '我的',
        path: '/profile',
        iconPath: '/public/img/tabbar/profile.svg',
        iconActivePath: '/public/img/tabbar/profile_active.svg'
      }
    ]
  })
})

module.exports = router
