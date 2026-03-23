import type { ReactElement } from "react";

type Props = {
  label: string;
  id: string;
  placeholder: string;
  error?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

function Textarea({ label, id, error, placeholder, ...rest }: Props): ReactElement {
  return (
    <>
      {label && (
        <label htmlFor={id} className="form__label">
          {label}
        </label>
      )}
      <textarea
        id={id}
        {...rest}
        placeholder={placeholder}
        className="form__textarea textarea"
      ></textarea>
      {error && <div className="error-message">{error}</div>}
    </>
  );
}

export default Textarea;
