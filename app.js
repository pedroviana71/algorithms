//QUESTÃO UM
const arrayIndices = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length - 1; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
};

//QUESTÃO DOIS
const balancedBrackets = (brackets) => {
  let count = 0;

  for (let i = 0; i < brackets.length / 2; i++) {
    if (brackets[i] === "(" && brackets[brackets.length - i - 1] === ")") {
      count += 0;
    } else if (
      brackets[i] === "[" &&
      brackets[brackets.length - i - 1] === "]"
    ) {
      count += 0;
    } else if (
      brackets[i] === "{" &&
      brackets[brackets.length - i - 1] === "}"
    ) {
      count += 0;
    } else {
      count += 1;
    }
  }
  if (count === 0) {
    return "SIM";
  } else {
    return "NÃO";
  }
};

//QUESTÃO TRÊS
const findProfit = (array) => {
  let max = 0;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] - array[j] < 0 && array[i] - array[j] < max) {
        max = array[i] - array[j];
      }
    }
  }
  if (max === 0) {
    return max;
  } else {
    return -max;
  }
};

//QUESTÃO QUATRO
const elevationMap = (array) => {
  let result = 0;
  let leftMax = 0;
  let rightMax = 0;
  for (let i = 1; i <= array.length - 1; i++) {
    let arrayLeft = array.slice(0, i);
    let arrayRight = array.slice(i + 1, array.length);
    leftMax = Math.max(...arrayLeft);
    rightMax = Math.max(...arrayRight);
    let minimumBeetwenMaxes = Math.min(leftMax, rightMax);
    let value = minimumBeetwenMaxes - array[i];
    if (value > 0) {
      result += value;
    }
  }
  return result;
};

// TESTES
console.log("QUESTÃO UM");
console.log(arrayIndices([2, 7, 11, 15, 8, 13], 23), "should be [3, 4]");
console.log(arrayIndices([2, 7, 11, 15, 8, 13], 9), "should be [0, 1]");
console.log(arrayIndices([2, 7, 11, 15], 9), "should be [0, 1]");
console.log(arrayIndices([2, 7, 11, 15], 26), "should be [2, 3]");
console.log(
  arrayIndices([11, 15, 8, 14, 18, 5, 4, 13], 15),
  "should be [0, 6]"
);

console.log("--------------------");
console.log("QUESTÂO DOIS");
console.log(balancedBrackets("{{[[(())]]}}"), 'should be "SIM"');
console.log(balancedBrackets("{{[[]]}}"), 'should be "SIM"');
console.log(balancedBrackets("{}"), 'should be "SIM"');
console.log(balancedBrackets("([{]})"), 'should be "NÃO"');

console.log("--------------------");
console.log("QUESTÂO TRÊS");
console.log(findProfit([7, 6, 4, 3, 1]), "should be 0");
console.log(findProfit([7, 1, 5, 3, 6, 4]), "should be 5");
console.log(findProfit([8, 5, 1, 1, 6, 8]), "should be 7");
console.log(findProfit([5, 5, 8, 1, 4, 3, 9, 2, 5, 4]), "should be 8");
console.log(findProfit([1, 10, 3, 4, 5, 6, 7]), "should be 9");

console.log("--------------------");
console.log("QUESTÂO QUATRO");
console.log(elevationMap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), "should be 6");
console.log(
  elevationMap([0, 2, 1, 0, 1, 0, 2, 3, 1, 0, 1, 2, 0, 1]),
  "should be 11"
);
console.log(elevationMap([0, 2, 1, 0, 1, 0, 2, 3, 1, 0, 1, 2]), "should be 10");
console.log(elevationMap([4, 3, 4, 1, 2, 2, 2]), "should be 2");
