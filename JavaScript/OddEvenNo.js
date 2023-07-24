const arr=[],non_prime=[],prime=[],odd=[],even=[]
let n=prompt("Enter number of elements of array: ")
console.log("Enter elements of array: ")
for (let i=0;i<n;i++){
  el=Number.parseInt(prompt())
  arr.push(el)
}
console.log("\nArray is: ",arr)
for(let i=0;i<n;i++){
  isPrime(arr[i],non_prime,prime)
  if(arr[i]%2==0)
    even.push(arr[i])
  else
    odd.push(arr[i])
}
console.log("\nPrime Numbers: ",prime)
console.log("\nNon-Prime Numbers: ",non_prime)
console.log("\nOdd Numbers: ",odd)
console.log("\nEven Numbers: ",even)