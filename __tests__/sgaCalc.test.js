import { SuperGalacticAgeCalculator } from "../src/js/sgaCalc";

describe('SuperGalacticAgeCalculator', () => {

  test('should correctly create an instance of SuperGalacticAgeCalculator', () => {
    let calc = new SuperGalacticAgeCalculator(22);
    expect(calc.age).toEqual(22);
  });
});