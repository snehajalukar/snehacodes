import React from 'react'

const LexPost = ({title, description}) => {
  return (
    <div className="LexPost">
        <div>{title}</div>
        <div>{description}</div>
    </div>
  )
}

export default LexPost