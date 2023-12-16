import React, { useState } from "react";
import Header from "./Headheader/Header";
import generateRandomizedArray from "./generateRandomizedArray";
import SortingBar from "./SortingBar";
import SelectionSort from "./SortingAlgo/SelectionSort";
import BubbleSort from "./SortingAlgo/BubbleSort";
import InsertionSort from "./SortingAlgo/InsertionSort";
import QuickSort from "./SortingAlgo/QuickSort";
import mergeSort from "./SortingAlgo/MergeSort";

const SortingVisualizer = () => {
  const arraySize = 100;
  const [isVisualizing, setIsVisualizing] = useState(false);

  const [randomizedArray, setRandomizedArray] = useState(
    generateRandomizedArray({ arraySize: arraySize })
  );

  const [colorsArray, setColorsArray] = useState(
    new Array(randomizedArray.length).fill(0)
  );
  const [visualizationSpeed, setVisualizationSpeed] = useState(30);
  const [maxItem, setMaxItem] = useState(Math.max(...randomizedArray));
  const [currentAlgorithm, setCurrentAlgorithm] = useState("Bubble Sort");
  const algorithms = [
    "Bubble Sort",
    "Insertion Sort",
    "Selection Sort",
    "Quick Sort",
    "Merge Sort"
  ];
  const onRandomize = () => {
    if (isVisualizing) return;
    const nextRandomizedArray = generateRandomizedArray({
      arraySize: randomizedArray.length
    });
    setRandomizedArray(nextRandomizedArray);
    setMaxItem(Math.max(...nextRandomizedArray));
  };

  const onInputSizeChanged = (val) => {
    if (isVisualizing) return;
    const nextRandomizedArray = generateRandomizedArray({
      arraySize: randomizedArray.length
    });
    setRandomizedArray(nextRandomizedArray);
    setMaxItem(Math.max(...nextRandomizedArray));
    setColorsArray(new Array(nextRandomizedArray.length).fill(0));
  };
  const onSpeedChange = (val) => {
    if (isVisualizing) return;
    setVisualizationSpeed(100 - val + 1);
  };
  const onVisualize = async () => {
    if (isVisualizing) return;

    setIsVisualizing(true);
    switch (currentAlgorithm) {
      case "Selection Sort":
        await SelectionSort({
          array: randomizedArray,
          setArray: setRandomizedArray,
          visualizationSpeed: visualizationSpeed,
          setColorsArray: setColorsArray
        });
        break;

      case "Bubble Sort":
        await BubbleSort({
          array: randomizedArray,
          setArray: setRandomizedArray,
          visualizationSpeed: visualizationSpeed,
          setColorsArray: setColorsArray
        });
        break;

      case "Insertion Sort":
        await InsertionSort({
          array: randomizedArray,
          setArray: setRandomizedArray,
          visualizationSpeed: visualizationSpeed,
          setColorsArray: setColorsArray
        });
        break;

      case "Quick Sort":
        await QuickSort({
          array: randomizedArray,
          leftIndex: 0,
          RightIndex: randomizedArray.length - 1,
          setArray: setRandomizedArray,
          visualizationSpeed: visualizationSpeed,
          setColorsArray: setColorsArray
        });
        break;

      case "Merge Sort":
        await mergeSort({
          array: randomizedArray,
          leftIndex: 0,
          RightIndex: randomizedArray.length - 1,
          setArray: setRandomizedArray,
          visualizationSpeed: visualizationSpeed,
          setColorsArray: setColorsArray
        });
        break;
      default:
        break;
    }
    setIsVisualizing(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header
        algorithms={algorithms}
        onAlgorithmChange={setCurrentAlgorithm}
        currentAlgorithm={currentAlgorithm}
        onRandomize={onRandomize}
        onInputSizeChanged={onInputSizeChanged}
        onSpeedChange={onSpeedChange}
        onStart={onVisualize}
        isVisualizing={isVisualizing}
      />
      <div
        style={{
          backgroundColor: "#0D1929",
          display: "flex",
          height: "100%",
          width: "100vw",
          flexDirection: "row",
          alignItems: "end",
          padding: "0px 0px 0px 0px"
        }}
      >
        {randomizedArray.map((item, index) => {
          const height = (item / maxItem) * 100;
          const width = (1 / randomizedArray.length) * 100;
          return (
            <div
              key={index}
              style={{
                height: "100%",
                display: "flex",
                alignItems: "end",
                width: `${width}%`
              }}
            >
              <SortingBar
                colorCode={colorsArray[index]}
                style={{
                  height: `calc(${height}% - 20px)`,
                  width: "100%",
                  margin: "auto 10% 0 10%"
                }}
              ></SortingBar>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SortingVisualizer;
