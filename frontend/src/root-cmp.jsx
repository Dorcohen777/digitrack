import React from 'react'
import { Routes, Route } from 'react-router'

// pages components
import { HomePage } from './pages/home-page'
import { AppHeader } from './pages/header'
import {ServiceInfo} from './pages/service-info'


export function RootCmp() {

    return (
        <div className='main-layout'>
            <AppHeader />
            <main>
                <Routes>
                    <Route path='/' element={<HomePage/>}></Route>
                </Routes>
                <ServiceInfo/>
            </main>
        </div>
    )
}


