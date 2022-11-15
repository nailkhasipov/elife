/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Vector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Grid; });
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

/**
 * own forEach method with ability to define context
 */
Grid.prototype.forEach = function(f, context) {
  for (var y = 0; y < this.height; y++) {
    for (var x = 0; x < this.width; x++) {
      var value = this.space[x + y * this.width];
      if (value != null) 
        f.call(context, value, new Vector(x, y));
    }
  }
};





/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BouncingCritter */
/* unused harmony export WallFollower */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PlantEater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Wall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Plant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return randomElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return directions; });
/* unused harmony export dirPlus */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_js__ = __webpack_require__(0);


/**
 * Returns random element from array
 * @param {Array} array 
 */
function randomElement(array) {
  return(array[Math.floor(Math.random() * array.length)]);
}

var directions = {
  'n':  new __WEBPACK_IMPORTED_MODULE_0__grid_js__["b" /* Vector */]( 0, -1),
  'ne': new __WEBPACK_IMPORTED_MODULE_0__grid_js__["b" /* Vector */]( 1, -1),
  'e':  new __WEBPACK_IMPORTED_MODULE_0__grid_js__["b" /* Vector */]( 1,  0),
  'se': new __WEBPACK_IMPORTED_MODULE_0__grid_js__["b" /* Vector */]( 1,  1),
  's':  new __WEBPACK_IMPORTED_MODULE_0__grid_js__["b" /* Vector */]( 0,  1),
  'sw': new __WEBPACK_IMPORTED_MODULE_0__grid_js__["b" /* Vector */](-1,  1),
  'w':  new __WEBPACK_IMPORTED_MODULE_0__grid_js__["b" /* Vector */](-1,  0),
  'nw': new __WEBPACK_IMPORTED_MODULE_0__grid_js__["b" /* Vector */](-1, -1)
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



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_world_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_simple_ecosystem_js__ = __webpack_require__(1);



// var plan = ['############################',
//             '#      #    #      o      ##',
//             '#                          #',
//             '#          #####           #',
//             '##         #   #    ##     #',
//             '###           ##     #     #',
//             '#           ###      #     #',
//             '#   ####                   #',
//             '#   ##       o             #',
//             '# o  #         o       ### #',
//             '#    #                     #',
//             '############################'];

// var emojiLegend = {'#': '🌴', 'o': '🐵'};
// var world = new World(plan, {'#': Wall,
//                              'o': BouncingCritter}, emojiLegend);

// window.animateWorld(world);

// var wallFollowMap = ['############',
//                      '#     #    #',
//                      '#   ~    ~ #',
//                      '#  ##      #',
//                      '#  ##  o####',
//                      '#          #',
//                      '############'];

// var emojiLegend = {'#': '🏚', 'o': '👾', '~': '👻'};
// var legend = {'#': Wall, 'o': BouncingCritter, '~': WallFollower};

// var world = new World(wallFollowMap, legend, emojiLegend);

// window.animateWorld(world);

// var valley = new LifelikeWorld(
//   ['############################',
//    '#####                 ######',
//    '##   ***                **##',
//    '#   *##**         **  O  *##',
//    '#    ***     O    ##**    *#',
//    '#       O         ##***    #',
//    '#                 ##**     #',
//    '#   O       #*             #',
//    '#*          #**       O    #',
//    '#***        ##**    O    **#',
//    '##****     ###***       *###',
//    '############################'],
//   {'#': Wall,
//    'O': PlantEater,
//    '*': Plant},
//   {'#': '⛰',
//    'O': '🐮',
//    '*': '🌳'}
// );

var valley = new __WEBPACK_IMPORTED_MODULE_0__modules_world_js__["a" /* LifelikeWorld */](
  ['##############',
   '###*     *####',
   '##*       **##',
   '#   ***     *#',
   '#  *##**     #',
   '#   ***      #',
   '#    O       #',
   '#      **    #',
   '#      ##*   #',
   '#      ##*   #',
   '#      ##**  #',
   '# O          #',
   '#     *      #',
   '#     #* O   #',
   '#*    #*     #',
   '##**   #** **#',
   '###**  ##* ###',
   '##############'],
  {'#': __WEBPACK_IMPORTED_MODULE_1__modules_simple_ecosystem_js__["c" /* Wall */],
   'O': __WEBPACK_IMPORTED_MODULE_1__modules_simple_ecosystem_js__["b" /* PlantEater */],
   '*': __WEBPACK_IMPORTED_MODULE_1__modules_simple_ecosystem_js__["a" /* Plant */]},
  {'#': '⛰',
   'O': '🐮',
   '*': '🌳'}
);

window.animateWorld(valley);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export World */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LifelikeWorld; });
/* unused harmony export View */
/* unused harmony export elementFromChar */
/* unused harmony export charFromElement */
/* unused harmony export emojiFromElement */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__simple_ecosystem_js__ = __webpack_require__(1);



/**
 * Create a new World.
 * @param {Array} map 
 * @param {Object} legend 
 */
function World(map, legend, emojiLegend) {
  var grid = new __WEBPACK_IMPORTED_MODULE_0__grid_js__["a" /* Grid */](map[0].length, map.length);
  /** The Grid. */
  this.grid = grid;
  /** The Legend. */
  this.legend = legend;
  /** The Emoji Legend. */
  this.emojiLegend = emojiLegend;

  map.forEach(function(line, y) {
    for (var x = 0; x < line.length; x++) {
      grid.set(new __WEBPACK_IMPORTED_MODULE_0__grid_js__["b" /* Vector */](x, y),
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
      var element = this.grid.get(new __WEBPACK_IMPORTED_MODULE_0__grid_js__["b" /* Vector */](x, y));
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
      var element = this.grid.get(new __WEBPACK_IMPORTED_MODULE_0__grid_js__["b" /* Vector */](x, y));
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
  if (__WEBPACK_IMPORTED_MODULE_1__simple_ecosystem_js__["d" /* directions */].hasOwnProperty(action.direction)) {
    var dest = vector.plus(__WEBPACK_IMPORTED_MODULE_1__simple_ecosystem_js__["d" /* directions */][action.direction]);
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
  var target = this.vector.plus(__WEBPACK_IMPORTED_MODULE_1__simple_ecosystem_js__["d" /* directions */][dir]);
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
  for (var dir in __WEBPACK_IMPORTED_MODULE_1__simple_ecosystem_js__["d" /* directions */])
    if (this.look(dir) == ch)
      found.push(dir);
  return found;
};

View.prototype.find = function(ch) {
  var found = this.findAll(ch);
  if (found.length == 0) return null;
  return Object(__WEBPACK_IMPORTED_MODULE_1__simple_ecosystem_js__["e" /* randomElement */])(found);
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



/***/ })
/******/ ]);