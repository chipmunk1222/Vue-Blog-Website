import Mock from 'mockjs'

Mock.mock('/api/about','get',{
  code:0,
  msg:'',
  data:'https://strml.net'
  // data:'//phet.colorado.edu/sims/html/circuit-construction-kit-ac/latest/circuit-construction-kit-ac_zh_CN.html'
})  