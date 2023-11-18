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
        <LexBreak title="Experiences" description="Welcome to my website! Read about my work experiences below. I'm always open to hearing about opportunities and open to relocation." />

        <LexPost 
          time="Jan 2023 - Present"
          location="Chicago, IL (Remote)" 
          title="Software Engineer @ DebtBook" 
          description="Currently, I work as a mid-level software engineer at DebtBook on the ecosystem team, building finance software for local governments and nonprofits. I work with the Ruby/Rails and Javascript/React tech stacks!" 
          />

        <LexPost 
          time="June 2021 - Dec 2022" 
          location="Chicago, IL (Remote)" 
          title="Software Engineer @ Red Ventures" 
          description="At Red Ventures, I worked as a full-stack software engineer on Bankrate, CreditCards.com and CNET Money. I used Typescript/React and PHP (Laravel) among other tech stacks." 
        />

        <LexPost 
          location="Remote" 
          time="March 2018 - May 2021" 
          title="Startup Digest Global Coordinator @ Techstars Community Programs" 
          description="Startup Digest is a volunteer-run newsletter for everything entrepreneurial - in over 400 cities. My role was to interview and onboard new curators around the world, and make sure the operations of the program were running smoothly."
          link="https://www.techstars.com/communities/startup-digest" 
          />

        <LexPost 
          location="Detroit, Michigan" 
          time="Jul 2017 - Oct 2018" 
          title="Technical Associate @ Techstars" 
          description="Software Engineering consultant for startup companies accepted into the 2017 & 2018 Techstars Mobility accelerator cohorts. I worked with super early stage startups, helped them build and helped the program run smoothly." 
          />

        <LexBreak title="Community Involvement" description="Giving back with my time." link="/#/community"/>

        <LexPost 
          location="Chicago, IL" 
          time="Aug 2022 - Present" 
          title="Board Member @ Chi Hack Night" 
          description="I volunteer my time on the board of Chi Hack Night, a civic tech nonprofit in the City of Chicago." 
          link="https://chihacknight.org/board-of-directors/sneha-jalukar.html" 
          />

        <LexPost 
          location="Chicago, IL (Remote)" 
          time="June 2021 - Dec 2022" 
          title="Road to Hire Mentor" 
          description="While I worked at Red Ventures, I was an active mentor in the Road to Hire program. I interviewed participants coming into the program and mentored individuals currently going through technical bootcamps, touching base weekly with mentees on JavaScript basics." 
          link="https://www.roadtohire.org/" 
        />

        <LexPost 
          location="Auburn Hills, Michigan" 
          time="Jan 2018 - Sept 2020" 
          title="Director @ GrizzHacks" 
          description="Responsible for co-leading a team of 11 individuals, and raised more than $70,000 to throw the largest hackathon in the metro Detroit area; Led development on technical endeavors such as the website and app." 
          link="https://blogs.microsoft.com/chicago/2018/11/12/empowering-and-inspiring-at-oakland-universitys-grizzhacks/" 
          />


        <LexBreak title="Education" description="I'm enthusiastic about continuous learning." />

        <LexPost 
          location="Auburn Hills, Michigan" 
          time="Jan 2017 - May 2021" 
          title="Computer Science Undergraduate Student" 
          description="Graduated with my bachelors degree in Computer Science with a 3.8 GPA from Oakland University. My computer science program was taught primarily in Java, but I took classes that also covered Python, Ruby and Scheme (Lisp)." 
        />

        <LexBreak title="Outside of work?" description="Below are some of my hobbies!" />

        <LexPost 
          location="Earth" 
          link="http://www.snehaphotography.com"
          time="2015 - Present" 
          title="Photography" 
          description="I enjoy taking portraits, street photography, and nature photography 📷." 
        />

      </div>
    </div>
  );
}

export default App;