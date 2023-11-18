import React from 'react'

const Header = () => {
  return (
    <div className='Header-background'>
        <h1 className='Header-text'>Hi, I'm Sneha</h1>
        <div>
          <a style={{ marginRight: "10px"}} href="/">Home</a>
          <a style={{ marginRight: "10px"}} target="_blank" href="resume.pdf">Resume</a>
          <a style={{ marginRight: "10px"}} href="/community">Community</a>
        </div>
    </div>
  )
}

export default Header