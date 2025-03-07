export default function debounce(fn, during = 300) {
  let timer = null
  //使用剩余参数列表接收函数参数
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, during)
  }
}