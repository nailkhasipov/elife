import { Vector, Grid } from '../src/modules/grid';

let grid = new Grid(3, 3);

test('Grid Module Test', () => {
  expect(Grid).toBeDefined();
});

describe('Vector', () => {
  test('should create new Vector', () => {
    let vector = new Vector(2, 3);
    expect(vector.x).toBe(2);
    expect(vector.y).toBe(3);
  });
  
  test('should have .plus() method', () => {
    let vector = new Vector(2, 3);
    let newVector = vector.plus(new Vector(1, 1));
    expect(newVector.x).toBe(3);
    expect(newVector.y).toBe(4);
  });
});

describe('Grid', () => {
  test('should have properties', () => {
    expect(grid.space.length).toBe(9);
    expect(grid.width).toBe(3);
    expect(grid.height).toBe(3);
  });

  test('should have .isInside()', () => {
    let vector = new Vector(0, 0);
    expect(grid.isInside(vector)).toBeTruthy();
  });
  
  test('should have .get()', () => {
    let vector = new Vector(0, 0);
    grid.set(vector, '#');
    expect(grid.get(vector)).toEqual('#');
  });

  test('should have .set()', () => {
    let vector = new Vector(0, 0);
    grid.set(vector, '#');
    expect(grid.get(vector)).toEqual('#');
  });
});