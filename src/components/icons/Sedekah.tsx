import React from "react";

interface ISedekahProps {
  width?: number | string;
  height?: number | string;
}

const Sedekah = ({ width, height }: ISedekahProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width={width} height={height} fill="url(#pattern0_2116_563)" />
      <defs>
        <pattern
          id="pattern0_2116_563"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2116_563" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2116_563"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default Sedekah;
