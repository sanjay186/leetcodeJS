/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    const promise = [promise1,promise2];
    let results1 = 0 ;
  return  Promise.allSettled(promise).then(results => results.forEach((result) => 
    {
       
        results1=result.value + results1
        ;
    
    }
   )).then( ()=>
     Promise.resolve(results1));
   
  
};


  addTwoPromises(Promise.resolve(2), Promise.resolve(2))
    .then(console.log); // 4
 