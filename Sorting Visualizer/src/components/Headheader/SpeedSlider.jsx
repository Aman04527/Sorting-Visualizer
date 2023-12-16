import { Slider } from "antd";
import React from "react";

const SpeedSlider = ({ onSpeedChange, isVisualizing }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div style={{ color: "#8A2BE2", fontWeight: "bold" }}>
        Visualization Speed
      </div>
      <Slider
        disabled={isVisualizing}
        defaultValue={30}
        style={{ width: 200 }}
        handleStyle={{ borderColor: "#8A2BE2" }}
        trackStyle={{ background: "#8A2BE2" }}
        onChange={onSpeedChange}
      />
    </div>
  );
};

export default SpeedSlider;
