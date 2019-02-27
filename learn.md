React Route 组件重复渲染
es6 Class
es5
function Parent(x, y) {
  this.x = x;
  this.y = y;
}
Parent.prototype.toString = function() {
  return '(' + this.x + ', ' + this.y + ')';
}
var parent = new Parent(3, 8);

es6,可以自定义原生结构
class Test {
  <!-- constructor构造方法,类的默认方法，new一个实例时自动调用该方法，必须有constructor构造方法，如果没有定义会默认生成一个空的 -->
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
var t = new Test(1, 2);

class ColorPoint extends Test {
  constructor(x, y, color) {
    super(x, y);
    this.color = color;
  }

  toString() {
    return this.color + ' ' + super.toString(); // 调用父类的toString()
  }
}

super: 表示父类的构造函数，用来新建父类的this对象，子类必须在constructor调用super方法，因为字类没有自己的this对象，而是继承父类
