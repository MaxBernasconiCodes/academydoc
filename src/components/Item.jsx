import React from 'react'

const Item = (props) => {
    let {name, selected} = props;

  return (
    <>
    <div className='item'>{name}</div>
    {selected? <p>Descripcion</p> : null}
    </>
  )
}

export default Item