import { memo, useRef, useState } from "react";
import { slideToggle } from "../../../utils/slide";

type Props = {
  question: string;
  answer: string;
};

function FaqItem({ question, answer }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const detailsRef = useRef<HTMLDetailsElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  function toggle(e: React.MouseEvent) {
    e.preventDefault();

    const details = detailsRef.current;
    const content = contentRef.current;

    if (!details || !content) return;

    if (!details.open) {
      details.open = true;
    } else {
      setTimeout(() => {
        details.open = false;
      }, 500);
    }

    slideToggle(content, 500);

    setIsOpen((prev) => !prev);
  }

  return (
    <div className={`faq__item item-faq ${isOpen ? "--active" : ""}`}>
      <details ref={detailsRef} className="item-faq__body">
        <summary className="item-faq__title -icon-plus" onClick={toggle}>
          {question}
        </summary>

        <div ref={contentRef} className="item-faq__content" hidden>
          <p>{answer}</p>
        </div>
      </details>
    </div>
  );
}

export default memo(FaqItem);
