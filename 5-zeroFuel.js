const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (fuelLeft * mpg >= distanceToPump) {
    return true;
  } else {
    return false;
  }
};

console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 50, 1));