import React from 'react'
import { About } from '../about/about'
import { Banner } from '../banner/banner'
import { Banner2 } from '../banner2/banner2'
import { Banner3 } from '../banner3/banner3'
import { Blog } from '../blog/blog'
import { Cases } from '../cases/cases'
import { Contact } from '../contact/contact'
import { Doctor } from '../doctor/doctor'
import { Package } from '../package/package'

export function Home(){

    return(
        <>
            <Banner />
            <About />
            <Banner2 />
            <Cases />
            <Banner3 />
            <Doctor />
            <Package />
            <Blog />
            <Contact />
        </>
    )
}