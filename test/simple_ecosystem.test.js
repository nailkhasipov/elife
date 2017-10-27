import { BouncingCritter, WallFollower, Wall, dirPlus } from '../src/modules/simple_ecosystem.js';
import { Vector } from '../src/modules/grid';
import { World, View } from '../src/modules/world';

let map = ['############',
           '#     #    #',
           '#    ~    ~#',
           '#  ##      #',
           '#  ##  o####',
           '#        # #',
           '############'];

let emojiLegend = {'#': '🏚', 'o': '👾', '~': '👻'};
let legend = {'#': Wall, 'o': BouncingCritter, '~': WallFollower};

let world = new World(map, legend, emojiLegend);

test('dirPlus()', () => {
  expect(dirPlus('n', 2)).toEqual('e');
});

describe('BouncingCritter', () => {
  test('should create with random directions', () => {
    var critter = new BouncingCritter();
    expect(critter.direction).toMatch(/[nesw]/);
  });

  test('should have .act() method', () => {
    var critter = new BouncingCritter();
    let view = new View(world, new Vector(6, 4));
    let action = critter.act(view);
    expect(action.type).toEqual('move');
    expect(action.direction).toMatch(/[nesw]/);
  });
});

describe('WallFollower', () => {
  test('should create with random directions', () => {
    var critter = new WallFollower();
    expect(critter.dir).toMatch(/[nesw]/);
  });
  
  test('should have .act() method', () => {
    var critter = new WallFollower();
    let view = new View(world, new Vector(5, 2));
    let action = critter.act(view);
    expect(action.type).toEqual('move');
    expect(action.direction).toMatch(/[nesw]/);
  });
  
  test('should always follow to left', () => {
    var critter = new WallFollower();
    let view = new View(world, new Vector(5, 2));
    let action = critter.act(view);
    expect(action.type).toEqual('move');
    expect(action.direction).toMatch('e');
  });
  
  // @TODO need timeout
  test('should not fail to infinite stack when no place to move', () => {
    var critter = new WallFollower();
    let view = new View(world, new Vector(10, 5));
    let action = critter.act(view);
    expect(action.type).toEqual('move');
    expect(action.direction).toMatch('e');
  });
});



test('Simple Ecosystem Module Test', () => {
  expect(BouncingCritter).toBeDefined();
  expect(Wall).toBeDefined();
});
