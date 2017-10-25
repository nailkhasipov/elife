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

var world = new World(plan, {'#': Wall,
                             'o': BouncingCritter});
console.log(world.toString());
