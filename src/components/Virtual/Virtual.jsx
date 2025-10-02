import React, { useEffect, useState } from 'react'
import shade from '../../assets/shade.png'
import Before from '../../assets/before.png'
import After from '../../assets/after.png'
import ReactCompareImage from "react-compare-image";
import css from './Virtual.module.css';

const Virtual = () => {
  const [position, setPosition] = useState(0.5); // middle by default

  useEffect(() => {
    let direction = 1;
    const interval = setInterval(() => {
      setPosition((prev) => {
        let next = prev + 0.01 * direction;
        if (next >= 1 || next <= 0) direction *= -1; // reverse at edges
        return next;
      });
    }, 60); // smooth movement
    return () => clearInterval(interval);
  }, []);

  return ( 
    <div className={css.Virtual}>
      <div className={css.left}>
        <span>Virtual try-on</span>
        <span>Never Buy the wrong shade again</span>
        <span>Try now</span>
        <img src={shade} alt="" /> 
      </div>

      <div className={css.right}>
        <div className={css.wrapper}>
          <ReactCompareImage 
            leftImage={Before}
            rightImage={After}
            sliderPositionPercentage={position} // 🔥 auto movement
          /> 
        </div> 
      </div>
    </div>
  )
}

export default Virtual
