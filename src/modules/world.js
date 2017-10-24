import { Vector, Grid } from "./grid.js";

/**
 * Создаем объект World
 * @param {Array} map 
 * @param {Object} legend 
 */
function World(map, legend) {
  var grid = new Grid(map[0].length, map.length);
  this.grid = grid;
  this.legend = legend;

  map.forEach(function(line, y) {
    for (var x = 0; x < line.length; x++) {
      grid.set(new Vector(x, y),
               elementFromChar(legend, line[x]));
    }
  });
}
World.prototype.toString = function() {
  var output = "";
  for (var y = 0; y < this.grid.height; y++ ) {
    for (var x = 0; x < this.grid.width; x++ ) {
      var element = this.grid.get(new Vector(x, y));
      output += charFromElement(element);
    }
    output += "\n";
  }
  return output;
};

/**
 * создаем новый элемент из legend
 * @param {Object} legend 
 * @param {String} ch 
 * @return {Object} element
 */
function elementFromChar(legend, ch) {
  if (ch == " ")
    return null;
  var element = new legend[ch]();
  element.originChar = ch;
  return element;
}
/**
 * возвращает символ заданного элемента из element.originChar
 * @param {Object} element 
 */
function charFromElement(element) {
  if (element == null)
    return " ";
  else
    return element.originChar;
}

export { World };