import { IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';

const Header = (props) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    return(
        <div>
            <div 
                className='flex bg-gradient-to-b from-mint 
                    z-10 absolute top-0 justify-between 
                    items-center text-darkBlue
                    p-6 w-full'>
                <div className='font-logo text-3xl
                      drop-shadow-lg'>
                    Travel Here    
                </div> 
                <div>
                    <div className='sm:flex hidden'>
                        <MenuItem   sx={{
                                    fontFamily : 'Alegreya Sans', 
                                    fontWeight : '600',
                                    fontSize : '20px',}}
                                    onClick={props.onClick}
                                >Add Itinerary
                        </MenuItem>
                        <MenuItem   sx={{
                                    fontFamily : 'Alegreya Sans', 
                                    fontWeight : '400',
                                    fontSize : '20px',
                                }}
                                >About
                        </MenuItem>
                        
                        <MenuItem   sx={{
                                    fontFamily : 'Alegreya Sans',
                                    fontWeight : '400',
                                    fontSize : '20px',
                                }}
                                >Contact Us
                        </MenuItem>
                            
                    </div>
                    <div className='sm:hidden flex'>
                    <MenuItem   sx={{
                                    fontFamily : 'Alegreya Sans', 
                                    fontWeight : '600',
                                    fontSize : '20px',}}
                                    onClick={props.onClick}
                                >Add Itinerary
                        </MenuItem>
                        <IconButton
                            id="menu-button"
                            aria-controls={ open ? 'menu-button' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <MenuIcon sx={{
                                fontSize: '30px',
                            }}/>
                        </IconButton>
                        <Menu
                            id='menu'
                            anchorEl={anchorEl} 
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby' : 'menu-button',
                            }}
                        >
                            <MenuItem onClick={handleClose} 
                                sx={{
                                    fontFamily : ['Alegreya Sans', 'sans-serif'], 
                                    fontWeight : '400',
                                    fontSize : '20px',}}
                                >About
                            </MenuItem> 
                            <MenuItem onClick={handleClose} 
                            sx={{
                                fontFamily : ['Alegreya Sans', 'sans-serif'], 
                                fontWeight : '400',
                                fontSize : '20px',}}
                            >Contact Us
                        </MenuItem>                   
                        </Menu>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;