/* this project is only a play. */
/* jshint esversion: 6 */

function deepMap(target,fun){
    if(!isArray(target) || target == null)
    return fun(target);
    else {
        for(var i = 0;i < target.length;i++){
            target[i] = deepMap(target[i],fun);
        }
        return target;
    }  
}
function check(array) {
    if(!isArray(array)){
        throw new TypeError('you should give an array.');
    }
    return deepMap(array,function(a){
        if(typeof a !== 'number'){
        throw new TypeError('you should give a two-layer array and all of it should be a number.');
        }
        else {
            return a;
        }
    });
}
function det(array){
    'use strict';
    check(array);
    for(let ind = 0;ind < array.length;ind++){
        if(array.length !== array[ind].length)
        throw new Error('this is not a square');
    }
    var work = function(nowArray){
        var result = 0;
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
    };
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
    if(!isArray(a) || a == null)
    return a;
    else {
        var copy= [];
        for(let i = 0; i < a.length; i++){
            copy[i]=deepCopy(a[i]);
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

function homoEqual(array) {
    if(det(array) !== 0) {
        return 0;
    }
}
function solve(array) {
    
}
