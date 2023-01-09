import React from 'react'

import Logo from '../../img/index.png'
import {FaMailBulk} from 'react-icons/fa'

export function Footer(){

    return(
        <div className="w-full bg-zinc-600 mt-[50px]">
            <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 py-5 text-white">
                <div className="flex flex-col text-center lg:text-start">
                    <h1 className="text-2xl underline mb-5">About Us</h1>
                    <img src={Logo} alt="" className="w-[200px] h-[50px]" />
                    <p className="py-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p>Figma Clinic Pvt. Ltd. Kathmandu-10, New Road, Nepal</p>
                </div>
                <div className="flex flex-col text-center lg:text-start">
                    <h1 className="text-2xl underline mb-5">Tags</h1>
                    <ul>
                        <li>Emergency</li>
                        <li>Therapy</li>
                        <li>Regular</li>
                        <li>Serious</li>
                        <li>Nurses</li>
                    </ul>
                </div>
                <div className="flex flex-col text-center lg:text-start">
                <h1 className="text-2xl underline mb-5">Quick Links</h1>
                    <ul>
                        <li>Our Services</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Appointment Schedule</li>
                        <li>Cases</li>
                    </ul>
                </div>
                <div className="flex flex-col text-center lg:text-start">
                    <h1 className="text-2xl underline mb-5">Make An Appointment</h1>
                    <p className="text-center justify-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    <p className="py-3 text-center justify-center">8:00AM - 10:00AM</p>
                    <p className="text-center justify-center">2:00PM - 4:00PM</p>
                    <p className="py-3 flex gap-3 text-center lg:text-start"><FaMailBulk size={25} /> figma2023@gmail.com</p>
                </div>
            </div>
        </div>
    )
}