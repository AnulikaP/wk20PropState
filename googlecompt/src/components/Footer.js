import React from 'react'
import Country from './Country';
import BottomMenu from './BottomMenu';

const Footer = () => {
  return (
    <div className='footer'>
     <div>
     <Country/>
     </div>
    <div className='container'>
    <div className='advertCorner'>
     <BottomMenu title={'About'}/>
     <BottomMenu title={'Avertising'}/>
     <BottomMenu title={'Business'}/>
     <BottomMenu title={'How Search Works'}/>
     </div>
     <div>
     <BottomMenu title={'Carbon neutral since 2007'}/>
     </div>
     <div className='lastCorner'>
     <BottomMenu title={'Privacy'}/>
     <BottomMenu title={'Terms'}/>
     <BottomMenu title={'Settings'}/>
     
     </div>
    </div>


    </div>
  )
}

export default Footer