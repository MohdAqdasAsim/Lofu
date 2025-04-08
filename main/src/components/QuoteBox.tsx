"use client";
import { useEffect, useState } from "react";

const quotes = [
  "Discipline is choosing between what you want now and what you want most.",
  "Stay focused. Stay humble. Hustle hard.",
  "Small steps every day lead to big changes.",
  "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
  "Dream big. Start small. Act now.",
  "Don't watch the clock; do what it does. Keep going.",
  "Progress, not perfection.",
  "Push yourself, because no one else is going to do it for you.",
  "The secret to getting ahead is getting started.",
  "You don’t need to see the whole staircase, just take the first step.",
  "Great things are done by a series of small things brought together.",
  "Focus on being productive instead of busy.",
  "Every day is a chance to be better.",
  "You got this. One step at a time.",
  "Make it happen. Shock everyone.",
];

const QuoteBox = () => {
  const [quote, setQuote] = useState("");

  const getRandomQuote = () => {
    const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(newQuote);
    localStorage.setItem("lofu-quote", newQuote); // Save to localStorage
  };

  useEffect(() => {
    const saved = localStorage.getItem("lofu-quote");
    if (saved) {
      setQuote(saved);
    } else {
      getRandomQuote();
    }
  }, []);

  return (
    <section className="w-full max-w-2xl bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg text-center text-textColor flex flex-col items-center gap-4">
      <p className="italic text-lg transition-opacity duration-300">
        “{quote}”
      </p>
      <button
        onClick={getRandomQuote}
        className="px-4 py-2 bg-white/10 text-sm rounded-md border border-white/20 hover:bg-white/20 transition"
      >
        New Quote
      </button>
    </section>
  );
};

export default QuoteBox;
