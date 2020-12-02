import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Title = ({ title }) => {
  let line1 = useRef(null);
  useEffect(() => {
    gsap.from([line1], {
      duration: 0.5,
      delay: 0.8,
      y: "25vw",
    });
  }, [line1]);
  return (
    <>
      <h1>
        <div className="line-wrap">
          <div ref={(el) => (line1 = el)} className="line">
            {title}
          </div>
        </div>
      </h1>
    </>
  );
};

export default Title;