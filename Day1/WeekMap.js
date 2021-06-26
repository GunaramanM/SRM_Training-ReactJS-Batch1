let weakmap=new WeakMap();
let val1={value:"some data"};
let key1={key:1};
weakmap.set(key1,val1);
console.log(weakmap.get(key1));