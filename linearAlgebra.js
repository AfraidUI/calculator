/* this project is only a play. */


function det(array){
    'use strict';
    if(!isArray(array)){
        throw new TypeError('you should give an array.');
    }
    deepMap(array,function(a){
        if(typeof a !== 'number'){
        throw new TypeError('you should give a two-layer array and all of it should be a number.');
        }
        else {
            return a;
        }
    });
    for (let ind = 0;ind < array.length;ind++){
        if(array.length !== array[ind].length)
        throw new Error('this is not a square');
    }
    var result = 0;
    var work = function(nowArray){
        var row = nowArray.length;
        var line = nowArray[0].length;
        var fac;
        if(row == 1)
        return nowArray[0] && nowArray[0][0];
        else{
            for(var i = 0;i < line;i++){
                fac = nowArray[0][i];
                result += Math.pow(-1,i) * work(localDel(nowArray,i)) * fac;
            }
            return result;
        }
    }
    return work(array);
}
function localDel(array,index){
    var org = deepCopy(array);//必须维持原array的不变性。
    for(var i = 0;i < org.length;i++){
        org[i].splice(index,1);
    }
    org.shift();
    return org;
}
function deepCopy(a){
    if(!isObject(a) || a == null)
    return a;
    else {
        var copy= new a.constructor();
        for(let key in a){
            copy[key]=deepCopy(a[key]);
        }
        return copy;
    }
}
function isArray(tar) {
    if(tar.constructor === Array) {
        return true;
    }
    return false;
}
function isObject(tar) {
    if(tar.constructor === Object)
        return true;
    return false;
}
