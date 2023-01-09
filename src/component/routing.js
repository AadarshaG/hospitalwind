import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import {Layout} from './layout/layout'
import {Home} from './home/home'


export function AppRouting(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}