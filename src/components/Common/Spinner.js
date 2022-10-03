import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "50px 0",
      }}
    >
      <BeatLoader
        color="#49446B"
        height={15}
        width={15}
        radius={2}
        margin={2}
      />
    </div>
  );
};

export default Spinner;
