import React from "react";

interface IHouseProps {
  width?: number | string;
  height?: number | string;
}

const House = ({ width, height }: IHouseProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width={width} height={height} fill="url(#pattern0_2116_577)" />
      <defs>
        <pattern
          id="pattern0_2116_577"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2116_577" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2116_577"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGklEQVR4nO2b3U8cVRTAJ9UHAi8aU18UkIqWNmTukJ3ZnUFTTKhBEx9qDGr6UqOGmL4ZYkwaH/roq4nGr/hiajRYrKVGY1MItrYS7Ae7C4gp2907e+8sf4FSpRxzFhbWZSkfnZm9u3t+yQmb3Tv3nHN/e2d2YNE0giAIgiAIgiAIgiAIgiBCATRtj7Stoxj4mJa9QoCm7RFOtF845qx0LMAQtpXyHHMA+vvvIzEVFCFLgsQoIkKSGDVFSBKjpghJYtQUIUmMmiIkiVFThCQxaoqQJGb9ztpfEeZfK+GTGKyt1u/8A9oRt4Vtfera9iM5x3lY2Ob7voqpxTv/oEVoJZCYCojIRqOPbvVGWBNjm3/X9Y4JUMSXC0+b+3ZaD8oTtvlB3YkJSMQ/uxVRijDN5roQE6QI3h153O96a1ZMtYkoRT4VaVkRYy1WtZggRbh2V7sWMlUvRtrmCT9FSNv6IheNtmkVJheNtmEt+Zr86s82TwReuHSsk/f8DnKsO9Ixh7Kx2BOaYnhOVyt+tBa2+a8PUk4qLaQgQljWk5ri5GKxx3wQo6aQahLhsxi1hKyJ6Db3a1VOLhpt24UYNYTUkoh7FFNZIQUR0ol0aDVObl3MknJC6klEKfhrnbuICVdIXoRtnhPdllE6Lp1ON3icD7ip1PG5qauf3Ppj5j0vywcE5/0YXjb9vOe6PUKkjQXO93HOHwSA0P8ghDkxN9aAtWBNWNt6nXwAa8cesBfsCXsrnceLxQ7gzW2JmHCECMda3kzEWoGet1e6HHYSgmfuSJd7wuVXpZsZkW7mY+GmB0Um0yuEeGi3NeOx+Tnc9CDOiXOv5ODeas4d1Ym9bdp3NHqwSEwIQmKRZ3OO2bnVuN0IkVsFz2QF56e8bOYlALh/s9z4Go7BsXiM33XcTUgBXCNcK00VAhHiFkdm3uM8siEv5xF8Lcjc2xFScW4w9kCSsWcKMXfs2JFghXBw52YXLr/7zmBx4HNB58XeinvF3jXVWC0OCjFz6FCgiyJdDjw1DxeGTv0v8Lmg82Jvxb1i75pqkBDFhUz39NTuDunpqb4dkuzrq1khyb4+EiJJCO0QSTuE0ymLriGcriF0UQ8B+pSlGCREMUiIYpAQxSAhikFCFIOEKAYJUQwSohgkRDFIiGKQEMUgIYpBQhSDhCgGCVEMEqIYJEQxSIhikBDFICGKQUIUFxJ3nA3fux0b/hrGvvsGxs8MwcWzp+HSD2fgyk8jMHH+R5gcOw/XLo5C/LdfYfbaJPyZmILU3CxkM7d8+24vzoVz4tyYA3NhTsyNNWAtWBPWhjVirVhzaQ7srSaE7CZGv/0KLo0Mw+Toz5CYuAzzM9P4v4hbCsExOBaPwWNxDpzLj5rqWsiFMjH+/RAkJ64AT90sI+Rm/jUcE1R+EjJUfmHwNLOd50gI7pKuLrjxXF8gMX64F97o2A9vHujI/yyOwnO/HO4NLD/2VnWnrCAjoevwSlMTvNDQUDZebWrKjwmrnroXkmQMPmtp2VTI562tYcogIcnVhfiwuRmONDauiXixsRE+am4OW4aaQq4bxt6EYfQHFXHDOJ5g7HbpYvze2Qmn29thuL09/7jMYi0mdP2tIGvD3rV6JIELwNjytq81jC3HDeNopeuuaRK6/nq5nVJGxmKcsdcqXW9dMKXrnQnGziV1fWmDDF1fSjB2dtowDla6zrrjOl63GHs5ztjbGPi4bs/nBEEQBEEQBEEQBEEQBKGFy39jOswb+YckOQAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
};

export default House;
