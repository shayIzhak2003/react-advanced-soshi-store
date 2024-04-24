import React, { useState } from 'react';
import "./style/Accordion.css"

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='center'>
        <div className="body">
      <div className="" onClick={toggleAccordion}>
        {title}
        <i className={`fa fa-chevron-down accordion-icon ${isOpen ? 'open' : ''}`} />
      </div>
      {isOpen && (
        <div className="">
          <br></br>
          <p>{content}</p>
        </div>
      )}
    </div>
    </div>
  
  );
};

export default Accordion;
