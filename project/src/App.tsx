import React, { useState, useEffect, useCallback } from 'react';
import { Sun, Moon } from 'lucide-react';
import { quotes, Quote } from './data/quotes';
import QuoteCard from './components/QuoteCard';
import Controls from './components/Controls';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [currentQuote, setCurrentQuote] = useState<Quote>(quotes[0]);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [autoPlay, setAutoPlay] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = Array.from(new Set(quotes.map(quote => quote.category)));

  const getRandomQuote = useCallback(() => {
    const filteredQuotes = selectedCategory
      ? quotes.filter(q => q.category === selectedCategory)
      : quotes;
    
    const newQuote = filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
    if (newQuote.id !== currentQuote.id) {
      return newQuote;
    }
    return getRandomQuote();
  }, [selectedCategory, currentQuote.id]);

  const getNextQuote = useCallback(() => {
    const filteredQuotes = selectedCategory
      ? quotes.filter(q => q.category === selectedCategory)
      : quotes;
    
    const nextIndex = (currentIndex + 1) % filteredQuotes.length;
    setCurrentIndex(nextIndex);
    return filteredQuotes[nextIndex];
  }, [selectedCategory, currentIndex]);

  const handleNewQuote = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setCurrentQuote(getNextQuote());
      setLoading(false);
    }, 800);
  }, [getNextQuote]);

  const handleRandomQuote = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setCurrentQuote(getRandomQuote());
      setLoading(false);
    }, 800);
  }, [getRandomQuote]);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentQuote.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    let interval: number;
    if (autoPlay) {
      interval = window.setInterval(handleRandomQuote, 10000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, handleRandomQuote]);

  useEffect(() => {
    setCurrentIndex(0);
    handleNewQuote();
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-end mb-8">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            {theme === 'light' ? (
              <Moon className="w-6 h-6 text-gray-800" />
            ) : (
              <Sun className="w-6 h-6 text-yellow-400" />
            )}
          </button>
        </div>

        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-bold text-center mb-8 dark:text-white">
            Random Quote Generator
          </h1>

          <QuoteCard
            quote={currentQuote}
            loading={loading}
            copied={copied}
            onCopy={handleCopy}
          />

          <Controls
            categories={categories}
            selectedCategory={selectedCategory}
            autoPlay={autoPlay}
            onCategoryChange={setSelectedCategory}
            onNewQuote={handleNewQuote}
            onRandomQuote={handleRandomQuote}
            onAutoPlayToggle={() => setAutoPlay(!autoPlay)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;