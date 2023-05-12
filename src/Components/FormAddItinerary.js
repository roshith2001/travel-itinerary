import React, { useState } from 'react';

const FormAddItinerary = (props) => {

    const[placeName, setPlaceName] = useState('');
    const[title, setTitle] = useState('');
    const[country, setCountry] = useState('');
    const[desc, setDesc] = useState('');
    const[image, setImage] = useState('');
    const[duration, setDuration] = useState('');
    const[activities, setActivities] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            placeName.trim() === '' ||
            country.trim() === '' ||
            desc.trim() === '' ||
            image.trim() === '' ||
            title.trim() === '' ||
            duration.trim() === '' ||
            activities.trim() === ''
        ) {
            return;
        }
    
        props.addItinerary(placeName, title, country, desc, image, duration, activities);
        setPlaceName('');
        setTitle('');
        setCountry('');
        setDesc('');
        setImage('');
        setDuration('');
        setActivities('');
        props.close();
    }
           

    return(
        <div 
            className='p-8 flex justify-center items-center 
                w-full h-full fixed top-0 left-0 z-50'>
            <form onSubmit={handleSubmit} 
                className='flex items-center bg-mint200 p-12 flex-col
                    rounded-tl-7xl rounded-br-7xl shadow-lg'>
                        <div className='font-bold mb-4'>Add New Itinerary</div>
                <label htmlFor='place'>
                    Place Name: <br />
                    <input type='text' value={placeName} name='place' required
                        onChange = {(e) => setPlaceName(e.target.value)} />
                </label>
                <label htmlFor='country'>
                    Country: <br />
                    <input type='text' value={country} name='country' required
                        onChange = {(e) => setCountry(e.target.value)} />
                </label>
                <label htmlFor='desc'>
                    Description: <br />
                    <input type='text' value={desc} name='desc' required
                        onChange = {(e) => setDesc(e.target.value)} />
                </label>
                <label htmlFor='image'>
                    Image URL: <br />
                    <input type='text' value={image} name='image' required
                        onChange = {(e) => setImage(e.target.value)} />
                </label>
                <label htmlFor='title'>
                    Title:  <br />
                    <input type='text' value={title} name='title' required
                        onChange = {(e) => setTitle(e.target.value)} />
                </label>
                <label htmlFor='duration'>
                    Duration:  <br />
                    <input type='number' value={duration} name='duration' required
                        onChange = {(e) => setDuration(e.target.value)} />
                </label>
                <label htmlFor='activities'>
                    Activities:  <br />
                    <input type='text' value={activities} name='activities' required
                        onChange = {(e) => setActivities(e.target.value)} />
                </label>
                <div>
                <button type='submit' 
                className='mt-8 mr-4 bg-mint p-3 
                rounded-tl-2xl rounded-br-2xl hover:shadow-xl'>Submit</button>
                <button onClick={props.close} className='mt-8 bg-red p-3 
                    rounded-tl-2xl px-5 rounded-br-2xl 
                    hover:shadow-xl'>Close</button>
                </div>
            </form>
            
        </div>
    );
}

export default FormAddItinerary;