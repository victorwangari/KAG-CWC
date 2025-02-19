import React from 'react';
import NavBar from '../navbar/navbar';
import "../../css/about.css";
import youths from "../../img/youths &pastors 1.jpg"

import Footer from '../footer/footer';


function Youth() {
    return (
        <div>
            <div className='children'>
                <NavBar />
                <div className="about-title">
                    <h1><span className="text-warning">#</span>YOUTHS MINISTRY</h1>
                </div>
            </div>
            <div>
                <div className="container flex flex-col md:flex-row items-center justify-center p-8 bg-white">
                    {/* Image Section */}
                    <div className="w-full beginners md:w-1/2 flex  justify-center">
                        <img
                            src={youths}
                            alt="Pastors"
                            className="rounded-lg shadow-lg w-full md:w-3/4"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="w-full md:w-1/2 p-6">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            YOUTHS <span className='text-warning'>MINISTRY</span>
                        </h1>
                        <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                        The Youth Ministry at CWC is a dynamic and transformative platform designed to equip, empower, and inspire young people to live for Christ. It provides a space where youths can grow spiritually, build strong Christian relationships, and develop leadership skills through Bible study, worship, mentorship, and discipleship programs. The ministry focuses on practical Christian living, personal development, career guidance, and responsible decision-making, helping young people navigate life with biblical wisdom. Regular activities such as youth services, retreats, conferences, and community outreach programs foster a sense of purpose and belonging. The Youth Ministry at CWC is committed to raising a generation of bold, faith-driven individuals who impact their families, church, and society for Christ.
                        </p>
                        <p className="text-gray-900 italic font-semibold mb-4">
                            "Come, taste and see that the Lord is good! Ps. 34:8"
                        </p>
                        <p className="text-gray-900 font-bold font-medium">Rev.James Maina & Rev.Rebecca James</p>
                        <p className="text-green-700 font-bold">Senior Pastors.</p>
                    </div>
                </div>
                <hr />
            




            </div>
            <Footer />

        </div>
    )
}

export default Youth;