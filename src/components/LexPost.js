import React from 'react'

const LexPost = ({title, description}) => {
  return (
    <div className="LexPost">
        <div className="LexPost__header">
          <div className="LexPost__header-left">
            <div><b>Sneha</b> @sneha</div>
            <div>Chicago, IL • Present</div>
          </div>

          <div className="LexPost__header-right">
            <img width="25px" height="25px" src="horizontal-menu.png"></img>
          </div>
 

        </div>

        <div>Content</div>

        <div>Footer</div>
    </div>
  )
}

export default LexPost