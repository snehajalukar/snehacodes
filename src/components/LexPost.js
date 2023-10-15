import React from 'react'

const LexPost = ({time, title, description}) => {

  function sendEmail() {
      window.location = "mailto:xyz@yourapplicationdomain.com";
  }

  return (
    <div className="LexPost">
        <div className="LexPost__header">
          <div className="LexPost__header-left">
            <div><b>Sneha</b> @sneha</div>
            <div>Chicago, IL • {time}</div>
          </div>

          <div className="LexPost__header-right">
            <img width="25px" height="25px" src="horizontal-menu.png"></img>
          </div>
        </div>


        <div className="LexPost__content">
          <p className="LexPost__title">{title}</p>
          <p className="LexPost__description">{description}</p>
        </div>


        <div className="LexPost__footer">
          <div className="LexPost__footer-left">
            <img width="22px" height="22px" src="heart.png"></img>
          </div>
          <div className="LexPost__footer-right">
            <a href="mailto:sneha.jalukar@gmail.com">
              <div className="LexPost__footer-box">
              Reply
              </div>
            </a>
          </div>
        </div>
    </div>
  )
}



export default LexPost