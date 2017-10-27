import { World, LifelikeWorld } from './modules/world.js';
import { BouncingCritter, WallFollower, Plant, PlantEater, Wall } from './modules/simple_ecosystem.js';

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

var valley = new LifelikeWorld(
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
  {'#': Wall,
   'O': PlantEater,
   '*': Plant},
  {'#': '⛰',
   'O': '🐮',
   '*': '🌳'}
);

window.animateWorld(valley);