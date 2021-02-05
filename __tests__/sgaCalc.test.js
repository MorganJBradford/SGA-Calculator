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
    calc.mercuryYears();
    expect(calc.planetYears).toEqual(5.3);
  });

test('should correctly return this.age * 0.62', () => {
    calc.venusYears();
    expect(calc.planetYears).toEqual(13.6);
  });

test('should correctly return this.age * 1.88', () => {
    calc.marsYears();
    expect(calc.planetYears).toEqual(41.4);
  });

test('should correctly return this.age * 11.86', () => {
    calc.jupiterYears();
    expect(calc.planetYears).toEqual(260.9);
  });

test('should correctly return life expectancy for this.age in Earth years', () => {
    calc.lifeExpectancy();
    expect(calc.planetExpectancy).toEqual(56.8);
  });

test('should correctly return life expectancy for this.age in Mercury years', () => {
    calc.mercuryLifeExpectancy();
    expect(calc.planetExpectancy).toEqual(13.6);
  });

test('should correctly return life expectancy for this.age in Venus years', () => {
    calc.venusLifeExpectancy();
    expect(calc.planetExpectancy).toEqual(35.3);
  });

test('should correctly return life expectancy for this.age in Mars years', () => {
    calc.marsLifeExpectancy();
    expect(calc.planetExpectancy).toEqual(106.7);
  });

test('should correctly return life expectancy for this.age in Jupiter years', () => {
    calc.jupiterLifeExpectancy();
    expect(calc.planetExpectancy).toEqual(673.7);
  });

test('should correctly return years lived beyond Earth life expectancy', () => {
    calc = new SuperGalacticAgeCalculator(80);
    calc.lifeExpectancy();
    expect(calc.planetExpectancy).toEqual(1.2);
  });
});