import { Vector, Grid } from './grid.js';
import { randomElement, directions } from './simple_ecosystem.js';

/**
 * Create a new World.
 * @param {Array} map 
 * @param {Object} legend 
 */
function World(map, legend, emojiLegend) {
  var grid = new Grid(map[0].length, map.length);
  /** The Grid. */
  this.grid = grid;
  /** The Legend. */
  this.legend = legend;
  /** The Emoji Legend. */
  this.emojiLegend = emojiLegend;

  map.forEach(function(line, y) {
    for (var x = 0; x < line.length; x++) {
      grid.set(new Vector(x, y),
               elementFromChar(legend, line[x], emojiLegend));
    }
  });
}
/**
 * Returns string representation of the World.
 * @return {String} '#      #    #      o      ##' + '\n...'
 */
World.prototype.toString = function() {
  var output = '';
  for (var y = 0; y < this.grid.height; y++ ) {
    for (var x = 0; x < this.grid.width; x++ ) {
      var element = this.grid.get(new Vector(x, y));
      output += charFromElement(element);
    }
    output += '\n';
  }
  return output;
};
/**
 * Returns HTML representation of the world with emoji.
 */
World.prototype.toHTML = function() {
  var output = '';
  for (var y = 0; y < this.grid.height; y++ ) {
    for (var x = 0; x < this.grid.width; x++ ) {
      var element = this.grid.get(new Vector(x, y));
      if (element == null) {
        output += '<span class="blank">' + emojiFromElement(element) + '</span>';
      } else {
        output += emojiFromElement(element);
      }
    }
    output += '\n';
  }
  return output;
};
/**
 * create an acted array, then check all in grid
 * and if it act and not acted yet run letAct()
 */
World.prototype.turn = function() {
  var acted = [];
  this.grid.forEach(function(critter, vector) {
    if (critter.act && acted.indexOf(critter) == -1) {
      acted.push(critter);
      this.letAct(critter, vector);
    }
  }, this);
};
/**
 * get critter and his vector
 * call critter.act(new View(this, vector))
 * and if action.type == 'move'
 * checkDestination
 * move critter to new destinataion
 * @param {Object} critter
 * @param {Object} vector
 */
World.prototype.letAct = function(critter, vector) {
  var action = critter.act(new View(this, vector));
  if (action && action.type == 'move') {
    var dest = this.checkDestination(action, vector);
    if (dest && this.grid.get(dest) == null) {
      this.grid.set(vector, null);
      this.grid.set(dest, critter);
    }
  }
};
/**
 * check destination
 * @param {Object} action
 * @param {Object} vector
 * @returns {Object} dest (vector)
 */
World.prototype.checkDestination = function(action, vector) {
  if (directions.hasOwnProperty(action.direction)) {
    var dest = vector.plus(directions[action.direction]);
    if (this.grid.isInside(dest))
      return dest;
  }
};

function LifelikeWorld(map, legend, emojiLegend) {
  World.call(this, map, legend, emojiLegend);
}

LifelikeWorld.prototype = Object.create(World.prototype);

var actionTypes = Object.create(null);

LifelikeWorld.prototype.letAct = function(critter, vector) {
  var action = critter.act(new View(this, vector));
  var handled = action &&
    action.type in actionTypes &&
    actionTypes[action.type].call(this, critter, vector, action);

  if (!handled) {
    critter.energy -= 0.2;
    if (critter.energy <= 0)
      this.grid.set(vector, null);
  }
};

actionTypes.move = function(critter, vector, action) {
  var dest = this.checkDestination(action, vector);
  if (dest == null ||
      critter.energy <= 1 ||
      this.grid.get(dest) != null)
    return false;
  critter.energy -= 1;
  this.grid.set(vector, null);
  this.grid.set(dest, critter);
  return true;
};

actionTypes.eat = function(critter, vector, action) {
  var dest = this.checkDestination(action, vector);
  var atDest = dest != null && this.grid.get(dest);
  if (!atDest || atDest.energy == null)
    return false;
  critter.energy += atDest.energy;
  this.grid.set(dest, null);
  return true;
};

actionTypes.grow = function(critter) {
  critter.energy += 0.5;
  return true;
};

actionTypes.reproduce = function(critter, vector, action) {
  var baby = elementFromChar(this.legend,
                             critter.originChar, this.emojiLegend);
  var dest = this.checkDestination(action, vector);
  if (dest == null ||
      critter.energy <= 2 * baby.energy ||
      this.grid.get(dest) != null)
    return false;
  critter.energy -= 2 * baby.energy;
  this.grid.set(dest, baby);
  return true;
};

/**
 * Create view object
 * @param {Object} world 
 * @param {Object} vector 
 */
function View(world, vector) {
  this.world = world;
  this.vector = vector;
}

/**
 * look for direction and return character from
 * @param {String} dir
 * @returns {String} '#', 'o', ' '
 */
View.prototype.look = function(dir) {
  var target = this.vector.plus(directions[dir]);
  if (this.world.grid.isInside(target))
    return charFromElement(this.world.grid.get(target));
  else
    return '#';
};

/**
 * find all directions for current character
 * @param {String} ch
 * @returns {Array} [ 'e', 'ne' ]
 */
View.prototype.findAll = function(ch) {
  var found = [];
  for (var dir in directions)
    if (this.look(dir) == ch)
      found.push(dir);
  return found;
};

View.prototype.find = function(ch) {
  var found = this.findAll(ch);
  if (found.length == 0) return null;
  return randomElement(found);
};

/**
 * создаем новый элемент из legend
 * @param {Object} legend 
 * @param {String} ch 
 * @return {Object} Wall
 */
function elementFromChar(legend, ch, emojiLegend) {
  if (ch == ' ')
    return null;
  var element = new legend[ch]();
  element.originChar = ch;
  element.emoji = emojiLegend[ch];
  return element;
}
/**
 * возвращает символ заданного элемента из element.originChar
 * @param {Object} element 
 * @return {String} 'o' или '#'
 */
function charFromElement(element) {
  if (element == null)
    return ' ';
  else
    return element.originChar;
}
/**
 * Returns emoji from element
 * @param {Object} element 
 * @returns {String} emoji 🐵
 */
function emojiFromElement(element) {
  if (element == null)
    // @TODO remove hardcode
    return '⬜️';
  else
    return element.emoji;
}

export { World, LifelikeWorld, View, elementFromChar, charFromElement, emojiFromElement };