const jsFuns = {
    //1 数组查找元素的位置
    indexOfArr: function (arr, item) {
        //one
        if(Array.prototype.indexOf) {
            return arr.indexOf(item);
        }else {
            for(let i=0; i<arr.length;i++) {
                return arr[i] = item ? i : '';
            }
        }
        //two
        // if(Array.prototype.indexOf) {
        //     return arr.indexOf(item);
        // }else if(arr.indexOf(item) > 0) {
        //     return arr.indexOf(item);
        // }else {
        //     return -1;
        // }
    },
    //2 字符串查找
    indexOfStr: function (str,item,num=0) {
        if(String.prototype.indexOf) {
            return str.indexOf(item,num);
        }else {
            let arr = str.split();
            for(let i=num; i<arr.length;i++) {
                return arr[i] = item ? i : '';
            }
        }
    }
    //3 添加元素
};
export  default  jsFuns;