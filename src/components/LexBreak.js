import React from 'react'

const LexBreak = ({time, title, description}) => {

  function sendEmail() {
      window.location = "mailto:xyz@yourapplicationdomain.com";
  }

  return (
    <div className="LexBreak">
        <div className="LexPost__header">
          <div className="LexPost__header-left">
            <div>Admin</div>
          </div>

          <div className="LexPost__header-right">
            <img width="25px" height="25px" src="horizontal-menu.png"></img>
          </div>
        </div>


        <div className="LexBreak__content">
          <p className="LexBreak__title">{title}</p>
          <p className="LexBreak__description">{description}</p>
        </div>
    </div>
  )
}



export default LexBreak