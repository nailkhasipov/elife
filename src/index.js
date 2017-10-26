import { World } from './modules/world.js';
import { BouncingCritter, Wall } from './modules/simple_ecosystem.js';

var plan = ['############################',
            '#      #    #      o      ##',
            '#                          #',
            '#          #####           #',
            '##         #   #    ##     #',
            '###           ##     #     #',
            '#           ###      #     #',
            '#   ####                   #',
            '#   ##       o             #',
            '# o  #         o       ### #',
            '#    #                     #',
            '############################'];

var emojiLegend = {'#': '🌴', 'o': '🐵'};
var world = new World(plan, {'#': Wall,
                             'o': BouncingCritter}, emojiLegend);

window.animateWorld(world);
