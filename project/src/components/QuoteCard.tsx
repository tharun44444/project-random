import React from 'react';
import { Quote } from '../data/quotes';
import { Quote as QuoteIcon, Copy, Check } from 'lucide-react';

interface QuoteCardProps {
  quote: Quote;
  loading: boolean;
  copied: boolean;
  onCopy: () => void;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote, loading, copied, onCopy }) => {
  return (
    <div className="relative w-full max-w-2xl p-8 rounded-lg shadow-lg transition-all duration-300 dark:shadow-gray-700 bg-white dark:bg-gray-800">
      <div className={`transition-all duration-800 transform ${loading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        <QuoteIcon className="w-8 h-8 mb-4 text-indigo-600 dark:text-indigo-400" />
        <blockquote className="text-2xl font-serif mb-4 leading-relaxed dark:text-white">
          "{quote.text}"
        </blockquote>
        <footer className="flex items-center justify-between">
          <div>
            <cite className="text-gray-600 dark:text-gray-300 not-italic block">
              — {quote.author}
            </cite>
            <span className="text-sm text-indigo-600 dark:text-indigo-400">
              {quote.category}
            </span>
          </div>
          <button
            onClick={onCopy}
            className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy</span>
              </>
            )}
          </button>
        </footer>
      </div>
    </div>
  );
};

export default QuoteCard;