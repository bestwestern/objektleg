class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor (element: HTMLElement) {
        this.element = element;
        this.element.innerText += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerText = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}
class test {
    con: (string) =>number;
    ner: number;
    k: Object   ;
    constructor (s?: setting) {
    //    this.ner = s.getdata.length;
    }
}
interface setting {
    getdata: () =>any[];
    num?: number;
}

function gd() {
    return ['jk', 'jkd'];
}
function fordobl(n: (number) =>number) {
    return n(3);    
}
function intf(s: setting) {
    if (null==s.num)
        return 'num ej def';
    else
        return 'num def';
}
function fangenter(e: KeyboardEvent) {
    document.getElementById('content').innerHTML += e.keyCode.toString();
}
window.onload = () => {

    var t = new test();
    t.k = {};
    t.k["3"] = "lker";
    alert(t.k["3"]);
};

   /*    var k = { 'keya': 'nøglea' };
        var f = {};
        f.fu = function () { alert('jjghk') };
          alert(f.fu.toString().length);
        f.fu = f.fu.toString().substring(0, 25) + "');}";
        alert(f.fu.toString());
        f.fu();
        var sett = { getdata: getarr };
        sett.num = 1;*/