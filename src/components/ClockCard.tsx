import './ClockCard.css'

interface ClockCardProps {
  city: string
  timezone: string
  time: string
  offset: number
}

function ClockCard({ city, timezone, time, offset }: ClockCardProps) {
  const getOffsetDisplay = (offset: number): string => {
    if (offset >= 0) {
      return `UTC+${offset}`
    } else {
      return `UTC${offset}`
    }
  }

  return (
    <div className="clock-card">
      <div className="clock-header">
        <h2>{city}</h2>
        <span className="timezone-label">{getOffsetDisplay(offset)}</span>
      </div>
      
      <div className="clock-display">
        <time className="digital-time">{time}</time>
      </div>
      
      <div className="timezone-info">
        <small>{timezone}</small>
      </div>
    </div>
  )
}

export default ClockCard
