export class SuperGalacticAgeCalculator {
  constructor(age){
    this.age = age;
  }

  mercuryYears(){
    return parseFloat((this.age * 0.24).toFixed(1));
  }

  venusYears(){
    return parseFloat((this.age * 0.62).toFixed(1));
  }

  marsYears() {
    return parseFloat((this.age * 1.88).toFixed(1));
  }

  jupiterYears() {
    return parseFloat((this.age * 11.86).toFixed(1));
  }

  lifeExpectancy(){
    return parseFloat((78.8 - this.age).toFixed(1));
  }

  mercuryLifeExpectancy(){
    let age = this.mercuryYears()
    return parseFloat((18.9 - age).toFixed(1));
  }
    
  venusLifeExpectancy(){

  }  
};

