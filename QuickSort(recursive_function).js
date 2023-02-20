function sort(A){
  
  let less = []
  let greater = []
  let pivot = A[Math.floor(Math.random() * A.length)] // or for best case A[Math.floor(A.length / 2)]
  
  if(A.length < 2){
    return A
  }else{ // 1) show
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
      
      /* 2) Show short with multiple ?
         (pivot == A[i]) ? continue : 
         (A[i] <= pivot) ? less.push(A[i] :
         (A[i] > pivot)  ? greater.push(A[i] :
         return
         
       */
    }
  }
  return [...sort(less), ...sort([pivot]), ...sort(greater)]
}

console.log(sort([4, 5, 1, 6, 9, 2]))
// print output: [1, 2, 4, 5, 6, 9]

