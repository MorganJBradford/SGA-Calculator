import { TestScheduler } from "jest";
import { SuperGalacticAgeCalculator } from "../src/js/sgaCalc";

describe('SuperGalacticAgeCalculator', () => {
  let calc;

  beforeEach(() => {
    calc = new SuperGalacticAgeCalculator(22)
  });

test('should correctly create an instance of SuperGalacticAgeCalculator', () => {    
    expect(calc.age).toEqual(22);
  });

test('should correctly return this.age * 0.24', () => {
    expect(calc.mercuryYears()).toEqual(5.3);
  });

test('should correctly return this.age * 0.62', () => {
    expect(calc.venusYears()).toEqual(13.6);
  });

test('should correctly return this.age * 1.88', () => {
    expect(calc.marsYears()).toEqual(41.4);
  });

test('should correctly return this.age * 11.86', () => {
    expect(calc.jupiterYears()).toEqual(260.9);
  });

test('should correctly return life expectancy for this.age in Earth years', () => {
    expect(calc.lifeExpectancy()).toEqual(56.8);
  });

test('should correctly return life expectancy for this.age in Mercury years', () => {
    expect(calc.mercuryLifeExpectancy()).toEqual(13.6);
  });

test('should correctly return life expectancy for this.age in Venus years', () => {
    expect(calc.venusLifeExpectancy()).toEqual(35.3);
  });

test('should correctly return life expectancy for this.age in Mars years', () => {
    expect(calc.marsLifeExpectancy()).toEqual(106.7);
  });

test('should correctly return life expectancy for this.age in Jupiter years', () => {
    expect(calc.jupiterLifeExpectancy()).toEqual(673.7);
  });
});