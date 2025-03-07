import Mock from 'mockjs'

Mock.mock("/api/banner","get",{
  code: 0,
  msg:"",
  data:[
    {
      id:1,
      midImg:'https://img-baofun.zhhainiao.com/pcwallpaper_ugc/static/62cdb0120620d06634258b462c2ce464.jpg?x-oss-process=image%2fresize%2cm_lfit%2cw_960%2ch_540',
      bigImg:'https://www.thesprucepets.com/thmb/2K97c7-05caG1cASgKYAvlD1hV4=/4000x2667/filters:fill(auto,1)/husky-dog-lying-in-the-915124768-34493760df9648f99961b50a16c39529.jpg',
      title:"凛冬将至",
      description:"人唯有恐惧时方能勇敢",
    },
    {
      id:2,
      midImg:'https://www.voicer.me/wp-content/uploads/2019/03/%E7%AB%B9%E4%B8%AD%E7%A8%B2%E8%8D%B7%E7%A5%9E%E7%A4%BE.jpg',
      bigImg:'https://www.thesprucepets.com/thmb/2K97c7-05caG1cASgKYAvlD1hV4=/4000x2667/filters:fill(auto,1)/husky-dog-lying-in-the-915124768-34493760df9648f99961b50a16c39529.jpg',
      title:"血火同源",
      description:"如果我回头，一切都完了",
    },
    {
      id:3,
      midImg:'https://www.zf3d.com/Upload/zuopin/finish5_zf3d_2017527174529460.jpg',
      bigImg:'https://www.thesprucepets.com/thmb/2K97c7-05caG1cASgKYAvlD1hV4=/4000x2667/filters:fill(auto,1)/husky-dog-lying-in-the-915124768-34493760df9648f99961b50a16c39529.jpg',
      title:"听我怒号",
      description:"兰尼斯特有债毕偿",
    },
  ]
})