import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import AppContextProvider from './context/AppContextProivder.jsx'
import {ToastContainer} from 'react-toastify'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <AppContextProvider>
    <App />
    <ToastContainer autoClose='2000'/>
    </AppContextProvider>
    </BrowserRouter>
)



//! That’s awesome 👏 — seriously, you’ve built a solid and clean React project here! Let’s break down what stands out and where you could polish things further:

// 🌟 What’s Great

// Clean Component Structure:

// Your folder organization (components, pages, context) is tidy and logical.

// Each component does a single, clear job — that’s excellent React architecture.

// Good Use of Context API:

// Centralizing API keys, base URL, and shared state in AppContextProvider is a professional touch.

// It keeps components lean and avoids prop drilling. 👍

// Responsive Design Choices:

// The grid layout (grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4) and Tailwind classes show solid understanding of responsive design.

// Dynamic Routing:

// Using react-router-dom to link GameCard → GameDetails via game.id is done cleanly.

// Using useParams and dynamic fetch for details is exactly how you should do it.

// Attention to UI/UX:

// Hover animations, gradient buttons, and transitions make it look modern.

// Search bar integration feels natural and enhances interactivity.

// 🛠️ Suggestions for Improvement

// Error Handling in API Calls:

// try {
//   const { data } = await axios.get(...);
//   setGames(data.results);
// } catch (error) {
//   console.error("Failed to fetch games", error);
// } finally {
//   setIsLoading(false);
// }


// This prevents crashes when the API fails or returns bad data.

// Handle Missing Data Gracefully:

// Some games might not have background_image or website. Add fallbacks:

// <img src={game.background_image || "/fallback.jpg"} alt={game.name} />


// For missing genres or developers, show “N/A” instead of leaving blank.

// SEO and Accessibility:

// Add alt text for all images (helps with accessibility and SEO).

// Example: <img alt={${game.name} background} />

// Search Optimization:

// Right now, the API call fires every time search changes (on each keystroke).
// Consider debouncing it (e.g., 500ms delay) so it doesn’t spam the API:

// useEffect(() => {
//   const timeout = setTimeout(fetchAllGames, 500);
//   return () => clearTimeout(timeout);
// }, [search]);


// Minor UI Improvement:

// hover:scale-95 shrinks the card, which might feel backward.
// You could use hover:scale-105 for a more “lifted” hover feel.

// Optional Enhancement – Pagination or Infinite Scroll:

// The API supports pagination (?page=2 etc.), so adding a “Load More” button would improve UX and performance.

// Code Style & Maintainability:

// You already have clear code, but you can extract repetitive parts (like the info rows in GameDetails) into a small component.

// 💡 Overall Rating

// ⭐ 9/10 for a self-built React project.
// You’ve nailed the basics of frontend development, context API usage, API integration, routing, and UI styling.
// Adding small enhancements like error handling, debounced search, and pagination would make it production-grade.

// If you’d like, I can help you add features like:

// Infinite scrolling / pagination

// Favorites or wishlist (using localStorage or context)

// Skeleton loading (for a smoother experience)

// Sorting and filtering games

// Would you like me to suggest one of those next?


//* kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk

//! can i earn money by making these kinds oh websites?
// ChatGPT said:

// Excellent question — and yes, absolutely! 💸
// You can earn money building websites like this — but how you do it depends on your goals, skills, and business model. Let’s break it down clearly 👇

// 💼 1. Freelancing (Most Direct Way)

// If you can build projects like the game site you just made, you already have skills clients pay for.

// 💰 How it works:

// Create a portfolio (show your Game Finder project!).

// Offer web development services on platforms like:

// Upwork

// Fiverr

// Freelancer.com

// You can charge $100–$1000+ depending on project complexity.

// 💡 Tip:

// Add more projects (e.g., a movie app, a food recipe app, or an eCommerce frontend).
// Clients love seeing a variety of examples — it shows you can adapt.

// 🌐 2. Ad-based Income (Monetize Your Own Site)

// You can host your game website publicly and earn through ads or affiliate links.

// 💰 How:

// Deploy it on Vercel
//  or Netlify

// Use Google AdSense, Media.net, or similar ad networks once you get traffic.

// Or use affiliate programs like:

// Amazon Games

// Epic Games Store

// Steam (via referral/partner links)

// ⚠️ Note:

// You’ll need consistent visitors — usually thousands per month — for meaningful income.
// That means SEO, blogging, and marketing matter here.

// 🛍️ 3. Build and Sell Web Templates or Apps

// If you polish your design and make it reusable, you can sell it as a template or starter project.

// 💰 Where to sell:

// ThemeForest

// CodeCanyon

// GitHub Sponsors

// BuyMeACoffee
//  (for open-source projects)

// Developers and indie game creators buy ready-to-use templates all the time.

// 🧑‍💻 4. Get a Job or Internship

// With your React and API integration skills, you’re already at a junior frontend developer level.

// 💰 Pay range (roughly):

// Internships: $200–$800/month

// Junior Developer: $1000–$2500/month (depending on location)

// Freelance hourly: $15–$50/hour for small gigs

// Your Game Finder app is a perfect portfolio piece to showcase.

// 🪙 5. SaaS (Build a Product)

// Once you’re confident, you can turn your ideas into small web products.

// For example:

// A “Game Review Tracker” where users save and rate games.

// A “Gaming Recommendation Engine” using APIs.

// Charge $2–$5/month for premium features.

// That’s passive income — harder to start, but more scalable.

// 🧭 Summary: Ways You Can Earn
// Method	Investment	Earning Potential	Difficulty
// Freelancing	Low	$100–$3000/month	🟢 Easy
// Ads / Affiliates	Medium	$10–$1000/month	🟡 Medium
// Sell Templates	Low	$50–$500/month	🟡 Medium
// Job / Internship	Medium	$1000+/month	🟢 Easy–Medium
// SaaS Product	High	$500–$10,000/month	🔴 Hard but scalable

// If you tell me what kind of earning path you’d prefer —
// 👉 freelancing, job, or passive income —
// I can guide you step-by-step on how to turn your React projects into actual money.

// Which one sounds most interesting to you?