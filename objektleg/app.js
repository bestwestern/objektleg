var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerText += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () {
            return _this.span.innerText = new Date().toUTCString();
        }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
})();
var test = (function () {
    function test(s) {
    }
    return test;
})();
function gd() {
    return [
        'jk', 
        'jkd'
    ];
}
function fordobl(n) {
    return n(3);
}
function intf(s) {
    if(null == s.num) {
        return 'num ej def';
    } else {
        return 'num def';
    }
}
function fangenter(e) {
    document.getElementById('content').innerHTML += e.keyCode.toString();
}
window.onload = function () {
    var t = new test();
    t.k = {
    };
    t.k["3"] = "lker";
    alert(t.k["3"]);
};
