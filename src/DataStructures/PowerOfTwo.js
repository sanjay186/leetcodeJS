/**
 * Power of two
 * 
 * PowerOftwo(1)= true (2^0)
 * PowerOftwo(2)= true (2^1)
 * PowerOftwo(5) = false 
 * 
 */

function PowerOftwo(n) {
    if(n<1){
        return false
    }
  
    while(n>1){
        if(n % 2 !==0){
            return  false
        }
        n= n/2 
    }
    return true;
}
console.log(PowerOftwo(5));