import React from 'react';
import './App.css';
import Header from './components/Header';
import LexPost from './components/LexPost';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <LexPost time="Jan 2023 - Present" title="Software Engineer @ DebtBook" description="Currently, I work as a mid-level software engineer at DebtBook on the ecosystem team. I work within the Ruby/Rails and Javascript/React tech stacks!" />
        <LexPost time="June 2021 - December 2022" title="Software Engineer @ Red Ventures" description="At Red Ventures, I worked as a full-stack software engineer on Bankrate, CreditCards.com and CNET Money. I used Typescript/React and PHP (Laravel) among other tech stacks." />
        <LexPost time="Jan 2017 - May 2021" title="Computer Science Undergraduate Student" description="Graduated with my bachelors degree in Computer Science with a 3.8 GPA from Oakland University" />
      </div>
    </div>
  );
}

export default App;