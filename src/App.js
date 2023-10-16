import React from 'react';
import './App.css';
import Header from './components/Header';
import LexPost from './components/LexPost';
import LexBreak from './components/LexBreak';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <LexBreak title="Experience" description="Welcome to my website! Read about my work experiences below." />

        <LexPost time="Jan 2023 - Present" title="Software Engineer @ DebtBook" description="Currently, I work as a mid-level software engineer at DebtBook on the ecosystem team. I work within the Ruby/Rails and Javascript/React tech stacks!" />
        <LexPost time="June 2021 - Dec 2022" title="Software Engineer @ Red Ventures" description="At Red Ventures, I worked as a full-stack software engineer on Bankrate, CreditCards.com and CNET Money. I used Typescript/React and PHP (Laravel) among other tech stacks." />


        <LexBreak title="Community" description="Giving back with my time." />
        <LexPost time="Aug 2022 - Present" link="https://chihacknight.org/board-of-directors/sneha-jalukar.html" title="Board Member @ Chi Hack Night" description="I volunteer my time on the board of Chi Hack Night, a civic tech nonprofit in the City of Chicago." />
        <LexPost time="Jan 2018 - Sept 2020" link="https://blogs.microsoft.com/chicago/2018/11/12/empowering-and-inspiring-at-oakland-universitys-grizzhacks/" title="Director @ GrizzHacks" description="Responsible for co-leading a team of 11 individuals, and raised more than $70,000 to throw the largest hackathon in the metro Detroit area; Lead development on technical endeavors such as the website and app." />


        <LexBreak title="Education" description="I'm enthusiastic about continuous learning." />
        <LexPost time="Jan 2017 - May 2021" title="Computer Science Undergraduate Student" description="Graduated with my bachelors degree in Computer Science with a 3.8 GPA from Oakland University" />

      </div>
    </div>
  );
}

export default App;