import React, { useState } from 'react';
import { Mail, Heart } from 'lucide-react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center p-4">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative bg-white rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="flex flex-col items-center gap-4">
            <Mail className="w-20 h-20 text-pink-500 group-hover:scale-110 transition-transform duration-300" />
            <p className="text-gray-600 font-medium">Click to open your birthday letter ❤️</p>
          </div>
          <Heart className="absolute -top-2 -right-2 w-6 h-6 text-red-500 animate-bounce" />
        </button>
      ) : (
        <div className="max-w-2xl bg-white rounded-lg p-8 shadow-xl animate-fade-in">
          <div className="text-center space-y-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Happy Birthday, My Love! 🎂</h1>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>Dearest [Your Girlfriend's Name],</p>
              
              <p>On this special day, I want to take a moment to tell you just how much you mean to me. Your presence in my life has made everything brighter, more meaningful, and filled with joy.</p>
              
              <p>Your smile lights up my world, your laughter is my favorite melody, and your love makes every day feel like a gift. You're not just my girlfriend; you're my best friend, my confidante, and my greatest blessing.</p>
              
              <p>As you celebrate another year of your beautiful life, I want you to know that I cherish every moment we spend together. Your kindness, strength, and the way you care for others inspire me every single day.</p>
              
              <p>I promise to continue making memories with you, supporting your dreams, and loving you more with each passing day. You deserve all the happiness in the world, and I feel incredibly lucky to be the one who gets to share these precious moments with you.</p>
              
              <p className="pt-4">Happy Birthday, my love! Here's to many more years of love, laughter, and adventures together.</p>
              
              <p className="pt-4">With all my love,</p>
              <p>[Your Name]</p>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setIsOpen(false)}
                className="text-pink-500 hover:text-pink-600 transition-colors duration-300 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Close Letter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;