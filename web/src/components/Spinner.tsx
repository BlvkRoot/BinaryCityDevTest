import React, { useState, CSSProperties } from "react";
import { DotLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

interface ILoadingProps {
  loading?: boolean;
}

function Spinner({ loading }: ILoadingProps) {
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading">
      <DotLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;
