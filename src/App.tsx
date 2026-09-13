import { useState, useEffect } from 'react'
import ClockCard from './components/ClockCard'
import './App.css'

interface TimeZoneConfig {
  name: string
  timezone: string
  offset: number
}

const TIMEZONES: TimeZoneConfig[] = [
  { name: 'São Paulo', timezone: 'America/Sao_Paulo', offset: -3 },
  { name: 'New York', timezone: 'America/New_York', offset: -5 },
  { name: 'London', timezone: 'Europe/London', offset: 0 },
  { name: 'Tokyo', timezone: 'Asia/Tokyo', offset: 9 },
  { name: 'Sydney', timezone: 'Australia/Sydney', offset: 11 },
  { name: 'Dubai', timezone: 'Asia/Dubai', offset: 4 },
  { name: 'Los Angeles', timezone: 'America/Los_Angeles', offset: -8 },
  { name: 'Singapore', timezone: 'Asia/Singapore', offset: 8 },
]

function App() {
  const [times, setTimes] = useState<{ [key: string]: string }>({})

  useEffect(() => {
    const updateTimes = () => {
      const newTimes: { [key: string]: string } = {}
      
      TIMEZONES.forEach((tz) => {
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: tz.timezone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
        newTimes[tz.timezone] = formatter.format(new Date())
      })
      
      setTimes(newTimes)
    }

    updateTimes()
    const interval = setInterval(updateTimes, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="app">
      <header className="header">
        <h1>🌍 Timezone Clock</h1>
        <p>Current time around the world</p>
      </header>
      
      <div className="clocks-grid">
        {TIMEZONES.map((tz) => (
          <ClockCard
            key={tz.timezone}
            city={tz.name}
            timezone={tz.timezone}
            time={times[tz.timezone] || '--:--:--'}
            offset={tz.offset}
          />
        ))}
      </div>
    </div>
  )
}

export default App
