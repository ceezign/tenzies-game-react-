# 🎲 Tenzies Game (React + Vite)

A simple and fun dice game built with **React** and **Vite**.  
The goal is to roll until all dice show the same number — but here’s the twist:  
you can **hold** dice between rolls to lock their values. When all dice are held and show the same value, 🎉 **confetti drops** and you win!

---

## 🚀 Features
- Built with **Vite + React** for fast development and optimized performance.  
- Interactive dice that can be **held/unheld** with a single click.  
- **Win detection** when all dice have the same value and are held.  
- **Confetti animation** when you win the game.  
- “Roll” button changes to “New Game” after a win.  
- Clean, modern, responsive UI.

---

## 🧩 How to Play
1. Click **Roll** to generate random dice values.  
2. Click on a die to **hold** it (it will stay the same on the next roll).  
3. Keep rolling until all dice show the same value.  
4. When you win, enjoy the confetti drop and click **New Game** to restart!

---

## 🛠️ Tech Stack
- **React 18+**
- **Vite**
- **JavaScript (ES6+)**
- **CSS**
- **react-confetti** (for the win animation)

---

## 📦 Installation & Setup

Clone the repo and install dependencies:

```bash
git clone https://github.com/ceezign/tenzies-game-react-.git
cd tenzies-game
npm install
npm run dev
```

Then open the local server link shown in your terminal (usually [http://localhost:5173](http://localhost:5173)).

---

## 🎉 Confetti Setup

Install the **react-confetti** package:

```bash
npm install react-confetti
```

Then import and render it when the player wins:

```jsx
import Confetti from "react-confetti";

function App() {
  const [gameWon, setGameWon] = React.useState(false);

  return (
    <main>
      {gameWon && <Confetti />} {/* 🎉 Confetti drops when you win */}
      {/* rest of your UI */}
    </main>
  );
}
```

---

## 🧠 Game Logic (Overview)

- Each die is an object with `{ id, value, isHeld }`.  
- Player can toggle `isHeld` by clicking a die.  
- The game checks if **all dice are held** and **all values match**.  
- When true → `setGameWon(true)` triggers the confetti and button label changes to “New Game”.

---

## ✨ Example Screenshot
![tenzies-game screenshot](/src/assets/images/Screenshot.png)
![tenzies-game screenshot](/src/assets/images/Screenshot1.png)
![tenzies-game screenshot](/src/assets/images/Screenshot2.png)

---

## 🔮 Future Improvements

- Add a **timer** to track how long it takes to win.  
- Track the **number of rolls** per game and show it on the screen.  
- Implement a **high score / leaderboard** system using local storage.  
- Add **sound effects** or animations when rolling dice.  
- Improve **mobile responsiveness** and overall UI polish.  
- Add a **dark mode** toggle for better user experience.

---

```
🎲 [1] [3] [3] [5] [3]
Hold dice, roll again, and win with all 3’s!
```

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
