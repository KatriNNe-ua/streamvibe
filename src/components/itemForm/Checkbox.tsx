import type { ReactElement } from "react";

type Props = {
  label: string;
  id: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Checkbox({
  label,
  id,
  error,
  ...rest
}: Props): ReactElement {
  return (
	<>
	  <label className="checkbox__label" htmlFor={id}>
           <input type="checkbox" className="checkbox__input"  id={id}
        {...rest}/>
           <span className="checkbox__text">
            {label}
           </span>
         </label>
		  {error && <div className="error-message">{error}</div>}
	</>
  );
}

export default Checkbox;
