let arrayFuns = {
    //提升层级
    _flat: function (arr,depth) {
        if(!Array.isArray(arr)||depth <= 0) {
            return arr;
        }
        return arr.reduce((prev,cur)=>{
            if(Array.isArray(cur)) {
                return prev.concat(this._flat(cur,depth - 1));
            }else {
                return prev.concat(cur);
            }
        },[]);
    },


};
Array.prototype._filter = function(fn) {
    if(typeof fn !== 'function') {
        throw Error('参数必须是一个函数');
    }
    const res = [];
    let len = this.length;
    for(let i = 0; i< len;i++) {
        fn(this[i]) && res.push(this[i]);
    }
    return res;
};
Array.prototype._map = function(fn) {
    if(typeof fn !== 'function') {
        throw Error('参数必须是一个函数');
    }
    const res = [];
    let len = this.length;
    for(let i=0; i < len; i++) {
        res.push(fn(this[i]));
    }
    return res;
};
// 测试例子
arrayFuns._flat([1,2,3,[4,5,[6,7]]], 1); // => [1, 2, 3, 4, 5, [6, 7]]
arrayFuns._flat([1,2,3,[4,5,[6,7]]], 2); // => [1, 2, 3, 4, 5, 6, 7]
// 测试例子
const arr = [1,2,3,4,5];
arr._filter(item => item > 3);