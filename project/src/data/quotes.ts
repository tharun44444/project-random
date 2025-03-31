export interface Quote {
  id: number;
  text: string;
  author: string;
  category: string;
}

export const quotes: Quote[] = [
  {
    id: 1,
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "Motivation"
  },
  {
    id: 2,
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "Motivation"
  },
  {
    id: 3,
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    category: "Wisdom"
  },
  {
    id: 4,
    text: "I'm not afraid of death, I just don't want to be there when it happens.",
    author: "Woody Allen",
    category: "Humor"
  },
  {
    id: 5,
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    category: "Wisdom"
  },
  {
    id: 6,
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison",
    category: "Motivation"
  },
  {
    id: 7,
    text: "Behind every great man is a woman rolling her eyes.",
    author: "Jim Carrey",
    category: "Humor"
  },
  {
    id: 8,
    text: "Knowledge speaks, but wisdom listens.",
    author: "Jimi Hendrix",
    category: "Wisdom"
  }
];