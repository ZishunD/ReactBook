# 📚 ReactBook

A minimal, clean React-based digital bookshelf powered by Tailwind CSS CDN.  
Explore, search, and filter your favorite books—without any backend!

> 🟢 [Live Demo](https://reactbook-wqqx.onrender.com) *(Render Free Plan: may shut down when idle)*

---

## ✨ Features

- 🧾 Display a list of curated books
- 🔍 Search & filter by title, author, or genre
- 🎨 Styled with Tailwind CSS via CDN (no complex setup)
- ⚡️ Fully client-side, no backend needed
- 🚀 Deployed with Docker + Render

---

## 🛠 Tech Stack

- ⚛️ React (Create React App)
- 🎨 Tailwind CSS (CDN)
- 🐳 Docker (for deployment)
- ☁️ Render (cloud deployment)

---

## 🧩 Project Structure

```bash
ReactBook/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── App.js
│   ├── data.json
│   └── index.js
├── Dockerfile
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started (Dev)

1. **Clone this repo**
   ```bash
   git clone path
   cd reactbook
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the app**
   ```bash
   npm start
   ```

> Tailwind is included via CDN in `public/index.html` — no need to configure PostCSS or Tailwind CLI.

---

## 🐳 Docker Usage

**Build Docker image:**
```bash
docker build -t reactbook .
```

**Run the container:**
```bash
docker run -p 3000:3000 reactbook
```

---

## 📦 Deployment

The app is deployed on [Render](https://render.com/). You can deploy your own with:

1. Connect your GitHub repo on Render
2. Select Docker as the deploy method

---

### 📝 License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.

---

## 🙋🏻‍♂️ Author

Made with 💻 and ☕ by [ZishunD]  
Contact me via [zishun.d.gao@gmail.com] or GitHub