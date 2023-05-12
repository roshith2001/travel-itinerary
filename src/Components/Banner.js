import React from 'react';

const Banner = (props) => {
    return(
        <div className='bg-banner w-full 
            h-screen bg-cover bg-top
            flex items-center justify-center flex-col'>
            <div 
                className='bg-mint opacity-80 m-12 p-4
                    rounded-tl-4xl rounded-br-4xl'>
                <p 
                    className='font-basic font-extrabold p-2
                        text-3xl sm:text-6xl text-center
                     text-darkBlue drop-shadow-2xl'
                >Indulge into your travel fantasies</p>
            </div>
            <form className='w-10/12 sm:w-1/2 opacity-90'>
                <div 
                className='w-full font-basic text-xl shadow-lg'>
                    <input type='text' 
                        className='w-8/12 h-12 bg-mint100 border-none
                        outline-none px-6
                        text-mint700 rounded-tl-3xl'></input>
                    <button type='submit'
                        className='w-4/12 h-12 bg-red
                         text-mint100 rounded-br-3xl hover:bg-mint'
                        >Search</button>
                </div>
            </form>
        </div>
    );
}
export default Banner;