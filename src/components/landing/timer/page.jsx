import EventCountdown from "./timer";
import "../../../css/hero.css";

export default function Timer() {
  // Set the date to February 14, 2025, at 00:00:00 Kenyan time (UTC+3)
  const nextEventDate = new Date("2025-02-14T00:00:00+03:00");
  const eventName = "  Friday, 14th FEB 2025";

  return (
    <div className="timer-verse">
      <main className="flex min-h-[70vh] flex-col items-center justify-center">
        <h1 className="text-3xl sm:text-4xl countdown-title font-bold mb-8 text-white text-center">
          Countdown to <span className="text-yellow-500">Ladies</span> and <span className="text-yellow-500">Gents</span> Night 2025.
        </h1>
        
        <div className="flex flex-col md:flex-row card-all w-full max-w-6xl">
          {/* First Card */}
          <div className="flex-1 bg-green-400 shadow-md  ">
            <div className="card-body ">
              <h5 className="card-title  text-white card-event">next UPCOMING <span className="text-yellow-700">EVENT</span></h5>
              
            </div>
          </div>

          {/* Middle Card - Larger */}
          <div className=" flex-1 md:flex-[2]  shadow-md ">
            <EventCountdown eventDate={nextEventDate} eventName={eventName} />
          </div>

          {/* Last Card */}
          <div className=" flex-1  bg-green-500 shadow-md  text-end">
            <div className="card-body card-btn ">
              <a href="/events" className="btn w-40 fs-4 direction btn-warning mt-4">View Event</a>
            </div>
          </div>
        </div>
      </main>
      <div className="transparent-bg min-h-[40vh]">
        <div className="maintaining-h2">
            <h2 className="text-black maitaining-title ">Maintaining the <span className="text-yellow-500">Fellowship</span></h2>
        </div>
        <div className="maintaining-h2">
            <p className="text-black maintaning-p">Let us fix our eyes on Jesus, <br/> the author and perfecter of our faith, who for the joy set before him endured the cross,<br/> scorning its shame, and sat down at the right hand of the throne of God.</p>
        </div>
        <div>
        <p className="text-black maintaining-h2 maintaining-verse ">Hebrews 12:2</p>
        </div>
        <div className="maintaining-h2">
            <a href="/about" className="btn btn-warning maintainig-button">Learn More</a>
        </div>
      </div>
    </div>
  );
}
