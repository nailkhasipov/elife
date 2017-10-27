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

function dirPlus(dir, n) {
  var index = directionNames.indexOf(dir);
  return (directionNames[(index + n + 8) % 8]);
}

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

function WallFollower() {
  this.dir = 's';
}

WallFollower.prototype.act = function(view) {
  var start = this.dir;
  if (view.look(dirPlus(this.dir, -3)) != ' ')
    start = this.dir = dirPlus(this.dir, -2);
  while (view.look(this.dir) != ' ') {
    this.dir = dirPlus(this.dir, 1);
    if (this.dir == start) break;
  }
  return {type: 'move', direction: this.dir};
};

function Plant() {
  this.energy = 3 + Math.random() * 4;
}

Plant.prototype.act = function(view) {
  if (this.energy > 15) {
    var space = view.find(' ');
    if (space)
      return {type: 'reproduce', direction: space};
  }
  if (this.energy < 20)
    return {type: 'grow'};
};

function PlantEater() {
  this.energy = 20;
}
PlantEater.prototype.act = function(view) {
  var space = view.find(' ');
  if (this.energy > 60 && space)
    return {type: 'reproduce', direction: space};
  var plant = view.find('*');
  if (plant)
    return {type: 'eat', direction: plant};
  if (space)
    return {type: 'move', direction: space};
};

function Wall() {}

export { BouncingCritter, WallFollower, PlantEater, Wall, Plant, randomElement, directions, dirPlus };