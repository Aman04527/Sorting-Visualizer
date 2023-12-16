import React from "react";
import { Button } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";

const StartButton = ({ onClick }) => {
  return (
    <div style={{ marginTop: 8 }}>
      <Button
        type="primary"
        style={{
          width: 130,
          background: "#8A2BE2",
          borderColor: "#8A2BE2",
          fontWeight: "bold"
        }}
        icon={<PlayCircleOutlined />}
        onClick={onClick}
      >
        Start
      </Button>
    </div>
  );
};

export default StartButton;
