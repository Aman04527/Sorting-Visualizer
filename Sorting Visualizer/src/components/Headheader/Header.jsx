import React from "react";
import DropDownAlgo from "./DropDownAlgo";
import { Row } from "antd";
import InputSizeSlider from "./InputSizeSlider";
import RandomizeButton from "./RandomizeButton";
import StartButton from "./StartButton";
import SpeedSlider from "./SpeedSlider";

const Header = ({
  algorithms,
  onAlgorithmChange,
  currentAlgorithm,
  onSpeedChange,
  onInputSizeChanged,
  onRandomize,
  onStart,
  isVisualizing
}) => {
  // const openUrl = (url) => {
  //   window.open(url, "_blank")?.focus();
  // };

  return (
    <Row
      style={{
        background: "#BDB76B",
        color: "white",
        padding: "10px 0px 10px 0px",
        width: "100%"
      }}
      align="middle"
      justify="space-around"
    >
      <DropDownAlgo
        currentAlgorithm={currentAlgorithm}
        algorithms={algorithms}
        onAlgorithmChange={(algo) => onAlgorithmChange(algo)}
      />
      <SpeedSlider
        onSpeedChange={onSpeedChange}
        isVisualizing={isVisualizing}
      />
      <InputSizeSlider
        onInputSizeChanged={onInputSizeChanged}
        isVisualizing={isVisualizing}
      />
      <RandomizeButton onClick={onRandomize} />
      <StartButton onClick={onStart} />
    </Row>
  );
};

export default Header;
