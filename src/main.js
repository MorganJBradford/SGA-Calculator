import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
// import './css/styles.css';
import { SuperGalacticAgeCalculator } from './js/sgaCalc.js';
let calc;
$("#galactic-age").submit(function(event) {
  event.preventDefault();
  calc = new SuperGalacticAgeCalculator($('#age').val());
});
$("#mercury-years").on("click", function() {
  calc.mercuryYears();
  $('.mercury-years').text(calc.planetYears);
});
$("#mercury-life-expectancy").on("click", function() {
  calc.mercuryLifeExpectancy();
  $('.mercury-expectancy').text(calc.planetExpectancy);
});
$("#venus-years").on("click", function() {
  calc.venusYears();
  $('.venus-years').text(calc.planetYears);
});
$("#venus-life-expectancy").on("click", function() {
  calc.venusLifeExpectancy();
  $('.venus-expectancy').text(calc.planetExpectancy);
});
