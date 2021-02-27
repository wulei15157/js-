class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y);   //继承 Point  x y 
    this.color = color;
  }
  toString() {
    return this.color + ' ' + super.toString();
  }
}
let ins = new ColorPoint(1,2,'red');
