// 快速排序算法
function quickSort(array) {
  if (array.length == 0) {
    return
  } else if (array.length == 1) {
    return array
  } else {
    const provtIndex = Math.floor(array.length / 2)
    const pivot=arr.splice(pivotIndex,1)[0];
    const left = [];
    const right = [];
    for(let i=0; i<array.length; i++) {
      if (array[i]<pivot) {
        left.push(array[i])
      } else {
        right.push(array[i])
      }
    }
    return quickSort(left).concat([provt], quickSort(right))
  }
}
// 替换手机号中间4位为*
// 方法一
function splice(phone) {
  const tel = ''+ phone
  const array = tel.split('')
  array.splice(3,4,'****')
  const tell = array.join('')
  return tell
}
// 方法二
function substr(phone) {
  const tel = ''+ phone
  const tell = tel.substr(0,3)+"****"*tel.substr(7)
  return tell
}
// 方法三
function substring(phone) {
  const tel = ''+phone
  const tell = tel.replace(tel.substring(3,7), '****')
  return tell
}

// js执行机制
/** 
 *  console.log(1)
    setTimeout(function(){
        console.log(2);
        let promise = new Promise(function(resolve, reject) {
              console.log(7);
              resolve()
        }).then(function(){
            console.log(8)
        });
    },1000);
    setTimeout(function(){
        console.log(10);
        let promise = new Promise(function(resolve, reject) {
              console.log(11);
              resolve()
        }).then(function(){
            console.log(12)
        });
    },0);
    let promise = new Promise(function(resolve, reject) {
          console.log(3);
          resolve()
    }).then(function(){
        console.log(4)
    }).then(function(){
        console.log(9)
    });
    console.log(5)
 * 
 * 输出结果为1 3 5 4 9 10 11 12 2 7 8
*/

// 原型链
function Foo() {
  getName = function () { 
      console.log('1');
  };
  return this;
}

Foo.getName = function () {
  console.log('2');
};
Foo.prototype.getName = function () { 
  console.log('3');
};
var getName = function () { 
  console.log('4');
};
function getName() { 
  console.log(5);
}

Foo.getName();  
getName();    
Foo().getName(); 
getName();  
new Foo.getName(); 
new Foo().getName();   
new new Foo().getName(); 
// this指向

// 求两个数组的交集和并集

// bind call apply
// reduce
// 手动实现promise
// 继承
// 颗粒化函数

// 函数节流和函数防抖
/**
 *函数节流: 一段事件内核心代码只执行一次（忙着的时候就不执行）
  函数防抖：一定时间段的连续调用函数，只有足够的空闲时间，代码才执行一次（清除正在执行的，转而去执行新的）
 * 函数节流代码实现
 * var canrun = true
 * document.getElementById("aa").onscroll = =function() {
 *    if (!canrun) {
 *      return
 *    }
 *    canrun = false
 *    setTimeout(function(){
 *      console.log('函数节流')
 *      canrun = true
 *    }, 300)
 * }
 * 函数防抖代码实现
 * var timer = false
 * document.getElementById("aa").onscroll = function(){
 *    clearTimeout(timer); // 清除未执行的代码，重回初始化状态
 *    timer = setTimeout(function(){
 *      console.log('函数防抖')
 *    }, 300)
 * }
 *   */
// for循环内setTimeout的输出
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000);
  }
  /**
   * 输出的结果是5个5，原因是for循环在主线程，setTimeout是异步方法，主线程执行完之后，任务队列才会执行，此时的i已经是5了
   * 想要输出01234的话，var改为let
   * 使用闭包 
   *  */

   function fn(){
     console.log(this.name)
   }
   var obj = {
     name: 'obj',
     fn: fn
   }

   var fullName = '三角形'
   var obj = {
     fullName: '方块猴',
     prop: {
       fullName: '圆圆鼠',
       getFullName: function(){
         return this.fullName
       }
     }
   }
   obj.prop.getFullName()

   var getFullName = obj.prop.getFullName;
   getFullName()


   function test() {
     try{
       console.log(1)
       setTimeout(() => {
         console.log(2)
       }, 100)
       setTimeout(() => {
         console.log(3)
         throw new Error(5)
       })
       console.log(4)
     }catch(e){
       console.log(e)
     }
   }

   function protectPhone(phone){
    if (phone.toString().length !== 11) {
      console.log('手机号有误')
      return
    } 
    const tel = tel.splice(3,4, '****')
    return tel
   }

