// this的使用情况

var value = 1;

var foo = {
  value: 2,
  bar: function () {
    return this.value;
  }
}
//示例2
console.log((foo.bar)());
//示例3
console.log((foo.bar = foo.bar)());
//示例4
console.log((false || foo.bar)());
//示例5
console.log((foo.bar, foo.bar)());



// 实现Function.prototype.bind函数

if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== "function") {
      // closest thing possible to the ECMAScript 5 internal IsCallable function
      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var aArgs = Array.prototype.slice.call(arguments, 1), 
        fToBind = this, 
        fNOP = function () {},
        fBound = function () {
          return fToBind.apply(this instanceof fNOP && oThis
          ? this
          : oThis || window,
        aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
}

// 实现Array.prototype.reduce函数
// 累加器 4个参数 (total, current, Arr, base)

Array.prototype.fakeReduce = function fakeReduce(fn, base){
  let initialArr = this;
  let arr = initialArr.concat();

  if (base) arr.unshift(base);
  let index, newValue;
  while(arr.length > 1) {
    index = initialArr.length - arr.length + 1;
    new Value = fn.call(null, arr[0], arr[1], index, initialArr);

    arr.splice(0,2,newValue);
  }
  return newValue
}

// 实现栈的先进后出功能


