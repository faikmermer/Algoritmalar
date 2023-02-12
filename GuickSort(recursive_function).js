function sort(A){
  let less = []
  let greater = []
  let pivot = A[Math.floor(Math.random() * A.length)]
  
  if(A.length < 2){
    return A
  }else{
    döngü: for(let i=0; i<A.length; i++){
      if(pivot == A[i]){
        continue döngü;
      }
      
      if(A[i] <= pivot){
        less.push(A[i])
      }
      if(A[i] > pivot){
        greater.push(A[i])
      }
    }
  }
  return [...sort(less), ...sort([pivot]), ...sort(greater)]
}

console.log(sort([4, 5, 1, 6, 9]))
// print output: [1, 4, 5, 6, 9]
