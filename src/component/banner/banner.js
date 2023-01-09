import React from 'react'

import BannerImg from '../../img/header.png'

export function Banner(){

    return(
        <div className="w-full bg-violet-700 pt-[50px] lg:pt-[-50px]">
            <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center items-center">
                <div className="flex flex-col justify-center items-center lg:items-start">
                    <h3 className="text-3xl text-white">Your Most Trusted</h3>
                    <h1 className="text-5xl text-white font-bold uppercase">Health Partner</h1>
                    <p className="text-xl text-white py-2">The Best Match Service For You</p>
                    <p className="text-0.5xl text-white py-8 text-center lg:text-start px-8 lg:px-[0px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                      a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                       but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <div className="flex gap-12">
                        <button className="bg-white text-black w-[150px] rounded-full justify-center text-center h-[40px] text-semibold">Learn More</button>
                        <button className="bg-zinc-400 text-white w-[150px] rounded-full justify-center text-center h-[40px] text-semibold">SignUp</button>
                    </div>
                </div>
                <div>
                    <img src={BannerImg} alt="" className="object-fill pt-[40px] lg:pt-[72px]" />
                </div>
            </div>
        </div>
    )
}