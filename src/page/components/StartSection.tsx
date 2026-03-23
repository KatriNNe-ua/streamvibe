import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import { frontRoutes } from "../../routes/frontRoutes";

function StartSection(): ReactElement {
 return (
   <section className="page__start start">
     <div className="start__container">
       <div className="start__body">
         <div className="start__section-header section-header">
           <h2 className="section-header__title section-header__title--big">
             Start your free trial today!
           </h2>
           <div className="section-header__text">
             <p>
               This is a clear and concise call to action that encourages users
               to sign up for a free trial of StreamVibe.
             </p>
           </div>
         </div>
         <Link to={frontRoutes.navigator.subscription} className="start__button button">
           Start a Free Trail
         </Link>
       </div>
     </div>
   </section>
 );
}

export default StartSection;