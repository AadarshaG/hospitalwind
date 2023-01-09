import React from 'react'

import Dots from '../../img/4-dots.png'
import Lungs from '../../img/service-icon-1.png'
import Microscope from '../../img/service-icon-2.png'
import Heart from '../../img/service-icon-3.png'
import Doctor from '../../img/service-icon-4.png'

export function Cases(){

    return(
        <div className="w-full">
            <div className="max-w-[1240px] flex flex-col mx-auto">
                <div className="justify-center items-center mx-auto">
                    <h1 className="text-3xl font-bold py-4 text-center">The Best Doctor Gives You The Least Medicines</h1>
                    <p className="text-center">The perfect way to show your hospital service</p>
                    <div className="flex gap-2 py-5 justify-center items-center">
                        <div className="flex-grow h-px bg-gray-400"></div> 
                        <img src={Dots} alt="" className="h-[25px] w-[25px]" />
                        <div className="flex-grow h-px bg-gray-400"></div> 
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 justify-between mx-auto py-5 gap-4">
                    <div className="justify-center items-center flex flex-col">
                        <img src={Lungs} alt="" className="w-[50px] h-[50px]" />
                        <h4 className="text-xl font-bold py-3 text-center">Cardio Monitoring</h4>
                        <p className="font-semibold text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                     <div className="justify-center items-center flex flex-col">
                        <img src={Microscope} alt="" className="w-[50px] h-[50px]" />
                        <h4 className="text-xl font-bold py-3 text-center">Medical Treatment</h4>
                        <p className="font-semibold text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                     <div className="justify-center items-center flex flex-col">
                        <img src={Heart} alt="" className="w-[50px] h-[50px]" />
                        <h4 className="text-xl font-bold py-3 text-center">Emergency Help</h4>
                        <p className="font-semibold text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                     <div className="justify-center items-center flex flex-col">
                        <img src={Doctor} alt="" className="w-[50px] h-[50px]" />
                        <h4 className="text-xl font-bold py-3 text-center">First Aid</h4>
                        <p className="font-semibold text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                </div>
            </div>
        </div>
    )
}