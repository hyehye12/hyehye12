var Counter = /** @class */ (function () {
    function Counter() {
    }
    Counter.increment = function () {
        Counter.count++;
    };
    Counter.getCount = function () {
        console.log(Counter.count);
    };
    Counter.count = 0;
    return Counter;
}());
// let counter1 = new Counter();
Counter.increment();
Counter.increment();
Counter.increment();
Counter.getCount();
