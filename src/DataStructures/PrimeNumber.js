/**
 * 
 * Prime NUmber 
 * 
 * isPrime (5) = true (1*5 or 5*1)
 *  is Prime (4) = false (1*4 or 2*2)
 * 
 * 
 */

function isPrime(n){
    if(n<2){
    return false
    }
    for(var i =2 ; i<n ; i++){
        if(n%i ===0){
            return false
        }
         
    }
    return true
 


}


console.log(isPrime(99));
// BIg - O(n)







