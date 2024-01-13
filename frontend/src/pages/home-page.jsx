import React from 'react'
import heroImg from '../assets/img/hero-img.jpg'

// import { useDispatch, useSelector } from 'react-redux'


export function HomePage() {

    return (
        <section className='hero-main-container'>
            <div className='hero-inner-container flex align-center justify-center'>
                <div className='hero-text-container'>
                    <h2 className='hero-title'>Track Smart, Market Sharp!</h2>
                    <h1>DigiTrack</h1>
                    <p>Effortlessly track, budget, and optimize marketing expenses. <br />Maximize ROI with ease!</p>
                </div>
                <div>
                    <img src={heroImg} className='hero-img' />
                    
                </div>
            </div>

        </section>
    )
}