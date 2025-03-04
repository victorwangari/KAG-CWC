import React from "react";
import "../../css/hero.css";
import covenant from "../../posters/covenanthour.jpg";
import biblestudy from "../../posters/BIBLE STUDY.jpeg";
import childrenscamp from "../../posters/CHILDREN NATIONAL CAMP.jpeg";
import sundayservice from "../../posters/sundaysevice .jpg";

const events = {
    events: [
        {
            date: "Every Sunday",
            image: sundayservice
        },
        {
            date: " Teusday and Thursday",
            image: covenant
        },
        {
            date: " Every Saturday",
            image: biblestudy
        },
        {
            date: "22 - 23 April 2025",
            image: childrenscamp
        }
    ]
};

function UpcomingEvents() {
    return (
        <div className="container upcoming-events">
            <div className="text-center mb-4">
                <h2 className="text-gray-900 evnt font-bold text-xxl mb-3">
                    Upcoming <span className="text-yellow-500">Events</span>
                </h2>
                <p className="evnt text-lg">
                    Join us for our upcoming events! We can't wait to connect, grow, and worship together as a community.
                </p>
            </div>
            
            <div className="row">
                {events.events.map((event, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                        <div className="poster text-center mb-4">
                            <img src={event.image} alt={`Event ${index + 1}`} className="img-fluid rounded shadow" />
                            <p className="text-black-500 mt-2">{event.date}</p>
                            <a href="/events" className="btn btn-warning text-blue-500 direction hover:text-blue-600">
                                View Event Details
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UpcomingEvents;
