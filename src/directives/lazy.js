import EventBus from '@/EventBus';
import { debounce } from '@/utils';
import picture from '@/assets/image/default.gif'

let imgs = []
  
function setImage(img){
  img.dom.src = picture

  const clientHeight = document.documentElement.clientHeight
  const rect = img.dom.getBoundingClientRect()
  if(rect.top>=-rect.height && rect.top<=clientHeight){
    img.dom.src = img.src
    imgs = imgs.filter(item=>item !== img)
  }

}
function setImages(){
  for(const img of imgs){
    setImage(img)
  }
}
function handleScroll(){
  setImages();
}

EventBus.$on('handleScroll', debounce(handleScroll,50))

export default {
  inserted(el,binding){
    const img = {
      dom:el,
      src:binding.value,
    }
    imgs.push(img);
    setImage(img)
  },
  unbind(el){
    imgs = imgs.filter(img=>img.dom !== el)
  }
}