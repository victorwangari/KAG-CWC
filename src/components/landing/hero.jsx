import { useState, useEffect } from "react";
import "../../css/hero.css";
import men from "../../img/men1.jpg";
import children from "../../img/children1.jpg";
import youth from "../../img/youthday with blue.jpg";
import NavBar from "../navbar/navbar";

const images = [
  {
    src: men,
    title: "Welcome to Our <span class='text-yellow-400'>Sunday Services</span>",
    services: [
      { time: "9.00 AM to 11:00 AM", desc: "First Service - In-person & Livestream", color: "border-green-400" },
      { time: "11.00 AM to 1:00 PM", desc: "Second Service - In-person Only", color: "border-yellow-400" },
    ],
    button: true,
  },
  {
    src: children,
    title: "Welcome to Our <span class='text-yellow-400'>Covenant Hour</span>",
    services: [
      { time: "10:00 PM to 11:00 PM", desc: "Every Tuesday", color: "border-green-400" },
      { time: "10.00 PM to 11:00 PM", desc: "Every Thursday", color: "border-yellow-400" },
    ],
    button: false,
    link: "https://meet.google.com/nye-nguk-uaq",
  },
  {
    src: youth,
    title: "Welcome to Our <span class='text-yellow-400'>Sunday Services</span>",
    services: [
      { time: "9.00 AM", desc: "First Service - In-person & Livestream", color: "border-green-400" },
      { time: "12.00 PM", desc: "Second Service - In-person Only", color: "border-yellow-400" },
    ],
    button: true,
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [darken, setDarken] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setDarken(false);

    const textTimeout = setTimeout(() => {
      setShowText(true);
    }, 2000);

    const darkenTimeout = setTimeout(() => {
      setDarken(true);
    }, 2000);

    const imageInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
      setShowText(false);
    }, 5000);

    return () => {
      clearTimeout(textTimeout);
      clearTimeout(darkenTimeout);
      clearInterval(imageInterval);
    };
  }, [index]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className={`absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out ${darken ? "brightness-50" : "brightness-100"}`}
        style={{ backgroundImage: `url(${images[index].src})` }}
      />

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Navbar inside the hero section */}
      <div className="absolute top-0 left-0 w-full z-10">
        <NavBar />
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        {showText && (
          <h1
            className="text-4xl font-bold"
            dangerouslySetInnerHTML={{ __html: images[index].title }}
          />
        )}

        {showText && (
          <div className="mt-6 flex flex-col gap-6">
            {images[index].services.map((service, i) => (
              <div
                key={i}
                className={`p-6 border-4 rounded-full text-xl font-bold ${service.color}`}
              >
                <p>{service.time}</p>
                <p className="text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        )}

        {images[index].button && images[index].src !== children && showText && (
          <a
            href="https://www.youtube.com/@cwc_churches_of_Kenya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-600 transition">
              WATCH LIVE ▶
            </button>
          </a>
        )}

        {images[index].src === children && showText && (
          <a href={images[index].link} target="_blank" rel="noopener noreferrer">
            <button className="mt-6 px-6 py-3 bg-blue-500 text-black font-bold rounded-lg shadow-lg hover:bg-blue-600 transition">
              JOIN US ▶
            </button>
          </a>
        )}
      </div>
    </div>
  );
}
