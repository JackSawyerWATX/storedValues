function area(width, height) {
  return width * height;
}

function cost(price, tax) {
  return price * (1 + tax);
}

function total(area, cost) {
  return area * cost;
}

const calculatedArea = area(10, 12);
const calculatedCost = cost(45, 0.08);
const calculatedTotal = total(calculatedArea, calculatedCost);

console.log(`$${calculatedTotal.toFixed(2)}`);