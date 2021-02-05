import { SuperGalacticAgeCalculator } from "../src/js/sgaCalc";

describe('SuperGalacticAgeCalculator', () => {
  let calc;

  beforeEach(() => {
    calc = new SuperGalacticAgeCalculator(22)
  });

test('should correctly create an instance of SuperGalacticAgeCalculator', () => {    
    expect(calc.age).toEqual(22);
  });

  test('should corrects return this.age * 0.24', () => {
      marsYears();
      expect(calc.age).toEqual(5.28);
  });
});