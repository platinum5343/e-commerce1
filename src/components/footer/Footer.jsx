 import React from 'react'
import css from './Footer.module.css'
 import Logo from "../../assets/logo.png";
// import { LocationMarkerIcon,  
//     InboxIcon,
//     LoginIcon,

//     UsersIcon,
//     PhoneIcon,} from '@heroicons/react'
const Footer = () => {
  return (
     <div className={css.cFooterWrapper}>
         <hr />

     <div className={css.cFooter}>
     <div className={css.logo}>
         <img src={Logo} alt="" />
         <span>amazon</span>
     </div>
    {/* // <div className={css.block}>
    //     <div className={css.detail}>
    //         <span>Contact Us</span>
    //         <span className={css.pngLine}>
    //            <LocationMarkerIcon/> 
    //             <span>048 north avenue Orlando, Fl 32801</span>
    //         </span>


    //         <span className={css.pngLine}>
    //             < PhoneIcon className={css.icon} />
                 
    //             <span>048 north avenue Orlando, Fl 32801</span>
    //         </span>
    //         <span className={css.pngLine}>
    //            <InboxIcon className={css.icon} /> 
               
             <span>048 north avenue Orlando, Fl 32801</span>
           </span>
           <span className={css.pngLine}>
              <LoginIcon className={css.icon} /> 
               <span>048 north avenue Orlando, Fl 32801</span>
           </span>
           <span className={css.pngLine}>
              <InboxIcon className={css.icon} /> 
               <span>048 north avenue Orlando, Fl 32801</span>
           </span>
           <span className={css.pngLine}>
               <UsersIcon className={css.icon} /> 
               <span>048 north avenue Orlando, Fl 32801</span>
           </span>
       </div>
   </div> */}
   </div>
    </div>
  )
}

export default Footer