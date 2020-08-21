let jsFuns = {
    //防抖 当持续触发事件时，如果在设定的时间范围内频繁触发某个事件，则每次都会清空之前的计时，
    // 重新从0开始计时，直到在设定的时间范围内，没有事件触发，才会执行事件处理函数。以最后一次触发为准。
    debounce: function (fn, time, ...args) {
        let timer;
        return function () {
            let _this = this;
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(function () {
                fn.call(_this, ...args);
            }, time);
        };
    },
    //节流 多次触发，以第一次触发为准，当持续触发事件时，保证在设置的时间范围内只调用一次事件处理函数。
    throttle: function (fn, time, ...args) {
        let timer = null;
        return function () {
            let _this = this;
            if (!timer) {
                timer = setTimeout(function () {
                    fn.call(_this, ...args);
                }, time);
            }
        };
    },
    //深拷贝, 不考虑symbol和循环引用的情况
    deepClone1: function (obj) {
        if(typeof obj !== 'object' || obj == null) {
            return obj;
        }
        if(obj instanceof Date) {
            return new Date(obj);
        }
        if(obj instanceof RegExp) {
            return new RegExp(obj);
        }
        const res = Array.isArray(obj) ? [] : {};
        Object.keys(obj).forEach(key => {
            if(typeof obj[key] === 'object') {
                res[key] = this.deepClone1(obj[key]);
            }else {
                res[key] = obj[key];
            }
        });
        return res;
    },
    deepClone2: function (obj) {
        if(typeof obj !== 'object' || obj == null) {
            return obj;
        }
        if(obj instanceof Date) {
            return new Date(obj);
        }
        if(obj instanceof RegExp) {
            return new RegExp(obj);
        }
        const res = Object.create(Object.getPrototypeOf(obj));
        const keys = Object.getOwnPropertyNames(obj);
        keys.forEach(key=>{
            const value = Object.getOwnPropertyDescriptor(obj,key);
            Object.defineProperty(res,key,value);
        });
        return res;
    },
    //深拷贝, 考虑symbol和循环引用的情况
    deepClone3: function (obj,map= new Map()) {
        if(typeof obj !== 'object' || obj == null) {
            return obj;
        }
        if(map.has(obj)) {
            return map.get(obj);
        }
        const res = Array.isArray(obj) ? [] : {};
        map.set(obj,res);
        Reflect.ownKeys(obj).forEach(key=>{
            if(typeof obj[key] === 'object' && obj != null) {
                res[key] = this.deepClone3(obj[key],map);
            }else {
                res[key] = obj[key];
            }
        });
        return res;
    },
    //数组去重
    uniq1: function (arr) {
        return [...new Set(arr)];
    },
    uniq2: function (arr) {
        return Array.from(new Set(arr));
    },
    uniq3: function (arr) {
        return arr.reduce((prev,cur)=>{
            if(!prev.includes(cur)) {
                prev.push(cur);
            }
            return prev;
        },[]);
    },
    uniq4: function (arr) {
        const res = [];
        const map = {};
        arr.forEach(item=>{
            if(!map[item]) {
                res.push(item);
                map[item] = true;
            }
        });
        return res;
    },
    //数字乱序
    confuseArr: function (arr) {
        const res = [];
        while(arr.length) {
            res.push(arr.splice(Math.floor(Math.random()*(arr.length - 1)),1)[0]);
        }
        return res;
    },
    //call apply bind函数实现
    _call_apply_bind: function () {
        Function.prototype._call = function (context) {
            if(typeof this !== 'function') {
                throw new TypeError('not function');
            }
            const args = [...arguments].slice(1);
            context = context || window;
            context.fn = this;
            const res = context.fn(...args);
            delete context.fn;
            return res;
        };
        Function.prototype._apply = function (context) {
            if(typeof this !== 'function') {
                throw new TypeError('not function');
            }
            context = context || window;
            context.fn = this;
            let res;
            if(arguments[1]) {
                res = context.fn(...arguments[1]);
            }else {
                res = context.fn();
            }
            delete context.fn;
            return res;
        };
        Function.prototype._bind = function () {
            if(typeof this !== 'function') {
                throw new TypeError('not function');
            }
            const _this = this;
            const context = [...arguments].shift();
            const args = [...arguments].slice(1);
            return function F() {
                if(this instanceof  F) {
                    return new _this(...args,...arguments);
                }else {
                    return _this.apply(context,args.concat(...arguments));
                }
            }
        }
    },

};

function handleTouchMove(str) {
    console.log(str);
}

jsFuns.debounce(handleTouchMove, 1000, 222);
jsFuns.throttle(handleTouchMove, 1000, 222);
// 测试例子
let obj = {
    age: 18,
    favoriteAnimal: ['长颈鹿', '天鹅'],
    obj: {
        name: 'kele',
        age: 18
    },
};
let cloneObj1 = jsFuns.deepClone1(obj);
console.log("cloneObj1:", cloneObj1);
let cloneObj2 = jsFuns.deepClone2(obj);
console.log("cloneObj2:", cloneObj2);

// 测试例子
let objx ={};
objx.repeat = objx;
let objy = {
    [Symbol('name')]: 'litokele',
    gender: Symbol('male'),
    age: 18,
    favoriteAnime: ['xxx1', 'xxx2'],
    obj: {
        [Symbol('test')]: 'test',
        name: 'kele',
        age: 18
    },
    repeat: objx
};
let cloneObj3 = jsFuns.deepClone3(objy);
console.log(cloneObj3);
//  测试例子
const arr = [1,2,3,1,5,3,9,6,5];
jsFuns.uniq1(arr); // => [1, 2, 3, 5, 9, 6]
jsFuns.uniq2(arr); // => [1, 2, 3, 5, 9, 6]
jsFuns.uniq3(arr); // => [1, 2, 3, 5, 9, 6]
jsFuns.uniq4(arr); // => [1, 2, 3, 5, 9, 6]
// 测试例子
let confuseArr = jsFuns.confuseArr([1,2,3,4,5,6,7]);
console.log(confuseArr);
console.log([1,2,3,4,5,6,7].splice(Math.floor(Math.random()*(7- 1)),1));
// 测试例子
var value = "this is a window value";
var foo = {
    value: "this is a foo value"
};
function bar(...num) {
    console.log(`${this.value} is ${num}`);
}
bar(); // => this is a window value is
bar._call(foo, 111); // => this is a foo value is 111
bar._call(null, 111, 222); // => this is a window value is 111,222

// 测试例子
var value = "this is a window value";
var foo = {
    value: "this is a foo value"
};
function bar(...num) {
    console.log(`${this.value} is ${num}`);
}
bar(); // => this is a window value is
bar._apply(foo, [111]); // => this is a foo value is 111
bar._apply(null, [111, 222]); // => this is a window value is 111,222

// 测试例子
var value = "this is a window value";
var foo = {
    value: "this is a foo value"
};
function bar(num) {
    console.log(`${this.value} is ${num}`);
}
bar(222); // => this is a window value is 222
var bindFoo = bar._bind(foo, 111);
bindFoo(); // => this is a foo value is 111

