import { Vector } from './grid.js';

/**
 * Returns random element from array
 * @param {Array} array 
 */
function randomElement(array) {
  return(array[Math.floor(Math.random() * array.length)]);
}

var directions = {
  'n':  new Vector( 0, -1),
  'ne': new Vector( 1, -1),
  'e':  new Vector( 1,  0),
  'se': new Vector( 1,  1),
  's':  new Vector( 0,  1),
  'sw': new Vector(-1,  1),
  'w':  new Vector(-1,  0),
  'nw': new Vector(-1, -1)
};

var directionNames = 'n ne e se s sw w nw'.split(' ');

/**
 * create a BouncingCritter object
 */
function BouncingCritter() {
  this.direction = randomElement(directionNames);
}

/**
 * .move() method
 * check if current direction have empty string (space)
 * if not find the nearest by view.find(' )
 * @param {Object} View
 * @returns {Object} {type: 'move', direction: this.direction}
 */
BouncingCritter.prototype.act = function(view) {
  if (view.look(this.direction) != ' ')
    this.direction = view.find(' ') || 's';
  return {type: 'move', direction: this.direction};
};

function Wall() {}

export { BouncingCritter, Wall, randomElement, directions };