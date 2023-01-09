import React from 'react'

import Image from '../../img/about-img.png'

export function About(){

    return(
        <div className="w-full">
            <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 justify-center items-center">
                <div className="py-6 lg:py-12 text-center lg:text-start">
                    <h1 className="text-3xl font-bold underline">About Us</h1>
                    <p className="text-0.5xl py-6 px-8 lg:px-[0px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic typesetting, remaining essentially
                        unchanged. On the other hand, we denounce with righteous indignation and dislike men who
                        are so beguiled and demoralizedby the charms of pleasure of the moment, so blinded by
                        desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal
                        blame belongs to those who fail in their duty through weakness of will, whichis the same
                        as saying through shrinking from toil and pain. These cases are perfectly simple and easy
                        to distinguish.In a free hour, when our power of choice is untrammelled</p>

                        <button className="bg-violet-700 text-white w-[150px] rounded-full justify-center text-center h-[40px] text-semibold">Learn More</button>
                </div>
                
                <div className="bg-violet-700 w-[400px] h-[350px] lg:mt-12 mx-auto">
                    <img src={Image} alt="" className="object-fill h-full pt-32" />
                </div>
            </div>
        </div>
    )
}
