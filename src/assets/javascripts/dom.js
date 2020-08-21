//数组Array
//1. 数组去重
function noRepeat(arr) {
    return [...new Set(arr)];
}
//2.数组最大
function arrayMax(arr) {
    return Math.max(...arr);
}
//3.数组最小
function arrayMin(arr) {
    return Math.min(...arr);
}
//4.返回size为长度的数组分割的原数组
function chunk(arr,size=1) {
    return Array.from({length:Math.ceil(arr.length / size)},(v,i)=>arr.slice(i*size,i*size+size));
}
//5.检查数组中某元素出现的次数
function countOccurrences(arr,value) {
    return arr.reduce((a,v)=> (v === value ? a+1 : a+0),0);
}
///6.扁平化数组
function flatten(arr,depth =1) {
    if(depth === -1) {
        return [].concat(...arr.map((v)=>(Array.isArray(v) ? this.flatten(v):v)));
    }
    if(depth === 1) {
        return arr.reduce((a,v)=>a.concat(v),[]);
    }
    return arr.reduce((a,v)=>a.concat(Array.isArray(v)?this.flatten(v,depth):v),[]);

}
//7.对比两个数组并且返回其中不同的元素
function differArray(arrA,arrB) {
    return arrA.filter((v)=>!arrB.includes(v));
}
//8.返回两个数组中相同的元素
function everyArray(arr1,arr2) {
    return arr1.filter(v=>arr2.includes(v));
}
//9.从右删除n个元素
function dropRight(arr,n=0) {
    return n < arr.length ? arr.slice(0,arr.lengyh -n ): [];
}
//10.截取第一个符合条件的元素及其以后的元素
function dropElements(arr,fn) {
    while(arr.length && !fn(arr[0])) arr = arr.slice(1);
    return arr;

}
//11.返回数组中下标间隔nth的元素
function everyNth(arr,nth) {
    return arr.filter((v,i)=>i%nth === nth-1);
}
//12.返回数组中第n个元素
function nthElement(arr,n=0) {
    return (n >= 0 ? arr.slice(n,n+1): arr.slice(n))[0];
}
//13.返回数组头元素
function headArray(arr) {
    return arr[0];
}
//14.返回数组末尾元素
function lastArray(arr) {
    return arr[arr.length -1];
}
//15.数组乱排
function shuffle(arr) {
    let array = arr;
    let index = array.length;
    while(index) {
        index -= 1;
        let randomIndex = Math.floor(Math.random()*index);
        let middleware = array[index];
        array[index]= array[randomIndex];
        array[randomIndex] = middleware;
    }
    return array;
}

//浏览器对象BOM
//16.判断浏览器是否支持css属性
/**
 * 告知浏览器支持的指定css属性情况
 * @param {String} key - css属性，是属性的名字，不需要加前缀
 * @returns {String} - 支持的属性情况
 */
function validateCssKey(key) {
    const jsKey = toCamelCase(key); // 有些css属性是连字符号形成
    if (jsKey in document.documentElement.style) {
        return key;
    }
    let validKey = "";
// 属性名为前缀在js中的形式，属性值是前缀在css中的形式
// 经尝试，Webkit 也可是首字母小写 webkit
    const prefixMap = {
        Webkit: "-webkit-",
        Moz: "-moz-",
        ms: "-ms-",
        O: "-o-",
    };
    for (const jsPrefix in prefixMap) {
        const styleKey = toCamelCase(`${jsPrefix}-${jsKey}`);
        if (styleKey in document.documentElement.style) {
            validKey = prefixMap[jsPrefix] + key;
            break;
        }
    }
    return validKey;
}

/**
 * 把有连字符号的字符串转化为驼峰命名法的字符串
 */
function toCamelCase(value) {
    return value.replace(/-(\w)/g, (matched, letter) => {
        return letter.toUpperCase();
    });
}

/**
 * 检查浏览器是否支持某个css属性值（es6版）
 * @param {String} key - 检查的属性值所属的css属性名
 * @param {String} value - 要检查的css属性值（不要带前缀）
 * @returns {String} - 返回浏览器支持的属性值
 */
function valiateCssValue(key, value) {
    const prefix = ["-o-", "-ms-", "-moz-", "-webkit-", ""];
    const prefixValue = prefix.map((item) => {
        return item + value;
    });
    const element = document.createElement("div");
    const eleStyle = element.style;
// 应用每个前缀的情况，且最后也要应用上没有前缀的情况，看最后浏览器起效的何种情况
// 这就是最好在prefix里的最后一个元素是''
    prefixValue.forEach((item) => {
        eleStyle[key] = item;
    });
    return eleStyle[key];
}

/**
 * 检查浏览器是否支持某个css属性值
 * @param {String} key - 检查的属性值所属的css属性名
 * @param {String} value - 要检查的css属性值（不要带前缀）
 * @returns {String} - 返回浏览器支持的属性值
 */
function valiateCssValue(key, value) {
    var prefix = ["-o-", "-ms-", "-moz-", "-webkit-", ""];
    var prefixValue = [];
    for (var i = 0; i < prefix.length; i++) {
        prefixValue.push(prefix[i] + value);
    }
    var element = document.createElement("div");
    var eleStyle = element.style;
    for (var j = 0; j < prefixValue.length; j++) {
        eleStyle[key] = prefixValue[j];
    }
    return eleStyle[key];
}

function validCss(key, value) {
    const validCss = validateCssKey(key);
    if (validCss) {
        return validCss;
    }
    return valiateCssValue(key, value);
}
//17.当前网页地址
function currentUrl() {
    return window.location.href;
}
//18.获取滚动条位置
function getScrollPosition(el = window) {
    return {
        x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
        y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop,
    };
}
//19.获取url中的参数
function getURLParameters(url) {
    return url
        .match(/([^?=&]+)(=([^&]*))/g)
        .reduce(      (a, v) => (
                (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
            ),
            {}
        );
}
//20 页面跳转，是否记录在history中
function redirect(url, asLink = true) {
    asLink ? (window.location.href = url) : window.location.replace(url);
}
//21滚动条回到顶部动画
function scrollToTop() {
    const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    } else {
        window.cancelAnimationFrame(scrollToTop);
    }
}
//22.复制文本
function copyText(str) {
    const el = document.createElement("textarea");
    el.value = str;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    el.style.top = "-9999px";
    document.body.appendChild(el);
    const selected =
        document.getSelection().rangeCount > 0
            ? document.getSelection().getRangeAt(0)
            : false;
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
    }
}
//23.检查设备类型
function detectDeviceType() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? "Mobile"
    : "Desktop";
}
//Cookie
//24.增
function setCookie(key, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie =
        key +
        "=" +
        escape(value) +
        (expiredays == null ? "" : ";expires=" + exdate.toGMTString());
}
//25.删
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null) {
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }
}
//26.查
function getCookie(name) {
    var arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if ((arr = document.cookie.match(reg))) {
        return arr[2];
    } else {
        return null;
    }
}
//日期 Date
//27.时间戳转换为时间
//默认为当前时间转换结果
//isMs为时间戳是否为毫秒
function timestampToTime(timestamp = Date.parse(new Date()), isMs = true) {
    const date = new Date(timestamp * (isMs ? 1 : 1000));
    return `${date.getFullYear()}-${
        date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
    }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
//文档对象DOM
//28.固定滚动条
/**
 * 功能描述：一些业务场景，如弹框出现时，需要禁止页面滚动，这是兼容安卓和 iOS 禁止页面滚动的解决方案
 */

let scrollTop = 0;

function preventScroll() {
// 存储当前滚动位置
    scrollTop = window.scrollY;

// 将可滚动区域固定定位，可滚动区域高度为 0 后就不能滚动了
    document.body.style["overflow-y"] = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.top = -scrollTop + "px";
// document.body.style['overscroll-behavior'] = 'none'
}

function recoverScroll() {
    document.body.style["overflow-y"] = "auto";
    document.body.style.position = "static";
// document.querySelector('body').style['overscroll-behavior'] = 'none'

    window.scrollTo(0, scrollTop);
}
//29.判断当前位置是否为页面底部
// 返回值为 true/false
function bottomVisible() {
    return (
        document.documentElement.clientHeight + window.scrollY >=
        (document.documentElement.scrollHeight ||
            document.documentElement.clientHeight)
    );
}
//30.判断元素是否在可视范围内
// partiallyVisible 为是否为完全可见
function elementIsVisibleInViewport(el, partiallyVisible = false) {
    const { top, left, bottom, right } = el.getBoundingClientRect();

    return partiallyVisible
        ? ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
        : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
}
//31.获取元素css样式
function getStyle(el, ruleName) {
    return getComputedStyle(el, null).getPropertyValue(ruleName);
}
//32.进入全屏
function launchFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullScreen();
    }
}
// launchFullscreen(document.documentElement);
// launchFullscreen(document.getElementById("id")); //某个元素进入全屏
//33.退出全屏
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
//34.全屏事件
document.addEventListener("fullscreenchange", function (e) {
    if (document.fullscreenElement) {
        console.log("进入全屏");
    } else {
        console.log("退出全屏");
    }
});
//数字 Number
//35.数字千分位分割
function commafy(num) {
    return num.toString().indexOf(".") !== -1
        ? num.toLocaleString()
        : num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
}
//36.生成随机数
function randomNum(min, max) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * min + 1, 10);
        case 2:
            return parseInt(Math.random() * (max - min + 1) + min, 10);
        default:
            return 0;
    }
}
//js技巧
//37.延迟函数delay
const delay = ms => new Promise((resolve, reject) => setTimeout(resolve, ms));

const getData = status => new Promise((resolve, reject) => {
    status ? resolve('done') : reject('fail')
});
const getRes = async (data) => {
    try {
        const res = await getData(data);
        const timestamp = new Date().getTime();
        await delay(1000);
        console.log(res, new Date().getTime() - timestamp);
    } catch (error) {
        console.log(error);
    }
};
// getRes(true) // 隔了1秒
//38.分割指定长度的元素数组
const listChunk = (list, size = 1, cacheList = []) => {
    const tmp = [...list];
    if (size <= 0) {
        return cacheList;
    }
    while (tmp.length) {
        cacheList.push(tmp.splice(0, size));
    }
    return cacheList;
};

// console.log(listChunk([1, 2, 3, 4, 5, 6, 7, 8, 9])) // [[1], [2], [3], [4], [5], [6], [7], [8], [9]]
// console.log(listChunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)) // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// console.log(listChunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 0)) // []
// console.log(listChunk([1, 2, 3, 4, 5, 6, 7, 8, 9], -1)) // []
//39.获取数组的交集
const intersection = (list, ...args) => list.filter(item => args.every(list => list.includes(item)));

// console.log(intersection([2, 1], [2, 3])) // [2]
// console.log(intersection([1, 2], [3, 4])) // []
//40.函数柯里化
const curring = fn => {
    const { length } = fn;
    const curried = (...args) => {
        return (args.length >= length
            ? fn(...args)
            : (...args2) => curried(...args.concat(args2)))
    };
    return curried
};

const listMerge = (a, b, c) => [a, b, c];
const curried = curring(listMerge)
// console.log(curried(1)(2)(3)) // [1, 2, 3]
// console.log(curried(1, 2)(3)) // [1, 2, 3]
// console.log(curried(1, 2, 3)) // [1, 2, 3]
//41.字符串前面空格去除与替换
const trimStart = str => str.replace(new RegExp('^([\\s]*)(.*)$'), '$2');
// console.log(trimStart(' abc ')) // abc
// console.log(trimStart('123 ')) // 123
//42.字符串后面空格去除与替换
 const trimEnd = str => str.replace(new RegExp('^(.*?)([\\s]*)$'), '$1')
//  console.log(trimEnd(' abc ')) //   abc
//  console.log(trimEnd('123 ')) // 123
//43.获取当前子元素是其父元素下子元素的排位
const getIndex = el => {
    if (!el) {
        return -1;
    }
    let index = 0;
    do {
        index++
    } while (el = el.previousElementSibling);
    return index
};
//44.获取当前元素相对于document的偏移量
 const getOffset = el => {
     const {
         top,
         left
     } = el.getBoundingClientRect();
     const {
         scrollTop,
         scrollLeft
     } = document.body;
     return {
         top: top + scrollTop,
         left: left + scrollLeft
     }
 };
//45.获取元素类型
const dataType = obj => Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
//46.判断是否是移动端
const isMobile = () => 'ontouchstart' in window;
//47.fade动画
const fade = (el, type = 'in')=>{
    el.style.opacity = (type === 'in' ? 0 : 1);
    let last = +new Date();
    const tick = () => {
        const opacityValue = (type === 'in'
            ? (new Date() - last) / 400
            : -(new Date() - last) / 400);
        el.style.opacity = +el.style.opacity + opacityValue;
        last = +new Date();
        if (type === 'in'
            ? (+el.style.opacity < 1)
            : (+el.style.opacity > 0)) {
            requestAnimationFrame(tick)
        }
    };
    tick();
};
//48.将指定格式的字符串解析为日期字符串
const dataPattern = (str, format = '-') => {
    if (!str) {
        return new Date()
    }
    const dateReg = new RegExp(`^(\\d{2})${format}(\\d{2})${format}(\\d{4})$`);
    const [, month, day, year] = dateReg.exec(str);
    return new Date(`${month}, ${day} ${year}`);
};
// console.log(dataPattern('12-25-1995')) // Mon Dec 25 1995 00:00:00 GMT+0800 (中国标准时间)
//49.禁止网页复制粘贴
const html = document.querySelector('html');
// html.oncopy = () => false;
// html.onpaste = () => false;
//50.input框限制只能输入中文
const input = document.querySelector('input[type="text"]');
const clearText = target => {
    const {
        value
    } = target;
    target.value = value.replace(/[^\u4e00-\u9fa5]/g, '')
};
input.onfocus = ({target}) => {
    clearText(target)
};
input.onkeyup = ({target}) => {
    clearText(target)
};
input.onblur = ({target}) => {
    clearText(target)
};
input.oninput = ({target}) => {
    clearText(target)
};
//51.去除字符串中的html代码
const removehtml = (str = '') => str.replace(/<[\/\!]*[^<>]*>/ig, '')
// console.log(removehtml('<h1>哈哈哈哈<呵呵呵</h1>')) // 哈哈哈哈<呵呵呵
//52.重复次数

const dom = {noRepeat,arrayMax,arrayMin,chunk,countOccurrences,flatten,differArray,everyArray,dropRight,dropElements,
    everyNth,nthElement,headArray,lastArray,shuffle,
    validCss,currentUrl,getScrollPosition,getURLParameters,redirect,
    scrollToTop,copyText,detectDeviceType,
    setCookie,delCookie,getCookie,
    timestampToTime,preventScroll,recoverScroll,bottomVisible,elementIsVisibleInViewport,
    getStyle,launchFullscreen,exitFullscreen,commafy,randomNum,
    delay,listChunk,intersection,curried,
};
export default dom;
 