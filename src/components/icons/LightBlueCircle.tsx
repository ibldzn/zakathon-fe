interface ILightBlueCircleProps {
  width?: number | string;
  height?: number | string;
}

const LightBlueCircle = ({ width, height }: ILightBlueCircleProps) => {
  width ??= 56;
  height ??= 56;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        x="1.5"
        y="1.5"
        width="53"
        height="53"
        fill="url(#pattern0_2252_2101)"
        stroke="#5FBEF2"
        stroke-width="3"
      />
      <defs>
        <pattern
          id="pattern0_2252_2101"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2252_2101" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2252_2101"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default LightBlueCircle;
