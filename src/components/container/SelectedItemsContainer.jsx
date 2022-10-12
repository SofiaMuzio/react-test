import React from "react";
// uuid librarie to make unique IDs
import { v4 as uuidv4 } from "uuid";
import Accordion from "../pure/Accordion";

const SelectedItemsContainer = () => {
/**
 * Function to retrieve saved items from LocalStorage
 */
  const allItems = [];
  const keys = Object.keys(window.localStorage);
  keys.forEach((key) => {
    const item = JSON.parse(localStorage.getItem(key) + "")
    console.log(item)
    allItems.push(item);    
  });

  return (
    <div>
      {allItems.map((item) => {
        return (
          <>
            <Accordion
              key={uuidv4()}
              title={item.chapterInfo.name }
              item={item}
              content={item.subchapters.map((item) => {
                return (
                  <Accordion
                    key={uuidv4()}
                    title={item.chapterInfo.name}
                    content={item.subchapters.map((item) => {
                      return (
                        <Accordion
                          key={uuidv4()}
                          title={item.chapterInfo.name}
                        />
                      );
                    })}
                  />
                );
              })}
            />
          </>
        );
      })}
      
    </div>
  );
};

export default SelectedItemsContainer;
