# 💬 Comment Box – JSONBin.io Based Web Comments App

This project is a simple and elegant comment box where users can freely express their thoughts. Comments are saved persistently using the [JSONBin.io](https://jsonbin.io/) API, acting as a lightweight cloud database. Built using only vanilla HTML, CSS, and JavaScript.

---

## 🌐 Live Demo

👉 [View it on GitHub Pages](https://anthonybanion.github.io/DevCourses/fullstack/diploma/frontend/html/advanced/comment/)

---

## 🎯 Project Goals

- Allow users to post and view public comments.
- Persist comments using a free cloud database (JSONBin).
- Allow users to **delete** their own comments.
- Provide a minimalist, dark-themed UI for easy readability.
- No backend or framework required – fully client-side.

---

## 🧠 How It Works

- Comments are stored in a JSON array inside a JSONBin.io bin.
- Every submission adds a new comment with:
  - UUID
  - Username (or "Anonymous")
  - Timestamp
- All comments load from and save back to the bin using the JSONBin API.
- Users can delete comments from the interface.

---

## 📁 Folder Structure

All files live in the same directory:

```text
comment/
├── index.html         # Main HTML page
├── styles.css         # Styling for the comment box
├── comment.js         # Main JS logic for submit, load & delete
├── config.js          # Contains JSONBin BIN_ID and API_KEY
├── key.js             # Maps constants from CONFIG to use
└── README.md          # Project documentation
``` 

---

## 🚀 Technologies Used

- HTML5
- CSS3 (with some basic transitions and shadow effects)
- Vanilla JavaScript
- [JSONBin.io](https://jsonbin.io/) – Free online JSON storage

---

## 🔐 Environment

This project uses `config.js` to manage your private API key and bin ID:

```js
// config.js
const CONFIG = {
  BIN_ID: "your-bin-id-here",
  API_KEY: "your-api-key-here"
};
```
>⚠️ Important: Never expose real API keys in production apps. Use .env + server in real-world scenarios.

## 📝 License

This project is open source and available under the [MIT License](../../../../../../LICENSE).

## 📎 Repository

GitHub: [Comment Box](https://github.com/anthonybanion/DevCourses/tree/main/fullstack/diploma/frontend/html/advanced/comment)