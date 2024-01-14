import React from 'react'
import heroImg from '../assets/img/hero-img.jpg'

// import { useDispatch, useSelector } from 'react-redux'


export function HomePage() {

    return (
        <section className='hero-main-container flex align-center justify-center'>
            <div className='hero-inner-container flex align-center'>
                <div className='hero-text-container'>
                    <h2 className='hero-title fs28'>Track Smart, Market Sharp!</h2>
                    <h1 className='fs50'>DigiTrack</h1>
                    <p className='fs24'>Effortlessly track, budget, and optimize marketing expenses. <br />Maximize ROI with ease!</p>
                    <button>Try demo</button>
                </div>
                <div>
                    <img src={heroImg} className='hero-img' />

                </div>
            </div>
        </section>
    )
}