import React, { useState } from 'react';

import Header from './Header';
import Banner from './Banner';
import Section from './Section';
import Footer from './Footer';
import FormAddItinerary from './FormAddItinerary';

const Home = (props) => {

    const[showForm, setShowForm] = useState(false);
    const handleClick = () => {
        setShowForm(true);
    }

    const handleClose = () => {
        setShowForm(false);
    }

    const addNewItinerary = (placeName, title, country, desc, image, duration, activities) => {
        const placeIndex = props.data.findIndex((item) => item.place.name.toUpperCase() === placeName.toUpperCase());
  if (placeIndex !== -1) {
    const newItinerary = {
      id: 2,
      title,
      duration,
      activities: activities.split(',').map((activity) => activity.trim())
    };
    props.data[placeIndex].place.itineraries.push(newItinerary);
  } else {
    const newPlace = {
      id: props.data.length,
      place: {
        name: placeName,
        country: country,
        description: desc,
        image: image,
        itineraries: [
          {
            id: 2,
            title,
            duration,
            activities: activities.split(',').map((activity) => activity.trim())
          }
        ]
      }
    };
    props.data.push(newPlace);
  }
    };

    return(
        <div>
            <Header onClick={handleClick}/>
            <Banner />
            {showForm && <FormAddItinerary 
                addItinerary={addNewItinerary} close={handleClose}/>}
            <Section sectionHeading="Places" data={props.data}/>
            <Footer />
        </div>
    );
}

export default Home;