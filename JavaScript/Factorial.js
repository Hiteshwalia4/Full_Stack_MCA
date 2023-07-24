const fact=(n)=>{
    if(n==1 || n==0)
        return n ;
    return n*fact(n-1);    
}
const arr=[],output=[]
let el=0,f=1
let n=prompt("Enter number of elements of array: ")
console.log("Enter elements of array: ")
for (let i=0;i<n;i++){
  el=Number.parseInt(prompt())
  arr.push(el)
}
console.log("Array is: ",arr)
for(let i=0;i<n;i++){
    output[i]=fact(arr[i])
}
console.log("Factorial Array is: ",output)