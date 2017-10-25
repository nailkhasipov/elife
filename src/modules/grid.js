/**
 * создаем объект Vector для представления координатной системы (x, y) 
 * @param {Number} x 
 * @param {Number} y 
 */
function Vector(x, y) {
  this.x = x;
  this.y = y;
}
/**
 * простой метод сложения векторов (other)
 * @param {Vector} other
 */
Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y);
};

/**
 * создаем сетку заданной высоты и длины
 * @param {Number} width 
 * @param {Number} height 
 */
function Grid(width, height) {
  this.space = new Array(width * height);
  this.width = width;
  this.height = height;
}
/**
 * находится ли заданный вектор внутри сетки
 * простое сравнение x,y на >= 0 и меньше width,height
 * @param {Object} Vector
 * @returns {Boolean} 
 */
Grid.prototype.isInside = function(vector) {
  return vector.x >= 0 && vector.x <= this.width &&
         vector.y >= 0 && vector.y <= this.height;
};
/**
 * возвращаем this.space[] по заданным координатам вектора
 * x + (this.width * y)
 * @param {Object} vector
 * @returns 
 */
Grid.prototype.get = function(vector) {
  return this.space[vector.x + this.width * vector.y];
};
/**
 * задаем для this.space[] заданный value по координатам вектора
 * @param {Object} Vector
 * @param value
 */
Grid.prototype.set = function(vector, value) {
  this.space[vector.x + this.width * vector.y] = value;
};

export { Vector, Grid };

