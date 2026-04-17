# 🧠 KeenKeeper

## 📌 Project Description
KeenKeeper is a modern web application that helps users manage and maintain meaningful relationships. Users can track interactions with friends, set communication goals, and visualize engagement through analytics.

---

## 🚀 Technologies Used
- Next.js (App Router)
- Tailwind CSS
- Recharts
- React Hot Toast
- LocalStorage

---


## ✨ Features & Functionality

### 🧑‍🤝‍🧑 Friend Management
- View all friends in a clean card-based layout
- Each card displays profile picture, name, tags, and contact status
- Dynamic status indicators: Overdue, Almost Due, On-Track

### 🔍 Friend Details Page
- Detailed view for each friend with profile info, bio, and email
- Status badge with color indication
- Action buttons: Snooze, Archive, Delete (UI only)

### ⚡ Quick Check-In System
- Instantly log interactions (Call, Text, Video)
- Automatically stores interaction history in localStorage
- Dynamic titles like:
  - "Call with Rakib Hossain"
  - "Text with Alex Johnson"

### 🔔 Toast Notifications
- Real-time feedback using react-hot-toast
- Shows success message when interaction is logged
- Custom styled toast for better UI experience

### 📜 Timeline System
- Displays all interaction history in chronological order
- Each entry includes date, type, and title
- Icons for Call, Text, and Video interactions

### 🔎 Timeline Filtering
- Filter interactions by:
  - All
  - Call
  - Text
  - Video
- Helps users quickly find specific interaction types

### 📊 Friendship Analytics (Stats Page)
- Visual Pie Chart using Recharts
- Displays distribution of Call, Text, and Video interactions
- Clean and interactive data visualization

### 🎯 Banner Section
- Attractive hero section with title, subtitle, and CTA button
- Summary cards showing key insights

### 🧭 Navigation System
- Fully functional Navbar with active link highlighting
- Smooth routing using Next.js App Router

### 🦶 Footer Section
- Social media links with icons
- Informational links (Privacy Policy, Terms, Cookies)
- Clean and modern design

### 📱 Responsive Design
- Fully responsive across mobile, tablet, and desktop
- Optimized grid layout for all screen sizes

### ⏳ Loading State
- Custom loading spinner while fetching data
- Improves user experience

### 🚫 404 Page
- Custom Not Found page for invalid routes
- Prevents navigation errors

### 💾 Data Handling
- Friend data stored in a local JSON file
- Timeline interactions stored in browser localStorage


---

### 👤 Friend Details Page
- Two-column responsive layout
- Shows:
  - Profile picture
  - Name and status
  - Tags
  - Bio and email
- Action buttons:
  - Snooze
  - Archive
  - Delete
- Quick Check-In:
  - Call
  - Text
  - Video

---

### ⚡ Interaction Tracking
- Clicking Call/Text/Video:
  - Adds entry to timeline
  - Saves data in localStorage
  - Shows toast notification

---

### 📜 Timeline Page
- Displays all interaction history
- Each entry includes:
  - Date
  - Icon (Call/Text/Video)
  - Title (e.g. "Call with John")
- Filter options:
  - All
  - Call
  - Text
  - Video

---

### 📊 Friendship Analytics
- Pie chart using Recharts
- Shows total:
  - Call
  - Text
  - Video interactions

---



### 🛠️ Additional Features
- Custom 404 Page
- Loading state
- Active Navbar highlighting
- Data persistence using localStorage

---

## 📂 Folder Structure
app/
├── layout.js
├── page.js
├── timeline/
├── stats/
├── friend/[id]/
├── not-found.js

components/
├── Navbar.jsx
├── Footer.jsx
├── FriendCard.jsx
├── Banner.jsx

data/
└── friends.json


---

## 🌐 Live Demo
(https://friends-zone-eight.vercel.app/)

---

Gazi Adnan