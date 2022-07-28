import React from 'react'

const Module = (props) => {
    let {name,title, imgPath} = props;
  return (
    <>
    
      <label className="card">
        <lablel>{title}</lablel>
        <img src={'/logos/'+imgPath} alt={name} />
      </label>
    </>
  )
}

export default Module