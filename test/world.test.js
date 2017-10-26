import { World, View, elementFromChar, charFromElement } from '../src/modules/world';
import { Vector } from '../src/modules/grid';
import { BouncingCritter, Wall } from '../src/modules/simple_ecosystem.js';

let map = ['#####',
           '# o #',
           '#####'];

let legend = {'#': Wall, 'o': BouncingCritter};

let world = new World(map, legend);

test('world', () => {
  expect(world.legend).toBeDefined();
  expect(world.legend).toEqual(legend);
  expect(world.grid).toBeDefined();
});

test('world.toString() method', () => {
  expect(world.toString).toBeDefined();
  expect(world.toString()).toEqual('#####\n# o #\n#####\n');
});

describe('view', () => {
  test('view', () => {
    let view = new View(world, new Vector(1, 1));
    expect(view.world).toEqual(world);
    expect(view.vector).toEqual(new Vector(1, 1));
  });

  describe('view.look(dir)', () => {
    test('should return BouncingCritter', () => {
      let view = new View(world, new Vector(1, 1));
      expect(view.look('e')).toEqual('o');
    });
    
    test('should return # when dir is not inside', () => {
      let view = new View(world, new Vector(1, 1));
      expect(view.look('n')).toEqual('#');
    });
  });

  describe('view.findAll(ch)', () => {
    test('should found all free spaces', () => {
      let view = new View(world, new Vector(2, 3));
      expect(view.findAll(' ')).toEqual(['e', 'w']);
    });
  });

  // @TODO 
  // describe('view.find(ch)', () => {
  //   test('should return random free space', () => {
  //     let view = new View(world, new Vector(2, 3));
  //     expect(view.find(' ')).toEqual();
  //   });
  // });
});

describe('elementFromChar()', () => {
  test('should return element from char', () => {
    expect(elementFromChar(legend, '#')).toEqual({ originChar: '#' });
  });

  test('should return null if no char set', () => {
    expect(elementFromChar(legend, ' ')).toBeNull;
  });
});

describe('charFromElement()', () => {
  test('should return char from element', () => {
    expect(charFromElement(world.grid.get(new Vector(0, 0)))).toEqual('#');
  });

  test('should return empty string if no element set', () => {
    expect(charFromElement(world.grid.get(new Vector(1, 1)))).toEqual(' ');
  });
});




