import Mock from 'mockjs'
import Avatar from '@/assets/image/Avatar.jpg'

Mock.mock('/api/settings','get',{
  code: 0,
  msg: "",
  data: {
    avatar:Avatar,
    siteTitle:'我的个人空间',
    github:'chipmunk1222',
    qq:'2571403027',
    weixin:'q2571403027',
    mail:'2571403027@qq.com',
    siteTitle:'我的个人网站'
  }
})