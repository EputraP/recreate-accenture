import React, { useRef, useState } from "react";
import CircleProgressBar from "./circle-progress-bar";
import { motion, useScroll } from "framer-motion";
import "./deg-value.scss";

const degvalue = () => {
  const [scrollValue, setScrollValue] = useState<number>();
  const componentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
  });

  scrollYProgress.onChange((value) => setScrollValue(100 - value * 100));
  console.log(scrollValue);
  return (
    <div ref={componentRef} className="value-degree-component">
      <span className="value-degree-component__deg-value">
        360
        {
          <div>
            <CircleProgressBar
              circleWidth={30}
              percentage={scrollValue ? scrollValue : 0}
              radius={10}
              strokeWidth={8}
            />
          </div>
        }
        VALUE
      </span>

      <h3>
        Every day, we embrace change and create value for all our stake holders,
        in every part of the world
      </h3>
    </div>
  );
};

export default degvalue;
