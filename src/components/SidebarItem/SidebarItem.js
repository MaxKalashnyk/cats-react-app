import React from 'react'

const SidebarItem = (props) => {
  return (
    <li className='menu-content__item'>
        <a href='' role='button' onClick={props.click} className='menu-content__link' data-index={props.index}>{props.name}</a>
    </li>
  )
};


export default SidebarItem
