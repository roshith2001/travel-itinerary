import React from 'react';

const ItineraryBox = (props) => {
    return(
        <div className='bg-mint text-darkBlue w-full sm:mx-2 sm:w-3/12
            rounded-tl-7xl p-8 my-4 rounded-br-7xl font-basic' 
            onClick={props.onClick}>
            
            <div className='flex flex-col items-center justify-center
            flex-wrap break-all p-4'>
                <p 
                    className='font-bold text-xl drop-shadow-2xl'>
                        {props.itinerary.title}
                </p>
                <ul className='font-normal text-lg list-disc'>
                    {props.itinerary.activities.map((act)=>{
                        return <li>{act}</li>
                    })}
                </ul>
            </div>
            <div className='flex
                           justify-center items-center'>
                <div className='rounded-br-7xl font-extrabold'>
                    Duration: {props.itinerary.duration} days
                </div>
            </div>
        </div>
    );
}

export default ItineraryBox;