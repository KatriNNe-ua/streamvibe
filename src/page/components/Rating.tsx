import type { ReactElement } from "react";


type Prop = {
  value: number; 
  max?: number; 
}
function Rating({ value, max = 5 }: Prop): ReactElement {
  const percent = (value / max) * 100;

  return (
    <div className="rating">
      <div className="rating__body">
        <div className="rating__stars">
          <div
            className="rating__active"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
      
      </div>
    </div>
  );
}

export default Rating;
