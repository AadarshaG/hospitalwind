import React from 'react'

import  Doc1 from '../../img/doc-1.png'
import  Doc2 from '../../img/doc-2.png'
import  Doc3 from '../../img/doc-3.png'
export function Doctor(){

    return(
        <div className="w-screen">
            <div className="max-w-[1240px] mx-auto justify-center item-center">
                <h1 className="text-4xl font-bold underline py-5 text-center mx-auto">Our Doctor Panel</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 py-10 gap-6">
                    <div className="flex flex-col relative bg-zinc-500">
                        <div>
                            <img src={Doc1} alt="" className="w-full object-fill" />
                        </div>
                        <div className="absolute  w-full h-full">
                            <p className="justify-center text-center font-bold py-3  bg-violet-700  w-full text-white bottom-0 left-0 h-[50px] absolute">Dr. Sinegal</p>
                        </div>
                    </div>
                    <div className="flex flex-col relative bg-zinc-500">
                        <div>
                            <img src={Doc2} alt="" className="w-full object-fill" />
                        </div>
                        <div className="absolute  w-full h-full">
                            <p className="justify-center text-center font-bold py-3  bg-violet-700  w-full text-white bottom-0 left-0 h-[50px] absolute">Dr. Angel</p>
                        </div>
                    </div>
                    <div className="flex flex-col relative bg-zinc-500">
                        <div>
                            <img src={Doc3} alt="" className="w-full object-fill" />
                        </div>
                        <div className="absolute  w-full h-full">
                            <p className="justify-center text-center font-bold py-3  bg-violet-700  w-full text-white bottom-0 left-0 h-[50px] absolute">Dr. Toshima</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}