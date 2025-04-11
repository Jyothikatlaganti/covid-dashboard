
# COVID-19 Dashboard

A responsive and interactive web application built with React, TypeScript, and Chart.js to visualize country-specific COVID-19 statistics.

## Features

- **Country Statistics**: View total confirmed cases, deaths, and recoveries by individual countries.
- **Interactive Charts**: Analyze trends over time with line charts displaying historical data.
- **Search Functionality**: Quickly find statistics for specific countries.
- **Real-Time Data**: Fetches up-to-date information from reliable public APIs.


## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/covid-dashboard.git
cd covid-dashboard
```

Install dependencies:

```bash
npm install
```

### Running the Application

Start the development server:

```bash
npm start
```

Visit:  
http://localhost:3000

### Building for Production

```bash
npm run build
```

This will create an optimized production build in the `build/` directory.

## Project Structure

```
covid-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── context/
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── package.json
└── README.md
```

## Technologies Used

- React
- TypeScript
- Chart.js
- React Chart.js 2
- Material-UI (MUI)
- Axios

## Data Source

This project uses COVID-19 data from the [COVID19 API](https://covid-api.com/api/).


## Acknowledgements

- [COVID19 API](https://covid-api.com/api/)
- [Chart.js](https://www.chartjs.org/)
- [Material-UI](https://mui.com/)
