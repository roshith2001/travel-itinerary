import React, { useState } from 'react';

import PlaceImageBox from './PlaceImageBox';
import PopUpItineraryList from './PopUpItineraryList';

const Section = (props) => {
    const[showPopUp, setShowPopUp] = useState(false);
    const[popUpData, setPopUpData] = useState([]);

    const handleClick = (placeData) => {
        setShowPopUp(true);
        setPopUpData(placeData);
    }
    console.log(popUpData);
    return(
        <div className='bg-gradient-to-b w-full from-mint200  
        flex flex-col justify-center items-center p-4'>
            <h1 className='text-center text-darkBlue font-basic 
            font-bold text-3xl py-4'
            >{props.sectionHeading}</h1>
             <div className='w-full bg-mint100 
             rounded-tl-7xl rounded-br-7xl 
             flex justify-around flex-wrap' > 
                {props.data && props.data.map((items) => {
                    
                    return <PlaceImageBox placeData={items} key={items.id}
                        onClick={() => handleClick(items)}/>
                })}
                </div>
                {showPopUp && 
                (<PopUpItineraryList 
                    onClose={() => setShowPopUp(false)}
                    popUpData = {popUpData}/>)}
             
            
        </div>
       
    );
}
export default Section;