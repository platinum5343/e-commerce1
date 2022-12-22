import React from 'react'
import shade from '../../assets/shade.png'
 import Before from '../../assets/before.png'
 import After from '../../assets/after.png'
import ReactCompareImage from "react-compare-image";
import css from './Virtual.module.css';
const Virtual = () => {
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
        
         <ReactCompareImage leftImage={Before}
        rightImage={After} /> 
      </div> 
      
      </div>
    </div>
  )
}

export default Virtual