import React from 'react';
import { logo } from '../assets';

const Start = () => {
    return (
        <div className='loading bg-primary grid place-items-center h-screen w-screen'>
            <img src={logo} alt="profile" className='w-50 h-50 rounded-full border-4 border-[#915EFF]' />
        </div>
    );
}

export default Start;
