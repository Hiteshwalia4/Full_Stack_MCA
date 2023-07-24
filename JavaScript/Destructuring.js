const [a,b,...c] = [1,2,3,4,5]
console.log(a)
console.log(b)
console.log(c)

function foo(){
  return [a,,b]=[1,2,3,4,5]
}
let f =foo()

let a,b,c,d,e,f,rest,pop,push;
var arr=[1,2,3,4,5,6,7,8,9];
[a,b]=arr;
console.log(a);
console.log(b);

[a,,b]=arr;
console.log(a);
console.log(b);

[a,b,...{pop,push}]=arr;
console.log(a);
console.log(b);
console.log(rest);



 