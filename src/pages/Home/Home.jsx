import React, { useEffect } from 'react';
import AccordionContainer from '../../components/container/AccordionContainer';

const Home = () => {
/**
 * Use effect to clear the Storage in case the user came back ti the home page to make another selection of items
 */
  useEffect(() => {
    localStorage.clear();
  }, []);

    return (
        <div>
        <h1>Todos los items</h1>
        <AccordionContainer />
        </div>
    );
}

export default Home;
