import React from "react";

const Wind = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      x="0px"
      y="0px"
      viewBox="0 0 448 448"
      fill={props.fill}
    >
      <g>
        <g>
          <path
            d="M384,112c-35.297,0-64,28.711-64,64c0,8.836,7.156,16,16,16s16-7.164,16-16c0-17.649,14.359-32,32-32s32,14.351,32,32
			s-14.359,32-32,32H17.266c-8.844,0-16,7.164-16,16s7.156,16,16,16H384c35.297,0,64-28.711,64-64S419.297,112,384,112z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M224,48c-35.297,0-64,28.711-64,64c0,8.836,7.156,16,16,16s16-7.164,16-16c0-17.649,14.359-32,32-32s32,14.351,32,32
			s-14.359,32-32,32H16c-8.844,0-16,7.164-16,16s7.156,16,16,16h208c35.297,0,64-28.711,64-64C288,76.711,259.297,48,224,48z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M224,272H16c-8.844,0-16,7.164-16,16s7.156,16,16,16h208c17.641,0,32,14.351,32,32s-14.359,32-32,32s-32-14.351-32-32
			c0-8.836-7.156-16-16-16s-16,7.164-16,16c0,35.289,28.703,64,64,64c35.297,0,64-28.711,64-64C288,300.711,259.297,272,224,272z"
          />
        </g>
      </g>
    </svg>
  );
};

export default Wind;
