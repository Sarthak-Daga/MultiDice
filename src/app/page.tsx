"use client";
import { useState } from "react";

export default function Home() {
  const [side, setSide] = useState(6);
  const [number, setNumber] = useState(1);

  const flip = () => {
    const numb = Math.random();
    const h = Math.floor(numb * side) + 1;
    setNumber(h);
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
        body {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5">
        <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg p-10 text-center">
          <div className="title text-white text-6xl font-bold mb-10">Multi Dice</div>
          <div className="flex gap-5 justify-center items-center mb-10">
            <div className="text-2xl font-semibold text-white">Number of Sides</div>
            <input
              type="number"
              value={side}
              onChange={(e) => setSide(Number(e.target.value))}
              className="bg-white bg-opacity-50 backdrop-blur-md border border-white text-white p-2 rounded-md text-center w-20"
            />
          </div>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-400 to-purple-400 hover:from-purple-400 hover:to-blue-400 focus:ring-4 focus:outline-none focus:ring-purple-300 font-bold rounded-lg text-xl px-5 py-2.5 mb-5"
            onClick={flip}
          >
            Flip
          </button>
          <div className="text-3xl text-white">You Got a {number}</div>
        </div>
      </div>
    </>
  );
}
