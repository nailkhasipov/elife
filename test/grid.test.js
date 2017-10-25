import chai from 'chai';
import { Vector, Grid } from '../src/modules/grid';

let assert = chai.assert;

let grid = new Grid(3, 3);

describe('Grid Module Tests', () => {

  describe('Vector', () => {
    it('should be a Function', () => {
      assert.typeOf(Vector, 'function');
    });

    it('should create new Vector', () => {
      var vector = new Vector(2, 3);
      assert.equal(vector.x, 2);
      assert.equal(vector.y, 3);
    });

    describe('.plus(x, y)', () => {
      it('should have .plus() method', () => {
        var vector = new Vector(2, 3);
        assert.typeOf(vector.plus, 'function');
      });
      
      it('.plus() should work', () => {
        var vector = new Vector(2, 3);
        var newVector = vector.plus(new Vector(1, 1));
        assert.equal(newVector.x, 3);
        assert.equal(newVector.y, 4);
      });
    });
  });

  describe('Grid', () => {
    it('should be a Function', () => {
      assert.typeOf(Grid, 'function');
    });

    it('should have property .space', () => {
      assert.equal(grid.space.length, 9);
    });

    it('should have property width', () => {
      assert.equal(grid.width, 3);
    });

    it('should have property height', () => {
      assert.equal(grid.height, 3);
    });

    it('should have method .isInside()', () => {
      let vector = new Vector(0, 0);
      assert.equal(grid.isInside(vector), true);
    });

    it('should have method get', () => {
      assert.typeOf(grid.get, 'Function');
      let vector = new Vector(0, 0);
      grid.set(vector, '#');
      assert.equal(grid.get(vector), '#');
    });

    it('should have method set', () => {
      let vector = new Vector(0, 0);
      assert.typeOf(grid.set, 'Function');
      grid.set(vector, '#');
      assert.equal(grid.get(vector), '#');
    });
  });

});