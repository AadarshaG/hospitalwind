import React from 'react'

import {FaPhoneAlt,FaCalendarAlt,FaDatabase} from 'react-icons/fa'

export function Package(){

    return(
        <div className="w-screen bg-violet-700">
            <div className="max-w-[1240px] mx-auto pt-[30px]">
                <h1 className="text-center text-3xl text-white font-bold">Package Service</h1>
                <p className="text-center text-white ">Lorem Ipsum is Dummy Text in lorem industry</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto py-20 gap-10">
                    <div className="bg-white flex flex-col py-10 justify-center items-center">
                        <div className="justify-center items-center mt-[-65px]" >
                            <div className="w-[50px] h-[50px] bg-zinc-400 rotate-[45deg] justify-center items-center"><FaPhoneAlt size={25} className="justify-center items-center rotate-[-45deg]" /></div>
                        </div>
                        <h3 className="text-2xl font-semibold mt-8">Emergency</h3>
                        <p className="text-start px-5 py-5 font-semibold">Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 
                        1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                         book. It has survived not only five centuries, but also the leap into electronic typesetting,
                          remaining essentially unchanged.</p>
                        <button className="bg-violet-700 text-white justify-center text-center font-semibold rounded-full w-[150px] h-[30px]">View More</button>
                    </div>
                    <div className="bg-white flex flex-col py-10 justify-center items-center">
                        <div className="justify-center items-center mt-[-65px]" >
                            <div className="w-[50px] h-[50px] bg-zinc-400 rotate-[45deg] justify-center items-center"><FaCalendarAlt size={25} className="justify-center items-center rotate-[-45deg]" /></div>
                        </div>
                        <h3 className="text-2xl font-semibold mt-8">Serious Case</h3>
                        <p className="text-start px-5 py-5 font-semibold">Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 
                        1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                         book. It has survived not only five centuries, but also the leap into electronic typesetting,
                          remaining essentially unchanged.</p>
                        <button className="bg-violet-700 text-white justify-center text-center font-semibold rounded-full w-[150px] h-[30px]">View More</button>
                    </div>
                    <div className="bg-white flex flex-col py-10 justify-center items-center">
                        <div className="justify-center items-center mt-[-65px]" >
                            <div className="w-[50px] h-[50px] bg-zinc-400 rotate-[45deg] justify-center items-center"><FaDatabase size={25} className="justify-center items-center rotate-[-45deg] " /></div>
                        </div>
                        <h3 className="text-2xl font-semibold mt-8">Regular Case</h3>
                        <p className="text-start px-5 py-5 font-semibold">Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 
                        1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                         book. It has survived not only five centuries, but also the leap into electronic typesetting,
                          remaining essentially unchanged.</p>
                        <button className="bg-violet-700 text-white justify-center text-center font-semibold rounded-full w-[150px] h-[30px]">View More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}