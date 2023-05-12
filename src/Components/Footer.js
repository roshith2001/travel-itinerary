import React from 'react';

const Footer = (props) => {
    return(
        <div>
            <div className='w-full
             bg-darkBlue flex justify-center items-center text-mint200 py-12 px-4'>
                <div className='w-1/2'>
                    <p 
                    className='font-logo text-3xl'
                    >Travel Here</p>
                </div>
                <div className='w-1/2'>
                    <ul>
                        <li><b>Contact: </b>9746087500</li>
                        <li><b>Address: </b> Rosho Maison, Kolathara, Kozhikode, Kerala - 673655</li>
                        <li><b>Email: </b> travelhere@gmail.com</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;