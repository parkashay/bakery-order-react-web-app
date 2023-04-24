import React, { useEffect, useState } from 'react'
import './hero.css'

function Hero() {
    const heroDesc = ["Home Delivery !", "Taste, beauty and Love",
                       "Payment on Delivery"]

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(index => (index + 1) % heroDesc.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [heroDesc.length]);

    return (
        <>
            <div className='hero-bg'>
                <div className='hero-title'>
                    RIMHAS
                </div>
                <div className="hero-desc">
                    {heroDesc[index]}
                </div>
            </div>
        </>
    )
}

export default Hero