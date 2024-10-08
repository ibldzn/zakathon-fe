import React from "react";

interface ISheepProps {
  width?: number | string;
  height?: number | string;
}

const Sheep = ({ width, height }: ISheepProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width={width} height={height} fill="url(#pattern0_2116_567)" />
      <defs>
        <pattern
          id="pattern0_2116_567"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2116_567" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2116_567"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default Sheep;
