import React from 'react'
import { MenuBar } from './MenuBar';
import Pics from './Pics';
import Dots from './Dots';

const Header = () => {
  return (
    <div>
        <div className ='menuHere'>
            <MenuBar title={'Gmail'}/>
            <MenuBar title={'Images'}/>
            <Dots/>
            <Pics/>
        </div>
    </div>
  )
}

export default Header