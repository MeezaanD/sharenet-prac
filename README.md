# Sharenet Project Documentation

# Overview

This project involves creating a responsive Vue.js Single Page Application (SPA) that interacts with a Sharenet API for displaying spot prices. The application consists of three pages: a landing page displaying spot prices, a "Contact Us" page with Sharenet address details, and a venue/workshop page. Additionally, there are extra features such as sorting prices, searching for full names, and handling workshop bookings.

# Live URLs
API Endpoint: https://sharenet-prac-api.onrender.com/workshops
Frontend App: https://sharenet-prac-88723.web.app/

Pages
1. Landing Page
Display spot prices in a table.
Data sourced from Sharenet API.
Table columns: FullName, Price, Move, Percentage Move, Time.
Sortable columns, mobile responsive.
Menu links to Page 2 (Contact Us) and Page 3 (Venues).

2. Contact Us Page
Display Sharenet address details and contact numbers.
Include Google Maps for location.
Link back to the Landing Page.

3. Venues Page
Display different venues and workshop dates.
Indicate availability (some available, some sold out).
