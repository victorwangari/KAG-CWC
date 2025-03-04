import React from 'react';
import "../../css/about.css";
import NavBar from '../navbar/navbar';
import Footer from '../footer/footer';
import "../../css/hero.css";
import covenant from "../../posters/covenanthour.jpg";
import chilrencamp from "../../posters/CHILDREN NATIONAL CAMP.jpeg"
import biblestudy from "../../posters/BIBLE STUDY.jpeg"
import sundayservice from "../../posters/sundaysevice .jpg";

const events = [
    {
        date: "Every Sunday",
        time: "1st service 9:00 AM - 11:00 AM , 2nd service 11:00 AM - 1:00 PM",
        image: sundayservice,
        title: "Sunday Service"
    },
    {
        date: "Tuesday and Thursday",
        time: "10:00 PM - 11:00 PM",
        image: covenant,
        title: "Covenant Hour"
    },
    {
        date: "Every Saturday",
        time: "5:30 PM - 6:30 PM",
        image: biblestudy,
        title: "The Jesus' Walk Talk"
    },
    {
        date: "22nd to 25th April 2015",
        time: "3 days",
        image: chilrencamp,
        title: "Children's National Camp"
    }
];

const addToGoogleCalendar = (event) => {
    const baseUrl = "https://calendar.google.com/calendar/render";
    const startDate = "20250209T100000Z"; // Adjust accordingly
    const endDate = "20250209T120000Z"; // Placeholder duration
    const params = new URLSearchParams({
        action: "TEMPLATE",
        text: event.title,
        dates: `${startDate}/${endDate}`,
        details: `Join us for ${event.title} on ${event.date} at ${event.time}.`,
    });
    window.open(`${baseUrl}?${params.toString()}`, "_blank");
};

function Events() {
    return (
       <div>
           <div className='events'>
                <NavBar />
                <div className="about-title">
                    <h1><span className="text-warning">#</span>EVENTS</h1>
                </div>
            </div>
            <div className="container upcoming-events">
                {/* <div className="text-center mb-4">
                    <h2 className="text-gray-900 evnt font-bold text-xxl mb-3">
                        Upcoming <span className="text-yellow-500">Events</span>
                    </h2>
                    <p className="evnt text-lg">
                        Join us for our upcoming events! We can't wait to connect, grow, and worship together as a community.
                    </p>
                </div> */}
                <div className="row">
                    {events.map((event, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                            <div className="poster text-center mb-4">
                                <img src={event.image} alt={event.title} className="img-fluid rounded shadow" />
                                <h4 className="mt-2  font-bold">{event.title}</h4>
                                <p className="text-black-500 mt-1"><strong>Date:</strong> {event.date}</p>
                                <p className="text-black-500 mt-1"><strong>Time:</strong> {event.time}</p>
                               
                                <button 
                                    className="btn btn-warning direction mt-2" 
                                    onClick={() => addToGoogleCalendar(event)}
                                >
                                    Add to Your Calendar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default Events;
