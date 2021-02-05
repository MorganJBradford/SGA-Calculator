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
    this.venusYears();
    this.planetExpectancy = parseFloat((48.9 - this.planetYears).toFixed(1));
  }

  marsLifeExpectancy(){
    this.marsYears();
    this.planetExpectancy = parseFloat((148.1 - this.planetYears).toFixed(1));
  }

  jupiterLifeExpectancy(){
    this.jupiterYears();
    this.planetExpectancy = parseFloat((934.6 - this.planetYears).toFixed(1));
  }
};

