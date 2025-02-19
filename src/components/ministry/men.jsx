import React from 'react';
import NavBar from '../navbar/navbar';
import "../../css/about.css";
import menpic from "../../img/men2.jpg"

import Footer from '../footer/footer';


function Men() {
    return (
        <div>
            <div className='children'>
                <NavBar />
                <div className="about-title">
                    <h1><span className="text-warning">#</span>MEN MINISTRY</h1>
                </div>
            </div>
            <div>
                <div className="container flex flex-col md:flex-row items-center justify-center p-8 bg-white">
                    {/* Image Section */}
                    <div className="w-full beginners md:w-1/2 flex  justify-center">
                        <img
                            src={menpic}
                            alt="Pastors"
                            className="rounded-lg shadow-lg w-full md:w-3/4"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="w-full md:w-1/2 p-6">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            MEN <span className='text-warning'>FELLOWSHIP</span>
                        </h1>
                        <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                        The Men's Fellowship at CWC is a dynamic group that brings together men of all ages to grow spiritually, strengthen their faith, and support one another in their walk with Christ. Through Bible study, prayer meetings, mentorship, and discussions, men are equipped to become godly leaders in their families, church, and community. The fellowship focuses on Christian values, family leadership, financial stewardship, and personal growth, providing a platform for men to share experiences, encourage one another, and serve together in ministry. Regular meetings, retreats, and outreach programs help deepen their faith and impact society. The Men's Fellowship plays a crucial role in building strong, Christ-centered homes and communities, inspiring men to live with integrity and purpose.
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

export default Men;