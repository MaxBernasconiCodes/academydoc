import React from 'react'

const Module = (props) => {
    let {name,title, imgPath} = props;
  return (
    <>
    <input type="radio" name={name} id={'module'+ name} className="chkbx" />
      <label className="card" for="chkhtml">
        <lablel>{title}</lablel>
        <img src={'/logos/'+imgPath} alt={name} />
      </label>
    </>
  )
}

export default Module