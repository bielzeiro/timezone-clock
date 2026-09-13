# 🌍 Timezone Clock

A beautiful, real-time digital clock application that displays the current time in different time zones around the world.

## Features

✨ **Real-time Updates** - Clock updates every second with accurate time

🌐 **Multiple Timezones** - Displays 8 major cities across different timezones:
- São Paulo (America/Sao_Paulo)
- New York (America/New_York)
- London (Europe/London)
- Tokyo (Asia/Tokyo)
- Sydney (Australia/Sydney)
- Dubai (Asia/Dubai)
- Los Angeles (America/Los_Angeles)
- Singapore (Asia/Singapore)

📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices

🎨 **Modern UI** - Beautiful gradient backgrounds and smooth animations

⚡ **Performance** - Built with React and optimized for smooth performance

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **CSS3** - Modern styling with gradients and animations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/bielzeiro/timezone-clock.git

# Navigate to the project directory
cd timezone-clock

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev

# The app will open at http://localhost:3000
```

### Build

```bash
# Create a production build
npm run build

# Preview the build
npm run preview
```

## Project Structure

```
timezone-clock/
├── src/
│   ├── components/
│   │   ├── ClockCard.tsx       # Individual clock card component
│   │   └── ClockCard.css       # Clock card styling
│   ├── App.tsx                 # Main app component
│   ├── App.css                 # App styling
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── vite.config.ts              # Vite config
└── README.md                   # This file
```

## How It Works

1. The app uses the **Intl.DateTimeFormat** API to get the current time in different timezones
2. Updates are triggered every second using `setInterval`
3. Each timezone is displayed in a beautiful card with:
   - City name
   - UTC offset
   - Digital time display (HH:MM:SS)
   - Timezone identifier

## Customization

To add or modify timezones, edit the `TIMEZONES` array in `src/App.tsx`:

```typescript
const TIMEZONES: TimeZoneConfig[] = [
  { name: 'Your City', timezone: 'Your/Timezone', offset: 0 },
  // ... more timezones
]
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

MIT License - see LICENSE file for details

## Author

**bielzeiro** - [GitHub Profile](https://github.com/bielzeiro)

## Contributing

Feel free to submit issues and enhancement requests!
