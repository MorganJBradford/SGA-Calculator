export class SuperGalacticAgeCalculator {
  constructor(age){
    this.age = age;
    this.planetYears;
    this.planetExpectancy;
  }

  mercuryYears(){
    this.planetYears = parseFloat((this.age * 0.24).toFixed(1));
  }

  venusYears(){
    this.planetYears = parseFloat((this.age * 0.62).toFixed(1));
  }

  marsYears() {
    this.planetYears = parseFloat((this.age * 1.88).toFixed(1));
  }

  jupiterYears() {
    this.planetYears = parseFloat((this.age * 11.86).toFixed(1));
  }

  lifeExpectancy(){
    this.planetExpectancy = parseFloat((78.8 - this.age).toFixed(1));
  }

  mercuryLifeExpectancy(){
    this.mercuryYears();
    this.planetExpectancy = parseFloat((18.9 - this.planetYears).toFixed(1));
  }
    
  venusLifeExpectancy(){
    let age = this.venusYears();
    return parseFloat((48.9 - age).toFixed(1));
  }

  marsLifeExpectancy(){
    let age = this.marsYears();
    return parseFloat((148.1 - age).toFixed(1));
  }

  jupiterLifeExpectancy(){
    let age = this.jupiterYears();
    return parseFloat((934.6 - age).toFixed(1));
  }
};

