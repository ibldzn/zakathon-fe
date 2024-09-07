interface IFeedbackProps {
  width?: number | string;
  height?: number | string;
}

const Feedback = ({ width, height }: IFeedbackProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width={width} height={height} fill="url(#pattern0_2116_595)" />
      <defs>
        <pattern
          id="pattern0_2116_595"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2116_595" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2116_595"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default Feedback;
