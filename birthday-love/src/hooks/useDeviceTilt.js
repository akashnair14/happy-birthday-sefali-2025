import { useState, useEffect } from 'react';

export const useDeviceTilt = () => {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleOrientation = (event) => {
            setTilt({
                x: event.beta, // rotation around x axis
                y: event.gamma, // rotation around y axis
            });
        };

        window.addEventListener('deviceorientation', handleOrientation);
        return () => window.removeEventListener('deviceorientation', handleOrientation);
    }, []);

    return tilt;
};
