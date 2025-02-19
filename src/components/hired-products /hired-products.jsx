import React, { useState } from 'react';
import NavBar from '../navbar/navbar';
import "../../css/about.css";
import Footer from '../footer/footer';

const Products = {
    bouncingcastle: [
        { name: "Rainbow Bouncer", image: "path/to/bouncer1.jpg", role: "Large inflatable bouncing castle" },
        { name: "Jungle Adventure", image: "path/to/bouncer2.jpg", role: "Medium-sized jungle-themed bouncer" }
    ],
    tents: [
        { name: "White Canopy Tent", image: "path/to/tent1.jpg", role: "Spacious white event tent" },
        { name: "Luxury Wedding Tent", image: "path/to/tent2.jpg", role: "Elegant wedding tent with decor" }
    ],
    chairs: [
        { name: "Plastic Chair", image: "path/to/chair1.jpg", role: "Durable white plastic chair" },
        { name: "Foldable Chair", image: "path/to/chair2.jpg", role: "Comfortable foldable chair" }
    ]
};

function HiredProducts() {
    const [category, setCategory] = useState("bouncingcastle");
    const [showForm, setShowForm] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", location: "" });

    const handleInquiry = (product) => {
        setSelectedProduct(product);
        setShowForm(true);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [email, setEmail] = useState("");
   
     const handleSubscribe = () => {
       window.open("https://docs.google.com/forms/d/1mPNIkO6RHMqFaDw-4HaQbliJbGOZsWbzLEOC9bbYw0A/edit", "_blank");
       setEmail(""); // Reset the input field after clicking subscribe
     };
    return (
        <div>
            <div className='events'>
                <NavBar />
                <div className="about-title">
                    <h1><span className="text-warning">#</span>Hired Products</h1>
                </div>
            </div>
            <section className="text-center bg-white p-8">
                <h2 className="text-3xl font-bold">Hired <span className='text-warning'>Products</span></h2>
                <div className="flex justify-center my-4">
                    <button className={`px-4 py-2 mx-2 rounded ${category === "bouncingcastle" ? "bg-green-500 text-white" : "bg-gray-200"}`} onClick={() => setCategory("bouncingcastle")}>
                        Bouncing Castle
                    </button>
                    <button className={`px-4 py-2 mx-2 rounded ${category === "tents" ? "bg-green-500 text-white" : "bg-gray-200"}`} onClick={() => setCategory("tents")}>
                        Tents
                    </button>
                    <button className={`px-4 py-2 mx-2 rounded ${category === "chairs" ? "bg-green-500 text-white" : "bg-gray-200"}`} onClick={() => setCategory("chairs")}>
                        Plastic Chairs
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {Products[category].map((product, index) => (
                        <div key={index} className="text-center border p-4 rounded-lg shadow-md">
                            <img src={product.image} alt={product.name} className="w-48 h-60 object-cover mx-auto rounded-lg" />
                            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                            <p className="text-gray-600">{product.role}</p>
                            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" onClick={() => handleInquiry(product.name)}>
                                Send Inquiry
                            </button>
                        </div>
                    ))}
                </div>
            </section>
            {showForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Inquiry for {selectedProduct}</h3>
                        <form onClick={handleSubscribe}>
                            <input type="text" name="name" placeholder="Your Name" className="block w-full p-2 border rounded mb-2" onChange={handleChange} required />
                            <input type="email" name="email" placeholder="Your Email" className="block w-full p-2 border rounded mb-2" onChange={handleChange} required />
                            <input type="text" name="phone" placeholder="Your Phone Number" className="block w-full p-2 border rounded mb-2" onChange={handleChange} required />
                            <input type="text" name="location" placeholder="Your Location" className="block w-full p-2 border rounded mb-2" onChange={handleChange} required />
                            <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Send</button>
                            <button type="button" className="ml-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600" onClick={() => setShowForm(false)}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
}

export default HiredProducts;
