function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // 这个函数放在计时器的最后，等计时器结束，才调用这个函数
            if (callback) { //判断是否有回调函数
                // 调用函数
                callback();
            }
        } else {
            obj.style.left = obj.offsetLeft + step + 'px';
        };
    }, 30);
}