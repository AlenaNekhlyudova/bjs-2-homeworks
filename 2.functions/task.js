function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }

    sum += arr[i];
  }

  let avg = sum / arr.length;
  avg = +avg.toFixed(2);

  return { min: min, max: max, avg: avg };
}



function summElementsWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }

    sum += arr[i];
  }
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0);
    return 0;
}

const max = Math.max(...arr);
const min = Math.min(...arr);
return max - min;

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    const number =  arr[i];

    if (number % 2 === 0) {
      sumEvenElement += number;
    } else {
      sumOddElement += number;
    }
    return number;
  }
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];

    if (number % 2 === 0) {
      sumEvenElement += i;
    } else {
      countEvenElement += 1;
    }
    return sumEvenElement / co;
  }
}

function makeWork (arrOfArr, func) {

}
