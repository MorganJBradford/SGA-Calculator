import { SuperGalacticAgeCalculator, marsYears } from "../src/js/sgaCalc";

describe('SuperGalacticAgeCalculator', () => {
  let calc;

  beforeEach(() => {
    calc = new SuperGalacticAgeCalculator(22)
  });

test('should correctly create an instance of SuperGalacticAgeCalculator', () => {    
    expect(calc.age).toEqual(22);
  });

test('should correctly return this.age * 0.24', () => {
    expect(calc.marsYears()).toEqual(5.28);
  });

test('should correctly return this.age * 0.62', () => {
    expect(calc.venusYears()).toEqual(13.64);
  });
});