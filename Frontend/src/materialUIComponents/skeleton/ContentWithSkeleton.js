import React, { useState, useEffect } from 'react';
import { Skeleton} from '@mui/material';
import { useInView } from 'react-intersection-observer';

const ContentWithSkeleton = ({ children }) => {
    const [loaded, setLoaded] = useState(false);

    // Use intersection observer to detect when the element is in view
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger the skeleton once
    });

    useEffect(() => {
        if (inView) {
            const timer = setTimeout(() => setLoaded(true), 1000);
            return () => clearTimeout(timer);
        }
    }, [inView]);

    return (
        <div ref={ref}>
            {!loaded ? (
                <Skeleton variant="rectangular" sx={{ width: '100%', height: 'auto',bgcolor: 'grey.900' }}  animation="wave" />
            ) : (
                children
            )}
        </div>
    );
};

export default ContentWithSkeleton;