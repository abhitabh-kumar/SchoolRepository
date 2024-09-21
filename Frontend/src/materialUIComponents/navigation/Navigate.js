import { Fab } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NavigationIcon from '@mui/icons-material/Navigation';

const Navigate = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <>
            {isVisible &&
                <Fab variant="extended" sx={{ padding: "4px" }} className='navigation' onClick={() => scrollToTop()}>
                    <NavigationIcon />
                </Fab>
            }
        </>
    )
}

export default Navigate