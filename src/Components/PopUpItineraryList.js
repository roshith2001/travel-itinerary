import React from 'react';
import ItineraryBox from './ItineraryBox'

const PopUpItineraryList = (props) => {
    const itinerary = props.popUpData.place.itineraries;
    console.log(itinerary);
    return (
        <div className="fixed top-0 left-0 w-full
        h-full flex justify-center items-center">
            <div className="relative w-11/12 max-h-fit
                 h-[95vh] bg-mint200 text-darkBlue flex flex-col items-center
                rounded-lg shadow-lg p-4 overflow-y-auto scrollbar-hide rounded-tl-3xl rounded-br-3xl">
                <h2 className="text-2xl font-bold mb-4 ">Itinerary List</h2>
                <div className='flex flex-col flex-wrap w-full
                    justify-around flex-grow items-center 
                    sm:flex-row'>
                    {itinerary.map((item) => {
                        return <ItineraryBox key={item.id} itinerary={item}/>
                    })}
                </div>
                    
                <button className="bg-mint hover:bg-mint700 text-white 
                px-4 py-2 w-1/3 rounded-tl-3xl rounded-br-3xl" 
                onClick={props.onClose}>Close</button>
            </div>
        </div>
    );
}

export default PopUpItineraryList;
