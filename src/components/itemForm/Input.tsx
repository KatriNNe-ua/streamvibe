import type { ReactElement } from "react";

type Props = {
  label: string;
  id: string;
  placeholder: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input({ label, id, placeholder, error, ...rest }: Props): ReactElement {
  return (
    <>
      {label && (
        <label htmlFor={id} className="form__label">
          {label}
        </label>
      )}
      <input id={id} {...rest} className="form__input input" placeholder={placeholder}/>
      {error && <div className="error-message">{error}</div>}
    </>
  );
}

export default Input;
