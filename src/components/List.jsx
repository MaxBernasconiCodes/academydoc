import React from 'react'
import Item from './Item';

const List = (props) => {
    const {items} = props;
  return (
    <>
    <div className='list'>
         {items.map(listItem =><Item name={listItem}></Item>)}
    </div>
    </>
  )
}

export default List