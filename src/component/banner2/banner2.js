import React from 'react'

import BannerImg2 from '../../img/banner-1-img.png'

export function Banner2(){

    return(
        <>
            <div className="mt-[50px] lg:mt-[100px] w-full h-full relative">
                <img src={BannerImg2} alt="" className=" w-full h-full object-cover" />
                <div className="h-full w-full absolute inset-0 bg-violet-700 bg-opacity-80"></div>
                <div className="absolute justify-center items-center h-full left-0 top-0 lg:top-[100px]">
                    <p className="justify-center text-center text-0.5xl lg:text-xl text-white px-[50px] lg:px-[400px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make</p>
                </div>
            </div>   
        </>
    )
}