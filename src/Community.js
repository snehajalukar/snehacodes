import React from 'react';
import './Community.css';
import Header from './components/Header';
import LexPost from './components/LexPost';
import LexBreak from './components/LexBreak';


function Community() {
  return (
    <div className="Community">
      <Header />
      <div className="content">
        <LexBreak title="Community" description="I'm passionate about building, growing and supporting inclusive communities, whether in the tech industry, startup community or LGBTQ+ community. Here is some of my community focused work!" />

        <LexPost 
          location="Chicago, IL" 
          time="Aug 2022 - Present" 
          title="Board Member @ Chi Hack Night" 
          description="I volunteer my time on the board of Chi Hack Night, a civic tech nonprofit in the City of Chicago. I'm on our communications committee and event logistics committee, which means I handle everything from our outreach/online presence to reaching out to speakers and making sure our weekly events are running smoothly by co-hosting/speaking." 
          link="https://chihacknight.org/board-of-directors/sneha-jalukar.html" 
          />

        <LexPost 
          location="Remote" 
          time="March 2018 - May 2021" 
          title="Startup Digest Global Coordinator @ Techstars Community Programs" 
          description="Startup Digest is a volunteer-run newsletter for everything entrepreneurial - in over 400 cities. My role was to interview and onboard new curators around the world, and make sure the operations of the program were running smoothly. I interviewed, onboarded and supported 500+ curators around the world during my time with Startup Digest."
          link="https://www.techstars.com/communities/startup-digest" 
          />

        <LexPost 
          location="Chicago, IL" 
          time="Sept 2022 - Dec 2022" 
          title="Mentor @ Out for Undergrad" 
          description="After going to the tech conference in 2017, I became a mentor in 2021. I was paired with an LGBTQ+ college student and served as a resource and guide in their professional journey." 
          link="https://www.outforundergrad.org/tech" 
        />

        <LexPost 
          location="Remote" 
          time="Nov 2021 - Dec 2022" 
          title="Mentor @ Road to Hire" 
          description="Road to Hire is a software engineering bootcamp for underprivileged individuals. I have assisted with interviews/admission, and mentoring individuals in the program on technical topics on a weekly basis." 
          link="https://www.roadtohire.org/" 
        />

        <LexPost 
          location="Auburn Hills, Michigan" 
          time="Jan 2018 - Sept 2020" 
          title="Director @ GrizzHacks" 
          description="I led a team of 11 individuals, and raised more than $70,000 to throw the largest hackathon in the metro Detroit area. I also led development on technical endeavors such as the website and app, and planned and hosted weekly events on technical subjects for the local student developer community." 
          link="https://blogs.microsoft.com/chicago/2018/11/12/empowering-and-inspiring-at-oakland-universitys-grizzhacks/" 
        />

        <LexPost 
          location="Detroit, Michigan" 
          time="Oct 2017 - Jan 2021" 
          title="Startup Detroit Open Source Project Maintainer / Community Leader" 
          description="During my time working at Techstars Mobility, I built and worked to grow a project uniting the Detroit startup community in a grassroots way. I grew and moderated the Slack community, partnered with local startups to throw monthly community meetups, did weekly outreach to grow the network of participating companies, and built/maintained the open source website." 
          link="http://startupdetroit.co/" 
        />  

        <LexPost 
          location="Detroit, Michigan" 
          time="Jan 2014 - May 2015" 
          title="CodeDay Detroit Organizer @ StudentRND" 
          description="Organized the first 24 hour hackathon for high school and college students in Detroit. The first CodeDay Detroit was on May 24th, 2014, the second on February 14th, 2015, and the third on May 23rd, 2015. Raised 15k total, and reached 300 students." 
          link="https://www.codeday.org/" 
        />

        <LexPost 
          location="Midwest" 
          time="2014-2016" 
          title="Hackathon Organizer" 
          description="My first experience on a large hackathon team was in 2014 on the MHacks Sponsorship Team, I quickly learned how to raise money, budget and run a world class event. Did outreach to local high schools as well. MHacks gave me the experience and confidence to later run CodeDay Detroit, BoilerMake, Debug Politics, hackWSU, GrizzHacks, and many more hackathons." 
          link="https://medium.com/@BoilerMake/failure-hackathons-and-boilermake-5c66fbcd0128" 
        />

        <LexPost 
            location="Chicago, IL" 
            time="Sept 2023 - Present" 
            title="Support Group Admin/Leader @ TFEM Chicago" 
            description="Supporting the transgender community in Chicago on a weekly basis, through in-person and online zoom events and moderating a Discord group." 
            link="https://centeronhalsted.org/newevents-details.cfm?ID=17600" 
        />
      </div>
    </div>
  );
}

export default Community;