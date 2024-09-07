import React from "react";

interface IStatisticsProps {
  width?: number | string;
  height?: number | string;
}

const Statistics = ({ width, height }: IStatisticsProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width={width} height={height} fill="url(#pattern0_2116_587)" />
      <defs>
        <pattern
          id="pattern0_2116_587"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2116_587" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2116_587"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default Statistics;
