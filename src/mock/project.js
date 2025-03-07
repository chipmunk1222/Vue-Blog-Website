import Mock from 'mockjs'

Mock.mock(/^\/api\/project\/?$/,'get',{
  code:0,
  msg:'',
  'data|10-20': [
    {
      id:"@uuid",
      title:'@ctitle(1,10)',
      'url|1':['@url',null],
      github:['@url',null],
      'description|1-4':['@cparagraph(1,5)'],
      thumb:"@image('200x100','@color','@natural')",
    }
  ]
})