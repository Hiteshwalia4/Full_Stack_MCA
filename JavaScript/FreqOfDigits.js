const count=new Array(9).fill(0)
let n=prompt("Enter any number: ")
arr=Array.from(n)
console.log(arr)
for(let i=0;i<arr.length;i++)
    count[arr[i]]++
for(let i=0;i<arr.length;i++)
  if(count[i]!=0)
    console.log("Frequency of",i,"in",n,"is:",count[i])