function isPrime(n,np,p){
    let flag=0
      if(n==1)
        flag=1
      for(let i=2;i<n;i++){
      if(n % i == 0){
        flag=1
        break
      }
    }
    if(flag==0)
      p.push(n)
    else if(flag==1)
      np.push(n)
    }  

    const arr=[]
    let n=prompt("Enter number of elements of array: ")
    console.log("Enter elements of array: ")
    for (let i=0;i<n;i++){
      el=Number.parseInt(prompt())
      arr.push(el)
    }
    console.log("Array is: ",arr)
    console.log("Prime Numbers in Array: ")
    for(let i=0;i<n;i++){
      isPrime(arr[i])
    }