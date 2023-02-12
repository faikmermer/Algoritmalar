function sort(A){
  let less = []
  let greater = []
  let pivot = A[0]
  
  if(A.length < 2){
    return A
  }else{
    
    for(let i=1; i<A.length; i++){
      if(A[i] <= pivot){
        less.push(A[i])
      }
      if(A[i] > pivot){
        greater.push(A[i])
      }
    }
  }
  return sort(less) + sort([pivot]) + sort(greater)
}

console.log(sort([4, 5, 1, 6, 9]))
// output : 1 4 5 6 9
