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
      console.log("entrei nos parenteses");
    } else if (
      brackets[i] === "[" &&
      brackets[brackets.length - i - 1] === "]"
    ) {
      count += 0;
      console.log("entrei nos colchetes");
    } else if (
      brackets[i] === "{" &&
      brackets[brackets.length - i - 1] === "}"
    ) {
      count += 0;
      console.log("entrei nas chaves");
    } else {
      count += 1;
    }
  }
  if (count === 0) {
    console.log(count);
    return true;
  } else {
    console.log(count);
    return false;
  }
};

// console.log(arrayIndices([2, 7, 11, 15, 8, 13], 23));

console.log(balancedBrackets("{{[[(())]]}}"));
