import React from 'react'
import { useState } from 'react';
import Search from '../search.png';
import Cam from '../camera.png';
import SearchIcon from '../srcbar.png';



const InputSection = () => {

  const [message, setMessage] = useState('');
  const pressKey = (event) => {
    if (event.key === 'Enter') {
      setMessage(event.target.value);
    }
  };
  return (
    <div class='midSection'>
        <div className='midInput'>
        <img src={SearchIcon} alt='srchere' style={{height: '16px'}} />
            <input type='text' name='message' id='message' onKeyDown={pressKey} />
            <div>
            <img src={Search} alt='sicon' style={{height: '20px'}} />
            <img src={Cam} alt='camera' style={{height: '20px'}} />
            </div>
        </div>
        <p>{message}</p>
        <div className='googButton'>
            <div className='googFeel'><button>Google Search</button></div>
           <div className='googFeel'> <button>I'm Feeling Lucky</button></div>
        </div>
        <div class='lang'>
      <p>Google offered in: <a href='https://www.google.com'>Hausa</a> <a href='https://www.google.com'>Igbo</a> <a href='https://www.google.com'>Ede Yoruba</a> <a href='https://www.google.com'>Nigerian Pidgin</a></p>
    </div>


    </div>
  )
}

export default InputSection