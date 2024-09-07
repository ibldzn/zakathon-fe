interface ICashInHandProps {
  width?: number | string;
  height?: number | string;
}

const CashInHand = ({ width, height }: ICashInHandProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width={width} height={height} fill="url(#pattern0_2116_559)" />
      <defs>
        <pattern
          id="pattern0_2116_559"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2116_559" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2116_559"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default CashInHand;
