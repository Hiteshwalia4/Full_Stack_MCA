let a=0,b=1
let n=prompt("Enter n till where you want to print Fibonacci Series: ")
console.log(a)
console.log(b)
for(let i=2;i<n;i++){
  let c=a+b
  console.log(c)
  a=b
  b=c
}