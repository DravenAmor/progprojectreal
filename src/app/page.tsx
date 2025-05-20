'use client';

import { useState } from 'react';

export default function Home() {
  const flashcards = [
    { question: 'Who is the best basketball player of all time?', answer: 'LeBron James' },
    { question: 'Who was the number 1 pick in the 2003 NBA Draft?', answer: 'LeBron James' },
    { question: 'Who was NBA MVP in 2008 and 2009?', answer: 'LeBron James' },
    { question: 'Who better Curry or LeBron?', answer: 'LeBron James' },
    { question: 'Who beat the Warriors championship streak?', answer: 'LeBron James' },
    { question: 'Who is the Thanos of the NBA?', answer: 'LeBron James' },
    { question: 'What NBA player has their own movie?', answer: 'LeBron James' },
    { question: 'Who the goat of Basketball?', answer: 'LeBron James' },
    { question: 'Who holds the record for most points in the NBA?', answer: 'LeBron James' },
    { question: 'Jordan or LeBron?', answer: 'LeBron James' },
    { question: 'Whos the oldest player in the NBA currently?', answer: 'LeBron James' },
    { question: 'Who has the most career regular season points in NBA history?', answer: 'LeBron James' },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black-100 p-6">
      <h1 className="text-4xl font-bold mb-8">Flashcards of Divine Wisdom</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {flashcards.map((card, index) => (
          <Flashcard key={index} question={card.question} answer={card.answer} />
        ))}
      </div>
    </main>
  );
}

function Flashcard({ question, answer }: { question: string; answer: string }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="w-64 h-40 bg-white rounded-lg shadow-md cursor-pointer flex items-center justify-center text-center transition-transform transform hover:scale-105 duration-300"
    >
      <p className="text-xlg font-medium px-4">{flipped ? answer : question}</p>
    </div>
  );
}

