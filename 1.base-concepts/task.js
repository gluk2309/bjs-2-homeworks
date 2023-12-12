"use strict";

function solveEquation(a, b, c) {
  let discriminant = b ** 2 - 4 * a * c;
  let arr = [];
  if (discriminant < 0) {
    return arr;
  } else if (discriminant === 0) {
    let r = -b / (2 * a);
    arr.push(r);
    return arr;
  } else {
    let r1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let r2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(r1, r2);
    return arr;
  }
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  const monthlyPercent = percent / 100 / 12;
  const bodyCredit = amount - contribution;
  const payment = bodyCredit * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));
  const totalLoanAmount = payment * countMonths;
  return +totalLoanAmount.toFixed(2);
  
}
