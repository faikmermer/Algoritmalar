function fun(A){
    if(A.length == 1){
        return A[0]
    }
    let enBuyuk = A.splice(0,1)
    let k = fun(A)
    if(k < enBuyuk){
        return enBuyuk
    }else{
        return k
    }
}
console.log(fun([4, 44, 66, 33]))



/* Python Kodu ise Şöyledir.

def fn(A):
    if(A[0] == A[-1]):
        return A[0]
        
    enBuyuk = A[0]
    k = fn(A[1:])
    if(k < enBuyuk):
        return enBuyuk
    else:
        return k

*/
