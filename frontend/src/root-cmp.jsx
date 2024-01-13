import React from 'react'
import { Routes, Route } from 'react-router'

import { HomePage } from './pages/home-page'
import { AppHeader } from './pages/header'

export function RootCmp() {

    return (
        <div className='main-layout'>
            <AppHeader />
            <main>
                <Routes>
                    <Route path='/' element={<HomePage/>}></Route>
                </Routes>
            </main>
        </div>
    )
}


