import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface Room4Props {
  onComplete: (value: string) => void;
  username: string;
  previousValue: string;
}

export function Room4({ onComplete, username }: Room4Props) {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toUpperCase() === 'S') {
      onComplete('S');
    } else {
      setError(true);
      setAttempts(prev => prev + 1);
      setTimeout(() => setError(false), 500);
    }
  };

  const letters = ['Q', 'R', 'S', 'T', 'U'];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ type: 'spring', damping: 20 }}
      className="space-y-8 px-4 sm:px-0"
    >
      <div className="text-center">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
          className="inline-block"
        >
          <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mb-4 shadow-lg shadow-white/20">
            <span className="text-xl font-bold">4</span>
          </div>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-2xl sm:text-3xl font-light tracking-wider"
        >
          THE DISTRACTION
        </motion.h2>
        {username && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xs text-zinc-600 mt-2"
          >
            Observer: {username}
          </motion.p>
        )}
      </div>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="border border-zinc-800 p-8 sm:p-12 bg-gradient-to-br from-zinc-950 via-black to-zinc-950 text-center relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.02) 50%, transparent 100%)',
            backgroundSize: '200% 100%',
          }}
          animate={{ 
            backgroundPosition: ['0% 0%', '200% 0%'],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
        
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-3xl sm:text-5xl font-light tracking-widest relative z-10">
          {letters.map((letter, index) => (
            <motion.div
              key={letter}
              initial={{ opacity: 0, y: -30, rotate: -15 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                rotate: 0
              }}
              transition={{ 
                delay: 1 + index * 0.15,
                type: 'spring',
                stiffness: 200
              }}
              whileHover={{
                scale: 1.3,
                rotate: [0, -5, 5, 0],
              }}
              style={{ 
                textShadow: '0 0 0px rgba(255,255,255,0)',
                color: '#a1a1aa'
              }}
              className="cursor-default hover:text-white transition-colors"
            >
              {index === 2 ? (
                <motion.span
                  animate={{
                    textShadow: [
                      '0 0 0px rgba(255,255,255,0)',
                      '0 0 15px rgba(255,255,255,0.3)',
                      '0 0 0px rgba(255,255,255,0)',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                >
                  {letter}
                </motion.span>
              ) : (
                <span>{letter}</span>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="text-center space-y-6"
      >
        <p className="text-zinc-500 text-xs sm:text-sm tracking-wider uppercase">Instruction</p>
        <motion.p 
          animate={{ 
            opacity: [1, 0.5, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-xl sm:text-2xl font-light"
        >
          "Remove what does not belong."
        </motion.p>

        {attempts > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center gap-2"
          >
            {Array.from({ length: Math.min(attempts, 5) }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="w-2 h-2 rounded-full bg-red-500/50"
              />
            ))}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="pt-4">
          <motion.div
            animate={error ? { 
              x: [-10, 10, -10, 10, 0],
              rotate: [0, -2, 2, -2, 0]
            } : {}}
            className="mb-4"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your answer"
              className="w-full max-w-xs px-6 py-3 bg-black border border-zinc-700 focus:border-white outline-none text-center tracking-wider uppercase transition-all text-sm sm:text-base"
            />
          </motion.div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, backgroundColor: '#27272a' }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-3 bg-zinc-900 border border-zinc-700 transition-all text-sm tracking-wider inline-flex items-center gap-2"
          >
            SUBMIT
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}