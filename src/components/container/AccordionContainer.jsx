
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// uuid librarie to make unique IDs
import { v4 as uuidv4 } from "uuid";
import Accordion from "../pure/Accordion";
import { Button } from '../style/styles.js'

const AccordionContainer = () => {
  const navigate = useNavigate();
  const [chapters, setChapters] = useState([]);

  const getChapters = () => {
    fetch("../../data/Chapters.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setChapters(myJson);
      });
  };

  useEffect(() => {
    getChapters();
  }, []);

  return (
    <div>
      {chapters &&
        chapters.length !== 0 &&
        chapters.map((chapter) =>
          chapter.map((item) => {
            return (
              <>
                <Accordion
                  key={uuidv4()}
                  withCheckBox={true}
                  title={item.chapterInfo.name}
                  item={item}
                  content={item.subchapters.map((item) => {
                    return (
                      <Accordion
                        key={uuidv4()}
                        item={item}
                        withCheckBox={true}
                        title={item.chapterInfo.name}
                        content={item.subchapters.map((item) => {
                          return (
                            <Accordion
                              key={uuidv4()}
                              item={item}
                              withCheckBox={true}
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
          })
        )}

      <Button onClick={() => navigate("/saved-items")}>Mostrar solo items seleccionados</Button>
    </div>
  );
};
export default AccordionContainer;
