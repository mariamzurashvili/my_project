// Importing the 'expect' function from the 'chai' library to perform assertions
import { expect } from 'chai';
// Importing functions from 'mocha'.
import { describe, beforeEach, afterEach, it } from 'mocha';

// Importing the NumbersValidator class from the relative path '../app/numbers-validator'
import NumbersValidator from '../../app/numbers.validator.js';

// Describing the test suite for NumbersValidator class
describe('NumbersValidator', function () {
  let validator;

  // Setting up the NumbersValidator instance before each test
  beforeEach(function () {
    validator = new NumbersValidator();
  });

  // Cleaning up after each test
  afterEach(function () {
    validator = null;
  });

  // Test suite for isNumberEven method
  describe('isNumberEven', function () {
    it('should return true for even numbers', function () {
      expect(validator.isNumberEven(2)).to.be.true;
      expect(validator.isNumberEven(0)).to.be.true;
      expect(validator.isNumberEven(-4)).to.be.true;
    });

    it('should return false for odd numbers', function () {
      expect(validator.isNumberEven(3)).to.be.false;
      expect(validator.isNumberEven(1)).to.be.false;
      expect(validator.isNumberEven(-5)).to.be.false;
    });

    it('should throw an error for non-number input', function () {
      expect(() => validator.isNumberEven('2')).to.throw(Error, '[2] is not of type "Number" it is of type "string"');
      expect(() => validator.isNumberEven(null)).to.throw(Error, '[null] is not of type "Number" it is of type "object"');
      expect(() => validator.isNumberEven(undefined)).to.throw(Error, '[undefined] is not of type "Number" it is of type "undefined"');
    });
  });

  // Test suite for getEvenNumbersFromArray method
  describe('getEvenNumbersFromArray', function () {
    it('should return only even numbers from a valid array', function () {
      const testArray = [1, 2, 3, 4, 5, 6];
      const expectedResult = [2, 4, 6];
      expect(validator.getEvenNumbersFromArray(testArray)).to.deep.equal(expectedResult);
    });

    it('should throw an error when the input is not an array', function () {
      const invalidInput = 'notAnArray';
      expect(() => validator.getEvenNumbersFromArray(invalidInput)).to.throw(Error, '[notAnArray] is not an array of "Numbers"');
    });

    it('should throw an error when the array contains non-number elements', function () {
      const invalidArray = [1, '2', 3, 'four'];
      expect(() => validator.getEvenNumbersFromArray(invalidArray)).to.throw(Error, '[1,2,3,four] is not an array of "Numbers"');
    });
  });

  // Test suite for isAllNumbers method
  describe('isAllNumbers', function () {
    it('should return true for an array of numbers', function () {
      const testArray = [1, 2, 3, 4, 5, 6];
      expect(validator.isAllNumbers(testArray)).to.be.true;
    });

    it('should return false for an array with non-number elements', function () {
      const invalidArray = [1, '2', 3, 'four'];
      expect(validator.isAllNumbers(invalidArray)).to.be.false;
    });

    it('should throw an error when the input is not an array', function () {
      const invalidInput = 'notAnArray';
      expect(() => validator.isAllNumbers(invalidInput)).to.throw(Error, '[notAnArray] is not an array');
    });
  });

  // Test suite for isInteger method
  describe('isInteger', function () {
    it('should return true for an integer', function () {
      const testNumber = 4;
      expect(validator.isInteger(testNumber)).to.be.true;
    });

    it('should return false for a non-integer number', function () {
      const testNumber = 4.5;
      expect(validator.isInteger(testNumber)).to.be.false;
    });

    it('should throw an error when the input is not a number', function () {
      const invalidInput = 'notANumber';
      expect(() => validator.isInteger(invalidInput)).to.throw(Error, '[notANumber] is not a number');
    });
  });
});
