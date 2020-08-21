/*
   1: average 数组平均数  num
   2: toEveryUpper 大写每个单词的首字母 str
   3: toOneUpper 一个首字母大写 str
   4: palindrome 检查回文 boolean
   5: countOccurrences 计数数组中值的出现次数 num
   6: getUrl 获取当前URL str
   7: deepFlatten  提升数组层级 []
   8: arrDiff 数组之间的区别 []
   9：distance 两点之间的距离 num
   10: isDivisible 是否能被整除 boolean
   11: escapeRegExp 转义正则
   12：factorial 阶乘
   13：fibonacci 斐波那契数组
   14：filterNonUnique 过滤数组中的非唯一值
   15：flatten 提升数组层级
   16：arrayMax 数组中获取最大值
   17：arrayMin 数组中获取最小值
   18：getScrollPos 获取滚动位置
 */
const useFuns = {
    average: function (arr) {
        if (Array.isArray(arr) && arr.length > 0) {
            return arr.reduce((acc, val) => acc + val, 0) / arr.length;
        }
    },
    toEveryUpper: function (str) {
        if (typeof str === 'string') {
            return str.replace(/\b[a-z]/g, char => char.toUpperCase());
        }
    },
    toOneUpper: function (str, lowerRest = false) {
        if (typeof str === 'string') {
            return str.slice(0, 1).toUpperCase() + (lowerRest ? str.slice(1).toLowerCase() : str.slice(1));
        }
    },
    palindrome: function (str) {
        if (typeof str === 'string') {
            const s = str.toLowerCase().replace(/[\W_]/g, '');
            return s === s.split('').reverse().join('');
        }
        // palindrome('taco cat') -> true
    },
    countOccurrences: function (arr, value) {
        return arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
    },
    getUrl: function () {
        return window.location.href;
    },
    deepFlatten: function (arr) {
        if (Array.isArray(arr)) {
            return arr.reduce((a, v) => a.concat(Array.isArray(v) ? this.deepFlatten(v) : v), []);
        }
    },
    arrDiff: function (a, b) {
        if (Array.isArray(a) && Array.isArray(b)) {
            const s = new Set(b);
            return a.filter(x => !s.has(x));
        }
    },
    distance: function (x0, y0, x1, y1) {
        return Math.hypot(x1 - x0, y1 - y0);
    },
    isDivisible: function (a,b) {
        return a % b === 0;
    },
    escapeRegExp: function (str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
    },
    factorial:function (n) {
        return n <= 1 ? 1:n*this.factorial(n-1);
    },
    fibonacci: function (n) {
        return Array(n).fill(0).reduce((acc,val,i)=>acc.concat(i>1 ? acc[i-1]+acc[i-2]:i),[]);
    },
    filterNonUnique: function (arr) {
        return arr.filter(i=>arr.indexOf(i) === arr.lastIndexOf(i));
    },
    flatten: function (arr) {
        return arr.reduce((a,v)=>a.concat(v),[]);
    },
    arrayMax: function (arr) {
        return Math.max(...arr);
    },
    arrayMin: function (arr) {
        return Math.min(...arr);
    },
    getScrollPos: function (el = window) {
        //获取滚动位置
        let x = el.pageXOffset !== undefined ? el.pageXOffset:el.scrollLeft;
        let y = el.pageYOffset !== undefined ? el.pageYOffset:el.scrollTop;
        return {x,y};
    },
    gcd: function (x,y) {
        //最大公约数
        return !y ? x : this.gcd(y,x % y);
    },
    initial: function (arr) {
        return arr.slice(0,-1);
    },
    initialArrayRange: function (end,start=0) {
        //用数字初始化数组
        return Array.apply(null,Array(end-start)).map((v,i)=>i+start);
    },
    initializeArray: function (n,value = 0) {
        //用固定的内容初始化数组
        return Array(n).fill(value);
    },
    arrLast: function (arr) {
        //列表最后一个值
        return arr.slice(-1)[0];
    },
    timeTaken: function (callback) {
        //测试功能所花费的时间
        console.time('timeTaken');
        const r = callback();
        console.timeEnd('timeTaken');
        return r;
    },
    objectFromPairs: function (arr) {
        //数组->对象
        return arr.reduce((a,v)=> (a[v[0]] = v[1],a),{});
    },
    randomInt: function (min,max) {
        //一定范围的整数随机数
        return Math.floor(Math.random()*(max-min+1)+min);
    },
    randomFloat: function (min,max) {
        //一定范围的浮点数随机数
        return Math.random()*(max-min)+min;
    },
    shuffle: function (arr) {
        //数组乱序
        return arr.sort(()=> Math.random() - 0.5);
    },
    redirect: function (url,asLink=true) {
        //重定向到url
        asLink ? window.location.href = url : window.location.replace(url);
    },
    reverseString: function (str) {
        //反转字符串
        return [...str].reverse().join('');
    },
    rgbToHex: function (r,g,b) {
        //(255,165,1)->'ffa501'
        return ((r << 16)+(g << 8) + b).toString(16).padStart(6,'0');
    },
    scrollToTop: function () {
        //滚动到顶部
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if(c>0) {
            window.requestAnimationFrame(this.scrollToTop);
            window.scrollTop(0,c-c/8);
        }
    },
    shuffleTwo: function (arr) {
        //数组乱序
        let r = arr.map(Math.random);
        return arr.sort((a,b)=> r[a] - r[b]);
    },
    similarity: function (arr,values) {
        //数组相同项
        return arr.filter(v=>values.includes(v));
    },
    sortChar: function (str) {
        //按字母排序
        return str.split('').sort((a,b)=> a.localeCompare(b).join(''));
    },
    sum: function (arr) {
        //数组总和
        return arr.reduce((acc,val)=> acc + val,0);
    },
    exchange: function (a,b) {
        //交换变量值
        return [a,b] = [b,a];
    },
    getUrlParams: function (url) {
        //url参数
        return url.match(/([^?=&]+)(=([^&]*))/g).reduce((a,v)=>(a[v.slice(0,v.indexOf('='))] = v.slice(v.indexOf('=')+1),a),{});
    },
    uuid: function () {
        // return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
    },
    validateNumber: function (n) {
        //验证数字
        //使用！isNaN和parseFloat（）来检查参数是否是一个数字，使用isFinite（）来检查数字是否是有限的
        return !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;
    },



};
export default useFuns;