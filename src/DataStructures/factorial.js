/**
 * 
 * factorial zero is 1
 * factorial (4) = 4*3*2*1 =24
 * factorial (5) = 5*4*3*2*1 =120
 */
function factorial (n){
    let res =1;
    for(var i=1 ;i<=n;i++){
        
        res *=i
    }
    return res;
}

console.log(factorial(0))


//Big -O(n) ==> Linear