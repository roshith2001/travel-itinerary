import React from 'react';

const PlaceImageBox = (props) => {
    return(
        <div className='w-9/12 sm:w-3/12 bg-mint text-darkBlue
            rounded-tl-7xl rounded-br-7xl font-basic m-4' onClick={props.onClick}>
            <div className='w-full'>
                <img src={props.placeData.place.image} 
                    alt='Munnar Pic' 
                    className='w-full object-cover p-2
                        rounded-tl-7xl '/>
            </div>
            <div className='flex flex-col items-center 
            flex-wrap p-4'>
                <p 
                    className='font-bold text-xl drop-shadow-2xl'>{props.placeData.place.name}</p>
                <p className='font-normal text-lg p-2'>{props.placeData.place.description}
                </p>
            </div>
            <div className='flex
                           justify-center items-center 
                           nustify-center'>
                <div className=''>No of Itineraries: 
                { props.placeData.place.itineraries.length }
                </div>
            </div>
        </div>
    );
}

export default PlaceImageBox;