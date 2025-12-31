/**
 * fibonacci(2) // [0,1]
 * fibonacci(3) // [0,1,1]
 * fibonacci(7) // [0,1,1,2,3,5,8]
 * 
 */

function fibonacci(n){
    let res =[0,1]
     for(var i =2 ; i<n ; i++){
      res[i] = res[i-1] + res[i-2];
        }

     
     return res;
}


console.log(fibonacci(7));

//Big -O(n) ==> Linear