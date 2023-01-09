import React from 'react'

import Location from '../../img/asdf.png'
export function Contact(){

    return(
        <div className="w-full mt-[20px]">
            <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="">
                    <img src={Location} alt="" className=""></img>
                </div>
                <div className="bg-violet-700 flex flex-col justify-center items-center px-[50px]">
                    <p className="justify-center text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                         has been the industry's standard dummy text ever since the 1500s,
                    </p>
                    <div className="flex flex-start flex-col w-full py-5 gap-3">
                       <div className="bg-violet-900 py-2">
                        <input type="text" placeholder="Enter Name" className="justify-start bg-violet-900 text-start pl-3 h-[20px] w-full focus:outline-none" />
                       </div>
                       <div className="bg-violet-900 py-2">
                        <input type="text" placeholder="Enter Subject" className="justify-start bg-violet-900 text-start pl-3 h-[20px] w-full focus:outline-none" />
                       </div>
                       <div className="bg-violet-900 py-2">
                        <textarea type="text" placeholder="Write Message" className="justify-start bg-violet-900 text-start pl-3 h-[150px] w-full focus:outline-none" />
                       </div>
                        <div className="justify-center items-center mx-auto">
                            <button className="bg-white font-semibold rounded-full w-[200px] h-[40px]">Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}