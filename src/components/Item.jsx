import React from 'react'

const Item = (props) => {
    let {name} = props;
  return (
    <div className='item'>{name}</div>
  )
}

export default Item