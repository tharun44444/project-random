import React from 'react';
import { RefreshCw, Clock, Shuffle } from 'lucide-react';

interface ControlsProps {
  categories: string[];
  selectedCategory: string;
  autoPlay: boolean;
  onCategoryChange: (category: string) => void;
  onNewQuote: () => void;
  onRandomQuote: () => void;
  onAutoPlayToggle: () => void;
}

const Controls: React.FC<ControlsProps> = ({
  categories,
  selectedCategory,
  autoPlay,
  onCategoryChange,
  onNewQuote,
  onRandomQuote,
  onAutoPlayToggle,
}) => {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center mt-8">
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="px-4 py-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <button
        onClick={onNewQuote}
        className="flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
      >
        <RefreshCw className="w-4 h-4" />
        <span>Next Quote</span>
      </button>

      <button
        onClick={onRandomQuote}
        className="flex items-center gap-2 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
      >
        <Shuffle className="w-4 h-4" />
        <span>Random Quote</span>
      </button>

      <button
        onClick={onAutoPlayToggle}
        className={`flex items-center gap-2 px-6 py-2 rounded-lg transition-colors duration-200 ${
          autoPlay
            ? 'bg-red-600 hover:bg-red-700 text-white'
            : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'
        }`}
      >
        <Clock className="w-4 h-4" />
        <span>{autoPlay ? 'Stop' : 'Surprise Me!'}</span>
      </button>
    </div>
  );
};

export default Controls;