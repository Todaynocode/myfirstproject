// 请实现一个protectPhone函数，可以替换手机号字符串中间4位为“****”
function protectPhone(phone) {
  const tel = phone.toString()
  if (tel.length !== 11) {
    console.log('请输入正确的手机号')
    return
  }
  const tell = tel.substr(0,3)+'****'+tel.substr(7)
  return tell
}
// 请实现一个intersection函数，可以得到两个数组的交集
function intersection(arrayA, arrayB) {
  const arrayC = []
  for(let i =0; i< arrayA.length; i++) {
    if (arrayB.indexOf(arrayA[i]) > -1) {
      arrayC.push(arrayA[i])
    }
  }
  return arrayC
}
// 请实现一个字符串连续去重的函数
function dedupe(str) { // 字符串去重
  const arrayStr = str.split('')
  const dedupeStr = Array.from(new Set(arrayStr)).join('')
  return dedupeStr
}
function constantDedupe(str) {
  const arrayStr = str.split('')
  const arrayDedupe = []
  for(let i=0,j=i+1; i< arrayStr.length, j<arrayStr.length+1; i++, j++) {
    if (arrayStr[i] !== arrayStr[j]) {
      arrayDedupe.push(arrayStr[i])
    }
  }
  return arrayDedupe.join('')
}
// 实现栈的先进后出功能
function NumberStack() {
  this.stack=[];
  this.maxStack =[];
}
NumberStack.prototype.push = function(num){
  if (Object.prototype.toString.call(num)){

  }
}
// 实现Array.prototype.reduce函数
// 累加器 4个参数 (total, current, Arr, base)

function reduce(total, current, Arr, base) {

}

// 实现Function.prototype.bind函数

// 写一个快速排序算法