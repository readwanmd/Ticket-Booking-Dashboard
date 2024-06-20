# Ticket Booking Dashboard

## Overview

This is the frontend application for the Ticket Booking Dashboard, a web-based platform that allows users to create, view, and manage event bookings. Built with React and styled using Tailwind CSS, this application offers a user-friendly interface for seamless event management.

## Features

- **Event Management**: Users can create, view, and manage events, including setting event details such as name, description, date, price, and capacity.
- **Booking Management**: Users can view all bookings associated with events, with detailed information on each booking.
- **Authentication**: Secure login and authentication mechanisms to ensure only authorized users can access and manage event data.
- **Responsive Design**: Fully responsive layout using Tailwind CSS to ensure a smooth experience across all devices.

## Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For styling and ensuring a responsive design.
- **Axios**: For making API requests.
- **React Router**: For navigation and routing.
- **LocalStorage**: For storing authentication tokens.

## Getting Started

### Prerequisites

Make sure you have the following installed on your local development machine:

- Node.js
- npm or yarn

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/ticket-booking-dashboard-frontend.git
   cd ticket-booking-dashboard-frontend
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add your environment variables:

   ```plaintext
   VITE_SERVER_BASE_URL= https://ticket-booking-dashboard-backend.onrender.com/api
   ```

4. **Start the Development Server**:
   ```bash
   npm start
   # or
   yarn start
   ```

## Key Components

### EventCreateForm

A form component for creating new events. Utilizes Tailwind CSS for styling.

### EventList

Displays a list of events fetched from the backend API.

### BookingList

Displays a list of bookings associated with an event.

### AuthProvider

Context provider for handling authentication and user state.

## Authentication

Authentication is handled using JWT tokens stored in local storage. The `AuthProvider` context manages the authentication state and provides helper functions for login and logout.

## API Integration

API requests are made using Axios. The base URL for the API is set in the environment variables, and the token is included in the headers for authenticated requests.
