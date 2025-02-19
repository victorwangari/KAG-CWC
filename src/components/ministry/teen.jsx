import React from 'react';
import NavBar from '../navbar/navbar';
import "../../css/about.css";
import teens from "../../img/teens 2.jpg"
import Footer from '../footer/footer';


function Teen() {
    return (
        <div>
            <div className='children'>
                <NavBar />
                <div className="about-title">
                    <h1><span className="text-warning">#</span>TEENS MINISTRY</h1>
                </div>
            </div>
            <div>
                <div className="container flex flex-col md:flex-row items-center justify-center p-8 bg-white">
                    {/* Image Section */}
                    <div className="w-full beginners md:w-1/2 flex  justify-center">
                        <img
                            src={teens}
                            alt="Pastors"
                            className="rounded-lg shadow-lg w-full md:w-3/4"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="w-full md:w-1/2 p-6">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            TEENS <span className='text-warning'>MINISTRY</span>
                        </h1>
                        <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                        The Teens Ministry at CWC is a vibrant and engaging platform designed to nurture, guide, and empower teenagers in their faith journey. It provides a safe space where teens can explore biblical truths, ask questions, and grow spiritually through Bible study, interactive discussions, mentorship, and worship sessions. The ministry focuses on identity in Christ, peer influence, decision-making, relationships, and personal growth, equipping teens with the knowledge and confidence to live out their faith. Regular activities such as teen services, retreats, mentorship programs, and community outreach help foster a sense of belonging and purpose. The Teens Ministry at CWC is dedicated to raising a generation of Christ-centered, bold, and purpose-driven young people who positively impact their families, church, and society.
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

export default Teen;