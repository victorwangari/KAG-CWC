import React from 'react';
import NavBar from '../navbar/navbar';
import "../../css/about.css";
import childrenpic1 from "../../img/BEGINNERSCLASS.jpeg";
import junior from "../../img/JUNIORS.png";
import primary from "../../img/PRIMARYCLASS.jpeg";
import senior from "../../img/seniorsClass.jpeg";
import Footer from '../footer/footer';


function Women() {
    return (
        <div>
            <div className='children'>
                <NavBar />
                <div className="about-title">
                    <h1><span className="text-warning">#</span>WOMEN MINISTRY</h1>
                </div>
            </div>
            <div>
                <div className="container flex flex-col md:flex-row items-center justify-center p-8 bg-white">
                    {/* Image Section */}
                    <div className="w-full beginners md:w-1/2 flex  justify-center">
                        <img
                            src={childrenpic1}
                            alt="Pastors"
                            className="rounded-lg shadow-lg w-full md:w-3/4"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="w-full md:w-1/2 p-6">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            WOMEN <span className='text-warning'>FELLOWSHIP</span>
                        </h1>
                        <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                        The Women’s Fellowship (WWK - Wanawake Wa Kristo) at CWC is a vibrant community of women dedicated to spiritual growth, mentorship, and service. This fellowship empowers women to deepen their relationship with God through Bible study, prayer meetings, discipleship, and practical teachings on topics such as family, faith, leadership, and personal development. WWK provides a platform for women to support, encourage, and uplift one another, fostering strong Christian relationships and godly character. Through retreats, conferences, and outreach programs, members actively serve the church and the community, impacting lives for Christ. The WWK fellowship plays a vital role in strengthening families and equipping women to be spiritual pillars in their homes, church, and society
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

export default Women;