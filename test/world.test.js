import chai from 'chai';
import { World, View, elementFromChar, charFromElement } from '../src/modules/world';
import { Vector } from '../src/modules/grid';
import { BouncingCritter, Wall } from '../src/modules/simple_ecosystem.js';

let assert = chai.assert;

let map = ['#####',
           '# o #',
           '#####'];

let legend = {'#': Wall, 'o': BouncingCritter};

let world = new World(map, legend);

describe('World Module Test', () => {
  describe('World', () => {
    it('should create new world', () => {
      assert.typeOf(world, 'Object');
    });

    it('should has property legend', () => {
      assert.typeOf(world.legend, 'Object');
      assert.deepEqual(world.legend, legend);
    });

    it('should has property grid', () => {
      assert.typeOf(world.grid, 'Object');
    });

    it('should has method .toString()', () => {
      assert.typeOf(world.toString, 'Function');
      assert.equal(world.toString(), '#####\n# o #\n#####\n');
    });
  });

  describe('View', () => {
    it('should have world and vector properies', () => {
      let view = new View(world, new Vector(1, 1));
      assert.deepEqual(view.world, world);
      assert.deepEqual(view.vector, new Vector(1, 1));
    });

    describe('#look(dir)', () => {
      it('should return BouncingCritter', () => {
        let view = new View(world, new Vector(1, 1));
        assert.equal(view.look('e'), 'o');
      });

      it('should return # when dir is not inside', () => {
        let view = new View(world, new Vector(0, 0));
        assert.equal(view.look('n'), '#');
      });
    });

    describe('#findAll(ch)', () => {
      it('should found all free spaces', () => {
        let view = new View(world, new Vector(2, 3));
        assert.deepEqual(view.findAll(' '), ['e', 'w']);
      });
    });

    describe('#find(ch)', () => {
      it('should return random free space', () => {
        let view = new View(world, new Vector(2, 3));
        assert.typeOf(view.find(' '), 'String');
      });
    });
  });
  
  describe('elementFromChar function', () => {
    it('should return element from char', () => {
      assert.deepEqual(elementFromChar(legend, '#'), { originChar: '#' });
    });

    it('should return null if no char set', () => {
      assert.equal(elementFromChar(legend, ' ', null));
    });
  });

  describe('charFromElement function', () => {
    it('should return char from element', () => {
      assert.equal(charFromElement(world.grid.get(new Vector(0, 0))), '#');
    });

    it('should return empty string if no element set', () => {
      assert.equal(charFromElement(world.grid.get(new Vector(1, 1))), ' ');
    });
  });
});