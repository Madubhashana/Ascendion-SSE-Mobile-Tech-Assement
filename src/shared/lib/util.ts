export const addTwoNumbers = (number1: number, number2: number) =>
  number1 + number2;

export const twoSum = (numbers: number[], target: number) => {
  /*
   * Solution 1:
   * Space: O(1)   - Constant extra space
   * Time : O(n)   - Single loop
   */

  let minIndex = 0;
  let maxIndex = numbers.length - 1;

  while (minIndex < maxIndex) {
    const sum = addTwoNumbers(numbers[minIndex], numbers[maxIndex]);

    if (sum === target) {
      return [minIndex + 1, maxIndex + 1];
    }

    if (sum < target) {
      minIndex++;
    } else {
      maxIndex--;
    }
  }

  /*
   * Solution 2:
   * Space: O(1)    - Constant extra space
   * Time : O(n²)   - Nested loops
   */
  //   const arrayLength = numbers.length;

  //   for (let i = 0; i < arrayLength; i++) {
  //     if (i === arrayLength) {
  //       // Reached the end of the array
  //       return [];
  //     }

  //     for (let j = arrayLength - 1; j > 0; j--) {
  //       if (addTwoNumbers(numbers[i], numbers[j]) === target) {
  //         return [i + 1, j + 1];
  //       }
  //     }
  //   }

  return [];
};
