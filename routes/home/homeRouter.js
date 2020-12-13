const express = require('express')

const router = express.Router()

router.get('/home/swiper', (req, res) => {
  res.status(200).json({
    code: 200,
    message: '请求成功',
    result: {
      swiperLists: [
        {
          image: '/public/img/swiper/01.jpg',
          detailLink: 'aaa'
        },
        {
          image: '/public/img/swiper/02.jpg',
          detailLink: 'bbb'
        },
        {
          image: '/public/img/swiper/03.jpg',
          detailLink: 'ccc'
        },
        {
          image: '/public/img/swiper/04.jpg',
          detailLink: 'ddd'
        }
      ],
      count: 4
    }
  })
})

module.exports = router
