function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    const firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondNum = array[j];
      if (targetSum - firstNum === secondNum) {
        return [firstNum, secondNum];
      }
    }
  }
  return [];
}
