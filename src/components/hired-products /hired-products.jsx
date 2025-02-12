import React from 'react';
import { useState } from 'react';
import NavBar from '../navbar/navbar';
import "../../css/about.css";
import Footer from '../footer/footer';

const teamMembers = {
    elders: [
        { name: "Kibathi Mbugua", role: "Chair Person" },
        { name: "Charles Ng’ang’a", role: "Bishop", },
        { name: "Richard Munala", role: "Assistant Bishop", },
        { name: "James Chege", role: "Elder", },
        { name: "Jonathan Njoroge", role: "Elder", },
    ],
    staff: [
        { name: "Kibathi Mbugua", role: "Chair Person" },
        { name: "Charles Ng’ang’a", role: "Bishop", },
        { name: "Richard Munala", role: "Assistant Bishop", },
      
    ],
    chairs: [] // Add staff members here if needed
};

function HiredProducts(){
    const [category, setCategory] = useState("elders");
    return (
        <div>
            <div className='events'>
            <div>
                <NavBar />
            </div>
            <div className="about-title">
                <h1><span className="text-warning ">#</span>Hired Products</h1>
            </div>
            
            </div>
            <div>
            <section className="text-center bg-white p-8">
                    <h2 className="text-3xl font-bold">Hired <span className='text-warning'>Products</span></h2>
                    {/* <img src={teamImage} alt="Our Team" className="w-full max-w-3xl mx-auto my-4" /> */}
                    <div className="flex justify-center my-4">
                        <button
                            className={`px-4 py-2 mx-2 rounded ${category === "elders" ? "bg-green-500 text-white" : "bg-gray-200"
                                }`}
                            onClick={() => setCategory("elders")}
                        >
                            Bouncing Castle
                        </button>
                        <button
                            className={`px-4 py-2 mx-2 rounded ${category === "staff" ? "bg-green-500 text-white" : "bg-gray-200"
                                }`}
                            onClick={() => setCategory("staff")}
                        >
                            Tents
                        </button>
                        <button
                            className={`px-4 py-2 mx-2 rounded ${category === "chairs" ? "bg-green-500 text-white" : "bg-gray-200"
                                }`}
                            onClick={() => setCategory("chairs")}
                        >
                            Plastic Chairs
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {teamMembers[category].map((member, index) => (
                            <div key={index} className="text-center">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-48 h-60 object-cover mx-auto rounded-lg shadow-md"
                                />
                                <h3 className="text-lg font-semibold mt-2">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <div>
                <Footer />
            </div>
           
        </div>
    )
}

export default HiredProducts;