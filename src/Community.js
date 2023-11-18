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
          description="I volunteer my time on the board of Chi Hack Night, a civic tech nonprofit in the City of Chicago. I'm on our communications committee and event logistics committee, which means I handle everything from our outreach/online presence to reaching out to speakers and making sure our weekly events are running smoothly." 
          link="https://chihacknight.org/board-of-directors/sneha-jalukar.html" 
          />

        <LexPost 
          location="Remote" 
          time="March 2018 - May 2021" 
          title="Startup Digest Global Coordinator @ Techstars Community Programs" 
          description="Startup Digest is a volunteer-run newsletter for everything entrepreneurial - in over 400 cities. My role was to interview and onboard new curators around the world, and make sure the operations of the program were running smoothly. I interviewed, onboarded and supported 500+ curators around the world during my time with Startup Digest"
          link="https://www.techstars.com/communities/startup-digest" 
          />
      </div>
    </div>
  );
}

export default Community;