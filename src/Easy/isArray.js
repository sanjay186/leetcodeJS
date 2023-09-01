// Given an object or an array, return if it is empty.

// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.

/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    let result ;
    const isArray = Array.isArray(obj);
    if(isArray){
    return  result =   obj.length >0 ? false : true
    }else {
        keys = Object.keys(obj);
        return keys.length>0 ? false : true
    }

};

console.log(isEmpty( {"x": 5, "y": 42}));
console.log(isEmpty( {}));

console.log(isEmpty( [null, false, 0]));

/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    return Object.keys(obj).length === 0 ? true : false;
 };