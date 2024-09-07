interface ICrownProps {
  width?: number | string;
  height?: number | string;
}

const Crown = ({ width, height }: ICrownProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width={width} height={height} fill="url(#pattern0_2116_581)" />
      <defs>
        <pattern
          id="pattern0_2116_581"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2116_581" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2116_581"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default Crown;
