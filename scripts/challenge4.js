"use strict";

const temperatures = [17, 25, 28, 3, 5, 0, 2];

let maxTemp = temperatures[0];
let minTemp = temperatures[0];

const calcMaxMinTemp = function (temperatures) {
  for (let i = 0; i < temperatures.length; i++) {
    if (maxTemp < temperatures[i]) {
      maxTemp = temperatures[i];
    }
    if (minTemp > temperatures[i]) {
      minTemp = temperatures[i];
    }
  }
  console.log(
    `Week's Highest Temperture - ${maxTemp} Lowest Temperature - ${minTemp}`
  );
  return -1;
};
calcMaxMinTemp(temperatures);

const tempForecasts = [12, 5, -5, 0, 4];

const printForecast = function (tempForecasts) {
  for (let j = 0; j < tempForecasts.length; j++) {
    console.log(`${tempForecasts[j]}C in ${j + 1} days...`);
  }
};
printForecast(tempForecasts);
