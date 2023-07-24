let str="abcdef"
let arr=str.split("")
console.log("Original String:",str)
for(let i=0;i<arr.length-1;i+=2){
  let temp=arr[i]
  arr[i]=arr[i+1]
  arr[i+1]=temp
}
str=arr.join("")
console.log("After operation:",str)
