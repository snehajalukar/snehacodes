import React from 'react'

const LexBreak = ({title, description, link}) => {

  return (
    <div className="LexBreak">
        <div className="LexPost__header">
          <div className="LexPost__header-left">
            <div>Sneha's Note</div>
          </div>

          <div className="LexPost__header-right">
            <img width="25px" height="25px" src="horizontal-menu.png"></img>
          </div>
        </div>


        <div className="LexBreak__content">
          <p className="LexBreak__title">{title}</p>
          <p className="LexBreak__description">{description}</p>
          {link ? <p className="LexPost__Link">Learn more: <a target="_blank" href={link}>here</a></p> : <></>}
        </div>
    </div>
  )
}



export default LexBreak