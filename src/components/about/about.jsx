import React from 'react';
import NavBar from '../navbar/navbar';
import "../../css/about.css";
import { useState } from "react";
import Footer from '../footer/footer';
import Amos from "../../img/elder kithi.jpeg"


const teamMembers = {
    elders: [
        { name: "Rev James Thuo", role: "Semior pastor" },
        { name: "Rev Rebecca James", role: "Wife to Senior Pastor", },
        { name: "Rev Nicholus Njoroge", role: "Kiambu East District youth director ", },
        { name: "Pastor Peter Kinyanjui", role: "Cwc Pastor", },
        { name: "Pastor Hannah Kinyanjui", role: "Cwc Children pastor", },
    ],
    staff: [
        { name: "Amos Kithi", role: "Elder Cwc Gikambura" ,img: Amos },
        { name: "Ann Wanjiku", role: "CWC Gikambura Mama local", },
        { name: "Richard Munala", role: "Assistant Bishop", },
      
    ], // Add staff members here if needed
};

function About() {
    const [category, setCategory] = useState("elders");
    return (
        <div className="about">
            <div>
                <NavBar />
            </div>
            <div className="about-title">
                <h1><span className="text-warning ">#</span>About Us</h1>
            </div>
            <div>
                <div className="bg-white  flex  items-center justify-center p-8">
                    {/* Left Section */}
                    <div className="w-full md:w-1/2 p-4">
                        <div className="text-center max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-green-600">Motto</h2>
                            <p className="text-gray-700 mt-2">
                                Heb 12:2 Looking unto Jesus.
                            </p>
                        </div>

                        <div className="text-center max-w-4xl mx-auto mt-8">
                            <h2 className="text-3xl font-bold text-green-600">Mission statement</h2>
                            <p className="text-gray-700 mt-2">
                                CWC exist to holistically reach, disciple and empower the body of Jesus Christ to her
                                Calling to attain their divine given destiny through God’s word
                            </p>
                            <p className="italic font-semibold text-gray-800 mt-4">This comes from Matthew 28:18-19:</p>
                            <p className="italic text-gray-700 mt-2">
                                Go, and make disciples of all nations, baptizing them in the name of the Father, the Son and the Holy Spirit
                                teaching them to obey everything that I have commanded you. I am with you always till the end of the ages.
                            </p>
                        </div>
                    </div>

                    {/* Right Section */}

                </div>
            </div>
            <div>
                <div className="w-full core-values md:w-1/2 p-4">
                    <h2 className="text-4xl font-bold text-green-600 text-center">Our Core Values</h2>
                    <h2  className="text-3xl font-bold text-yellow-600 text-center">ULIVE</h2>
                    <div className="mt-4">
                        <details className="bg-green-500 text-white p-3 rounded-md mb-2">
                            <summary className="font-semibold cursor-pointer"><span className='text-warning'>U</span>-UNITY</summary>
                            <p className="mt-2 text-sm">
                            Psalm 133:1 – "Behold, how good and how pleasant it is for brethren to dwell together in unity!"
                            </p>
                        </details>
                        <details className="bg-green-500 text-white p-3 rounded-md mb-2">
                            <summary className="font-semibold cursor-pointer"><span className='text-warning'>L</span>-LOVE</summary>
                            <p className="mt-2 text-sm">
                            1 John 4:8 "Whoever does not love does not know God, because God is love."
                            </p>
                        </details>
                        <details className="bg-green-500 text-white p-3 rounded-md mb-2">
                            <summary className="font-semibold cursor-pointer"><span className='text-warning'>I</span>-INTEGRITY</summary>
                            <p className="mt-2 text-sm">
                            Proverbs 10:9 "Whoever walks in integrity walks securely, but whoever takes crooked paths will be found out."
                            </p>
                        </details>
                        <details className="bg-green-500 text-white p-3 rounded-md mb-2">
                            <summary className="font-semibold cursor-pointer"><span className='text-warning'>V</span>- VIRTOUS</summary>
                            <p className="mt-2 text-sm">
                            2 Peter 1:5 "For this very reason, make every effort to add to your faith virtue; and to virtue, knowledge."
                            </p>
                        </details>
                        <details className="bg-green-500 text-white p-3 rounded-md mb-2">
                            <summary className="font-semibold cursor-pointer"><span className='text-warning'>E</span>-ENCOURAGEMENT</summary>
                            <p className="mt-2 text-sm">
                            1 Thessalonians 5:11 "Therefore encourage one another and build each other up, just as in fact you are doing."
                            </p>
                        </details>
                    </div>
                </div>

            </div>
            <div className="text-center bg-white p-8">
                <h2 className="text-3xl font-bold">Our <span className='text-warning'>Team</span></h2>
                <div className="flex justify-center my-4">
                    <button
                        className={`px-4 py-2 mx-2 rounded ${category === "elders" ? "bg-green-500 text-white" : "bg-gray-200"}`}
                        onClick={() => setCategory("elders")}
                    >
                        Pastoral
                    </button>
                    <button
                        className={`px-4 py-2 mx-2 rounded ${category === "staff" ? "bg-green-500 text-white" : "bg-gray-200"}`}
                        onClick={() => setCategory("staff")}
                    >
                        Staff
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {teamMembers[category].map((member, index) => (
                        <div key={index} className="text-center">
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-48 h-60 object-cover mx-auto rounded-lg shadow-md"
                            />
                            <h3 className="text-lg font-semibold mt-2">{member.name}</h3>
                            <p className="text-gray-600">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default About;

