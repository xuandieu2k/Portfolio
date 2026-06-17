Act as a Senior Frontend Developer and UI/UX Expert. Create a complete Single Page Application (SPA) Portfolio website using Vite + React + Tailwind CSS, perfectly configured for Netlify deployment. 

**CRITICAL REQUIREMENT:** All text content, UI elements, and data in the generated code MUST be strictly in English.

**1. Personal Data (Hardcode this into the UI/Components):**
*   **Name:** NGUYEN XUAN DIEU[cite: 1]
*   **Role:** ANDROID DEVELOPER[cite: 1]
*   **Profile/About Me:** "As a progressive individual, I always try to learn and absorb the good things around me every day. From there, I can improve myself and become a better version of me now in the future."[cite: 1]
*   **Core Skills (Display as Tags/Badges):** 
    *   Android Development: Kotlin, Java, Jetpack Compose, XML, Jetpack Libraries, KMM[cite: 1].
    *   Architecture: Clean Architecture, MVVM, MVI, MVC[cite: 1].
    *   Data & Networking: Room Database, DataStore, Coroutines, Flow, LiveData, RESTful APIs, WebSocket[cite: 1].
    *   Integration: Firebase, Google Maps, Location Services, AdMob, Play Billing[cite: 1].
    *   Publishing: Google Play Store, Apple App Store[cite: 1].
*   **Work Experience (Display as a Timeline):**
    *   **COOLDEV (2024 - Now):** Android Developer. Developed mobile applications based on project requirements. Maintained, improved, and refactored code in both new and existing projects[cite: 1].
    *   **Freelance Mobile Developer & UI/UX Designer (2023 - Now) [Concurrent]:** Specialized in Android application development and crafting intuitive UI/UX designs. Delivered streamlined, user-centric mobile experiences.
    *   **TECHRES (2023 - Oct 2024):** Mobile Developer. Developed F&B industry projects and outsource projects[cite: 1].
    *   **COSIS (2022 - 2023):** Internship Mobile/Web Developer. Developed websites and apps to compile business data[cite: 1].
*   **Key Projects (Display as a Grid of Cards):**
    *   **CaroKings:** A cross-platform Gomoku (Caro) game available on Android and iOS. Implemented game features, AI gameplay, and online services[cite: 1].
    *   **Fly Go 4:** An application that enhances the flying experience for DJI drones by offering advanced remote control features and customizable settings[cite: 1].
    *   **Voice AI Assistant for Seri:** An AI-powered productivity application that enables voice interactions, smart automation, and personalized assistant features[cite: 1].
    *   **Aloline:** Application for booking, ordering, accumulating points, reviewing food, group chat, and video calling[cite: 1].

**2. Technical & Netlify Architecture:**
*   **Netlify Config:** You MUST generate a `public/_redirects` file containing exactly `/* /index.html 200` to handle SPA routing and prevent 404 errors on direct URL visits.
*   **Folder Structure:** Clearly separate `/components` (Navbar, Footer, ProjectCard, TimelineItem), `/pages` (Home, NotFound), and `/assets`.
*   **Routing (react-router-dom):** 
    *   `/`: Home page (Combine Hero Section, Experience Timeline, Projects Grid, and Skills list into a smooth scrolling single page).
    *   `*`: Custom 404 Page (Tech-themed, with a "Return to Base" button).

**3. UI/UX Requirements (Modern Tech Style):**
*   **Theme:** Default Dark mode (Slate-900 or Zinc-950 background).
*   **Typography:** Use a Monospace font (e.g., Fira Code) for Tech Stacks/Skills tags to give a "coding" vibe, and a clean Sans-serif font (e.g., Inter) for readable text.
*   **Visual Elements:** Use Glassmorphism (frosted glass effect) for Project Cards and Timeline items. Add subtle hover effects with Android Green (#3DDC84) or deep Tech Blue glowing borders. Keep it sharp, minimalistic, and highly professional. Include a visual indicator (like a split branch or parallel line in the UI timeline) to denote that the Freelance role was performed concurrently with full-time positions.

**4. Required Output (Only provide code and structure):**
*   Project directory tree.
*   Content for core config files: `package.json`, `vite.config.js`, `tailwind.config.js`, and `public/_redirects`.
*   Router setup code in `main.jsx` (or `App.jsx`).
*   Complete, fully-coded `Home.jsx` (populated with all the provided data) and `NotFound.jsx`.