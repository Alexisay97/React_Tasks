import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  subtitle: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItemProps[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); // Expande o contrae
  };

  return (
    <div className="w-full border border-gray-200 divide-y divide-gray-200">
      {items.map((item, index) => (
        <div key={index}>
          <button
            key={index}
            type="button"
            onClick={() => toggleAccordion(index)}
            className={`w-full text-left px-4 py-3 font-medium ${
              activeIndex === index
                ? 'bg-white text-gray-900 dark:bg-gray-900 dark:text-white hover:bg-gray-700'
                : 'hover:bg-gray-200'
            }`}
          >
            {item.title}
            {item.subtitle ? <p className={`text-sm ${activeIndex === index ? 'text-gray-300':'text-gray-700'}`}>{item.subtitle}</p> : ""}
          </button>
          {activeIndex === index && (
            <div className="px-4 py-3 text-gray-700 bg-gray-50">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
