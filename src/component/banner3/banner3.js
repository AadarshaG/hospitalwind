import React from 'react'

import Img1 from '../../img/banner-1-img.png'
import Img2 from '../../img/banner-2-img.png'

export function Banner3(){

    return(
        <div className="w-full h-full mt-[100px] relative">
            <img src={Img1} alt="" className=" w-full sm:h-screen lg:h-full object-cover" />
            <div className="h-full w-full absolute inset-0 bg-violet-700 bg-opacity-80"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center left-0 top-0 absolute h-full gap-12 max-w-[1240px] mx-auto">
                <img src={Img2} alt="" className="w-full h-[250px] object-fill"/>
                <div className="flex flex-col justify-center items-center">
                    <div className="justify-center items-center text-white">
                        <p className="justify-center text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled</p>
                    </div>
                    <div className="grid grid-cols-2 gap-10 my-12">
                        <button className="bg-white rounded-full w-[150px] h-[40px] justify-center text-center">Learn More</button>
                        <button className="bg-zinc-400 text-white rounded-full w-[150px] h-[40px] justify-center text-center">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}