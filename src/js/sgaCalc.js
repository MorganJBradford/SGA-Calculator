export class SuperGalacticAgeCalculator {
  constructor(age){
    this.age = age;
  }

  mercuryYears(){
    return parseFloat((this.age * 0.24).toFixed(2));
  }

  venusYears(){
    return parseFloat((this.age * 0.62).toFixed(2));
  }

  marsYears() {
    return parseFloat((this.age * 1.88).toFixed(2));
  }

  jupiterYears() {
    return parseFloat((this.age * 11.86).toFixed(2));
  }
};