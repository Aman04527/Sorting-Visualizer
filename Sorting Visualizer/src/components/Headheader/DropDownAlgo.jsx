import React from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const DropDownAlgo = ({ currentAlgorithm, algorithms, onAlgorithmChange }) => {
  const Width = 170;

  const menu = (
    <Menu style={{ width: Width }}>
      {Array.isArray(algorithms) ? (
        algorithms.map(function (algo, idx) {
          return (
            <Menu.Item key={idx} onClick={() => onAlgorithmChange(algo)}>
              {algo}
            </Menu.Item>
          );
        })
      ) : (
        <Menu.Item disabled>No algorithms available</Menu.Item>
      )}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <div
        style={{
          height: 40,
          width: Width,
          padding: 10,
          fontWeight: "bold",
          background: "#8A2BE2",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer"
        }}
      >
        {currentAlgorithm}
        <DownOutlined />
      </div>
    </Dropdown>
  );
};

export default DropDownAlgo;
