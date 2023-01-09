import React from 'react'

import {AiOutlineClockCircle,AiOutlineComment} from 'react-icons/ai'

import Img1 from '../../img/post-1.jpg'
import Img2 from '../../img/post-2.jpg'
import Img3 from '../../img/post-3.jpg'

export function Blog(){

    return(
        <div className="w-full bg-zinc-400">
           <div className="max-w-[1240px] mx-auto justify-center items-center">
            <h2 className="text-center text-2xl font-bold py-5 underline">Latest Post</h2>
            <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 py-10">
                    <div className="bg-white flex flex-col m-3">
                        <div className="m-3">
                            <div>
                                <img src={Img1} alt="" className="w-full object-fill" />
                            </div>
                            <h3 className="text-xl font-bold py-5">Lorem Ipsum is simply dummy text of the printing</h3>
                            <p className="font-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                                Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                                unknown printer took a galley of type and scrambled it to make a type specimen
                                 book. It has survived not only five centuries, but also the leap into electronic
                                  typesetting, remaining essentially unchanged.</p>
                            <div className="flex justify-between py-6">
                                <p className="flex justify-between items-center"><AiOutlineClockCircle /> Jan 9, 2023</p>
                                <p className="flex justify-between items-center"><AiOutlineComment /> 12 comments</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white flex flex-col m-3">
                        <div className="m-3">
                            <div>
                                <img src={Img2} alt="" className="w-full object-fill" />
                            </div>
                            <h3 className="text-xl font-bold py-5">Lorem Ipsum is simply dummy text of the printing</h3>
                            <p className="font-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                                Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                                unknown printer took a galley of type and scrambled it to make a type specimen
                                 book. It has survived not only five centuries, but also the leap into electronic
                                  typesetting, remaining essentially unchanged.</p>
                            <div className="flex justify-between py-6">
                                <p className="flex justify-between items-center"><AiOutlineClockCircle /> Jan 8, 2023</p>
                                <p className="flex justify-between items-center"><AiOutlineComment /> 12 comments</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white flex flex-col m-3">
                        <div className="m-3">
                            <div>
                                <img src={Img3} alt="" className="w-full object-fill" />
                            </div>
                            <h3 className="text-xl font-bold py-5">Lorem Ipsum is simply dummy text of the printing</h3>
                            <p className="font-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                                Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                                unknown printer took a galley of type and scrambled it to make a type specimen
                                 book. It has survived not only five centuries, but also the leap into electronic
                                  typesetting, remaining essentially unchanged.</p>
                            <div className="flex justify-between py-6">
                                <p className="flex justify-between items-center"><AiOutlineClockCircle /> Jan 6, 2023</p>
                                <p className="flex justify-between items-center"><AiOutlineComment /> 12 comments</p>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}