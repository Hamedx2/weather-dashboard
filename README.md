🌤️ Weather Dashboard

A responsive weather dashboard built with React and TypeScript that displays real-time and historical weather data using the Open-Meteo API.
🚀 Features

    Current weather and temperature

    7–14 day forecast

    Support for Jalali (Persian) and Gregorian calendars

    Interactive charts for temperature trends

    Responsive design using Material UI (MUI)

    Axios-based API integration

🧠 Project Structure
    Current weather and temperature

   weather/
├── public/
│   └── images/
│       ├── admin/
│       └── dashboard/
│           └── icons/
├── src/
│   ├── components/
│   │   ├── dashboard/
│   │   │   ├── body/
│   │   │   ├── footer/
│   │   │   └── navbar/
│   │   └── login/
│   ├── pages/
│   ├── utils/
│   │   ├── contexts/
│   │   ├── helpers/
│   │   ├── i18n/
│   │   └── theme/
│   ├── index.css
│   ├── main.tsx
│   └── App.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
weather/
├── public/
│   └── images/
│       ├── admin/
│       └── dashboard/
│           └── icons/
├── src/
│   ├── components/
│   │   ├── dashboard/
│   │   │   ├── body/
│   │   │   ├── footer/
│   │   │   └── navbar/
│   │   └── login/
│   ├── pages/
│   ├── utils/
│   │   ├── contexts/
│   │   ├── helpers/
│   │   ├── i18n/
│   │   └── theme/
│   ├── index.css
│   ├── main.tsx
│   └── App.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
🛠️ Tech Stack

    React + TypeScript

    Vite (build tool)

    MUI (Material-UI) – UI Components

    Axios – HTTP client

    moment-jalaali – Persian (Jalali) date formatting

    Recharts – Charting library

📦 Setup Instructions

    Clone the repository

git clone https://github.com/Hamedx2/weather-dashboard.git
cd weather-dashboard

    Install dependencies

npm install

    Start the development server

npm run dev

    Build for production

npm run build

    Preview production build locally (optional)

npm run preview

📊 API Used

    Open-Meteo – Free and fast weather API for forecast and historical data
