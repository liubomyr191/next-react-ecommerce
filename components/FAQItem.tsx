import React from "react";
import { useSpring, animated } from "react-spring";
import { IconPlus } from "@tabler/icons";

interface FAQProps {
  question: JSX.Element;
  answer: JSX.Element;
}

const FAQ: React.FC<FAQProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const styles = useSpring({
    from: { rotateZ: 0 },
    to: { rotateZ: isOpen ? 45 : 0 },
  });

  return (
    <div>
      <div className="flex items-start justify-between">
        <h2 className="leading-tight mb-4">{question}</h2>
        <animated.div
          className="cursor-pointer"
          style={{
            width: 30,
            height: 30,
            ...styles,
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <IconPlus size={30} />
        </animated.div>
      </div>
      {isOpen && <p className="mr-2 rounded-lg border-2 border-solid border-gray-300 p-4">{answer}</p>}
    </div>
  );
};

export default FAQ;