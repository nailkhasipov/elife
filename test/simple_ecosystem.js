import chai from 'chai';
import { BouncingCritter, Wall } from '../src/modules/simple_ecosystem.js';

let assert = chai.assert;

describe('Simple Ecosystem Module Tests', () => {

  describe('BouncingCritter', () => {
    it('should be a Function', () => {
      assert.typeOf(BouncingCritter, 'function');
    });
  });

  describe('Wall', () => {
    it('should be a Function', () => {
      assert.typeOf(Wall, 'function');
    });
  });

});

