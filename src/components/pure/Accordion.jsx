import React, { useState } from 'react';
import { Title, Content, ShowButton, Checkbox } from '../style/styles.js'


const Accordion = ({ title, content, item, withCheckBox}) => {
  const [isActive, setIsActive] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
    
  };

  const addDelete = ()=> {
    isChecked ? deleteItem (item) : addItem(item)
  }

  const addItem = ()=> {
    localStorage.setItem(title, JSON.stringify(item))
  }
  const deleteItem = () =>{
    localStorage.removeItem(title)
  }
  

  return (
    <div>
      <Title>
        <ShowButton onClick={() => setIsActive(!isActive)}> {isActive ? 'v' : '>'}</ShowButton>
        {withCheckBox && 
        <Checkbox
          type="checkbox"
          checked={isChecked}
          onChange={handleOnChange}
          onClick={()=> addDelete(item)}
        />}
        <div>{title}</div>
      </Title>
      {isActive && 
      <Content>{content}</Content>
      }
    </div>
  );
};

export default Accordion;