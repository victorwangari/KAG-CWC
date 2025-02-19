import React from 'react';
import NavBar from '../navbar/navbar';
import "../../css/about.css";
import childrenpic1 from "../../img/BEGINNERSCLASS.jpeg";
import junior from "../../img/JUNIORS.png";
import primary from "../../img/PRIMARYCLASS.jpeg";
import senior from "../../img/seniorsClass.jpeg";
import Footer from '../footer/footer';


function Children() {
    return (
        <div>
            <div className='children'>
                <NavBar />
                <div className="about-title">
                    <h1><span className="text-warning">#</span>CHILDREN MINISTRY</h1>
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
                            BEGINNERS <span className='text-warning'>CLASS</span>
                        </h1>
                        <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                            The Beginners' Sunday School at CWC is a nurturing and engaging program designed for children aged 3 to 6 years to introduce them to the love of Jesus Christ. Through Bible stories, songs, crafts, and interactive activities, young learners are taught fundamental Christian values such as obedience, kindness, and prayer. The lessons cover essential topics like Creation, Jesus' love, and Christian character, using simple memory verses and storytelling to make learning enjoyable. Classes are held every Sunday during the main service in designated Sunday school classrooms. The goal is to build a strong Christian foundation, instill a love for Jesus, and help children develop godly character in a warm and caring environment.
                        </p>
                        <p className="text-gray-900 italic font-semibold mb-4">
                            "Come, taste and see that the Lord is good! Ps. 34:8"
                        </p>
                        <p className="text-gray-900 font-bold font-medium">Rev.James Maina & Rev.Rebecca James</p>
                        <p className="text-green-700 font-bold">Senior Pastors.</p>
                    </div>
                </div>
                <hr />
                <div className="container flex flex-col md:flex-row items-center justify-center p-8 bg-white">
                    {/* Text Section */}
                    <div className="w-full md:w-1/2 p-6">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            JUNIOR <span className='text-warning'>CLASS</span>
                        </h1>
                        <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                            The Junior Sunday School Class at CWC is designed for children aged 7 to 12 years, providing a deeper understanding of biblical teachings while making learning interactive and enjoyable. Through Bible stories, discussions, songs, and hands-on activities, children explore key themes such as faith, obedience, prayer, and Christian values. Lessons focus on developing a personal relationship with God, understanding Scripture, and applying biblical principles in daily life. The class encourages memorization of Bible verses, group participation, and character building. Held every Sunday during the main service, this class equips young learners with a strong spiritual foundation to grow in their faith and live out Christ-like values.
                        </p>
                        <p className="text-gray-900 italic font-semibold mb-4">
                            "Come, taste and see that the Lord is good! Ps. 34:8"
                        </p>
                        <p className="text-gray-900 font-bold font-medium">Rev. James Maina & Rev. Rebecca James</p>
                        <p className="text-green-700 font-bold">Senior Pastors.</p>
                    </div>

                    {/* Image Section */}
                    <div className="w-full beginners md:w-1/2 flex justify-center">
                        <img
                            src={junior}
                            alt="Pastors"
                            className="rounded-lg shadow-lg w-full md:w-3/4"
                        />
                    </div>
                </div>

                <hr />
                <div className="container flex flex-col md:flex-row items-center justify-center p-8 bg-white">
                    {/* Image Section */}
                    <div className="w-full beginners md:w-1/2 flex  justify-center">
                        <img
                            src={primary}
                            alt="Pastors"
                            className="rounded-lg shadow-lg w-full md:w-3/4"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="w-full md:w-1/2 p-6">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            PRIMARY <span className='text-warning'>CLASS</span>
                        </h1>
                        <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                            The Primary Sunday School Class at CWC is designed for children aged 13 to 15 years, helping them transition from basic Bible teachings to a deeper understanding of their faith. Through Bible study, group discussions, interactive lessons, and real-life applications, students learn about Christian identity, discipleship, prayer, and making godly choices. The class encourages scripture memorization, personal reflection, and active participation to help young believers grow in their spiritual journey. Held every Sunday during the main service, this class equips pre-teens with the knowledge and confidence to live out their faith and develop a closer relationship with God.
                        </p>
                        <p className="text-gray-900 italic font-semibold mb-4">
                            "Come, taste and see that the Lord is good! Ps. 34:8"
                        </p>
                        <p className="text-gray-900 font-bold font-medium">Rev.James Maina & Rev.Rebecca James</p>
                        <p className="text-green-700 font-bold">Senior Pastors.</p>
                    </div>
                </div>
                <hr />
                <div className="container flex flex-col md:flex-row items-center justify-center p-8 bg-white">
                    {/* Text Section */}
                    <div className="w-full md:w-1/2 p-6">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            SENIOR <span className='text-warning'>CLASS</span>
                        </h1>
                        <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                            The Senior Sunday School Class at CWC is designed for teenagers aged 16 to 18 years, focusing on strengthening their faith and preparing them for real-life challenges as young Christians. Through in-depth Bible study, discussions, mentorship, and practical applications, students explore topics such as Christian leadership, spiritual growth, decision-making, relationships, and living out their faith in daily life. The class encourages critical thinking, personal devotion, and active involvement in ministry to help teens develop a strong and lasting relationship with God. Held every Sunday during the main service, this class equips young believers with biblical wisdom and life skills to navigate their faith with confidence.
                        </p>
                        <p className="text-gray-900 italic font-semibold mb-4">
                            "Come, taste and see that the Lord is good! Ps. 34:8"
                        </p>
                        <p className="text-gray-900 font-bold font-medium">Rev. James Maina & Rev. Rebecca James</p>
                        <p className="text-green-700 font-bold">Senior Pastors.</p>
                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2 beginners flex justify-center">
                        <img
                            src={senior}
                            alt="Pastors"
                            className="rounded-lg shadow-lg w-full md:w-3/4"
                        />
                    </div>
                </div>




            </div>
            <Footer />

        </div>
    )
}

export default Children;