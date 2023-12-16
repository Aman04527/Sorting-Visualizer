import React from "react";
import { Slider } from "antd";

const InputSizeSlider = ({ onInputSizeChanged, isVisualizing }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div style={{ color: "#8A2BE2", fontWeight: "bold" }}>Array Size</div>
      <Slider
        disabled={isVisualizing}
        defaultValue={100}
        min={30}
        max={400}
        step={2}
        style={{ width: 200 }}
        handleStyle={{ borderColor: "#8A2BE2" }}
        trackStyle={{ background: "#8A2BE2" }}
        onChange={onInputSizeChanged}
      />
    </div>
  );
};

export default InputSizeSlider;
