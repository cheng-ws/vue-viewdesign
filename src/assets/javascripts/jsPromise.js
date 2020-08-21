//promise实现(包含all()、race()、finally()等方法实现)
class Promise {
    constructor(exector) {
        // Promise存在三个状态（state）pending、fulfilled、rejected
        // pending（等待态）为初始态，并可以转化为fulfilled（成功态）和rejected（失败态）
        // 成功时，不可转为其他状态，且必须有一个不可改变的值（value）
        // 失败时，不可转为其他状态，且必须有一个不可改变的原因（reason)
        this.state = 'pending';
        this.value = undefined;
        this.reason = undefined;
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];
        let resolve = value => {
            if(this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                this.onResolvedCallbacks.forEach(fn=>fn());
            }
        };
        let reject = reason => {
            if(this.state === 'pending') {
                this.state = 'rejected';
                this.reason = reason;
                this.onRejectedCallbacks.forEach(fn=>fn());
            }
        };
        try {
            exector(resolve,reject);
        } catch (err) {
            reject(err);
        }
    }
    // Promise有一个叫做then的方法，里面有两个参数：onFulfilled,onRejected,成功有成功的值，失败有失败的原因
    // onFulfilled,onRejected如果他们是函数，则必须分别在fulfilled，rejected后被调用，value或reason依次作为他们的第一个参数
    then(onFulfilled,onRejected) {

    }
}