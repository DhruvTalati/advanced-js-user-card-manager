# Advanced JS User Card Manager

A dynamic **User Card Management Web App** built using **Vanilla JavaScript and Tailwind CSS**.

This project demonstrates core frontend concepts like **DOM manipulation, API integration, state management, and advanced JavaScript concepts such as `this`, `bind`, and array manipulation (shuffle algorithm)**.

---
# Live Demo :

---

## 🚀 Features

- Fetch users from API
- Display users as responsive cards
- Shuffle users dynamically (without re-fetching)
- Each user maintains its own image (state consistency)
- Clean UI with Tailwind CSS
- Fixed floating refresh button
- Fully dynamic DOM rendering

---

## 🛠️ Tech Stack

- HTML5
- Tailwind CSS (CDN)
- Vanilla JavaScript (ES6)

---

## 📂 Project Structure

```
project-folder
│
├── index.html
├── script.js
└── README.md
```

---

## ⚙️ How It Works

### 1. Fetch Users
Users are fetched from:

```
https://jsonplaceholder.typicode.com/users
```

### 2. Store State
Users are stored in a global array:

```javascript
let users = [];
```

### 3. Render UI
Cards are dynamically created using:

```javascript
document.createElement()
```

### 4. Shuffle Logic
Uses Fisher-Yates algorithm:

```javascript
for (let i = users.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  [users[i], users[j]] = [users[j], users[i]];
}
```

### 5. Re-render
After shuffle:

```javascript
renderUsers();
```

---

## 🎯 Key Concepts Learned

- DOM Manipulation
- Event Handling
- Fetch API
- State Management
- Array Shuffling Algorithm
- Separation of Concerns
- Dynamic UI Rendering

---

## ▶️ Run Locally

1. Clone the repository:

```
git clone https://github.com/your-username/advanced-js-user-card-manager.git
```

2. Open folder:

```
cd advanced-js-user-card-manager
```

3. Run:

Open `index.html` in browser

---

## 📸 UI Features

- Dark themed user cards
- Responsive grid layout (5 per row)
- Floating refresh button
- Smooth hover effects

---

## 🔮 Future Improvements

- Add remove user functionality
- Add edit user feature
- Add animations on shuffle
- Add local storage support
- Add toast notifications

---

## 👨‍💻 Author

**Dhruv Talati**

Frontend Developer | Java & DSA Learner  
Building projects to master JavaScript and Web Development

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
