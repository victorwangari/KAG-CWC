"use client"

import { useState, useEffect } from "react"

export default function EventCountdown({ eventDate, eventName }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [currentTime, setCurrentTime] = useState(new Date())

  function calculateTimeLeft() {
    const difference = new Date(eventDate) - new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [eventDate])

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null
    }

    return (
      <div key={interval} className="bg-green-300 text-green-800 rounded-lg p-4 shadow flex flex-col items-center">
        <span className="text-4xl font-bold">{timeLeft[interval]}</span>
        <span className="text-sm uppercase">{interval}</span>
      </div>
    )
  })

  const formatKenyanTime = (date) => {
    return date.toLocaleString("en-KE", { timeZone: "Africa/Nairobi", hour12: true })
  }

  return (
    <div className="bg-green-700 to-red-500 p-6 rounded- shadow-lg text-white text-center">
      <h2 className="text-2xl font-semibold mb-4">{eventName}</h2>
      <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
        {timerComponents.length ? timerComponents : <span className="text-4xl font-bold">Welcome to <span className="text-yellow-500">LADIES&GENTS</span> night!</span>}
      </div>
      <div className="text-lg">Current time in Kenya: {formatKenyanTime(currentTime)}</div>
    </div>
  )
}
