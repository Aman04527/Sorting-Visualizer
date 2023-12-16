import asyncSetTimeout from "../asyncSetTimeout";

let arr = [];

const Quicksort = async ({
  leftIndex,
  rightIndex,
  setArray,
  setColorsArray,
  visualizationSpeed
}) => {
  if (leftIndex >= rightIndex) return;

  let left = leftIndex;
  let right = rightIndex;
  let mid = Math.floor((leftIndex + rightIndex) / 2);
  let pivot = arr[mid];

  let newColorsArray = new Array(arr.length).fill(0);
  newColorsArray[mid] = 3;
  setColorsArray(newColorsArray);
  console.log(visualizationSpeed);
  await asyncSetTimeout({ timeout: visualizationSpeed });

  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
      let newColorsArray = new Array(arr.length).fill(0);
      newColorsArray[mid] = 3;
      newColorsArray[left] = 2;
      newColorsArray[right] = 2;
      setColorsArray(newColorsArray);
      await asyncSetTimeout({ timeout: visualizationSpeed });
    }
    while (arr[right] > pivot) {
      right--;
      let newColorsArray = new Array(arr.length).fill(0);
      newColorsArray[mid] = 3;
      newColorsArray[left] = 2;
      newColorsArray[right] = 2;
      setColorsArray(newColorsArray);
      await asyncSetTimeout({ timeout: visualizationSpeed });
    }
    if (left <= right) {
      let newColorsArray = new Array(arr.length).fill(0);
      newColorsArray[mid] = 3;
      newColorsArray[left] = 1;
      newColorsArray[right] = 1;
      setColorsArray(newColorsArray);

      await asyncSetTimeout({ timeout: visualizationSpeed });

      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
      setArray(arr);
    }
  }

  await Quicksort({
    leftIndex: leftIndex,
    rightIndex: right,
    setArray: setArray,
    setColorsArray: setColorsArray,
    visualizationSpeed: visualizationSpeed
  });
  await Quicksort({
    leftIndex: left,
    rightIndex: rightIndex,
    setArray: setArray,
    setColorsArray: setColorsArray,
    visualizationSpeed: visualizationSpeed
  });
  newColorsArray = new Array(arr.length).fill(0);
  setColorsArray(newColorsArray);
  setArray(arr);
  await asyncSetTimeout({ timeout: visualizationSpeed });
};

const QuickSort = async ({
  array,
  leftIndex,
  rightIndex,
  setArray,
  setColorsArray,
  visualizationSpeed
}) => {
  arr = [];
  arr = array.concat();
  await Quicksort({
    leftIndex: leftIndex,
    rightIndex: rightIndex,
    setArray: setArray,
    setColorsArray: setColorsArray,
    visualizationSpeed: visualizationSpeed
  });
};
export default QuickSort;
