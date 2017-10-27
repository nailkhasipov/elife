import { World } from './modules/world.js';
import { BouncingCritter, WallFollower, Wall } from './modules/simple_ecosystem.js';

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

var wallFollowMap = ['############',
                     '#     #    #',
                     '#   ~    ~ #',
                     '#  ##      #',
                     '#  ##  o####',
                     '#          #',
                     '############'];

var emojiLegend = {'#': '🏚', 'o': '👾', '~': '👻'};
var legend = {'#': Wall, 'o': BouncingCritter, '~': WallFollower};

var world = new World(wallFollowMap, legend, emojiLegend);

window.animateWorld(world);
